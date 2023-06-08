from flask import Flask, request, jsonify
from flask_pymongo import PyMongo
from datetime import datetime
from pymongo import MongoClient
from bson.objectid import ObjectId
from flask_cors import CORS


app = Flask(__name__)
client=MongoClient('mongodb://localhost:27017')
db=client['mydb2'] # db name , dynamically created
CORS(app)

@app.route('/submit', methods=['POST'])
def submit_form():
        data = request.json  # Assuming the form data is sent as JSON in the request body      
        # Save the form data to the 'users' collection in MongoDB
        first_name=data['name']
        last_name=data['age']
        city=data['city']
        db['users'].insert_one(
         {
             "name":first_name,
             "age":last_name,
             "city":city
         }
        )
        return jsonify({'message': 'Form submitted successfully'})


# @app.route('/fetchData', methods=['GET'])
# def fetch_data():
#     all_data = db['users'].find()
#     data_json = []

#     for data in all_data:
#         data_dict = {
#             'id': str(data['_id']),
#             'name': data['name'],
#             'age': data['age'],
#             'city': data['city']
#         }
#         data_json.append(data_dict)

#     return jsonify(data_json)

@app.route('/fetchData', methods=['GET'])
def fetch_data():
    filter_params = {}
    
    # Check for query parameters and build the filter_params dictionary accordingly
    if 'name' in request.args:
        filter_params['name'] = request.args.get('name')
    if 'age' in request.args:
        filter_params['age'] = request.args.get('age')
    if 'city' in request.args:
        filter_params['city'] = request.args.get('city')

    all_data = db['users'].find(filter_params)
    data_json = []

    for data in all_data:
        data_dict = {
            'id': str(data['_id']),
            'name': data['name'],
            'age': data['age'],
            'city': data['city']
        }
        data_json.append(data_dict)

    return jsonify(data_json)


@app.route('/users/<string:id>',methods=['GET'])
def onedata(id):
        data=db['users'].find_one({"_id":ObjectId(id)})
        id=str(data['_id'])
        name=data['name']
        age=data['age']
        city=data['city']
        dataDict={
                'id':id,
                'name':name,
                'age':age,
                'city':city
            }
        return jsonify(dataDict)
      
if __name__ == '__main__':
    app.run(debug=True)

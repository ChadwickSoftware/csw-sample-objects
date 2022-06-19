# CSW Sample Objects
This repository is the codebase for the CSW Sample Objects website.

This tool is used to create sample data for custom objects, by allowing to specify the necessary fields, and what it should be filled with.

For example you could say that your object has 3 fields: ID, FirstName and EmailAddress, and specify that ID will be a unique number, FirstName will be a name, and email address will be an EmailAddress and it would send back an object mocking that structure.


## Examples:
**Input**
```json
{
    "fields": [
        {
            "name": "FirstName",
            "dataType": "string",
            "type": "name"
        },
        {
            "name": "ID",
            "dataType": "int",
            "type": "unique"
        },
        {
            "name": "EmailAddress",
            "dataType": "string",
            "type": "emailAddress"
        }
    ],
    "options": {
        "count": 2
    }
}
```

**Output**
```json
{
    "data": [
        {
            "FirstName": "Alex",
            "ID": 21315,
            "EmailAddress": "alex@example.com"
        },
        {
            "FirstName": "Nick",
            "ID": 21515,
            "EmailAddress": "nick@google.co.uk"
        }
    ]
}
```
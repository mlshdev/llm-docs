> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-citestresults-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-citestresults-_id_)

# Read test result information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.5+

Get a specific test result Xcode Cloud created when it performed a build with a test action.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/ciTestResults/{id}
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Test Results resource.

## Query Parameters

- `fields[ciTestResults]` — `[string]`: Additional fields to include for the Test Results resource returned by the response.
  **Allowed values:** `className`, `name`, `status`, `fileSource`, `message`, `destinationTestResults`

## Response Codes

- `200` OK — `CiTestResultResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

The example request below retrieves result information for a test Xcode Cloud performed. Use the data provided in the response to display test result information on a dashboard, create reports, or create a new issue in your issue tracker for a failing test.

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
GET https://api.appstoreconnect.apple.com/v1/ciTestResults/5ecb25ea-ce31-4b50-b88c-f1bf64c698ae
```

**Response**

```json
{
    "data": {
        "type": "ciTestResults",
        "id": "5ecb25ea-ce31-4b50-b88c-f1bf64c698ae",
        "attributes": {
            "className": "TestClass",
            "name": "TestName",
            "status": "SUCCESS",
            "fileSource": null,
            "message": null,
            "destinationTestResults": [
                {
                    "uuid": "e456c6a3-37a3-42c7-8299-33dad720f6b7",
                    "deviceName": "iPhone X",
                    "osVersion": "11.4.1",
                    "status": "SUCCESS",
                    "duration": 6.600471973
                }
            ]
        },
        "links": {
            "self": "https://api.appstoreconnect.apple.com/v1/ciTestResults/5ecb25ea-ce31-4b50-b88c-f1bf64c698ae"
        }
    },
    "links": {
        "self": "https://api.appstoreconnect.apple.com/v1/ciTestResults/5ecb25ea-ce31-4b50-b88c-f1bf64c698ae"
    }
}
```

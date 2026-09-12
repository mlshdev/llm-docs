> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-ciissues-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-ciissues-_id_)

# Read xcode cloud issue information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.5+

Get information about a specific issue that occurred when Xcode Cloud performed a build.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/ciIssues/{id}
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the Issues resource.

## Query Parameters

- `fields[ciIssues]` — `[string]`: Additional fields to include for the Issues resource returned by the response.
  **Allowed values:** `issueType`, `message`, `fileSource`, `category`

## Response Codes

- `200` OK — `CiIssueResponse`: The request completed successfully.
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

The example request below retrieves information about a specific issue Xcode Cloud encountered when it performed a build. Use the information provided to display issues on a dashboard, create reports, and so on.

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
GET https://api.appstoreconnect.apple.com/v1/ciIssues/61473b34-2ecd-498d-9e2b-94216b7e8fb4
```

**Response**

```json
{
    "data": {
        "type": "ciIssues",
        "id": "61473b34-2ecd-498d-9e2b-94216b7e8fb4",
        "attributes": {
            "issueType": "ERROR",
            "message": "A message describing the issue.",
            "fileSource": {
                "path": "/the/path/to/the/file/with/the/issue",
                "lineNumber": 42
            },
            "category": null
        },
        "links": {
            "self": "https://api.appstoreconnect.apple.com/v1/ciIssues/61473b34-2ecd-498d-9e2b-94216b7e8fb4"
        }
    },
    "links": {
        "self": "https://api.appstoreconnect.apple.com/v1/ciIssues/61473b34-2ecd-498d-9e2b-94216b7e8fb4"
    }
}
```

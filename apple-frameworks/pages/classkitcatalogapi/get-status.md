> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkitcatalogapi/get-status](https://developer.apple.com/documentation/classkitcatalogapi/get-status)

# Get Status

**Interface language:** Data

**Framework:** ClassKit Catalog API  
**Kind:** Web Service Endpoint  
**Availability:** ClassKit 1.0+

Fetch the status of an operation that you initiated earlier.

## URL

```http
GET https://classkit-catalog.apple.com/v1/status/{statusId}
```

## Path Parameters

- `statusId` — `string` (required): The identifier of the operation for which you want to retrieve the status.

## Response Codes

- `200` OK — `Status`: The request succeeded.
- `400` Bad Request: The request contained an error.
- `403` Forbidden: The request wasn’t authorized.

<a id="Discussion"></a>

## Discussion

If the system can’t immediately complete a request, the ClassKit Catalog API may acknowledge that it received the request and respond with a HTTP response containing the status code `202 ACCEPTED`. In this case, the response contains a header with the name “Location”. The corresponding value is a URL that points to the [Get Status](get-status.md) endpoint, including a `statusId` as the last path parameter. The header item might look like this:

```http
Location: classkit-catalog.apple.com/v1/status/KGW7S5VLDDOQSYSE7DKGYBGXUU
```

Use this `statusID` to ask the server for a status update at a later time.

<a id="Example"></a>

### Example

**Request**

```
https://classkit-catalog.apple.com/v1/status/KGW7S5VLDDOQSYSE7DKGYBGXUU 
```

**Response**

```json
{
  "statusId": "KGW7S5VLDDOQSYSE7DKGYBGXUU",
  "teamId": "2X6UPAGN5A",
  "state": "error",
  "statusCode": "400",
  "error": {
    "id": "KGW7S5VLDDOQSYSE7DKGYBGXUU",
    "code": "THUMBNAIL_NOT_REFERENCED",
    "message": "The thumbnail with 'thumbnailId': unreferenced_image.png is not referenced by any context."
  },
  "location": "classkit-catalog.apple.com/v1/status/KGW7S5VLDDOQSYSE7DKGYBGXUU"
}

```

## See Also

### Retrieving Status

- [Status](status.md): The state of a request that the API previously accepted, but didn’t complete right away.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/events-status](https://developer.apple.com/documentation/devicemanagement/events-status)

# Event Status

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** VPP License Management 2.0+

Retrieve the status of an asynchronous event.

## URL

```http
GET https://vpp.itunes.apple.com/mdm/v2/status
```

## Query Parameters

- `eventId` — `string`: The unique identifier for the asynchronous event.

## Response Codes

- `200` OK — `StatusResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`: The provided token is invalid. It may either be missing or expired.
- `500` Internal Server Error — `ErrorResponse`: An internal server error occurred. Try again later.

## Mentioned In

- [Handling error responses](handling-error-responses.md)
- [Managing assets](managing-assets.md)
- [Managing users](managing-users.md)
- [Subscribing to notifications](subscribing-to-notifications.md)

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
?eventId=1905643d-1afb-4c2d-ad74-1b268e92c880
```

**Response**

```json
{
    "eventStatus": "COMPLETE",
    "eventType": "ASSOCIATE",
    "numCompleted": 4000,
    "numRequested": 4000,
    "tokenExpirationDate": "2030-11-08T22:33:22+0000",
    "uId": "2049025000431439"
}
```

## Topics

### Response

- [StatusResponse](statusresponse.md): The status of an asynchronous event.
- [ErrorResponse](errorresponse.md): The response that contains the error that occurs.

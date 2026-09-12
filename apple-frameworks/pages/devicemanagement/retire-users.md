> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/retire-users](https://developer.apple.com/documentation/devicemanagement/retire-users)

# Retire Users

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** VPP License Management 2.0+

Retire users by client user IDs.

## URL

```http
POST https://vpp.itunes.apple.com/mdm/v2/users/retire
```

## HTTP Body

Content type: `application/json`

Type: `ManageUsersRequest`

missing

## Response Codes

- `200` OK — `EventResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`: The provided token is invalid. It may either be missing or expired.
- `500` Internal Server Error — `ErrorResponse`: An internal server error occurred. Try again later.

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
{
    "users": [
        {
            "clientUserId": "client-100"
        },
        {
            "clientUserId": "client-101"
        }
    ]
}
```

**Response**

```json
{
    "eventId": "dafdad60-4ef6-49b0-8150-64323f56d88d",
    "tokenExpirationDate": "2030-11-08T22:33:22+0000",
    "uId": "2049025000431439"
}
```

## Topics

### Request and Response

- [ManageUsersRequest](manageusersrequest.md): The request for user management.
- [EventResponse](eventresponse.md): The response that contains the event identifier.
- [ErrorResponse](errorresponse.md): The response that contains the error that occurs.

## See Also

### User management

- [Get Users](get-users-4mwln.md): Get information about a set of users.
- [Create Users](create-users.md): Create users to assign apps, books, and subscriptions to.
- [Update Users](update-users.md): Update details for existing users.

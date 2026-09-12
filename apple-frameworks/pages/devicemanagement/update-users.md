> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/update-users](https://developer.apple.com/documentation/devicemanagement/update-users)

# Update Users

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** VPP License Management 2.0+

Update details for existing users.

## URL

```http
POST https://vpp.itunes.apple.com/mdm/v2/users/update
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
            "clientUserId": "client-100",
            "email": "client-100@apple.com"
        },
        {
            "clientUserId": "client-101",
            "email": "client-101@apple.com"
        },
        {
            "clientUserId": "client-102",
            "email": "client-102@apple.com",
            "managedAppleId": "maid-102@apple.com"
        }
    ]
}
```

**Response**

```json
{
    "eventId": "dcd54e0c-5898-4837-8cea-b220f9570835",
    "tokenExpirationDate": "2030-11-08T22:33:22+0000"
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
- [Retire Users](retire-users.md): Retire users by client user IDs.

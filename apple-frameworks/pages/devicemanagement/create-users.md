> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/create-users](https://developer.apple.com/documentation/devicemanagement/create-users)

# Create Users

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** VPP License Management 2.0+

Create users to assign apps, books, and subscriptions to.

## URL

```http
POST https://vpp.itunes.apple.com/mdm/v2/users/create
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
            "email": "client-100@next.com",
            "managedAppleId": "maid-100@next.com"
        },
        {
            "clientUserId": "client-101",
            "email": "client-101@next.com",
            "managedAppleId": "maid-101@next.com"
        },
        {
            "clientUserId": "client-102",
            "email": "client-102@next.com"
        }
    ]
}
```

**Response**

```json
{
    "eventId": "af70eb9b-0ab6-405d-87d8-3b9ed0c4f370",
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
- [Update Users](update-users.md): Update details for existing users.
- [Retire Users](retire-users.md): Retire users by client user IDs.

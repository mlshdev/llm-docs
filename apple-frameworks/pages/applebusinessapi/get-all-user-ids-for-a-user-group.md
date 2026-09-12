> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/get-all-user-ids-for-a-user-group](https://developer.apple.com/documentation/applebusinessapi/get-all-user-ids-for-a-user-group)

# Get User IDs for a User Group

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Business API 2.4+

Get a list of user IDs for a user group in an organization.

## URL

```http
GET https://api-business.apple.com/v1/userGroups/{id}/relationships/users
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the resource.

## Query Parameters

- `limit` — `integer`: The number of included related resources to return.
  **Maximum:** `1000`

## Response Codes

- `200` OK — `UserGroupUsersLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`: **Too Many Requests**

<a id="Example"></a>

### Example

**Request**

```
curl "https://api-business.apple.com/v1/userGroups/{id}/relationships/users" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

**Response**

```json
  {
    "data": [
      {
        "type": "users",
        "id": "1234567890"
      },
      {
        "type": "users",
        "id": "0987654321"
      }
    ],
    "links": {
      "self": "https://api-business.apple.com/v1/userGroups/UG123456/relationships/users",
      "next": "https://api-business.apple.com/v1/userGroups/UG123456/relationships/users?cursor=MDowOjE3NDYxMTg0NjkzOTc6MTc0NjExODQ2OTM5Nzp0cnVlOmZhbHNlOjE3NDYxMTg0NjkzOTc"
    },
    "meta": {
      "paging": {
        "nextCursor": "MDowOjE3NDYxMTg0NjkzOTc6MTc0NjExODQ2OTM5Nzp0cnVlOmZhbHNlOjE3NDYxMTg0NjkzOTc",
        "limit": 100
      }
    }
  }
```

## Topics

### Responses

- [UserGroupUsersLinkagesResponse](usergroupuserslinkagesresponse.md): A response that contains a list of user IDs for a user group.

## See Also

### UserGroups

- [Get User Groups](get-user-groups.md): Get a list of user groups in an organization.
- [Get User Group Information](get-usergroup-information.md): Get information about a specific user group in an organization.

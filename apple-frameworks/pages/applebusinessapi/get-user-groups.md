> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/get-user-groups](https://developer.apple.com/documentation/applebusinessapi/get-user-groups)

# Get User Groups

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Business API 2.4+

Get a list of user groups in an organization.

## URL

```http
GET https://api-business.apple.com/v1/userGroups
```

## Query Parameters

- `fields[userGroups]` — `[string]`: The fields to return for included related types.
  **Allowed values:** `ouId`, `name`, `type`, `totalMemberCount`, `createdDateTime`, `updatedDateTime`, `status`, `users`
- `limit` — `integer`: The number of included related resources to return.
  **Maximum:** `1000`

## Response Codes

- `200` OK — `UserGroupsResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `429` — `ErrorResponse`: **Too Many Requests**

<a id="Example"></a>

### Example

**Request**

```
curl "https://api-business.apple.com/v1/userGroups" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

**Response**

```json
    {
    "data": [
      {
        "type": "userGroups",
        "id": "UG123456",
        "attributes": {
          "ouId": "OU789012",
          "name": "Engineering Team",
          "type": "STANDARD",
          "totalMemberCount": 25,
          "status": "ACTIVE",
          "createdDateTime": "2023-03-15T10:00:00Z",
          "updatedDateTime": "2024-06-01T14:30:00Z"
        },
        "relationships": {
          "users": {
            "links": {
              "self": "https://api-business.apple.com/v1/userGroups/UG123456/relationships/users"
            }
          }
        },
        "links": {
          "self": "https://api-business.apple.com/v1/userGroups/UG123456"
        }
      }
    ],
    "links": {
      "self": "https://api-business.apple.com/v1/userGroups",
      "next": "https://api-business.apple.com/v1/userGroups?cursor=MDowOjE3NDYxMTM4OTI1OTA6MTc0NjExMzg5MjU5MDp0cnVlOmZhbHNlOjE3NDYxMTM4OTI1OTA"
    },
    "meta": {
      "paging": {
        "nextCursor": "MDowOjE3NDYxMTM4OTI1OTA6MTc0NjExMzg5MjU5MDp0cnVlOmZhbHNlOjE3NDYxMTM4OTI1OTA",
        "limit": 100
      }
    }
  }
```

## Topics

### Responses

- [UserGroupsResponse](usergroupsresponse.md): A response that contains a list of user group resources.

## See Also

### UserGroups

- [Get User Group Information](get-usergroup-information.md): Get information about a specific user group in an organization.
- [Get User IDs for a User Group](get-all-user-ids-for-a-user-group.md): Get a list of user IDs for a user group in an organization.

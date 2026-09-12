> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/get-usergroup-information](https://developer.apple.com/documentation/applebusinessapi/get-usergroup-information)

# Get User Group Information

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Business API 2.4+

Get information about a specific user group in an organization.

## URL

```http
GET https://api-business.apple.com/v1/userGroups/{id}
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the resource.

## Query Parameters

- `fields[userGroups]` — `[string]`: The fields to return for included related types.
  **Allowed values:** `ouId`, `name`, `type`, `totalMemberCount`, `createdDateTime`, `updatedDateTime`, `status`, `users`

## Response Codes

- `200` OK — `UserGroupResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`: **Too Many Requests**

<a id="Example"></a>

### Example

**Request**

```
curl "https://api-business.apple.com/v1/userGroups/{id}" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

**Response**

```json
    {
      "data": {
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
      },
      "links": {
        "self": "https://api-business.apple.com/v1/userGroups/UG123456"
      }
    }
```

## Topics

### Responses

- [UserGroupResponse](usergroupresponse.md): A response that contains a single user group resource.

## See Also

### UserGroups

- [Get User Groups](get-user-groups.md): Get a list of user groups in an organization.
- [Get User IDs for a User Group](get-all-user-ids-for-a-user-group.md): Get a list of user IDs for a user group in an organization.

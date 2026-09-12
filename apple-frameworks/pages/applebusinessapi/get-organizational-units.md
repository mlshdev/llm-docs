> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/get-organizational-units](https://developer.apple.com/documentation/applebusinessapi/get-organizational-units)

# Get Organizational Units

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Business API 2.4+

Get a list of organizational units in an organization.

## URL

```http
GET https://api-business.apple.com/v1/organizationalUnits
```

## Query Parameters

- `fields[organizationalUnits]` — `[string]`: The fields to return for included related types.
  **Allowed values:** `name`, `description`, `createdDateTime`, `updatedDateTime`, `users`
- `limit` — `integer`: The number of included related resources to return.
  **Maximum:** `1000`

## Response Codes

- `200` OK — `OrganizationalUnitsResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `429` — `ErrorResponse`: **Too Many Requests**

<a id="Example"></a>

### Example

**Request**

```
curl "https://api-business.apple.com/v1/organizationalUnits" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

**Response**

```json
    {
    "data": [
      {
        "type": "organizationalUnits",
        "id": "OU789012",
        "attributes": {
          "name": "Engineering",
          "description": "Engineering organizational unit",
          "createdDateTime": "2023-03-15T10:00:00Z",
          "updatedDateTime": "2024-06-01T14:30:00Z"
        },
        "relationships": {
          "users": {
            "links": {
              "self": "https://api-business.apple.com/v1/organizationalUnits/OU789012/relationships/users"
            }
          }
        },
        "links": {
          "self": "https://api-business.apple.com/v1/organizationalUnits/OU789012"
        }
      }
    ],
    "links": {
      "self": "https://api-business.apple.com/v1/organizationalUnits",
      "next": "https://api-business.apple.com/v1/organizationalUnits?cursor=MDowOjE3NDYxMTM4OTI1OTA6MTc0NjExMzg5MjU5MDp0cnVlOmZhbHNlOjE3NDYxMTM4OTI1OTA"
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

- [OrganizationalUnitsResponse](organizationalunitsresponse.md): A response that contains a list of organizational unit resources.

## See Also

### Organizational Units

- [Get Organizational Unit Information](get-organizationalunit-information.md): Get information about a specific organizational unit in an organization.
- [Get User IDs for an Organizational Unit](get-all-user-ids-for-an-organizationalunit.md): Get a list of user IDs for an organizational unit in an organization.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/get-all-user-ids-for-an-organizationalunit](https://developer.apple.com/documentation/applebusinessapi/get-all-user-ids-for-an-organizationalunit)

# Get User IDs for an Organizational Unit

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Business API 2.4+

Get a list of user IDs for an organizational unit in an organization.

## URL

```http
GET https://api-business.apple.com/v1/organizationalUnits/{id}/relationships/users
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the resource.

## Query Parameters

- `limit` — `integer`: The number of included related resources to return.
  **Maximum:** `1000`

## Response Codes

- `200` OK — `OrganizationalUnitUsersLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`: **Too Many Requests**

<a id="Example"></a>

### Example

**Request**

```
curl "https://api-business.apple.com/v1/organizationalUnits/{id}/relationships/users" \
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
      "self": "https://api-business.apple.com/v1/organizationalUnits/OU789012/relationships/users",
      "next": "https://api-business.apple.com/v1/organizationalUnits/OU789012/relationships/users?cursor=MDowOjE3NDYxMTg0NjkzOTc6MTc0NjExODQ2OTM5Nzp0cnVlOmZhbHNlOjE3NDYxMTg0NjkzOTc"
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

- [OrganizationalUnitUsersLinkagesResponse](organizationalunituserslinkagesresponse.md): A response that contains a list of user IDs for an organizational unit.

## See Also

### Organizational Units

- [Get Organizational Units](get-organizational-units.md): Get a list of organizational units in an organization.
- [Get Organizational Unit Information](get-organizationalunit-information.md): Get information about a specific organizational unit in an organization.

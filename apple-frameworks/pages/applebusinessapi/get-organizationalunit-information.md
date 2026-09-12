> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/get-organizationalunit-information](https://developer.apple.com/documentation/applebusinessapi/get-organizationalunit-information)

# Get Organizational Unit Information

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Business API 2.4+

Get information about a specific organizational unit in an organization.

## URL

```http
GET https://api-business.apple.com/v1/organizationalUnits/{id}
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the resource.

## Query Parameters

- `fields[organizationalUnits]` — `[string]`: The fields to return for included related types.
  **Allowed values:** `name`, `description`, `createdDateTime`, `updatedDateTime`, `users`

## Response Codes

- `200` OK — `OrganizationalUnitResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`: **Too Many Requests**

<a id="Example"></a>

### Example

**Request**

```
curl "https://api-business.apple.com/v1/organizationalUnits/{id}" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

**Response**

```json
    {
      "data": {
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
      },
      "links": {
        "self": "https://api-business.apple.com/v1/organizationalUnits/OU789012"
      }
    }
```

## Topics

### Responses

- [OrganizationalUnitResponse](organizationalunitresponse.md): A response that contains a single organizational unit resource.

## See Also

### Organizational Units

- [Get Organizational Units](get-organizational-units.md): Get a list of organizational units in an organization.
- [Get User IDs for an Organizational Unit](get-all-user-ids-for-an-organizationalunit.md): Get a list of user IDs for an organizational unit in an organization.

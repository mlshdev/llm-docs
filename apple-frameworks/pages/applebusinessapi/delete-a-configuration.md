> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applebusinessapi/delete-a-configuration](https://developer.apple.com/documentation/applebusinessapi/delete-a-configuration)

# Delete a Configuration

**Interface language:** Data

**Framework:** Apple Business API  
**Kind:** Web Service Endpoint  
**Availability:** Apple Business API 2.4+

Delete a Configuration from an organization.

## URL

```http
DELETE https://api-business.apple.com/v1/configurations/{id}
```

## Path Parameters

- `id` — `string` (required): The unique identifier for the resource.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`: Request entity error(s).
- `429` — `ErrorResponse`: **Too Many Requests**

<a id="Example"></a>

### Example

**Request**

```
curl -X DELETE "https://api-business.apple.com/v1/configurations/{id}" \
    -H "Authorization: Bearer ${ACCESS_TOKEN}"
```

**Response**

```
HTTP/1.1 204 No Content
```

## See Also

### Configurations

- [Get Configurations](get-configurations.md): Get a list of Configurations in an organization.
- [Create a Configuration](create-a-configuration.md): Create a new custom Configuration in an organization.
- [Get Configuration Information](get-configuration-information.md): Get information about a specific Configuration in an organization.
- [Update a Configuration](update-a-configuration.md): Update an existing custom Configuration in an organization.

> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/enterpriseprogramapi/delete-a-profile](https://developer.apple.com/documentation/enterpriseprogramapi/delete-a-profile)

# Delete a Profile

**Interface language:** Data

**Framework:** Enterprise Program API  
**Kind:** Web Service Endpoint

Delete a provisioning profile that is used for app development or distribution.

## URL

```http
DELETE https://api.enterprise.developer.apple.com/v1/profiles/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.

<a id="Discussion"></a>

## Discussion

You can delete provisioning profiles, and may wish to do so if they are expiring or obsolete.

## See Also

### Creating and Deleting Provisioning Profiles

- [Create a Profile](create-a-profile.md): Create a new provisioning profile.

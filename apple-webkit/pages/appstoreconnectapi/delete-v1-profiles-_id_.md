> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-profiles-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-profiles-_id_)

# Delete a profile

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.1+

Delete a provisioning profile that is used for app development or distribution.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/profiles/{id}
```

## Path Parameters

- `id` — `string` (required):

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

You can delete provisioning profiles, and may wish to do so if they are expiring or obsolete.

## See Also

### Creating and Deleting Provisioning Profiles

- [Create a profile](post-v1-profiles.md): Create a new provisioning profile.

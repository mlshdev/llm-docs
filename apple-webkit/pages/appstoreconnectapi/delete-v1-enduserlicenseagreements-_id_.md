> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-enduserlicenseagreements-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-enduserlicenseagreements-_id_)

# Delete an end user license agreement

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Delete the custom end user license agreement that is associated with an app.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/endUserLicenseAgreements/{id}
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

## See Also

### Creating, Modifying, and Deleting an EULA

- [Create an end user license agreement](post-v1-enduserlicenseagreements.md): Add a custom end user license agreement (EULA) to an app and configure the territories to which it applies.
- [Modify an end user license agreement](patch-v1-enduserlicenseagreements-_id_.md): Update the text or territories for your custom end user license agreement.

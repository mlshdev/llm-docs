> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/delete-v1-appcustomproductpagelocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/delete-v1-appcustomproductpagelocalizations-_id_)

# Delete an App Custom Product Page Localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+

Delete localized metadata that you configured for a custom product page.

## URL

```http
DELETE https://api.appstoreconnect.apple.com/v1/appCustomProductPageLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app custom product page localization resource ID from the [List Custom Product Pages Localizations](get-v1-appcustomproductpageversions-_id_-appcustomproductpagelocalizations.md) response.

## Response Codes

- `204` No Content:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="Discussion"></a>

## Discussion

<a id="Example-Request-and-Response"></a>

### Example Request and Response

**Request**

```
DELETE https://api.appstoreconnect.apple.com/v1/appCustomProductPageLocalizations/736966e2-178b-4e3f-bfb9-474eb19fbd8c
```

**Response**

```json
204
```

## See Also

### Managing localizations

- [List Custom Product Pages Localizations](get-v1-appcustomproductpageversions-_id_-appcustomproductpagelocalizations.md): List all localizations for an app custom product page.
- [Read Custom Product Page Localization Information](get-v1-appcustomproductpagelocalizations-_id_.md): Get information about a specific app custom product page localization.
- [Create a Custom Product Page Localization](post-v1-appcustomproductpagelocalizations.md): Add a localization for your app custom product page.
- [Modify Custom Product Page Localization Information](patch-v1-appcustomproductpagelocalizations-_id_.md): Update the promotional text for an app custom product page localization.

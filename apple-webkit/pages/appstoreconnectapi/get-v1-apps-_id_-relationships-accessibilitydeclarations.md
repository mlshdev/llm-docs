> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-accessibilitydeclarations](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-relationships-accessibilitydeclarations)

# List accessibility declaration IDs for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/relationships/accessibilityDeclarations
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `limit` — `integer`: **Maximum:** `200`

## Response Codes

- `200` OK — `AppAccessibilityDeclarationsLinkagesResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Getting accessibility declaration information

- [List All Accessibility Declarations for an App](get-v1-apps-_id_-accessibilitydeclarations.md): Get a list of the accessibility declarations for a specific app.

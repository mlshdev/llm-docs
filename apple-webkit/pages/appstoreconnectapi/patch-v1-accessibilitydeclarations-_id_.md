> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-accessibilitydeclarations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-accessibilitydeclarations-_id_)

# Modify an Accessibility Declaration

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Update the attributes of a specific accessibility declaration.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/accessibilityDeclarations/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `accessibilityDeclarations` resource ID from the [List All Accessibility Declarations for an App](get-v1-apps-_id_-accessibilitydeclarations.md) response.

## HTTP Body

Content type: `application/json`

Type: `AccessibilityDeclarationUpdateRequest`

## Response Codes

- `200` OK — `AccessibilityDeclarationResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `409` Conflict — `ErrorResponse`:
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Configuring accessibility declarations for your app](configuring-accessibility-declarations.md)

## See Also

### Managing accessibility metadata

- [List All Accessibility Declarations for an App](get-v1-apps-_id_-accessibilitydeclarations.md): Get a list of the accessibility declarations for a specific app.
- [List accessibility declaration IDs for an app](get-v1-apps-_id_-relationships-accessibilitydeclarations.md)
- [Read Accessibility Declaration Information](get-v1-accessibilitydeclarations-_id_.md): Get information about a specific accessibility declaration.
- [Create an Accessibility Declaration](post-v1-accessibilitydeclarations.md): Add an accessibility declaration for a specific app.
- [Delete an Accessibility Declaration](delete-v1-accessibilitydeclarations-_id_.md): Delete a specific accessibility declaration.

> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-accessibilitydeclarations](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-accessibilitydeclarations)

# Create an Accessibility Declaration

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Add an accessibility declaration for a specific app.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/accessibilityDeclarations
```

## HTTP Body

Content type: `application/json`

Type: `AccessibilityDeclarationCreateRequest`

## Response Codes

- `201` Created — `AccessibilityDeclarationResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
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
- [Modify an Accessibility Declaration](patch-v1-accessibilitydeclarations-_id_.md): Update the attributes of a specific accessibility declaration.
- [Delete an Accessibility Declaration](delete-v1-accessibilitydeclarations-_id_.md): Delete a specific accessibility declaration.

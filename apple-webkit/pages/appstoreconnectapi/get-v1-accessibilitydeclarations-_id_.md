> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-accessibilitydeclarations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-accessibilitydeclarations-_id_)

# Read Accessibility Declaration Information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get information about a specific accessibility declaration.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/accessibilityDeclarations/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `accessibilityDeclarations` resource ID from the [List All Accessibility Declarations for an App](get-v1-apps-_id_-accessibilitydeclarations.md) response.

## Query Parameters

- `fields[accessibilityDeclarations]` — `[string]`: Additional fields to include for each accessibility declarations resource returned by the response.
  **Allowed values:** `deviceFamily`, `state`, `supportsAudioDescriptions`, `supportsCaptions`, `supportsDarkInterface`, `supportsDifferentiateWithoutColorAlone`, `supportsLargerText`, `supportsReducedMotion`, `supportsSufficientContrast`, `supportsVoiceControl`, `supportsVoiceover`

## Response Codes

- `200` OK — `AccessibilityDeclarationResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Configuring accessibility declarations for your app](configuring-accessibility-declarations.md)

## See Also

### Managing accessibility metadata

- [List All Accessibility Declarations for an App](get-v1-apps-_id_-accessibilitydeclarations.md): Get a list of the accessibility declarations for a specific app.
- [List accessibility declaration IDs for an app](get-v1-apps-_id_-relationships-accessibilitydeclarations.md)
- [Create an Accessibility Declaration](post-v1-accessibilitydeclarations.md): Add an accessibility declaration for a specific app.
- [Modify an Accessibility Declaration](patch-v1-accessibilitydeclarations-_id_.md): Update the attributes of a specific accessibility declaration.
- [Delete an Accessibility Declaration](delete-v1-accessibilitydeclarations-_id_.md): Delete a specific accessibility declaration.

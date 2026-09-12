> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-accessibilitydeclarations](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-accessibilitydeclarations)

# List All Accessibility Declarations for an App

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 4.0+

Get a list of the accessibility declarations for a specific app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/accessibilityDeclarations
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `fields[accessibilityDeclarations]` — `[string]`: Additional fields to include for each accessibility declarations resource returned by the response.
  **Allowed values:** `deviceFamily`, `state`, `supportsAudioDescriptions`, `supportsCaptions`, `supportsDarkInterface`, `supportsDifferentiateWithoutColorAlone`, `supportsLargerText`, `supportsReducedMotion`, `supportsSufficientContrast`, `supportsVoiceControl`, `supportsVoiceover`
- `filter[deviceFamily]` — `[string]`: Filter the returned accessibility declarations by device family.
  **Allowed values:** `IPHONE`, `IPAD`, `APPLE_TV`, `APPLE_WATCH`, `MAC`, `VISION`
- `filter[state]` — `[string]`: Filter the returned accessibility declarations by state.
  **Allowed values:** `DRAFT`, `PUBLISHED`, `REPLACED`
- `limit` — `integer`: The maximum number of accessibility declarations resources to return.
  **Maximum:** `200`

## Response Codes

- `200` OK — `AccessibilityDeclarationsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Configuring accessibility declarations for your app](configuring-accessibility-declarations.md)

## See Also

### Getting accessibility declaration information

- [List accessibility declaration IDs for an app](get-v1-apps-_id_-relationships-accessibilitydeclarations.md)

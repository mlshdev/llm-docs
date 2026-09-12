> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/patch-v1-betaapplocalizations-_id_](https://developer.apple.com/documentation/appstoreconnectapi/patch-v1-betaapplocalizations-_id_)

# Modify a beta app localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Update the localized information for a specific beta app and locale.

## URL

```http
PATCH https://api.appstoreconnect.apple.com/v1/betaAppLocalizations/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the `betaAppLocalizations` resource ID from the [List beta app localizations](get-v1-betaapplocalizations.md) response.

## HTTP Body

Content type: `application/json`

Type: `BetaAppLocalizationUpdateRequest`

## Response Codes

- `200` OK — `BetaAppLocalizationResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [App Store Connect API 3.7 release notes](app-store-connect-api-3-7-release-notes.md)

<a id="overview"></a>

## Overview

> **Important**

>  A description is required for all `betaAppLocalizations` before you can submit to beta app review. After you have added data to the fields for this resource, you can change that data, but you cannot remove data.

## See Also

### Creating, Modifying, and Deleting Localizations

- [Create a beta app localization](post-v1-betaapplocalizations.md): Create localized descriptive information for an app.
- [Delete a beta app localization](delete-v1-betaapplocalizations-_id_.md): Delete a beta app localization associated with an app.

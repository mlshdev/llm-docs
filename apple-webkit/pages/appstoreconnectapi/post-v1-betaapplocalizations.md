> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/post-v1-betaapplocalizations](https://developer.apple.com/documentation/appstoreconnectapi/post-v1-betaapplocalizations)

# Create a beta app localization

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Create localized descriptive information for an app.

## URL

```http
POST https://api.appstoreconnect.apple.com/v1/betaAppLocalizations
```

## HTTP Body

Content type: `application/json`

Type: `BetaAppLocalizationCreateRequest`

## Response Codes

- `201` Created — `BetaAppLocalizationResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `409` Conflict — `ErrorResponse`: The provided resource data is not valid.
- `422` — `ErrorResponse`:
- `429` — `ErrorResponse`:

<a id="overview"></a>

## Overview

> **Important**

>  A description is required for all `betaAppLocalizations` before you can submit to beta app review.

## See Also

### Creating, Modifying, and Deleting Localizations

- [Modify a beta app localization](patch-v1-betaapplocalizations-_id_.md): Update the localized information for a specific beta app and locale.
- [Delete a beta app localization](delete-v1-betaapplocalizations-_id_.md): Delete a beta app localization associated with an app.

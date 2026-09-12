> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appstoreversions-_id_-appstoreversionphasedrelease](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appstoreversions-_id_-appstoreversionphasedrelease)

# Read the app store version phased release information of an app store version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Read the phased release status and configuration for a version with phased release enabled.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appStoreVersions/{id}/appStoreVersionPhasedRelease
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the App Store version resource ID from the [List all app store versions for an app](get-v1-apps-_id_-appstoreversions.md) response.

## Query Parameters

- `fields[appStoreVersionPhasedReleases]` — `[string]`: Additional fields to include for each App Store version phased release resource returned by the response.
  **Allowed values:** `phasedReleaseState`, `startDate`, `totalPauseDuration`, `currentDayNumber`

## Response Codes

- `200` OK — `AppStoreVersionPhasedReleaseWithoutIncludesResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Reading Release and Review Information

- [Read the app store version submission information of an app store version](get-v1-appstoreversions-_id_-appstoreversionsubmission.md): Deprecated. Get the App Review submission for a specific App Store version.
- [Get the App Store version submission ID for an App Store version](get-v1-appstoreversions-_id_-relationships-appstoreversionsubmission.md): Deprecated.
- [Read the app store review details resource information of an app store version](get-v1-appstoreversions-_id_-appstorereviewdetail.md): Get the details you provide to App Review so they can test your app.
- [Get the App Store review detail ID for an App Store version](get-v1-appstoreversions-_id_-relationships-appstorereviewdetail.md)
- [Get the phased release ID for an App Store version](get-v1-appstoreversions-_id_-relationships-appstoreversionphasedrelease.md)

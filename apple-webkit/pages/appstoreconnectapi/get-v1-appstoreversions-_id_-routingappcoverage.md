> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appstoreversions-_id_-routingappcoverage](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appstoreversions-_id_-routingappcoverage)

# Read the routing app coverage information of an app store version

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Get the routing app coverage file that is associated with a specific App Store version

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appStoreVersions/{id}/routingAppCoverage
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the App Store version resource ID from the [List all app store versions for an app](get-v1-apps-_id_-appstoreversions.md) response.

## Query Parameters

- `fields[routingAppCoverages]` — `[string]`: Additional fields to include for each routing app coverage resource returned by the response.
  **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `uploadOperations`, `assetDeliveryState`, `appStoreVersion`
- `fields[appStoreVersions]` — `[string]`: **Allowed values:** `platform`, `versionString`, `appStoreState`, `appVersionState`, `copyright`, `reviewType`, `releaseType`, `earliestReleaseDate`, `usesIdfa`, `downloadable`, `createdDate`, `app`, `appStoreVersionLocalizations`, `build`, `appStoreVersionPhasedRelease`, `gameCenterAppVersion`, `routingAppCoverage`, `appStoreReviewDetail`, `appStoreVersionSubmission`, `appClipDefaultExperience`, `appStoreVersionExperiments`, `appStoreVersionExperimentsV2`, `customerReviews`, `alternativeDistributionPackage`
- `include` — `[string]`: **Allowed values:** `appStoreVersion`

## Response Codes

- `200` OK — `RoutingAppCoverageResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Reading Declarations

- [Get the routing app coverage ID for an App Store version](get-v1-appstoreversions-_id_-relationships-routingappcoverage.md)

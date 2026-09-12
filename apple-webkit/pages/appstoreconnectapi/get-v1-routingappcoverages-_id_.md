> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-routingappcoverages-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-routingappcoverages-_id_)

# Read routing app coverage information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Get information about the routing app coverage file and its upload and processing status.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/routingAppCoverages/{id}
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[routingAppCoverages]` — `[string]`: **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `uploadOperations`, `assetDeliveryState`, `appStoreVersion`
- `include` — `[string]`: **Allowed values:** `appStoreVersion`
- `fields[appStoreVersions]` — `[string]`: **Allowed values:** `platform`, `versionString`, `appStoreState`, `appVersionState`, `copyright`, `reviewType`, `releaseType`, `earliestReleaseDate`, `usesIdfa`, `downloadable`, `createdDate`, `app`, `appStoreVersionLocalizations`, `build`, `appStoreVersionPhasedRelease`, `gameCenterAppVersion`, `routingAppCoverage`, `appStoreReviewDetail`, `appStoreVersionSubmission`, `appClipDefaultExperience`, `appStoreVersionExperiments`, `appStoreVersionExperimentsV2`, `customerReviews`, `alternativeDistributionPackage`

## Response Codes

- `200` OK — `RoutingAppCoverageResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Reading and Creating Routing App Coverages

- [Read the routing app coverage information of an app store version](get-v1-appstoreversions-_id_-routingappcoverage.md): Get the routing app coverage file that is associated with a specific App Store version
- [Create a routing app coverage](post-v1-routingappcoverages.md): Attach a routing app coverage file to an App Store version.

> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-appstorereviewdetails-_id_](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-appstorereviewdetails-_id_)

# Read app store review detail information

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.2+

Get App Review details you provided, including contact information, demo account, and notes.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/appStoreReviewDetails/{id}
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the App Store review detail resource ID from the [Read the app store review details resource information of an app store version](get-v1-appstoreversions-_id_-appstorereviewdetail.md) response.

## Query Parameters

- `fields[appStoreReviewDetails]` — `[string]`: Additional fields to include for each App Store review detail resource returned by the response.
  **Allowed values:** `contactFirstName`, `contactLastName`, `contactPhone`, `contactEmail`, `demoAccountName`, `demoAccountPassword`, `demoAccountRequired`, `notes`, `appStoreVersion`, `appStoreReviewAttachments`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `appStoreVersion`, `appStoreReviewAttachments`
- `limit[appStoreReviewAttachments]` — `integer`: The maximum number of related App Store review attachments resources to return.
  **Maximum:** `50`
- `fields[appStoreReviewAttachments]` — `[string]`: Additional fields to include for each App Store review attachment resource returned by the response.
  **Allowed values:** `fileSize`, `fileName`, `sourceFileChecksum`, `uploadOperations`, `assetDeliveryState`, `appStoreReviewDetail`
- `fields[appStoreVersions]` — `[string]`: **Allowed values:** `platform`, `versionString`, `appStoreState`, `appVersionState`, `copyright`, `reviewType`, `releaseType`, `earliestReleaseDate`, `usesIdfa`, `downloadable`, `createdDate`, `app`, `appStoreVersionLocalizations`, `build`, `appStoreVersionPhasedRelease`, `gameCenterAppVersion`, `routingAppCoverage`, `appStoreReviewDetail`, `appStoreVersionSubmission`, `appClipDefaultExperience`, `appStoreVersionExperiments`, `appStoreVersionExperimentsV2`, `customerReviews`, `alternativeDistributionPackage`

## Response Codes

- `200` OK — `AppStoreReviewDetailResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `404` Not Found — `ErrorResponse`: Resource not found.
- `429` — `ErrorResponse`:

## See Also

### Creating, Modifying, and Reading Review Details

- [Create an app store review detail](post-v1-appstorereviewdetails.md): Add App Store review details to an App Store version, including contact and demo account information.
- [List App Store review attachment IDs for an App Store review detail](get-v1-appstorereviewdetails-_id_-relationships-appstorereviewattachments.md)
- [Modify an app store review detail](patch-v1-appstorereviewdetails-_id_.md): Update the App Store review details, including the contact information, demo account, and notes.

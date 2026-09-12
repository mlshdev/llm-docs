> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-reviewsubmissions-_id_-items](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-reviewsubmissions-_id_-items)

# List the Items in a Review Submission

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.7+

List all the items in a specific review submission.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/reviewSubmissions/{id}/items
```

## Path Parameters

- `id` — `string` (required): The opaque resource ID that uniquely identifies the review submissions resource. Obtain the app resource ID from the [List Review Submissions for an App](get-v1-reviewsubmissions.md) response.

## Query Parameters

- `fields[reviewSubmissionItems]` — `[string]`: **Allowed values:** `state`, `appStoreVersion`, `appCustomProductPageVersion`, `appStoreVersionExperiment`, `appStoreVersionExperimentV2`, `appEvent`, `backgroundAssetVersion`, `gameCenterAchievementVersion`, `gameCenterActivityVersion`, `gameCenterChallengeVersion`, `gameCenterLeaderboardSetVersion`, `gameCenterLeaderboardVersion`, `inAppPurchaseVersion`, `subscriptionVersion`, `subscriptionGroupVersion`
- `limit` — `integer`: **Maximum:** `200`
- `fields[appStoreVersionExperiments]` — `[string]`: **Allowed values:** `name`, `trafficProportion`, `state`, `reviewRequired`, `startDate`, `endDate`, `appStoreVersion`, `appStoreVersionExperimentTreatments`, `platform`, `app`, `latestControlVersion`, `controlVersions`
- `fields[appStoreVersions]` — `[string]`: **Allowed values:** `platform`, `versionString`, `appStoreState`, `appVersionState`, `copyright`, `reviewType`, `releaseType`, `earliestReleaseDate`, `usesIdfa`, `downloadable`, `createdDate`, `app`, `appStoreVersionLocalizations`, `build`, `appStoreVersionPhasedRelease`, `gameCenterAppVersion`, `routingAppCoverage`, `appStoreReviewDetail`, `appStoreVersionSubmission`, `appClipDefaultExperience`, `appStoreVersionExperiments`, `appStoreVersionExperimentsV2`, `customerReviews`, `alternativeDistributionPackage`
- `fields[appCustomProductPageVersions]` — `[string]`: **Allowed values:** `version`, `state`, `deepLink`, `appCustomProductPage`, `appCustomProductPageLocalizations`
- `fields[appEvents]` — `[string]`: **Allowed values:** `referenceName`, `badge`, `eventState`, `deepLink`, `purchaseRequirement`, `primaryLocale`, `priority`, `purpose`, `territorySchedules`, `archivedTerritorySchedules`, `localizations`
- `include` — `[string]`: **Allowed values:** `appStoreVersion`, `appCustomProductPageVersion`, `appStoreVersionExperiment`, `appStoreVersionExperimentV2`, `appEvent`, `backgroundAssetVersion`, `gameCenterAchievementVersion`, `gameCenterActivityVersion`, `gameCenterChallengeVersion`, `gameCenterLeaderboardSetVersion`, `gameCenterLeaderboardVersion`, `inAppPurchaseVersion`, `subscriptionVersion`, `subscriptionGroupVersion`
- `fields[backgroundAssetVersions]` — `[string]`: **Allowed values:** `createdDate`, `platforms`, `state`, `stateDetails`, `version`, `locale`, `backgroundAsset`, `internalBetaRelease`, `externalBetaRelease`, `appStoreRelease`, `assetFile`, `manifestFile`, `backgroundAssetUploadFiles`
- `fields[gameCenterAchievementVersions]` — `[string]`: **Allowed values:** `version`, `state`, `achievement`, `localizations`
- `fields[gameCenterActivityVersions]` — `[string]`: **Allowed values:** `version`, `state`, `fallbackUrl`, `activity`, `localizations`, `defaultImage`, `releases`
- `fields[gameCenterChallengeVersions]` — `[string]`: **Allowed values:** `version`, `state`, `challenge`, `localizations`, `releases`, `defaultImage`
- `fields[gameCenterLeaderboardSetVersions]` — `[string]`: **Allowed values:** `version`, `state`, `leaderboardSet`, `localizations`
- `fields[gameCenterLeaderboardVersions]` — `[string]`: **Allowed values:** `version`, `state`, `leaderboard`, `localizations`
- `fields[inAppPurchaseVersions]` — `[string]`: **Allowed values:** `version`, `state`, `inAppPurchase`, `image`, `images`, `localizations`
- `fields[subscriptionGroupVersions]` — `[string]`: **Allowed values:** `version`, `state`, `subscriptionGroup`, `localizations`
- `fields[subscriptionVersions]` — `[string]`: **Allowed values:** `version`, `state`, `subscription`, `image`, `images`, `localizations`

## Response Codes

- `200` OK — `ReviewSubmissionItemsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Endpoints

- [List Review Submissions for an App](get-v1-reviewsubmissions.md): List recent and current review submissions for a specific app.
- [Read Review Submission Information](get-v1-reviewsubmissions-_id_.md): Read information about a specific review submisison.
- [List item IDs](get-v1-reviewsubmissions-_id_-relationships-items.md): Get the list of item IDs for a specific review submission.
- [List review submission IDs](get-v1-apps-_id_-relationships-reviewsubmissions.md): Get the list of review submission IDs for a specific app.
- [Modify a Review Submission](patch-v1-reviewsubmissions-_id_.md): Edit the details or contents of a review submission.
- [Create a Review Submission](post-v1-reviewsubmissions.md): Create a review submission for a specific app.

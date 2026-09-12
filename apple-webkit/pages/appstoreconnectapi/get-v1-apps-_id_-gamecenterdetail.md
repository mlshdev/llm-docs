> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-apps-_id_-gamecenterdetail](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-apps-_id_-gamecenterdetail)

# Read the state of game center for an app

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Get Game Center detail information for an app.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/apps/{id}/gameCenterDetail
```

## Path Parameters

- `id` — `string` (required): An opaque resource ID that uniquely identifies the resource. Obtain the app resource ID from the [List apps](get-v1-apps.md) response.

## Query Parameters

- `fields[apps]` — `[string]`: Additional fields to include for each app resource returned by the response.
  **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`
- `fields[gameCenterAchievementReleases]` — `[string]`: Additional fields to include for each Game Center achievement release resource returned by the response.
  **Allowed values:** `live`, `gameCenterDetail`, `gameCenterAchievement`
- `fields[gameCenterAchievements]` — `[string]`: Additional fields to include for each Game Center achievement resource returned by the response.
  **Allowed values:** `referenceName`, `vendorIdentifier`, `points`, `showBeforeEarned`, `repeatable`, `archived`, `activityProperties`, `gameCenterDetail`, `gameCenterGroup`, `groupAchievement`, `localizations`, `releases`, `activity`, `versions`
- `fields[gameCenterAppVersions]` — `[string]`: Additional fields to include for each Game Center app version resource returned by the response.
  **Allowed values:** `enabled`, `compatibilityVersions`, `appStoreVersion`
- `fields[gameCenterDetails]` — `[string]`: Additional fields to include for each Game Center detail resource returned by the response.
  **Allowed values:** `arcadeEnabled`, `challengeEnabled`, `app`, `gameCenterAppVersions`, `gameCenterGroup`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`, `defaultLeaderboard`, `defaultLeaderboardV2`, `defaultGroupLeaderboard`, `defaultGroupLeaderboardV2`, `achievementReleases`, `activityReleases`, `challengeReleases`, `leaderboardReleases`, `leaderboardSetReleases`, `challengesMinimumPlatformVersions`
- `fields[gameCenterGroups]` — `[string]`: Additional fields to include for each Game Center group resource returned by the response.
  **Allowed values:** `referenceName`, `gameCenterDetails`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`
- `fields[gameCenterLeaderboardReleases]` — `[string]`: Additional fields to include for each Game Center leaderboard release resource returned by the response.
  **Allowed values:** `live`, `gameCenterDetail`, `gameCenterLeaderboard`
- `fields[gameCenterLeaderboardSetReleases]` — `[string]`: Additional fields to include for each Game Center leaderboard set release resource returned by the response.
  **Allowed values:** `live`, `gameCenterDetail`, `gameCenterLeaderboardSet`
- `fields[gameCenterLeaderboardSets]` — `[string]`: Additional fields to include for each Game Center leaderboard set resource returned by the response.
  **Allowed values:** `referenceName`, `vendorIdentifier`, `gameCenterDetail`, `gameCenterGroup`, `groupLeaderboardSet`, `localizations`, `gameCenterLeaderboards`, `releases`, `versions`
- `fields[gameCenterLeaderboards]` — `[string]`: Additional fields to include for each Game Center leaderboard resource returned by the response.
  **Allowed values:** `defaultFormatter`, `referenceName`, `vendorIdentifier`, `submissionType`, `scoreSortType`, `scoreRangeStart`, `scoreRangeEnd`, `recurrenceStartDate`, `recurrenceDuration`, `recurrenceRule`, `archived`, `activityProperties`, `visibility`, `gameCenterDetail`, `gameCenterGroup`, `groupLeaderboard`, `gameCenterLeaderboardSets`, `localizations`, `releases`, `activity`, `challenge`, `versions`
- `include` — `[string]`: The relationship data to include in the response.
  **Allowed values:** `app`, `gameCenterAppVersions`, `gameCenterGroup`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`, `defaultLeaderboard`, `defaultLeaderboardV2`, `defaultGroupLeaderboard`, `defaultGroupLeaderboardV2`, `achievementReleases`, `activityReleases`, `challengeReleases`, `leaderboardReleases`, `leaderboardSetReleases`, `challengesMinimumPlatformVersions`
- `limit[achievementReleases]` — `integer`: The maximum number of related achievement releases resources to return.
  **Maximum:** `50`
- `limit[gameCenterAchievements]` — `integer`: The maximum number of related Game Center achievements resources to return.
  **Maximum:** `50`
- `limit[gameCenterAppVersions]` — `integer`: The maximum number of related Game Center app versions resources to return.
  **Maximum:** `50`
- `limit[gameCenterLeaderboardSets]` — `integer`: The maximum number of related Game Center leaderboard sets resources to return.
  **Maximum:** `50`
- `limit[gameCenterLeaderboards]` — `integer`: The maximum number of related Game Center leaderboards resources to return.
  **Maximum:** `50`
- `limit[leaderboardReleases]` — `integer`: The maximum number of related leaderboard releases resources to return.
  **Maximum:** `50`
- `limit[leaderboardSetReleases]` — `integer`: The maximum number of related leaderboard set releases resources to return.
  **Maximum:** `50`
- `fields[appStoreVersions]` — `[string]`: **Allowed values:** `platform`, `versionString`, `appStoreState`, `appVersionState`, `copyright`, `reviewType`, `releaseType`, `earliestReleaseDate`, `usesIdfa`, `downloadable`, `createdDate`, `app`, `appStoreVersionLocalizations`, `build`, `appStoreVersionPhasedRelease`, `gameCenterAppVersion`, `routingAppCoverage`, `appStoreReviewDetail`, `appStoreVersionSubmission`, `appClipDefaultExperience`, `appStoreVersionExperiments`, `appStoreVersionExperimentsV2`, `customerReviews`, `alternativeDistributionPackage`
- `fields[gameCenterActivities]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `playStyle`, `minimumPlayersCount`, `maximumPlayersCount`, `supportsPartyCode`, `archived`, `properties`, `gameCenterDetail`, `gameCenterGroup`, `achievements`, `achievementsV2`, `leaderboards`, `leaderboardsV2`, `versions`
- `fields[gameCenterActivityVersionReleases]` — `[string]`: **Allowed values:** `version`
- `fields[gameCenterChallengeVersionReleases]` — `[string]`: **Allowed values:** `version`
- `fields[gameCenterChallenges]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `archived`, `challengeType`, `repeatable`, `gameCenterDetail`, `gameCenterGroup`, `versions`, `leaderboard`, `leaderboardV2`
- `limit[activityReleases]` — `integer`: **Maximum:** `50`
- `limit[challengeReleases]` — `integer`: **Maximum:** `50`
- `limit[challengesMinimumPlatformVersions]` — `integer`: **Maximum:** `50`
- `limit[gameCenterAchievementsV2]` — `integer`: **Maximum:** `50`
- `limit[gameCenterActivities]` — `integer`: **Maximum:** `50`
- `limit[gameCenterChallenges]` — `integer`: **Maximum:** `50`
- `limit[gameCenterLeaderboardSetsV2]` — `integer`: **Maximum:** `50`
- `limit[gameCenterLeaderboardsV2]` — `integer`: **Maximum:** `50`

## Response Codes

- `200` OK — `GameCenterDetailResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## Mentioned In

- [Configuring Game center activities](configuring-game-center-activities.md)
- [Configuring Game Center challenges](configuring-game-center-challenges.md)

## See Also

### Getting Game Center detail information

- [Get the Game Center detail ID for an app](get-v1-apps-_id_-relationships-gamecenterdetail.md)
- [List Game Center-enabled version IDs for an app](get-v1-apps-_id_-relationships-gamecenterenabledversions.md): Deprecated.

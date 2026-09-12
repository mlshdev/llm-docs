> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-gamecentergroups-_id_-gamecenterdetails](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-gamecentergroups-_id_-gamecenterdetails)

# List game center details for a group

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 3.0+

Read Game Center detail information for a specific group.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/gameCenterGroups/{id}/gameCenterDetails
```

## Path Parameters

- `id` — `string` (required):

## Query Parameters

- `fields[apps]` — `[string]`: **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`
- `fields[gameCenterAchievementReleases]` — `[string]`: **Allowed values:** `live`, `gameCenterDetail`, `gameCenterAchievement`
- `fields[gameCenterAchievements]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `points`, `showBeforeEarned`, `repeatable`, `archived`, `activityProperties`, `gameCenterDetail`, `gameCenterGroup`, `groupAchievement`, `localizations`, `releases`, `activity`, `versions`
- `fields[gameCenterAppVersions]` — `[string]`: **Allowed values:** `enabled`, `compatibilityVersions`, `appStoreVersion`
- `fields[gameCenterDetails]` — `[string]`: **Allowed values:** `arcadeEnabled`, `challengeEnabled`, `app`, `gameCenterAppVersions`, `gameCenterGroup`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`, `defaultLeaderboard`, `defaultLeaderboardV2`, `defaultGroupLeaderboard`, `defaultGroupLeaderboardV2`, `achievementReleases`, `activityReleases`, `challengeReleases`, `leaderboardReleases`, `leaderboardSetReleases`, `challengesMinimumPlatformVersions`
- `fields[gameCenterGroups]` — `[string]`: **Allowed values:** `referenceName`, `gameCenterDetails`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`
- `fields[gameCenterLeaderboardReleases]` — `[string]`: **Allowed values:** `live`, `gameCenterDetail`, `gameCenterLeaderboard`
- `fields[gameCenterLeaderboardSetReleases]` — `[string]`: **Allowed values:** `live`, `gameCenterDetail`, `gameCenterLeaderboardSet`
- `fields[gameCenterLeaderboardSets]` — `[string]`: **Allowed values:** `referenceName`, `vendorIdentifier`, `gameCenterDetail`, `gameCenterGroup`, `groupLeaderboardSet`, `localizations`, `gameCenterLeaderboards`, `releases`, `versions`
- `fields[gameCenterLeaderboards]` — `[string]`: **Allowed values:** `defaultFormatter`, `referenceName`, `vendorIdentifier`, `submissionType`, `scoreSortType`, `scoreRangeStart`, `scoreRangeEnd`, `recurrenceStartDate`, `recurrenceDuration`, `recurrenceRule`, `archived`, `activityProperties`, `visibility`, `gameCenterDetail`, `gameCenterGroup`, `groupLeaderboard`, `gameCenterLeaderboardSets`, `localizations`, `releases`, `activity`, `challenge`, `versions`
- `filter[gameCenterAppVersions.enabled]` — `[string]`:
- `include` — `[string]`: **Allowed values:** `app`, `gameCenterAppVersions`, `gameCenterGroup`, `gameCenterLeaderboards`, `gameCenterLeaderboardsV2`, `gameCenterLeaderboardSets`, `gameCenterLeaderboardSetsV2`, `gameCenterAchievements`, `gameCenterAchievementsV2`, `gameCenterActivities`, `gameCenterChallenges`, `defaultLeaderboard`, `defaultLeaderboardV2`, `defaultGroupLeaderboard`, `defaultGroupLeaderboardV2`, `achievementReleases`, `activityReleases`, `challengeReleases`, `leaderboardReleases`, `leaderboardSetReleases`, `challengesMinimumPlatformVersions`
- `limit` — `integer`: **Maximum:** `200`
- `limit[achievementReleases]` — `integer`: **Maximum:** `50`
- `limit[gameCenterAchievements]` — `integer`: **Maximum:** `50`
- `limit[gameCenterAppVersions]` — `integer`: **Maximum:** `50`
- `limit[gameCenterLeaderboardSets]` — `integer`: **Maximum:** `50`
- `limit[gameCenterLeaderboards]` — `integer`: **Maximum:** `50`
- `limit[leaderboardReleases]` — `integer`: **Maximum:** `50`
- `limit[leaderboardSetReleases]` — `integer`: **Maximum:** `50`
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

- `200` OK — `GameCenterDetailsResponse`:
- `400` Bad Request — `ErrorResponse`:
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`:
- `404` Not Found — `ErrorResponse`:
- `429` — `ErrorResponse`:

## See Also

### Managing groups

- [Read Group Information](get-v1-gamecentergroups.md): List information for all groups.
- [Read information for a specific group](get-v1-gamecentergroups-_id_.md): Read information for a specific Game Center group.
- [Create a Group](post-v1-gamecentergroups.md): Add a new group.
- [Modify a Group](patch-v1-gamecentergroups-_id_.md): Edit the reference name for a group.
- [Delete a Group](delete-v1-gamecentergroups-_id_.md): Remove a group.
- [List All Game Center Achievements for a Game Center Group](get-v1-gamecentergroups-_id_-gamecenterachievementsv2.md): Get a list of achievements for a specific Game Center group.
- [List All Game Center Leaderboard Sets for a Game Center Group](get-v1-gamecentergroups-_id_-gamecenterleaderboardsetsv2.md): Get a list of leaderboard sets for a specific Game Center group.
- [List All Game Center Leaderboards for a Game Center Group](get-v1-gamecentergroups-_id_-gamecenterleaderboardsv2.md): Get a list of leaderboards for a specific Game Center group.
- [List the Achievements in a Group](get-v1-gamecentergroups-_id_-gamecenterachievements.md): Deprecated. List achievements information for a specific group.
- [List Game Center detail IDs for a Game Center group](get-v1-gamecentergroups-_id_-relationships-gamecenterdetails.md)
- [List Game Center detail IDs for a Game Center group](get-v1-gamecentergroups-_id_-relationships-gamecenterdetails.md)
- [List game center leaderboard sets in a group](get-v1-gamecentergroups-_id_-gamecenterleaderboardsets.md): Deprecated. Read Game Center leaderboard sets information for a specific group.
- [List game center leaderboards for a group](get-v1-gamecentergroups-_id_-gamecenterleaderboards.md): Deprecated. Read Game Center leaderboard information for a specific group.
- [List all activities for a game center group](get-v1-gamecentergroups-_id_-gamecenteractivities.md): Get a list of all activities for a Game Center group.
- [List activity IDs for a Game Center group](get-v1-gamecentergroups-_id_-relationships-gamecenteractivities.md): Get a list of activity IDs for a specific Game Center group.

> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/get-v1-users](https://developer.apple.com/documentation/appstoreconnectapi/get-v1-users)

# List users

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Web Service Endpoint  
**Availability:** App Store Connect API 1.0+

Get a list of the users on your team.

## URL

```http
GET https://api.appstoreconnect.apple.com/v1/users
```

## Query Parameters

- `fields[apps]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `accessibilityUrl`, `name`, `bundleId`, `sku`, `primaryLocale`, `isOrEverWasMadeForKids`, `subscriptionStatusUrl`, `subscriptionStatusUrlVersion`, `subscriptionStatusUrlForSandbox`, `subscriptionStatusUrlVersionForSandbox`, `contentRightsDeclaration`, `streamlinedPurchasingEnabled`, `accessibilityDeclarations`, `appEncryptionDeclarations`, `appStoreIcon`, `ciProduct`, `betaTesters`, `betaGroups`, `appStoreVersions`, `appTags`, `preReleaseVersions`, `betaAppLocalizations`, `builds`, `betaLicenseAgreement`, `betaAppReviewDetail`, `appInfos`, `appClips`, `appPricePoints`, `endUserLicenseAgreement`, `appPriceSchedule`, `appAvailabilityV2`, `inAppPurchases`, `subscriptionGroups`, `gameCenterEnabledVersions`, `perfPowerMetrics`, `appCustomProductPages`, `inAppPurchasesV2`, `promotedPurchases`, `appEvents`, `reviewSubmissions`, `subscriptionGracePeriod`, `customerReviews`, `customerReviewSummarizations`, `gameCenterDetail`, `appStoreVersionExperimentsV2`, `alternativeDistributionKey`, `analyticsReportRequests`, `marketplaceSearchDetail`, `buildUploads`, `backgroundAssets`, `betaFeedbackScreenshotSubmissions`, `betaFeedbackCrashSubmissions`, `searchKeywords`, `webhooks`, `androidToIosAppMappingDetails`
- `fields[users]` — `[string]`: Fields to return for included related types.
  **Allowed values:** `username`, `firstName`, `lastName`, `roles`, `allAppsVisible`, `provisioningAllowed`, `visibleApps`
- `include` — `[string]`: Relationship data to include in the response.
  **Allowed values:** `visibleApps`
- `limit` — `integer`: Number of resources to return.
  **Maximum:** `200`
- `sort` — `[string]`: Attributes by which to sort.
  **Allowed values:** `username`, `-username`, `lastName`, `-lastName`
- `filter[roles]` — `[string]`: Attributes, relationships, and IDs by which to filter.
  **Allowed values:** `ADMIN`, `FINANCE`, `ACCOUNT_HOLDER`, `SALES`, `MARKETING`, `APP_MANAGER`, `DEVELOPER`, `ACCESS_TO_REPORTS`, `CUSTOMER_SUPPORT`, `CREATE_APPS`, `CLOUD_MANAGED_DEVELOPER_ID`, `CLOUD_MANAGED_APP_DISTRIBUTION`, `GENERATE_INDIVIDUAL_KEYS`
- `filter[visibleApps]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `filter[username]` — `[string]`: Attributes, relationships, and IDs by which to filter.
- `limit[visibleApps]` — `integer`: Number of included related resources to return.
  **Maximum:** `50`

## Response Codes

- `200` OK — `UsersResponse`:
- `400` Bad Request — `ErrorResponse`: An error occurred with your request.
- `401` Unauthorized — `ErrorResponse`:
- `403` Forbidden — `ErrorResponse`: Request not authorized.
- `429` — `ErrorResponse`:

## See Also

### Getting User Information

- [Read user information](get-v1-users-_id_.md): Get information about a user on your team, such as name, roles, and app visibility.

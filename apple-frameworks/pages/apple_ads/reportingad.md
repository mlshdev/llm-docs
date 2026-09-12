> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/reportingad](https://developer.apple.com/documentation/apple_ads/reportingad)

# ReportingAd

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 4.0+

The response to a request to fetch ad-level reports.

## Declaration

```
object ReportingAd
```

## Properties

- `adDisplayStatus` — `string`: The `DisplayStatus` that derives from the ad’s serving status.

  You can use the `EQUALS` and `IN` [Selector](selector.md) [Condition](condition.md) operators with [Get Ad-Level Reports](get-ad-level-reports.md) within a campaign.  
  **Allowed values:** `ACTIVE`, `INVALID`, `ON_HOLD`, `PAUSED`, `REMOVED`
- `adGroupId` — `int64`: The unique identifier for the ad group the [Creative](creative.md) belongs to.

  You can use the `EQUALS` and `IN` [Selector](selector.md) [Condition](condition.md) operators with [Get Ad-Level Reports](get-ad-level-reports.md) within a campaign.

  You can use this field with the `orderBy` selector.
- `adId` — `int64`: A unique identifier that represents the assignment relationship between an ad group and an [Ad](ad.md).

  You can use the `EQUALS`, `IN`, and `STARTSWITH` [Selector](selector.md) [Condition](condition.md) operators with [Get Ad-Level Reports](get-ad-level-reports.md) within a campaign.
- `adName` — `string`: The unique name of a custom product page. The `adName` has to be unique within its ad group.

  You can use this field with the `orderBy` selector.
- `adServingStateReasons` — `string`: A list of reasons that displays when an ad isn’t running.

  You can use this field with the `orderBy` selector.  
  **Allowed values:** `AD_APPROVAL_PENDING`, `AD_APPROVAL_REJECTED`, `CREATIVE_SET_INVALID`, `CREATIVE_SET_UNSUPPORTED`, `DELETED_BY_USER`, `PAUSED_BY_SYSTEM`, `PAUSED_BY_USER`, `PRODUCT_PAGE_DELETED`, `PRODUCT_PAGE_HIDDEN`, `PRODUCT_PAGE_INCOMPATIBLE`, `PRODUCT_PAGE_INSUFFICIENT_ASSETS`, `AD_PROCESSING_IN_PROGRESS`
- `campaignId` — `int64`: The unique identifier for a campaign.

  You can use this field with the `orderBy` selector.
- `creationTime` — `date-time`: The date and time of the creation of the [Ad](ad.md) object.

  You can use this field with the `orderBy` selector.
- `creativeId` — `int64`: The unique identifier for a creative.

  You can use the `EQUALS` and `IN` [Selector](selector.md) [Condition](condition.md) operators with [Get Ad-Level Reports](get-ad-level-reports.md) within a campaign.
- `creativeType` — `string`: The type of creative asset. Synonymous with `type` in the [Creative](creative.md) object.

  You can use the `EQUALS` and `IN` [Selector](selector.md) [Condition](condition.md) operators with [Get Ad-Level Reports](get-ad-level-reports.md) within a campaign.  
  **Allowed values:** `CREATIVE_SET`, `CUSTOM_PRODUCT_PAGE`, `DEFAULT_PRODUCT_PAGE`
- `deleted` — `boolean`: An indicator of whether a creative asset is soft-deleted..

  You can use the `EQUALS` [Selector](selector.md) [Condition](condition.md) operators with [Get Ad-Level Reports](get-ad-level-reports.md) within a campaign.
- `language` — `string`: The language of the [Creative](creative.md).
- `modificationTime` — `date-time`: The date and time of the most recent modification of the object.

  You can use this field with the `orderBy` selector.
- `orgId` — `int64`: The identifier of the organization that owns the campaign. Your `orgId` is the same as your account in [Apple Ads](https://ads.apple.com/).

  You can use this field with the `orderBy` selector.
- `productPageId` — `string`: A unique string to identify a product page on [App Store Connect](https://appstoreconnect.apple.com), such as `45812c9b-c296-43d3-c6a0-c5a02f74bf6e`.
- `status` — `string`: The status of creative assets.

  You can use this field with the `orderBy` selector.  
  **Allowed values:** `INVALID`, `VALID`

## Mentioned In

- [Apple Ads Campaign Management API 4](apple-search-ads-campaign-management-api-4.md)

## See Also

### Reports Request and Response Objects

- [ReportingRequest](reportingrequest.md): The report request body.
- [ReportingResponseBody](reportingresponsebody.md): The container object for the report response body.
- [ReportingResponse](reportingresponse.md): The container object of report metrics.
- [ReportingDataResponse](reportingdataresponse.md): The total metrics for a report.
- [GrandTotalsRow](grandtotalsrow.md): The summary of cumulative metrics.
- [SpendRow](spendrow.md): The reporting response metrics.
- [ExtendedSpendRow](extendedspendrow.md): The descriptions of metrics with dates.
- [Row](row.md): The report metrics by time granularity.
- [ReportingCampaign](reportingcampaign.md): The response to a request to fetch campaign-level reports.
- [ReportingAdGroup](reportingadgroup.md): The response to a request to fetch ad group-level reports.
- [ReportingKeyword](reportingkeyword.md): The response to a request to fetch keyword-level reports.
- [ReportingSearchTerm](reportingsearchterm.md): The response to a request to fetch search term-level reports.
- [CampaignAppDetail](campaignappdetail.md): The app data to fetch from campaign-level reports.
- [InsightsObject](insightsobject.md): The container object for bid recommendations.
- [KeywordInsights](keywordinsights.md): The object that contains bid recommendations.

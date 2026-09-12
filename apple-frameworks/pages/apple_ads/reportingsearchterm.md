> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/reportingsearchterm](https://developer.apple.com/documentation/apple_ads/reportingsearchterm)

# ReportingSearchTerm

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The response to a request to fetch search term-level reports.

## Declaration

```
object ReportingSearchTerm
```

## Properties

- `adGroupDeleted` — `boolean`: An indicator of whether the ad group is soft-deleted.

  You can use the `EQUALS` and `IN` selector [Condition](condition.md) operators with [Get Search Term-Level Reports](get-search-term-level-reports.md).
- `adGroupId` — `int64`: The unique identifier for the ad group the search term belongs to.

  You can use the `EQUALS`, `IN`, and `STARTSWITH` selector [Condition](condition.md) operators with [Get Search Term-Level Reports](get-search-term-level-reports.md).
- `adGroupName` — `string`: The name of the ad group, which is unique within the campaign. Responses don’t include deleted ad groups.

  You can use the `EQUALS`, `IN`, and `STARTSWITH` selector [Condition](condition.md) operators with [Get Search Term-Level Reports](get-search-term-level-reports.md).
- `bidAmount` — `Money`: The offer price for a keyword in a bidding auction. If the `bidAmount` field is `null`, the `bidAmount` uses the `defaultBidAmount` of the corresponding ad group.
- `campaignId` — `int64`: The unique identifier for the campaign.

  You can use the `EQUALS`, `IN`, and `STARTSWITH` [Selector](selector.md) [Condition](condition.md) operators with [Get Search Term-Level Reports](get-search-term-level-reports.md).
- `deleted` — `boolean`: An indicator of whether the search term is soft-deleted.

  You can use the `EQUALS` and `IN` selector [Condition](condition.md) operators with [Get Search Term-Level Reports](get-search-term-level-reports.md).
- `keyword` — `string`: The targeting or negative keywords.

  You can use the `EQUALS`, `IN`, and `STARTSWITH` selector [Condition](condition.md) operators with [Get Search Term-Level Reports](get-search-term-level-reports.md).
- `keywordDisplayStatus` — `string`: The state of the keyword display operation.

  You can use the `EQUALS` and `IN` selector [Condition](condition.md) operators with [Get Search Term-Level Reports](get-search-term-level-reports.md).  
  **Allowed values:** `AD_GROUP_ON_HOLD`, `CAMPAIGN_ON_HOLD`, `DELETED`, `PAUSED`, `RUNNING`
- `keywordId` — `int64`: The unique identifier for a keyword that belongs to an ad group.
- `keywordStatus` — `string`: The condition of the keyword.

  You can use the `EQUALS` selector [Condition](condition.md) operator with [Get Search Term-Level Reports](get-search-term-level-reports.md).  
  **Allowed values:** `ACTIVE`, `PAUSED`
- `matchType` — `string`: An automated keyword and bidding strategy. See [Ad Groups](ad-groups.md) for Search Match use cases.

  - **`Auto`**: Specifies the system serves impressions with optimized keywords, in addition to those you explicitly add to the ad group.
  - **`Broad`**: Ensures your ads don’t run on relevant, close variants of a keyword, such as singulars, plurals, misspellings, synonyms, related searches, and phrases that include that term (fully or partially).
  - **`Exact`**: Offers the most control over searches  your ad may appear in. You can target a specific term and its close variants, such as common misspellings and plurals. Your ad may receive fewer impressions as a result, but your tap-through rates (TTRs) and conversions on those impressions may be higher because you’re reaching users most interested in your app.

  You can use the `EQUALS` selector [Condition](condition.md) operator with [Get Search Term-Level Reports](get-search-term-level-reports.md).  
  **Allowed values:** `AUTO`, `BROAD`, `EXACT`
- `modificationTime` — `date-time`: The date and time of the most recent modification of the object.
- `orgId` — `int64`: The identifier of the organization that owns the campaign. Your `orgId` is the same as your account in [Apple Ads](https://ads.apple.com/).
- `searchTermSource` — `string`: The source of the keyword to use as a search term.

  If `searchTermSource` is `AUTO`, `MatchType` is `AUTO`.

  If `searchTermSource` is `TARGETED`, `MatchType` is either `BROAD` or `EXACT`.

  - **`AUTO`**: The value to use to ensure Search Match automatically matches your ads.
  - **`TARGETED`**: A bidded keyword.

  You can use the `EQUALS` and `IN` selector [Condition](condition.md) operators with [Get Search Term-Level Reports](get-search-term-level-reports.md).  
  **Allowed values:** `AUTO`, `TARGETED`
- `searchTermText` — `string`: The search terms to use for app searches.

  You can use the `EQUALS`, `IN`, and `STARTSWITH` selector [Condition](condition.md) operators with [Get Search Term-Level Reports](get-search-term-level-reports.md).

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
- [ReportingAd](reportingad.md): The response to a request to fetch ad-level reports.
- [CampaignAppDetail](campaignappdetail.md): The app data to fetch from campaign-level reports.
- [InsightsObject](insightsobject.md): The container object for bid recommendations.
- [KeywordInsights](keywordinsights.md): The object that contains bid recommendations.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/reportingadgroup](https://developer.apple.com/documentation/apple_ads/reportingadgroup)

# ReportingAdGroup

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The response to a request to fetch ad group-level reports.

## Declaration

```
object ReportingAdGroup
```

## Properties

- `adGroupDisplayStatus` — `string`: The state of the operation.

  See [AdGroupDisplayStatus](adgroupdisplaystatus.md) for enum descriptions.  
  **Allowed values:** `CAMPAIGN_ON_HOLD`, `DELETED`, `ON_HOLD`, `PAUSED`, `RUNNING`
- `adGroupId` — `int64`: The identifier for the ad group.

  You can use the `EQUALS`, `IN`, and `STARTSWITH` [Selector](selector.md) [Condition](condition.md) operators with [Get Ad Group-Level Reports](get-ad-group-level-reports.md).
- `adGroupName` — `string`: The name of the ad group. This is unique within the campaign. Reports don’t include deleted ad groups.

  You can use the `EQUALS`, `IN`, and `STARTSWITH` [Selector](selector.md) [Condition](condition.md) operators with [Get Ad Group-Level Reports](get-ad-group-level-reports.md).
- `adGroupServingStateReasons` — `[string]`: A list of reasons that displays when an ad group isn’t running.

  See [AdGroupServingStateReasons](adgroupservingstatereasons.md) for enum descriptions.  
  **Allowed values:** `ADGROUP_END_DATE_REACHED`, `AD_GROUP_PAUSED_BY_USER`, `APP_NOT_SUPPORT`, `AUDIENCE_BELOW_THRESHOLD`, `CAMPAIGN_END_DATE_REACHED`, `CAMPAIGN_NOT_RUNNING`, `CAMPAIGN_START_DATE_IN_FUTURE`, `DELETED_BY_USER`, `NO_AVAILABLE_ADS`, `PENDING_AUDIENCE_VERIFICATION`, `START_DATE_IN_THE_FUTURE`
- `adGroupServingStatus` — `string`: The status of whether the ad group is serving.

  See [AdGroupServingStatus](adgroupservingstatus.md) for value descriptions.  
  **Allowed values:** `NOT_RUNNING`, `RUNNING`
- `adGroupStatus` — `string`: The status of the ad group.

  See [AdGroupStatus](adgroupstatus.md) for value descriptions.

  You can use the `EQUALS` [Selector](selector.md) [Condition](condition.md) operator with [Get Ad Group-Level Reports](get-ad-group-level-reports.md).  
  **Allowed values:** `ENABLED`, `PAUSED`
- `automatedKeywordsOptIn` — `boolean`: The parameter for enabling and disabling Search Match. If `true`, the system automatically adds optimized keywords in addition to those you explicitly add to the ad group.

  See the Enable and Disable Search Match section of [Ad Groups](ad-groups.md).

  You can use the `EQUALS` [Selector](selector.md) [Condition](condition.md) operator with [Get Ad Group-Level Reports](get-ad-group-level-reports.md).
- `automatedKeywordsRequired` — `boolean`: A read-only field validating an automated ad group. Defaults to `false`. An automated ad group must exist for Maximize Conversions campaigns to run.
- `biddingStrategy` — `string`: The bid strategy for the campaign. See [Campaigns](campaigns.md).
  **Allowed values:** `MANUAL_CPT`, `MAX_CONVERSIONS`
- `campaignId` — `int64`: The unique identifier for the campaign.

  You can use the `EQUALS`, `IN`, and `STARTSWITH` [Selector](selector.md) [Condition](condition.md) operators with [Get Ad Group-Level Reports](get-ad-group-level-reports.md).
- `cpaGoal` — `ReportingAdGroup.CpaGoal`: The cost-per-acquisition goal.
- `defaultBidAmount` — `Money`: The default maximum cost per tap or impression bid for the ad group.
- `deleted` — `boolean`: The indicator of whether the ad group is soft-deleted. This includes keywords that belong to an ad group.

  You can use the `EQUALS` and `IN` [Selector](selector.md) [Condition](condition.md) operators with the [Get Ad Group-Level Reports](get-ad-group-level-reports.md).
- `endTime` — `date-time`: The scheduled end date and time for the ad group.
- `modificationTime` — `date-time`: The date and time of the most recent modification of the object.
- `orgId` — `int64`: The identifier of the organization that owns the campaign. Your `orgId` is the same as your account in [Apple Ads](https://ads.apple.com/).
- `startTime` — `date-time`: The scheduled start date and time for the ad group.

## Topics

### Dictionaries

- [ReportingAdGroup.CpaGoal](reportingadgroup/cpagoal-data.dictionary.md)

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
- [ReportingKeyword](reportingkeyword.md): The response to a request to fetch keyword-level reports.
- [ReportingSearchTerm](reportingsearchterm.md): The response to a request to fetch search term-level reports.
- [ReportingAd](reportingad.md): The response to a request to fetch ad-level reports.
- [CampaignAppDetail](campaignappdetail.md): The app data to fetch from campaign-level reports.
- [InsightsObject](insightsobject.md): The container object for bid recommendations.
- [KeywordInsights](keywordinsights.md): The object that contains bid recommendations.

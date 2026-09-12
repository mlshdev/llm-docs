> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/apple_ads/row](https://developer.apple.com/documentation/apple_ads/row)

# Row

**Interface language:** Data

**Framework:** Apple Ads  
**Kind:** Object  
**Availability:** Search Ads 2.0+

The report metrics by time granularity.

## Declaration

```
object Row
```

## Properties

- `insights` — `InsightsObject`: The bid recommendations according to currency type, including range and amount. See [KeywordInsights](keywordinsights.md) and [Get Keyword-Level Reports](get-keyword-level-reports.md).
- `granularity` — `[ExtendedSpendRow]`: The report data organized by hour, day, week, and month.

  Note: If you specify `granularity` in the payload, `returnRowTotals` and `returnGrandTotals` must be `false`. See the payload example with granularity in [Get Campaign-Level Reports](get-campaign-level-reports.md).

  - **`HOURLY`**: The `startTime` and `endTime` are ≤ 7 days apart, and the `startTime` is ≤ 30 days in the past.

    Use: “`granularity": "HOURLY",`

    The hour, `00` to `23`, appends to the date string as `HH`.

    Note: `HOURLY` isn’t available to use in keyword reports, search term reports, or Creative Set reports.
  - **`DAILY`**: The `startTime` and `endTime`  are ≤ 90 days apart, and the `startTime` is ≤ 90 days in the past.

    Use: `"granularity": "DAILY"`,
  - **`WEEKLY`**: The `date` value is the Monday of the designated week.

    The `startTime` and `endTime` are \> 14 days and ≤ 365 days apart, and the `startTime` is ≤ 24 months in the past.

    Use: `"granularity": "WEEKLY",`
  - **`MONTHLY`**: The `date` value is the first day of the designated month.

    The `startTime` and `endTime` are \> 3 months apart, and the `startTime` is ≤ 24 months in the past.

    Use: `"granularity": "MONTHLY",`
- `metadata` — `MetaDataObject`: Reporting request data.
- `other` — `boolean`: The impressions that return in reports when there are fewer than 100 demographic dimensions, and fewer than 10 search terms. If `other` is `true`, the corresponding dimensions are `null`.
- `total` — `SpendRow`: The tap, conversion, and monetary totals ([SpendRow](spendrow.md)) in the response. This is the same as [ExtendedSpendRow](extendedspendrow.md) except it doesn’t include the `date` attribute.

## See Also

### Reports Request and Response Objects

- [ReportingRequest](reportingrequest.md): The report request body.
- [ReportingResponseBody](reportingresponsebody.md): The container object for the report response body.
- [ReportingResponse](reportingresponse.md): The container object of report metrics.
- [ReportingDataResponse](reportingdataresponse.md): The total metrics for a report.
- [GrandTotalsRow](grandtotalsrow.md): The summary of cumulative metrics.
- [SpendRow](spendrow.md): The reporting response metrics.
- [ExtendedSpendRow](extendedspendrow.md): The descriptions of metrics with dates.
- [ReportingCampaign](reportingcampaign.md): The response to a request to fetch campaign-level reports.
- [ReportingAdGroup](reportingadgroup.md): The response to a request to fetch ad group-level reports.
- [ReportingKeyword](reportingkeyword.md): The response to a request to fetch keyword-level reports.
- [ReportingSearchTerm](reportingsearchterm.md): The response to a request to fetch search term-level reports.
- [ReportingAd](reportingad.md): The response to a request to fetch ad-level reports.
- [CampaignAppDetail](campaignappdetail.md): The app data to fetch from campaign-level reports.
- [InsightsObject](insightsobject.md): The container object for bid recommendations.
- [KeywordInsights](keywordinsights.md): The object that contains bid recommendations.

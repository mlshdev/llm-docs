> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/impressionsharequeryresponse](https://developer.apple.com/documentation/apple-ads-platform-api/impressionsharequeryresponse)

# ImpressionShareQueryResponse

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

The impression share query endpoint returns this response wrapper.

## Declaration

```
object ImpressionShareQueryResponse
```

## Properties

- `result` — `ImpressionShareResultContainer`: See [ImpressionShareResultContainer](impressionshareresultcontainer.md). If no rows match the request, `result` is returned as `{ "rows": [] }`, not an empty object.
- `pagination` — `ResponsePagination`: See [ResponsePagination](responsepagination.md).
- `error` — `Error`: See [Error](error.md). Present only on failure.

<a id="Response-Structure"></a>

## Response Structure

<a id="Top-Level-Fields"></a>

### Top-Level Fields

The `ImpressionShareResultContainer` wrapping `result` exposes a single field.

| Field | Type | Description |
| --- | --- | --- |
| `rows` | array | Array of [ImpressionShareRow](impressionsharerow.md) objects, one per date + search term + country combination |

Each [ImpressionShareRow](impressionsharerow.md) in `rows` carries the following fields.

| Field | Type | Description |
| --- | --- | --- |
| `day` | string | Date (`YYYY-MM-DD`). Present when granularity is `DAILY`. |
| `week` | string | Week start date, Sunday (`YYYY-MM-DD`). Present when granularity is `WEEKLY_SUN_SAT`. |
| `appName` | string | Display name of the promoted app. |
| `promotedObjectId` | string | Adam ID of the promoted app. |
| `countryOrRegion` | string | ISO 3166-1 alpha-2 country or region code (for example, `US`, `GB`). |
| `searchTerm` | string | The search term. Suppressed for terms with fewer than 10 impressions in the aggregation period. |
| `lowImpressionShare` | number | Lower bound of impression share. See encoding table below. |
| `highImpressionShare` | number | Upper bound of impression share. See encoding table below. |
| `rank` | integer | App’s impression share rank for this search term and country. `1` = highest share. |
| `searchPopularity1to5` | integer | Relative search volume on a 1–5 scale. `5` = most popular. |

<a id="Impression-Share-Encoding"></a>

### Impression Share Encoding

The `lowImpressionShare` and `highImpressionShare` fields use a tiered encoding. They are not always a range:

| Impression Share | `lowImpressionShare` | `highImpressionShare` |
| --- | --- | --- |
| 0% | `0` | `0` |
| 1% – 90% | `x` (for example, `0.23`) | `x` (same value) |
| 91% – 100% | `0.91` | `1` |

For 1–90%, both fields carry the same single-digit value. The 91–100% bucket retains a range because accuracy of the estimated metric declines near full market saturation, and reporting a precise value there would overstate confidence.

**Parsing tip:** `lowImpressionShare == highImpressionShare` and value \< 0.91 → precise single-digit percentage. `highImpressionShare == 1` → app has \>90% impression share.

The `pagination` object included in the response reports the following.

| Field | Type | Description |
| --- | --- | --- |
| `totalCount` | integer | Total number of rows matching the query |
| `offset` | integer | Current page offset |
| `pageSize` | integer | Number of rows returned in this response |

## See Also

- [ImpressionShareQueryRequest](impressionsharequeryrequest.md): Request body for the impression share query endpoint.
- [ImpressionShareRow](impressionsharerow.md): A single impression share data row.
- [ImpressionShareTimeRange](impressionsharetimerange.md): Time range for impression share queries.
- [ImpressionShareOptions](impressionshareoptions.md): Report options for impression share queries.
- [SearchTermPopularityQueryRequest](searchtermpopularityqueryrequest.md): Request body for the search term popularity query endpoint.
- [SearchTermPopularityQueryResponse](searchtermpopularityqueryresponse.md): A response wrapper for search term popularity query results.
- [SearchTermPopularityRow](searchtermpopularityrow.md): A single search term popularity data row.
- [SearchTermPopularityTimeRange](searchtermpopularitytimerange.md): Time range for search term popularity queries.
- [ImpressionShareResultContainer](impressionshareresultcontainer.md): Container holding the array of impression share rows a query returns.
- [SearchTermPopularityResultContainer](searchtermpopularityresultcontainer.md): Container holding the array of search term popularity rows a query returns.
- [KeywordInsights](keywordinsights.md): Insights for keyword reporting rows.
- [ReportingKeywordBidRecommendation](reportingkeywordbidrecommendation.md): Keyword bid recommendation details, including a suggested bid amount.

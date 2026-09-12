> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandskeywordreportrow](https://developer.apple.com/documentation/apple-ads-platform-api/brandskeywordreportrow)

# BrandsKeywordReportRow

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A single row in a Brands keyword report response.

## Declaration

```
object BrandsKeywordReportRow
```

## Properties

- `metadata` — `BrandsReportingKeyword`: Keyword metadata for this row. See [BrandsReportingKeyword](brandsreportingkeyword.md).
- `totalMetrics` — `BrandsMetrics`: Aggregated performance metrics over the full date range. See [BrandsMetrics](brandsmetrics.md).
- `granularMetrics` — `[BrandsMetrics]`: Metrics broken down by the requested `granularity`. Only present when `granularity` is specified. See [BrandsMetrics](brandsmetrics.md).
- `insights` — `KeywordInsights`: Keyword insights including bid recommendations. See [KeywordInsights](keywordinsights.md).

<a id="Discussion"></a>

## Discussion

The `BrandsKeywordReportRow` object contains keyword metadata, performance metrics, and optional keyword insights for a single reporting row.

<a id="Example"></a>

### Example

```json
{
  "metadata": {
    "id": 888999100,
    "text": "coffee near me",
    "matchType": "PHRASE",
    "adAccountId": 123456789,
    "campaignId": 444555999,
    "adGroupId": 555666888,
    "status": "ENABLED",
    "deleted": false,
    "locationId": "555666777"
  },
  "totalMetrics": {
    "localSpend": {
      "amount": "845.50",
      "currency": "USD"
    },
    "impressions": 620000,
    "taps": 9800,
    "ttr": 0.0158,
    "cpt": {
      "amount": "0.09",
      "currency": "USD"
    },
    "cpm": {
      "amount": "1.36",
      "currency": "USD"
    }
  },
  "granularMetrics": [
    {
      "date": "2025-01-10",
      "localSpend": {
        "amount": "845.50",
        "currency": "USD"
      },
      "impressions": 620000,
      "taps": 9800,
      "ttr": 0.0158,
      "cpt": {
        "amount": "0.09",
        "currency": "USD"
      },
      "cpm": {
        "amount": "1.36",
        "currency": "USD"
      }
    }
  ],
  "insights": {
    "bidRecommendation": {
      "suggestedBidAmount": 2.35
    }
  }
}
```

## See Also

- [BrandsReportingRequest](brandsreportingrequest.md): Request body for brands reporting queries.
- [BrandsReportingCampaign](brandsreportingcampaign.md): Campaign metadata for Apple Maps report rows.
- [BrandsReportingAdGroup](brandsreportingadgroup.md): Ad group metadata for brands report rows.
- [BrandsReportingAd](brandsreportingad.md): Ad metadata for brands report rows.
- [BrandsReportingCreative](brandsreportingcreative.md): Creative metadata for brands ads.
- [BrandsReportingKeyword](brandsreportingkeyword.md): Keyword metadata for brands report rows, extending the base reporting keyword with brands-only internal fields.
- [BrandsReportingSearchTerm](brandsreportingsearchterm.md): Search term metadata for brands report rows, extending the base reporting search term with brands-only internal fields.
- [BrandsCampaignReportResponse](brandscampaignreportresponse.md): The top-level response envelope for Apple Maps campaign-level reports.
- [BrandsCampaignReportRow](brandscampaignreportrow.md): A single row in an Apple Maps campaign report, containing campaign metadata, total metrics, and optional granular time-series metrics.
- [BrandsCampaignReportSummary](brandscampaignreportsummary.md): The grand-total metrics aggregated across all rows in an Apple Maps campaign report.
- [BrandsCampaignResultContainer](brandscampaignresultcontainer.md): Wraps the array of Apple Maps campaign report rows along with a grand-total summary.
- [BrandsAdGroupReportResponse](brandsadgroupreportresponse.md): The top-level response envelope for brands ad group reports.
- [BrandsAdGroupReportRow](brandsadgroupreportrow.md): A single row in a Brands (Apple Maps) ad group report, pairing ad group metadata with total and granular performance metrics.
- [BrandsAdGroupReportSummary](brandsadgroupreportsummary.md): The grand-total metrics aggregated across all rows in a Brands ad group report.
- [BrandsAdGroupResultContainer](brandsadgroupresultcontainer.md): Wraps the array of Brands ad group report rows along with a grand-total summary.

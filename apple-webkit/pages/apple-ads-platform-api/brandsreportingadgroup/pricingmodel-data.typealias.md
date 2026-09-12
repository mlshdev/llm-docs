> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandsreportingadgroup/pricingmodel-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/brandsreportingadgroup/pricingmodel-data.typealias)

# BrandsReportingAdGroup.PricingModel

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The unit of ad delivery the ad group is charged for, as captured at report time.

## Declaration

```
string BrandsReportingAdGroup.PricingModel
```

## Possible Values

- `CPA`: Cost-per-acquisition.
- `CPM`: Cost-per-thousand-impressions. Pairs with `billingEvent: IMPRESSIONS`.
- `CPT`: Cost-per-tap. Pairs with `billingEvent: TAPS`.

<a id="Discussion"></a>

## Discussion

The `pricingModel` field reflects the ad group’s charge unit at the time the system generated the report row. See [ReportingPricingModel](../reportingpricingmodel.md) for additional context.

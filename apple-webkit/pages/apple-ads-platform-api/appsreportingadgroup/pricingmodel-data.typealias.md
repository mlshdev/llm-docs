> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appsreportingadgroup/pricingmodel-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/appsreportingadgroup/pricingmodel-data.typealias)

# AppsReportingAdGroup.PricingModel

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The pricing model of the ad group at report time.

## Declaration

```
string AppsReportingAdGroup.PricingModel
```

## Possible Values

- `CPA`: Cost-per-acquisition.
- `CPM`: Cost-per-thousand-impressions.
- `CPT`: Cost-per-tap.

<a id="Discussion"></a>

## Discussion

This determines which report metrics are directly tied to cost: `CPM` pairs with impression-based billing and `CPT` with tap-based billing.

<a id="Example"></a>

### Example

```json
{
  "pricingModel": "CPT"
}
```

See [ReportingPricingModel](../reportingpricingmodel.md) for additional context.

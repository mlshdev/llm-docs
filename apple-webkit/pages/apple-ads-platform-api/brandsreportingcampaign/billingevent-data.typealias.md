> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandsreportingcampaign/billingevent-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/brandsreportingcampaign/billingevent-data.typealias)

# BrandsReportingCampaign.BillingEvent

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The billing event of the campaign at report time.

## Declaration

```
string BrandsReportingCampaign.BillingEvent
```

## Possible Values

- `TAPS`: The campaign is charged per tap.
- `IMPRESSIONS`: The campaign is charged per thousand impressions (CPM).

<a id="Discussion"></a>

## Discussion

Brands campaigns can use either billing model, so check this field before comparing cost-per-tap and cost-per-impression figures across rows.

<a id="Example"></a>

### Example

```json
{
  "billingEvent": "TAPS"
}
```

See [ReportingBillingEvent](../reportingbillingevent.md) for additional context.

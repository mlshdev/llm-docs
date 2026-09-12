> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appsreportingcampaign/billingevent-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/appsreportingcampaign/billingevent-data.typealias)

# AppsReportingCampaign.BillingEvent

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The billing event of the campaign at report time.

## Declaration

```
string AppsReportingCampaign.BillingEvent
```

## Possible Values

- `TAPS`: The campaign is charged per tap.
- `IMPRESSIONS`: The campaign is charged per thousand impressions (CPM).

<a id="Discussion"></a>

## Discussion

This determines which report metrics are actionable for cost analysis: `TAPS` billing pairs with tap-based cost metrics, while `IMPRESSIONS` billing pairs with CPM-based ones.

<a id="Example"></a>

### Example

```json
{
  "billingEvent": "TAPS"
}
```

See [ReportingBillingEvent](../reportingbillingevent.md) for additional context.

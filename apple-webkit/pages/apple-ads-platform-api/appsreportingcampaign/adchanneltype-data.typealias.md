> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appsreportingcampaign/adchanneltype-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/appsreportingcampaign/adchanneltype-data.typealias)

# AppsReportingCampaign.AdChannelType

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The advertising channel type of the campaign at report time.

## Declaration

```
string AppsReportingCampaign.AdChannelType
```

## Possible Values

- `SEARCH`: Metrics from Search results ads.
- `DISPLAY`: Metrics from Search tab, Today tab, or Product Pages ads.

<a id="Discussion"></a>

## Discussion

This distinguishes `SEARCH` results placements from `DISPLAY` placements such as the Search tab, Today tab, or product pages for this campaign’s rows.

<a id="Example"></a>

### Example

```json
{
  "adChannelType": "SEARCH"
}
```

See [ReportingAdChannelType](../reportingadchanneltype.md) for additional context.

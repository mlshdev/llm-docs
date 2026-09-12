> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandsreportingcampaign/adchanneltype-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/brandsreportingcampaign/adchanneltype-data.typealias)

# BrandsReportingCampaign.AdChannelType

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The advertising channel type of the campaign at report time.

## Declaration

```
string BrandsReportingCampaign.AdChannelType
```

## Possible Values

- `SEARCH`: Metrics from Search results ads.
- `DISPLAY`: Metrics from Search tab, Today tab, or Product Pages ads.

<a id="Discussion"></a>

## Discussion

Since Brands campaigns only run on Apple Maps, this field distinguishes `SEARCH` results placements from `DISPLAY` placements like the Search tab or Today tab.

<a id="Example"></a>

### Example

```json
{
  "adChannelType": "SEARCH"
}
```

See [ReportingAdChannelType](../reportingadchanneltype.md) for additional context.

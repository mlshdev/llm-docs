> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/brandsreportingcreative/creativetype-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/brandsreportingcreative/creativetype-data.typealias)

# BrandsReportingCreative.CreativeType

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The visual format and placement context of the creative at report time.

## Declaration

```
string BrandsReportingCreative.CreativeType
```

## Possible Values

- `LOCAL_ADS_SEARCH_CREATIVE`: An Ads on Apple Maps creative.

<a id="Discussion"></a>

## Discussion

This identifies the creative format captured in the report row, which for Brands campaigns always describes the same Ads on Apple Maps unit type.

The `creativeType` field shares its enum with the App Store reporting equivalent, but Brands (Apple Maps) creative reports only ever return `LOCAL_ADS_SEARCH_CREATIVE`.

<a id="Example"></a>

### Example

```json
{
  "creativeType": "LOCAL_ADS_SEARCH_CREATIVE"
}
```

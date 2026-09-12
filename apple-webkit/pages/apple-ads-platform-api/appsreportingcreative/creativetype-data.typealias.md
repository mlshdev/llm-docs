> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/appsreportingcreative/creativetype-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/appsreportingcreative/creativetype-data.typealias)

# AppsReportingCreative.CreativeType

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The visual format and placement context of the creative at report time.

## Declaration

```
string AppsReportingCreative.CreativeType
```

## Possible Values

- `CUSTOM_PRODUCT_PAGE`: An App Store creative using a Custom Product Page.
- `DEFAULT_PRODUCT_PAGE`: An App Store creative using the app’s Default Product Page.

<a id="Discussion"></a>

## Discussion

The `creativeType` field in reporting context mirrors the creation-time `creativeType` field on the creative, reflecting the format the creative used during the report’s date range. The `creativeType` field shares its enum with the Apple Maps (Brands) reporting equivalent, but apps ad reports only ever return `CUSTOM_PRODUCT_PAGE` or `DEFAULT_PRODUCT_PAGE`.

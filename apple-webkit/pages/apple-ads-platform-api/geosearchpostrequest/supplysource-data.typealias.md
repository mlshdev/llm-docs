> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/geosearchpostrequest/supplysource-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/geosearchpostrequest/supplysource-data.typealias)

# GeoSearchPostRequest.SupplySource

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The supply source context that scopes a geo location search to App Store or Apple Maps eligibility rules.

## Declaration

```
string GeoSearchPostRequest.SupplySource
```

## Possible Values

- `APPSTORE`: Scopes the geo search to the App Store supply source. Returns results for App Store campaigns. `PostalCode` entities are excluded.
- `MAPS`: Scopes the geo search to the Apple Maps supply source. Returns results for Apple Maps campaigns. Restricted to US and CA. `Country` entity type excluded. `PostalCode` entities are available.

<a id="Discussion"></a>

## Discussion

Case-insensitive.

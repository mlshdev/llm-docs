> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/creative/creativetype-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/creative/creativetype-data.typealias)

# Creative.CreativeType

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Type of ad creative, determining which ad placements it can serve on.

## Declaration

```
string Creative.CreativeType
```

## Possible Values

- `CUSTOM_PRODUCT_PAGE`: Uses a custom App Store Connect product page as the pre-tap experience. Requires `productPageId` in the destination.
- `DEFAULT_PRODUCT_PAGE`: Uses the app’s default App Store listing as the pre-tap experience. No `productPageId` required.
- `LOCAL_ADS_SEARCH_CREATIVE`: Ad creative for Ads on Apple Maps.

<a id="Discussion"></a>

## Discussion

The `CUSTOM_PRODUCT_PAGE` and `DEFAULT_PRODUCT_PAGE` values are App Store ad creative types. The `LOCAL_ADS_SEARCH_CREATIVE` value is for Ads on Apple Maps.

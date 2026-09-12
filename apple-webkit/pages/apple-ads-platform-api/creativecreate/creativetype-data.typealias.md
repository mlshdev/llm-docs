> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/creativecreate/creativetype-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/creativecreate/creativetype-data.typealias)

# CreativeCreate.CreativeType

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

Type of ad creative to create. Determines the shape of `creativeSpec`.

## Declaration

```
string CreativeCreate.CreativeType
```

## Possible Values

- `CUSTOM_PRODUCT_PAGE`: Uses a custom App Store Connect product page as the pre-tap experience. Requires `productPageId` in the destination.
- `DEFAULT_PRODUCT_PAGE`: Uses the app’s default App Store listing as the pre-tap experience. No `productPageId` required.
- `LOCAL_ADS_SEARCH_CREATIVE`: Ad creative for Ads on Apple Maps.

<a id="Discussion"></a>

## Discussion

CreativeType selects the ad experience you’re building and drives the required shape of `creativeSpec` and the destination configuration for the ad’s pre-tap step.

> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/destination/destinationtype-data.typealias](https://developer.apple.com/documentation/apple-ads-platform-api/destination/destinationtype-data.typealias)

# Destination.DestinationType

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Type  
**Availability:** Apple Ads Platform API 1.0+

The type of post-tap destination.

## Declaration

```
string Destination.DestinationType
```

## Possible Values

- `APP_STORE_PRODUCT_PAGE`: Directs users to the app’s product page in the App Store. Used with `DEFAULT_PRODUCT_PAGE` and `CUSTOM_PRODUCT_PAGE` creative types.
- `LOCAL_ADS_PLACECARD`: Directs users to the brand’s Maps place card. The only supported destination for Apple Maps ad creatives.

<a id="Discussion"></a>

## Discussion

This mirrors the destination type set when the ad creative was created, tying App Store ad creatives to `APP_STORE_PRODUCT_PAGE` and Apple Maps ad creatives to `LOCAL_ADS_PLACECARD`.

<a id="Example"></a>

### Example

```json
{
  "destinationType": "APP_STORE_PRODUCT_PAGE"
}
```

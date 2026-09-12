> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/destination/parameters-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/destination/parameters-data.dictionary)

# Destination.Parameters

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Destination-specific parameters for the post-tap experience.

## Declaration

```
object Destination.Parameters
```

## Properties

- `adamId` — `string`: The App Store app identifier. This is the `promotedObjectId` on the campaign for App Store campaigns. Required for `APP_STORE_PRODUCT_PAGE` destinations.
- `productPageId` — `string`: The UUID of a Custom Product Page created in App Store Connect. Omit to use the default product page.

<a id="Discussion"></a>

## Discussion

See [DestinationParameter](../destinationparameter.md) for the full field reference.

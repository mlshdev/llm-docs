> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/deviceassetgroup](https://developer.apple.com/documentation/apple-ads-platform-api/deviceassetgroup)

# DeviceAssetGroup

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Represents assets organized by device type with fallback device information.

## Declaration

```
object DeviceAssetGroup
```

## Properties

- `assets` — `[AssetReference]`: Ordered list of asset references for this device type. Each item is an `AssetReference` containing an `assetId` UUID. Read-only.
- `appPreviewDeviceFallBackDevices` — `[string]`: List of fallback device type strings to use if assets are not available for this device (for example, `["iphone6", "iphone5"]`). Empty array when no fallback applies. Read-only.

<a id="Discussion"></a>

## Discussion

The `DeviceAssetGroup` object is a value type within the `assetsByDevice` map on `ProductPageLocaleDetails` and `AppLocaleDetails`, keyed by specific device type string (for example, `iphone_6_5`, `iphone_6_7`, `ipadPro`).

<a id="Example"></a>

### Example

```json
{
  "assets": [
    {
      "assetId": "550e8400-e29b-41d4-a716-446655440000"
    },
    {
      "assetId": "6ba7b810-9dad-11d1-80b4-00c04fd430c8"
    }
  ],
  "appPreviewDeviceFallBackDevices": [
    "iphone6",
    "iphone5"
  ]
}
```

## See Also

- [ProductPageDetails](productpagedetails.md): Product page metadata for a Default Product Page, Custom Product Page, or Product Page Optimization (PPO) variant.
- [ProductPageDetailsResponse](productpagedetailsresponse.md): Response object for a single product page retrieval.
- [ProductPageDetailsQueryResponse](productpagedetailsqueryresponse.md): Paginated response object for the product page details query.
- [ProductPageLocaleDetails](productpagelocaledetails.md): Locale-specific metadata for an App Store product page.
- [ProductPageLocaleDetailsQueryResponse](productpagelocaledetailsqueryresponse.md): Paginated response object for the product page locale details query.

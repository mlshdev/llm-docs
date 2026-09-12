> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/asset/providerassetmetadata-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/asset/providerassetmetadata-data.dictionary)

# Asset.ProviderAssetMetadata

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Provider-specific metadata attached to an asset, with keys that vary by provider.

## Declaration

```
object Asset.ProviderAssetMetadata
```

<a id="Discussion"></a>

## Discussion

The `providerAssetMetadata` field depends on the asset’s source provider and has no fixed shape. For Apple Maps (`BUSINESS_BRAND`) assets uploaded through this API, `providerAssetMetadata` is currently empty (`{}`). The App Store Connect keys shown below (`appPreviewDevice`, `assetGenId`) illustrate the field’s shape for assets sourced from that provider and don’t apply to Maps assets.

> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/applocaledetails/assetsbydevice-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/applocaledetails/assetsbydevice-data.dictionary)

# AppLocaleDetails.AssetsByDevice

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

Map of device type to a `DeviceAssetGroup` containing the ordered list of asset IDs and any fallback device references.

## Declaration

```
object AppLocaleDetails.AssetsByDevice
```

## Properties

- `Any Key` — `DeviceAssetGroup`:

<a id="Discussion"></a>

## Discussion

Each key is a device type identifier, such as `iphone_6_5` or `iphone_6_7`, not a fixed field name. The `assetsByDevice` field is a free-form map rather than an object with named properties, so the reference page labels this key `Any Key`. The value for each key is a [DeviceAssetGroup](../deviceassetgroup.md).

On the parent [AppLocaleDetails](../applocaledetails.md) object, `assetsByDevice` maps each device type to a `DeviceAssetGroup` containing the ordered list of asset IDs and any fallback device references for that locale’s Default Product Page content.

> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/apple-ads-platform-api/productpagelocaledetails/assetsbydevice-data.dictionary](https://developer.apple.com/documentation/apple-ads-platform-api/productpagelocaledetails/assetsbydevice-data.dictionary)

# ProductPageLocaleDetails.AssetsByDevice

**Interface language:** Data

**Framework:** Apple Ads Platform API  
**Kind:** Object  
**Availability:** Apple Ads Platform API 1.0+

A map of device type to a `DeviceAssetGroup` object.

## Declaration

```
object ProductPageLocaleDetails.AssetsByDevice
```

## Properties

- `Any Key` — `DeviceAssetGroup`:

<a id="Discussion"></a>

## Discussion

Each key is a device type identifier, such as `iphone_6_5` or `iphone_6_7`, not a fixed field name. The `assetsByDevice` field is a free-form map rather than an object with named properties, so the reference page labels this key `Any Key`. The value for each key is a [DeviceAssetGroup](../deviceassetgroup.md) containing that device’s asset references and fallback devices.

On the parent [ProductPageLocaleDetails](../productpagelocaledetails.md) object, `assetsByDevice` is the field that carries a product page locale’s screenshots and preview videos. Each device-type key maps to a [DeviceAssetGroup](../deviceassetgroup.md) holding an `assets` array of asset references and an `appPreviewDeviceFallBackDevices` array listing which other device types to fall back to when assets are not available for that class.

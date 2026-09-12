> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.wifi-aware](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.wifi-aware)

# com.apple.developer.wifi-aware

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The entitlement the system requires for an app to use the Wi-Fi Aware framework.

## Details

`com.apple.developer.wifi-aware`

## Possible Values

- `Subscribe`: A string that states your app’s intent to subscribe to services defined in your app’s [WiFiAwareServices](../information-property-list/wifiawareservices.md) `Info.plist` key.
- `Publish`: A string that states your app’s intent to publish services defined in your app’s [WiFiAwareServices](../information-property-list/wifiawareservices.md) `Info.plist` key.

<a id="Discussion"></a>

## Discussion

This entitlement works with the [Wi-Fi Aware](https://developer.apple.com/documentation/wifiaware) framework, which enables devices to securely discover, pair, and communicate with nearby devices without an internet connection or access point.

To use Wi-Fi Aware, add this entitlement to your app by enabling the Wi-Fi Aware capability on your target in Xcode. For more information, see [Adding capabilities to your app](https://developer.apple.com/documentation/xcode/adding-capabilities-to-your-app).

Add the `Subscribe` string, the `Publish` string, or both to this entitlement, depending on your app’s intended features. The system requires this array to have at least one of the strings.

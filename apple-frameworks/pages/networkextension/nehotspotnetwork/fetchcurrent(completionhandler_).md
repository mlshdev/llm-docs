> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotnetwork/fetchcurrent(completionhandler:)](https://developer.apple.com/documentation/networkextension/nehotspotnetwork/fetchcurrent(completionhandler:))

# fetchCurrent(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

Fetches information about the current Wi-Fi network.

## Declaration

```swift
class func fetchCurrent(completionHandler: @escaping @Sendable (NEHotspotNetwork?) -> Void)
```

```swift
class func fetchCurrent() async -> NEHotspotNetwork?
```

## Parameters

- `completionHandler`: A Swift closure or an ObjectiveC block that receives an [NEHotspotNetwork](../nehotspotnetwork.md) instance that contains the current SSID, BSSID, and security type. This call doesn’t populate other fields in the object. The block executes on the main thread and only after the call obtains the current Wi-Fi parameters from the system. If any of the criteria discussed below aren’t fulfilled, the `currentNetwork` parameter received by completion handler is `nil`.

<a id="Discussion"></a>

## Discussion

This method produces a non-`nil` [NEHotspotNetwork](../nehotspotnetwork.md) object only when the requesting app meets at least one of the following criteria:

- The app is using the [Core Location](../../corelocation.md) API and has user’s authorization to access precise location.
- The app used the [NEHotspotConfiguration](../nehotspotconfiguration.md) API to configure the current Wi-Fi network.
- The app has active VPN configurations installed.
- The app has an active [NEDNSSettingsManager](../nednssettingsmanager.md) configuration installed.

This method also requires the app to have the [Access Wi-Fi Information Entitlement](../../bundleresources/entitlements/com.apple.developer.networking.wifi-info.md), and produces `nil` if the app lacks this entitlement.

# fetchCurrentWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

Fetches information about the current Wi-Fi network.

## Declaration

```objectivec
+ (void) fetchCurrentWithCompletionHandler:(void (^)(NEHotspotNetwork *currentNetwork)) completionHandler;
```

## Parameters

- `completionHandler`: A Swift closure or an ObjectiveC block that receives an [NEHotspotNetwork](../nehotspotnetwork.md) instance that contains the current SSID, BSSID, and security type. This call doesn’t populate other fields in the object. The block executes on the main thread and only after the call obtains the current Wi-Fi parameters from the system. If any of the criteria discussed below aren’t fulfilled, the `currentNetwork` parameter received by completion handler is `nil`.

<a id="Discussion"></a>

## Discussion

This method produces a non-`nil` [NEHotspotNetwork](../nehotspotnetwork.md) object only when the requesting app meets at least one of the following criteria:

- The app is using the [Core Location](../../corelocation.md) API and has user’s authorization to access precise location.
- The app used the [NEHotspotConfiguration](../nehotspotconfiguration.md) API to configure the current Wi-Fi network.
- The app has active VPN configurations installed.
- The app has an active [NEDNSSettingsManager](../nednssettingsmanager.md) configuration installed.

This method also requires the app to have the [Access Wi-Fi Information Entitlement](../../bundleresources/entitlements/com.apple.developer.networking.wifi-info.md), and produces `nil` if the app lacks this entitlement.

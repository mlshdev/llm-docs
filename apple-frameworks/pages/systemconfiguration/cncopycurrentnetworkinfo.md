> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/cncopycurrentnetworkinfo](https://developer.apple.com/documentation/systemconfiguration/cncopycurrentnetworkinfo)

# CNCopyCurrentNetworkInfo

**Interface language:** Objective-C

**Framework:** System Configuration  
**Kind:** Function  
**Availability:** iOS 4.1+ (deprecated in 27.0) · iPadOS 4.1+ (deprecated in 27.0) · Mac Catalyst 14.0+ (deprecated in 27.0)

Returns the current network information for a given network interface.

> Use [fetchCurrentWithCompletionHandler:](../networkextension/nehotspotnetwork/fetchcurrent%28completionhandler_%29.md) instead.

## Declaration

```objectivec
CFDictionaryRefCNCopyCurrentNetworkInfo(CFStringRef interfaceName);
```

## Parameters

- `interfaceName`: The network interface name.

<a id="return-value"></a>

## Return Value

A dictionary containing the interface’s current network information, provided certain requirements are met (see Discussion section). If the requirements are not met, the return value is either a dictionary with pseudo-values or `NULL`. If an error occurs, the return value is `NULL`.

<a id="discussion"></a>

## Discussion

The returned dictionary contains the following keys and values:

| Key | Value type |
| --- | --- |
| [kCNNetworkInfoKeySSIDData](kcnnetworkinfokeyssiddata.md) | [CFDataRef](../corefoundation/cfdata.md) |
| [kCNNetworkInfoKeySSID](kcnnetworkinfokeyssid.md) | [CFStringRef](../corefoundation/cfstring.md) |
| [kCNNetworkInfoKeyBSSID](kcnnetworkinfokeybssid.md) | [CFStringRef](../corefoundation/cfstring.md) |

Ownership of the returned dictionary follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029). You are responsible for releasing the returned value.

<a id="Discussion"></a>

## Discussion

The requesting app must meet one of the following requirements:

- The app uses [Core Location](../corelocation.md), and has the user’s authorization to use location information.
- The app uses the [NEHotspotConfiguration](../networkextension/nehotspotconfiguration.md) API to configure the current Wi-Fi network.
- The app has an active VPN configuration installed.
- The app has an active [NEDNSSettingsManager](../networkextension/nednssettingsmanager.md) configuration installed.

If the requesting app is a Mac app built with Mac Catalyst, it must meet the following requirements:

- The app uses [Core Location](../corelocation.md), and has the user’s authorization to use location information.
- The app includes the [Access Wi-Fi Information Entitlement](../bundleresources/entitlements/com.apple.developer.networking.wifi-info.md).
- The app runs in macOS 11 or later.

An app that fails to meet the above requirements receives the following return value:

- An app linked against iOS 12 or earlier receives a dictionary with pseudo-values. In this case, the SSID is `Wi-Fi` (or `WLAN` in China mainland), and the BSSID is `00:00:00:00:00:00`.
- An app linked against iOS 13 or later receives `NULL`.

> **Important**

>  To use this function, an app linked against iOS 12 or later must enable the Access WiFi Information capability in Xcode. For more information, see [Access Wi-Fi Information Entitlement](../bundleresources/entitlements/com.apple.developer.networking.wifi-info.md). Calling this function without the entitlement always returns `NULL` when linked against iOS 12 or later.

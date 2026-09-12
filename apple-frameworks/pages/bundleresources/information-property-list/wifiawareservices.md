> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/wifiawareservices](https://developer.apple.com/documentation/bundleresources/information-property-list/wifiawareservices)

# WiFiAwareServices

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 26.0+ · iPadOS 26.0+

Dictionaries of Wi-Fi Aware services that the app can publish or subscribe to.

## Details

`WiFiAwareServices`

<a id="overview"></a>

## Overview

This key works with the [Wi-Fi Aware](https://developer.apple.com/documentation/wifiaware) framework, to define the services your app publishes, or to specify the services your app subscribes to, or both.

The system requires your app to have the [com.apple.developer.wifi-aware](../entitlements/com.apple.developer.wifi-aware.md) entitlement, configured according to services you specify in this key to interact with the specified services at runtime.

For information on defining the services, see [Adopting Wi-Fi Aware](https://developer.apple.com/documentation/wifiaware/adopting-wi-fi-aware).

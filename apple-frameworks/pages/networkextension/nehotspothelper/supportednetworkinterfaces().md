> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspothelper/supportednetworkinterfaces()](https://developer.apple.com/documentation/networkextension/nehotspothelper/supportednetworkinterfaces())

# supportedNetworkInterfaces() (Swift)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Return the list of network interfaces managed by the Hotspot Helper infrastructure.

> Use NEHotspotManager API

## Declaration

```swift
class func supportedNetworkInterfaces() -> [Any]?
```

<a id="return-value"></a>

## Return Value

If no network interfaces are being managed, this function returns nil. Otherwise, an array of `NEHotspotNetwork` objects is returned.

<a id="Discussion"></a>

## Discussion

Each network interface is represented by an NEHotspotNetwork object. Currently, the returned array contains exactly one [NEHotspotNetwork](../nehotspotnetwork.md) object representing the Wi-Fi interface.

The main purpose of this method is to allow a Hotspot Helper to provide accurate status in its UI at times when it has not been given a command to process. This method coupled with the `isChosenHelper` method of [NEHotspotNetwork](../nehotspotnetwork.md) allows the application to know whether it is the one that is handling the current network.

# supportedNetworkInterfaces (Objective-C)

**Framework:** Network Extension  
**Kind:** Type Method  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

Return the list of network interfaces managed by the Hotspot Helper infrastructure.

> Use NEHotspotManager API

## Declaration

```objectivec
+ (NSArray *) supportedNetworkInterfaces;
```

<a id="return-value"></a>

## Return Value

If no network interfaces are being managed, this function returns nil. Otherwise, an array of `NEHotspotNetwork` objects is returned.

<a id="Discussion"></a>

## Discussion

Each network interface is represented by an NEHotspotNetwork object. Currently, the returned array contains exactly one [NEHotspotNetwork](../nehotspotnetwork.md) object representing the Wi-Fi interface.

The main purpose of this method is to allow a Hotspot Helper to provide accurate status in its UI at times when it has not been given a command to process. This method coupled with the `isChosenHelper` method of [NEHotspotNetwork](../nehotspotnetwork.md) allows the application to know whether it is the one that is handling the current network.

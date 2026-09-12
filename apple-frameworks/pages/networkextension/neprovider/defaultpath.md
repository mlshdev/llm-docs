> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neprovider/defaultpath](https://developer.apple.com/documentation/networkextension/neprovider/defaultpath)

# defaultPath (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The current default network path used for connections created by the provider.

> Use the [nw_path_monitor_t](../../network/nw_path_monitor_t.md) type from the [Network](../../network.md) framework instead.

## Declaration

```swift
var defaultPath: NWPath? { get }
```

<a id="Discussion"></a>

## Discussion

This NWPath object contains information about which physical network interface will be used by connections opened by the Network Extension provider. You can determine when this physical interface changes by observing this property using KVO.

# defaultPath (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The current default network path used for connections created by the provider.

> Use the [nw_path_monitor_t](../../network/nw_path_monitor_t.md) type from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
@property (readonly, nullable) NWPath * defaultPath;
```

<a id="Discussion"></a>

## Discussion

This NWPath object contains information about which physical network interface will be used by connections opened by the Network Extension provider. You can determine when this physical interface changes by observing this property using KVO.

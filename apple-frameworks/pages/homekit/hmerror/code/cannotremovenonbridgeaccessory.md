> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmerror/code/cannotremovenonbridgeaccessory](https://developer.apple.com/documentation/homekit/hmerror/code/cannotremovenonbridgeaccessory)

# HMError.Code.cannotRemoveNonBridgeAccessory (Swift)

**Framework:** HomeKit  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An attempt to remove a bridged accessory.

## Declaration

```swift
case cannotRemoveNonBridgeAccessory
```

<a id="Discussion"></a>

## Discussion

You can only remove standalone or bridge accessories.

## See Also

### Bridge errors

- [HMError.Code.bridgedAccessoryNotReachable](bridgedaccessorynotreachable.md): An error indicating the bridged accessory cannot be reached.
- [HMError.Code.cannotUnblockNonBridgeAccessory](cannotunblocknonbridgeaccessory.md): An error indicating a non-bridge accessory cannot be unblocked.

# HMErrorCodeCannotRemoveNonBridgeAccessory (Objective-C)

**Framework:** HomeKit  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An attempt to remove a bridged accessory.

## Declaration

```objectivec
HMErrorCodeCannotRemoveNonBridgeAccessory
```

<a id="Discussion"></a>

## Discussion

You can only remove standalone or bridge accessories.

## See Also

### Bridge errors

- [HMErrorCodeBridgedAccessoryNotReachable](bridgedaccessorynotreachable.md): An error indicating the bridged accessory cannot be reached.
- [HMErrorCodeCannotUnblockNonBridgeAccessory](cannotunblocknonbridgeaccessory.md): An error indicating a non-bridge accessory cannot be unblocked.

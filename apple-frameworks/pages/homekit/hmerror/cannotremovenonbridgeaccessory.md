> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmerror/cannotremovenonbridgeaccessory](https://developer.apple.com/documentation/homekit/hmerror/cannotremovenonbridgeaccessory)

# cannotRemoveNonBridgeAccessory

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An attempt to remove a bridged accessory.

## Declaration

```swift
static var cannotRemoveNonBridgeAccessory: HMError.Code { get }
```

<a id="Discussion"></a>

## Discussion

You can only remove standalone or bridge accessories.

## See Also

### Detecting bridge errors

- [bridgedAccessoryNotReachable](bridgedaccessorynotreachable.md): An error indicating the bridged accessory cannot be reached.
- [cannotUnblockNonBridgeAccessory](cannotunblocknonbridgeaccessory.md): An error indicating a non-bridge accessory cannot be unblocked.

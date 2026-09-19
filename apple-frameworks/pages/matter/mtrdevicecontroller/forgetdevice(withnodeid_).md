> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrdevicecontroller/forgetdevice(withnodeid:)

# forgetDevice(withNodeID:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Forget any information we have about the device with the given node ID.  That includes clearing any information we have stored about it.

## Declaration

```swift
func forgetDevice(withNodeID nodeID: NSNumber)
```

# forgetDeviceWithNodeID: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Forget any information we have about the device with the given node ID.  That includes clearing any information we have stored about it.

## Declaration

```objectivec
- (void) forgetDeviceWithNodeID:(NSNumber *) nodeID;
```

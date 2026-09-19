> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/matter/mtrdevicecontroller/continuecommissioningdevice(_:ignoreattestationfailure:)

# continueCommissioningDevice(\_:ignoreAttestationFailure:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
func continueCommissioningDevice(_ opaqueDeviceHandle: UnsafeMutableRawPointer, ignoreAttestationFailure: Bool) throws
```

# continueCommissioningDevice:ignoreAttestationFailure:error: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
- (BOOL) continueCommissioningDevice:(void *) opaqueDeviceHandle ignoreAttestationFailure:(BOOL) ignoreAttestationFailure error:(NSError **) error;
```

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdeviceattestationdelegate/deviceattestationfailed(for:opaquedevicehandle:error:)](https://developer.apple.com/documentation/matter/mtrdeviceattestationdelegate/deviceattestationfailed(for:opaquedevicehandle:error:))

# deviceAttestationFailed(for:opaqueDeviceHandle:error:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
optional func deviceAttestationFailed(for controller: MTRDeviceController, opaqueDeviceHandle: UnsafeMutableRawPointer, error: any Error)
```

# deviceAttestationFailedForController:opaqueDeviceHandle:error: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) deviceAttestationFailedForController:(MTRDeviceController *) controller opaqueDeviceHandle:(void *) opaqueDeviceHandle error:(NSError *) error;
```

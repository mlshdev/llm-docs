> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdeviceattestationdelegate/deviceattestationcompleted(for:opaquedevicehandle:attestationdeviceinfo:error:)](https://developer.apple.com/documentation/matter/mtrdeviceattestationdelegate/deviceattestationcompleted(for:opaquedevicehandle:attestationdeviceinfo:error:))

# deviceAttestationCompleted(for:opaqueDeviceHandle:attestationDeviceInfo:error:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```swift
optional func deviceAttestationCompleted(for controller: MTRDeviceController, opaqueDeviceHandle: UnsafeMutableRawPointer, attestationDeviceInfo: MTRDeviceAttestationDeviceInfo, error: (any Error)?)
```

# deviceAttestationCompletedForController:opaqueDeviceHandle:attestationDeviceInfo:error: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

## Declaration

```objectivec
- (void) deviceAttestationCompletedForController:(MTRDeviceController *) controller opaqueDeviceHandle:(void *) opaqueDeviceHandle attestationDeviceInfo:(MTRDeviceAttestationDeviceInfo *) attestationDeviceInfo error:(NSError *) error;
```

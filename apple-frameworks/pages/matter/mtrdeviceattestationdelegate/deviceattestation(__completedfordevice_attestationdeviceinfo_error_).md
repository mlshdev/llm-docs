> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdeviceattestationdelegate/deviceattestation(_:completedfordevice:attestationdeviceinfo:error:)](https://developer.apple.com/documentation/matter/mtrdeviceattestationdelegate/deviceattestation(_:completedfordevice:attestationdeviceinfo:error:))

# deviceAttestation(\_:completedForDevice:attestationDeviceInfo:error:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please implement deviceAttestationCompletedForController:opaqueDeviceHandle:attestationDeviceInfo:error:

## Declaration

```swift
optional func deviceAttestation(_ controller: MTRDeviceController, completedForDevice device: UnsafeMutableRawPointer, attestationDeviceInfo: MTRDeviceAttestationDeviceInfo, error: (any Error)?)
```

# deviceAttestation:completedForDevice:attestationDeviceInfo:error: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please implement deviceAttestationCompletedForController:opaqueDeviceHandle:attestationDeviceInfo:error:

## Declaration

```objectivec
- (void) deviceAttestation:(MTRDeviceController *) controller completedForDevice:(void *) device attestationDeviceInfo:(MTRDeviceAttestationDeviceInfo *) attestationDeviceInfo error:(NSError *) error;
```

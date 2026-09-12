> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdeviceattestationdelegate/deviceattestation(_:failedfordevice:error:)](https://developer.apple.com/documentation/matter/mtrdeviceattestationdelegate/deviceattestation(_:failedfordevice:error:))

# deviceAttestation(\_:failedForDevice:error:) (Swift)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please implement deviceAttestationFailedForController:opaqueDeviceHandle:error:

## Declaration

```swift
optional func deviceAttestation(_ controller: MTRDeviceController, failedForDevice device: UnsafeMutableRawPointer, error: any Error)
```

# deviceAttestation:failedForDevice:error: (Objective-C)

**Framework:** Matter  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 16.4) · iPadOS 16.1+ (deprecated in 16.4) · Mac Catalyst 16.1+ (deprecated in 16.4) · macOS 13.0+ (deprecated in 13.3) · tvOS 16.1+ (deprecated in 16.4) · visionOS 1.0+ (deprecated in 1.0) · watchOS 9.1+ (deprecated in 9.4)

> Please implement deviceAttestationFailedForController:opaqueDeviceHandle:error:

## Declaration

```objectivec
- (void) deviceAttestation:(MTRDeviceController *) controller failedForDevice:(void *) device error:(NSError *) error;
```

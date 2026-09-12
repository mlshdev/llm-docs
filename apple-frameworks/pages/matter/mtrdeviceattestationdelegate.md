> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdeviceattestationdelegate](https://developer.apple.com/documentation/matter/mtrdeviceattestationdelegate)

# MTRDeviceAttestationDelegate (Swift)

**Framework:** Matter  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```swift
protocol MTRDeviceAttestationDelegate : NSObjectProtocol
```

## Topics

### Instance Methods

- [deviceAttestation(\_:completedForDevice:attestationDeviceInfo:error:)](mtrdeviceattestationdelegate/deviceattestation%28__completedfordevice_attestationdeviceinfo_error_%29.md): Deprecated.
- [deviceAttestation(\_:failedForDevice:error:)](mtrdeviceattestationdelegate/deviceattestation%28__failedfordevice_error_%29.md): Deprecated.
- [deviceAttestationCompleted(for:opaqueDeviceHandle:attestationDeviceInfo:error:)](mtrdeviceattestationdelegate/deviceattestationcompleted%28for_opaquedevicehandle_attestationdeviceinfo_error_%29.md)
- [deviceAttestationFailed(for:opaqueDeviceHandle:error:)](mtrdeviceattestationdelegate/deviceattestationfailed%28for_opaquedevicehandle_error_%29.md)

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MTRDeviceAttestationDelegate (Objective-C)

**Framework:** Matter  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
@protocol MTRDeviceAttestationDelegate <NSObject>
```

## Topics

### Instance Methods

- [deviceAttestation:completedForDevice:attestationDeviceInfo:error:](mtrdeviceattestationdelegate/deviceattestation%28__completedfordevice_attestationdeviceinfo_error_%29.md): Deprecated.
- [deviceAttestation:failedForDevice:error:](mtrdeviceattestationdelegate/deviceattestation%28__failedfordevice_error_%29.md): Deprecated.
- [deviceAttestationCompletedForController:opaqueDeviceHandle:attestationDeviceInfo:error:](mtrdeviceattestationdelegate/deviceattestationcompleted%28for_opaquedevicehandle_attestationdeviceinfo_error_%29.md)
- [deviceAttestationFailedForController:opaqueDeviceHandle:error:](mtrdeviceattestationdelegate/deviceattestationfailed%28for_opaquedevicehandle_error_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

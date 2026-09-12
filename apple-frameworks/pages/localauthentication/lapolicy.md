> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lapolicy](https://developer.apple.com/documentation/localauthentication/lapolicy)

# LAPolicy (Swift)

**Framework:** Local Authentication  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 3.0+

The set of available local authentication policies.

## Declaration

```swift
enum LAPolicy
```

## Topics

### Policies

- [LAPolicy.deviceOwnerAuthenticationWithBiometrics](lapolicy/deviceownerauthenticationwithbiometrics.md): User authentication with biometry.
- [deviceOwnerAuthenticationWithWatch](lapolicy/deviceownerauthenticationwithwatch.md): Deprecated. User authentication with Apple Watch.
- [deviceOwnerAuthenticationWithBiometricsOrWatch](lapolicy/deviceownerauthenticationwithbiometricsorwatch.md): Deprecated. User authentication with either biometry or Apple Watch.
- [LAPolicy.deviceOwnerAuthentication](lapolicy/deviceownerauthentication.md): User authentication with biometry, Apple Watch, or the device passcode.
- [LAPolicy.deviceOwnerAuthenticationWithWristDetection](lapolicy/deviceownerauthenticationwithwristdetection.md): User authentication with wrist detection on watchOS.

### Policy Constants

- [kLAPolicyDeviceOwnerAuthenticationWithBiometrics](klapolicydeviceownerauthenticationwithbiometrics.md): User authentication with biometry.
- [kLAPolicyDeviceOwnerAuthenticationWithWatch](klapolicydeviceownerauthenticationwithwatch.md): User authentication with Apple Watch.
- [kLAPolicyDeviceOwnerAuthenticationWithBiometricsOrWatch](klapolicydeviceownerauthenticationwithbiometricsorwatch.md): User authentication with either biometry or Apple Watch.
- [kLAPolicyDeviceOwnerAuthentication](klapolicydeviceownerauthentication.md): User authentication with either biometry or the device passcode.
- [kLAPolicyDeviceOwnerAuthenticationWithWristDetection](klapolicydeviceownerauthenticationwithwristdetection.md): User authentication with wrist detection on watchOS.

### Enumeration Cases

- [LAPolicy.deviceOwnerAuthenticationWithBiometricsOrCompanion](lapolicy/deviceownerauthenticationwithbiometricsorcompanion.md): Device owner will be authenticated by biometry or a companion device e.g. Watch, Mac, etc.
- [LAPolicy.deviceOwnerAuthenticationWithCompanion](lapolicy/deviceownerauthenticationwithcompanion.md): Device owner will be authenticated by a companion device e.g. Watch, Mac, etc.

### Initializers

- [init(rawValue:)](lapolicy/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking availability

- [canEvaluatePolicy(\_:error:)](lacontext/canevaluatepolicy%28__error_%29.md): Assesses whether authentication can proceed for a given policy.
- [biometryType](lacontext/biometrytype.md): The type of biometric authentication supported by the device.
- [LABiometryType](labiometrytype.md): The set of available biometric authentication types.

# LAPolicy (Objective-C)

**Framework:** Local Authentication  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 3.0+

The set of available local authentication policies.

## Declaration

```objectivec
enum LAPolicy : NSInteger;
```

## Topics

### Policies

- [LAPolicyDeviceOwnerAuthenticationWithBiometrics](lapolicy/deviceownerauthenticationwithbiometrics.md): User authentication with biometry.
- [LAPolicyDeviceOwnerAuthenticationWithWatch](lapolicy/deviceownerauthenticationwithwatch.md): Deprecated. User authentication with Apple Watch.
- [LAPolicyDeviceOwnerAuthenticationWithBiometricsOrWatch](lapolicy/deviceownerauthenticationwithbiometricsorwatch.md): Deprecated. User authentication with either biometry or Apple Watch.
- [LAPolicyDeviceOwnerAuthentication](lapolicy/deviceownerauthentication.md): User authentication with biometry, Apple Watch, or the device passcode.
- [LAPolicyDeviceOwnerAuthenticationWithWristDetection](lapolicy/deviceownerauthenticationwithwristdetection.md): User authentication with wrist detection on watchOS.

### Policy Constants

- [kLAPolicyDeviceOwnerAuthenticationWithBiometrics](klapolicydeviceownerauthenticationwithbiometrics.md): User authentication with biometry.
- [kLAPolicyDeviceOwnerAuthenticationWithWatch](klapolicydeviceownerauthenticationwithwatch.md): User authentication with Apple Watch.
- [kLAPolicyDeviceOwnerAuthenticationWithBiometricsOrWatch](klapolicydeviceownerauthenticationwithbiometricsorwatch.md): User authentication with either biometry or Apple Watch.
- [kLAPolicyDeviceOwnerAuthentication](klapolicydeviceownerauthentication.md): User authentication with either biometry or the device passcode.
- [kLAPolicyDeviceOwnerAuthenticationWithWristDetection](klapolicydeviceownerauthenticationwithwristdetection.md): User authentication with wrist detection on watchOS.

### Enumeration Cases

- [LAPolicyDeviceOwnerAuthenticationWithBiometricsOrCompanion](lapolicy/deviceownerauthenticationwithbiometricsorcompanion.md): Device owner will be authenticated by biometry or a companion device e.g. Watch, Mac, etc.
- [LAPolicyDeviceOwnerAuthenticationWithCompanion](lapolicy/deviceownerauthenticationwithcompanion.md): Device owner will be authenticated by a companion device e.g. Watch, Mac, etc.

## See Also

### Checking availability

- [canEvaluatePolicy:error:](lacontext/canevaluatepolicy%28__error_%29.md): Assesses whether authentication can proceed for a given policy.
- [biometryType](lacontext/biometrytype.md): The type of biometric authentication supported by the device.
- [LABiometryType](labiometrytype.md): The set of available biometric authentication types.

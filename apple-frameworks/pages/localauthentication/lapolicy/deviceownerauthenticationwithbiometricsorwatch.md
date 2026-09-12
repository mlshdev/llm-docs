> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lapolicy/deviceownerauthenticationwithbiometricsorwatch](https://developer.apple.com/documentation/localauthentication/lapolicy/deviceownerauthenticationwithbiometricsorwatch)

# deviceOwnerAuthenticationWithBiometricsOrWatch (Swift)

**Framework:** Local Authentication  
**Kind:** Type Property  
**Availability:** macOS 10.15+ (deprecated in 15.0)

User authentication with either biometry or Apple Watch.

## Declaration

```swift
static var deviceOwnerAuthenticationWithBiometricsOrWatch: LAPolicy { get }
```

<a id="Discussion"></a>

## Discussion

You use the [deviceOwnerAuthenticationWithBiometricsOrWatch](deviceownerauthenticationwithbiometricsorwatch.md) policy when calling the [evaluatePolicy(\_:localizedReason:reply:)](../lacontext/evaluatepolicy%28__localizedreason_reply_%29.md) method to authenticate the user with either Apple Watch or biometrics. The authentication mechanisms run in parallel until one or the other succeeds, or until the user cancels the operation.

If the evaluation method can’t find a nearby, paired Apple Watch running watchOS 6 or later, this policy reverts to the behavior of the [LAPolicy.deviceOwnerAuthenticationWithBiometrics](deviceownerauthenticationwithbiometrics.md) policy. If biometry is unavailable, the policy behaves like the [deviceOwnerAuthenticationWithWatch](deviceownerauthenticationwithwatch.md) policy.

To allow the user to authenticate with either of these options or a password, use the [LAPolicy.deviceOwnerAuthentication](deviceownerauthentication.md) policy instead.

## See Also

### Policies

- [LAPolicy.deviceOwnerAuthenticationWithBiometrics](deviceownerauthenticationwithbiometrics.md): User authentication with biometry.
- [deviceOwnerAuthenticationWithWatch](deviceownerauthenticationwithwatch.md): Deprecated. User authentication with Apple Watch.
- [LAPolicy.deviceOwnerAuthentication](deviceownerauthentication.md): User authentication with biometry, Apple Watch, or the device passcode.
- [LAPolicy.deviceOwnerAuthenticationWithWristDetection](deviceownerauthenticationwithwristdetection.md): User authentication with wrist detection on watchOS.

# LAPolicyDeviceOwnerAuthenticationWithBiometricsOrWatch (Objective-C)

**Framework:** Local Authentication  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0)

User authentication with either biometry or Apple Watch.

## Declaration

```objectivec
LAPolicyDeviceOwnerAuthenticationWithBiometricsOrWatch
```

<a id="Discussion"></a>

## Discussion

You use the [LAPolicyDeviceOwnerAuthenticationWithBiometricsOrWatch](deviceownerauthenticationwithbiometricsorwatch.md) policy when calling the [evaluatePolicy:localizedReason:reply:](../lacontext/evaluatepolicy%28__localizedreason_reply_%29.md) method to authenticate the user with either Apple Watch or biometrics. The authentication mechanisms run in parallel until one or the other succeeds, or until the user cancels the operation.

If the evaluation method can’t find a nearby, paired Apple Watch running watchOS 6 or later, this policy reverts to the behavior of the [LAPolicyDeviceOwnerAuthenticationWithBiometrics](deviceownerauthenticationwithbiometrics.md) policy. If biometry is unavailable, the policy behaves like the [LAPolicyDeviceOwnerAuthenticationWithWatch](deviceownerauthenticationwithwatch.md) policy.

To allow the user to authenticate with either of these options or a password, use the [LAPolicyDeviceOwnerAuthentication](deviceownerauthentication.md) policy instead.

## See Also

### Policies

- [LAPolicyDeviceOwnerAuthenticationWithBiometrics](deviceownerauthenticationwithbiometrics.md): User authentication with biometry.
- [LAPolicyDeviceOwnerAuthenticationWithWatch](deviceownerauthenticationwithwatch.md): Deprecated. User authentication with Apple Watch.
- [LAPolicyDeviceOwnerAuthentication](deviceownerauthentication.md): User authentication with biometry, Apple Watch, or the device passcode.
- [LAPolicyDeviceOwnerAuthenticationWithWristDetection](deviceownerauthenticationwithwristdetection.md): User authentication with wrist detection on watchOS.

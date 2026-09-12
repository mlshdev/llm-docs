> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/lapolicy/deviceownerauthenticationwithwatch](https://developer.apple.com/documentation/localauthentication/lapolicy/deviceownerauthenticationwithwatch)

# deviceOwnerAuthenticationWithWatch (Swift)

**Framework:** Local Authentication  
**Kind:** Type Property  
**Availability:** macOS 10.15+ (deprecated in 15.0)

User authentication with Apple Watch.

## Declaration

```swift
static var deviceOwnerAuthenticationWithWatch: LAPolicy { get }
```

<a id="Discussion"></a>

## Discussion

You use the [deviceOwnerAuthenticationWithWatch](deviceownerauthenticationwithwatch.md) policy when calling the [evaluatePolicy(\_:localizedReason:reply:)](../lacontext/evaluatepolicy%28__localizedreason_reply_%29.md) method to authenticate the user with Apple Watch. If the evaluation method can’t find a nearby, paired Apple Watch running watchOS 6 or later, it returns the [watchNotAvailable](../laerror-swift.struct/watchnotavailable.md) error.

During authentication, the system presents a dialog that resembles the dialog presented for biometric authentication. The user confirms authentication by double-clicking the watch’s side button.

To allow the user to authenticate either with an Apple Watch or with biometrics, use the [deviceOwnerAuthenticationWithBiometricsOrWatch](deviceownerauthenticationwithbiometricsorwatch.md) policy instead. To allow the user to authenticate with either of these options or a password, use the [LAPolicy.deviceOwnerAuthentication](deviceownerauthentication.md) policy.

## See Also

### Policies

- [LAPolicy.deviceOwnerAuthenticationWithBiometrics](deviceownerauthenticationwithbiometrics.md): User authentication with biometry.
- [deviceOwnerAuthenticationWithBiometricsOrWatch](deviceownerauthenticationwithbiometricsorwatch.md): Deprecated. User authentication with either biometry or Apple Watch.
- [LAPolicy.deviceOwnerAuthentication](deviceownerauthentication.md): User authentication with biometry, Apple Watch, or the device passcode.
- [LAPolicy.deviceOwnerAuthenticationWithWristDetection](deviceownerauthenticationwithwristdetection.md): User authentication with wrist detection on watchOS.

# LAPolicyDeviceOwnerAuthenticationWithWatch (Objective-C)

**Framework:** Local Authentication  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.15+ (deprecated in 15.0)

User authentication with Apple Watch.

## Declaration

```objectivec
LAPolicyDeviceOwnerAuthenticationWithWatch
```

<a id="Discussion"></a>

## Discussion

You use the [LAPolicyDeviceOwnerAuthenticationWithWatch](deviceownerauthenticationwithwatch.md) policy when calling the [evaluatePolicy:localizedReason:reply:](../lacontext/evaluatepolicy%28__localizedreason_reply_%29.md) method to authenticate the user with Apple Watch. If the evaluation method can’t find a nearby, paired Apple Watch running watchOS 6 or later, it returns the [watchNotAvailable](../laerror-swift.struct/watchnotavailable.md) error.

During authentication, the system presents a dialog that resembles the dialog presented for biometric authentication. The user confirms authentication by double-clicking the watch’s side button.

To allow the user to authenticate either with an Apple Watch or with biometrics, use the [LAPolicyDeviceOwnerAuthenticationWithBiometricsOrWatch](deviceownerauthenticationwithbiometricsorwatch.md) policy instead. To allow the user to authenticate with either of these options or a password, use the [LAPolicyDeviceOwnerAuthentication](deviceownerauthentication.md) policy.

## See Also

### Policies

- [LAPolicyDeviceOwnerAuthenticationWithBiometrics](deviceownerauthenticationwithbiometrics.md): User authentication with biometry.
- [LAPolicyDeviceOwnerAuthenticationWithBiometricsOrWatch](deviceownerauthenticationwithbiometricsorwatch.md): Deprecated. User authentication with either biometry or Apple Watch.
- [LAPolicyDeviceOwnerAuthentication](deviceownerauthentication.md): User authentication with biometry, Apple Watch, or the device passcode.
- [LAPolicyDeviceOwnerAuthenticationWithWristDetection](deviceownerauthenticationwithwristdetection.md): User authentication with wrist detection on watchOS.

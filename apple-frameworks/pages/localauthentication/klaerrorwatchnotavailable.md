> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/klaerrorwatchnotavailable](https://developer.apple.com/documentation/localauthentication/klaerrorwatchnotavailable)

# kLAErrorWatchNotAvailable (Swift)

**Framework:** Local Authentication  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · visionOS 1.0+ · watchOS 9.0+

An attempt to authenticate with Apple Watch failed.

## Declaration

```swift
var kLAErrorWatchNotAvailable: Int32 { get }
```

<a id="Discussion"></a>

## Discussion

You receive this error when the system fails to locate a nearby, paired Apple Watch running watchOS 6 or later while trying to authenticate using one of the watch authentication policies like [deviceOwnerAuthenticationWithWatch](lapolicy/deviceownerauthenticationwithwatch.md).

## See Also

### Supporting Constants

- [kLAErrorDomain](klaerrordomain.md): The error domain used by LocalAuthentication.
- [kLAErrorAppCancel](klaerrorappcancel.md): The app canceled authentication.
- [kLAErrorSystemCancel](klaerrorsystemcancel.md): The system canceled authentication.
- [kLAErrorUserCancel](klaerrorusercancel.md): The user tapped the cancel button in the authentication dialog.
- [kLAErrorBiometryDisconnected](klaerrorbiometrydisconnected.md): The device supports biometry only using a removable accessory, but the paired accessory isn’t connected.
- [kLAErrorBiometryLockout](klaerrorbiometrylockout.md): Biometry is locked because there were too many failed attempts.
- [kLAErrorBiometryNotAvailable](klaerrorbiometrynotavailable.md): Biometry is not available on the device.
- [kLAErrorBiometryNotEnrolled](klaerrorbiometrynotenrolled.md): The user has no enrolled biometric identities.
- [kLAErrorBiometryNotPaired](klaerrorbiometrynotpaired.md): The device supports biometry only using a removable accessory, but no accessory is paired.
- [kLAErrorTouchIDLockout](klaerrortouchidlockout.md): Touch ID is locked because there were too many failed attempts.
- [kLAErrorTouchIDNotAvailable](klaerrortouchidnotavailable.md): Touch ID is not available on the device.
- [kLAErrorTouchIDNotEnrolled](klaerrortouchidnotenrolled.md): The user has no enrolled Touch ID fingers.
- [kLAErrorAuthenticationFailed](klaerrorauthenticationfailed.md): The user failed to provide valid credentials.
- [kLAErrorInvalidContext](klaerrorinvalidcontext.md): The context was previously invalidated.
- [kLAErrorInvalidDimensions](klaerrorinvaliddimensions.md)

# kLAErrorWatchNotAvailable (Objective-C)

**Framework:** Local Authentication  
**Kind:** Macro  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · visionOS 1.0+ · watchOS 9.0+

An attempt to authenticate with Apple Watch failed.

## Declaration

```objectivec
#define kLAErrorWatchNotAvailable
```

<a id="Discussion"></a>

## Discussion

You receive this error when the system fails to locate a nearby, paired Apple Watch running watchOS 6 or later while trying to authenticate using one of the watch authentication policies like [LAPolicyDeviceOwnerAuthenticationWithWatch](lapolicy/deviceownerauthenticationwithwatch.md).

## See Also

### Supporting Constants

- [kLAErrorDomain](klaerrordomain.md): The error domain used by LocalAuthentication.
- [kLAErrorAppCancel](klaerrorappcancel.md): The app canceled authentication.
- [kLAErrorSystemCancel](klaerrorsystemcancel.md): The system canceled authentication.
- [kLAErrorUserCancel](klaerrorusercancel.md): The user tapped the cancel button in the authentication dialog.
- [kLAErrorBiometryDisconnected](klaerrorbiometrydisconnected.md): The device supports biometry only using a removable accessory, but the paired accessory isn’t connected.
- [kLAErrorBiometryLockout](klaerrorbiometrylockout.md): Biometry is locked because there were too many failed attempts.
- [kLAErrorBiometryNotAvailable](klaerrorbiometrynotavailable.md): Biometry is not available on the device.
- [kLAErrorBiometryNotEnrolled](klaerrorbiometrynotenrolled.md): The user has no enrolled biometric identities.
- [kLAErrorBiometryNotPaired](klaerrorbiometrynotpaired.md): The device supports biometry only using a removable accessory, but no accessory is paired.
- [kLAErrorTouchIDLockout](klaerrortouchidlockout.md): Touch ID is locked because there were too many failed attempts.
- [kLAErrorTouchIDNotAvailable](klaerrortouchidnotavailable.md): Touch ID is not available on the device.
- [kLAErrorTouchIDNotEnrolled](klaerrortouchidnotenrolled.md): The user has no enrolled Touch ID fingers.
- [kLAErrorAuthenticationFailed](klaerrorauthenticationfailed.md): The user failed to provide valid credentials.
- [kLAErrorInvalidContext](klaerrorinvalidcontext.md): The context was previously invalidated.
- [kLAErrorInvalidDimensions](klaerrorinvaliddimensions.md)

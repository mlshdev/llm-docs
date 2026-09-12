> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/klaerrorusercancel](https://developer.apple.com/documentation/localauthentication/klaerrorusercancel)

# kLAErrorUserCancel (Swift)

**Framework:** Local Authentication  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · visionOS 1.0+ · watchOS 9.0+

The user tapped the cancel button in the authentication dialog.

## Declaration

```swift
var kLAErrorUserCancel: Int32 { get }
```

## See Also

### Supporting Constants

- [kLAErrorDomain](klaerrordomain.md): The error domain used by LocalAuthentication.
- [kLAErrorAppCancel](klaerrorappcancel.md): The app canceled authentication.
- [kLAErrorSystemCancel](klaerrorsystemcancel.md): The system canceled authentication.
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
- [kLAErrorNotInteractive](klaerrornotinteractive.md): Displaying the required authentication user interface is forbidden.

# kLAErrorUserCancel (Objective-C)

**Framework:** Local Authentication  
**Kind:** Macro  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · visionOS 1.0+ · watchOS 9.0+

The user tapped the cancel button in the authentication dialog.

## Declaration

```objectivec
#define kLAErrorUserCancel
```

## See Also

### Supporting Constants

- [kLAErrorDomain](klaerrordomain.md): The error domain used by LocalAuthentication.
- [kLAErrorAppCancel](klaerrorappcancel.md): The app canceled authentication.
- [kLAErrorSystemCancel](klaerrorsystemcancel.md): The system canceled authentication.
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
- [kLAErrorNotInteractive](klaerrornotinteractive.md): Displaying the required authentication user interface is forbidden.

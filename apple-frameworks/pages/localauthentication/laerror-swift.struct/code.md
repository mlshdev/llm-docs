> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laerror-swift.struct/code](https://developer.apple.com/documentation/localauthentication/laerror-swift.struct/code)

# LAError.Code (Swift)

**Framework:** Local Authentication  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 3.0+

Errors issued by the LocalAuthentication framework.

## Declaration

```swift
enum Code
```

## Topics

### Cancellation

- [LAError.Code.appCancel](code/appcancel.md): The app canceled authentication.
- [LAError.Code.systemCancel](code/systemcancel.md): The system canceled authentication.
- [LAError.Code.userCancel](code/usercancel.md): The user tapped the cancel button in the authentication dialog.

### Biometry failure

- [LAError.Code.biometryDisconnected](code/biometrydisconnected.md): The device supports biometry only using a removable accessory, but the paired accessory isn’t connected.
- [biometryLockout](code/biometrylockout.md): Biometry is locked because there were too many failed attempts.
- [biometryNotAvailable](code/biometrynotavailable.md): Biometry is not available on the device.
- [biometryNotEnrolled](code/biometrynotenrolled.md): The user has no enrolled biometric identities.
- [LAError.Code.biometryNotPaired](code/biometrynotpaired.md): The device supports biometry only using a removable accessory, but no accessory is paired.
- [LAError.Code.touchIDLockout](code/touchidlockout.md): Deprecated. Touch ID is locked because there were too many failed attempts.
- [LAError.Code.touchIDNotAvailable](code/touchidnotavailable.md): Deprecated. Touch ID is not available on the device.
- [LAError.Code.touchIDNotEnrolled](code/touchidnotenrolled.md): Deprecated. The user has no enrolled Touch ID fingers.

### Other errors

- [LAError.Code.authenticationFailed](code/authenticationfailed.md): The user failed to provide valid credentials.
- [LAError.Code.invalidContext](code/invalidcontext.md): The context was previously invalidated.
- [LAError.Code.invalidDimensions](code/invaliddimensions.md)
- [LAError.Code.notInteractive](code/notinteractive.md): Displaying the required authentication user interface is forbidden.
- [LAError.Code.passcodeNotSet](code/passcodenotset.md): A passcode isn’t set on the device.
- [LAError.Code.userFallback](code/userfallback.md): The user tapped the fallback button in the authentication dialog, but no fallback is available for the authentication policy.
- [LAError.Code.watchNotAvailable](code/watchnotavailable.md): Deprecated. An attempt to authenticate with Apple Watch failed.

### Supporting Constants

- [kLAErrorDomain](../klaerrordomain.md): The error domain used by LocalAuthentication.
- [kLAErrorAppCancel](../klaerrorappcancel.md): The app canceled authentication.
- [kLAErrorSystemCancel](../klaerrorsystemcancel.md): The system canceled authentication.
- [kLAErrorUserCancel](../klaerrorusercancel.md): The user tapped the cancel button in the authentication dialog.
- [kLAErrorBiometryDisconnected](../klaerrorbiometrydisconnected.md): The device supports biometry only using a removable accessory, but the paired accessory isn’t connected.
- [kLAErrorBiometryLockout](../klaerrorbiometrylockout.md): Biometry is locked because there were too many failed attempts.
- [kLAErrorBiometryNotAvailable](../klaerrorbiometrynotavailable.md): Biometry is not available on the device.
- [kLAErrorBiometryNotEnrolled](../klaerrorbiometrynotenrolled.md): The user has no enrolled biometric identities.
- [kLAErrorBiometryNotPaired](../klaerrorbiometrynotpaired.md): The device supports biometry only using a removable accessory, but no accessory is paired.
- [kLAErrorTouchIDLockout](../klaerrortouchidlockout.md): Touch ID is locked because there were too many failed attempts.
- [kLAErrorTouchIDNotAvailable](../klaerrortouchidnotavailable.md): Touch ID is not available on the device.
- [kLAErrorTouchIDNotEnrolled](../klaerrortouchidnotenrolled.md): The user has no enrolled Touch ID fingers.
- [kLAErrorAuthenticationFailed](../klaerrorauthenticationfailed.md): The user failed to provide valid credentials.
- [kLAErrorInvalidContext](../klaerrorinvalidcontext.md): The context was previously invalidated.
- [kLAErrorInvalidDimensions](../klaerrorinvaliddimensions.md)
- [kLAErrorNotInteractive](../klaerrornotinteractive.md): Displaying the required authentication user interface is forbidden.
- [kLAErrorPasscodeNotSet](../klaerrorpasscodenotset.md): A passcode isn’t set on the device.
- [kLAErrorUserFallback](../klaerroruserfallback.md): The user tapped the fallback button in the authentication dialog, but no fallback is available for the authentication policy.
- [kLAErrorWatchNotAvailable](../klaerrorwatchnotavailable.md): An attempt to authenticate with Apple Watch failed.

### Enumeration Cases

- [LAError.Code.companionNotAvailable](code/companionnotavailable-swift.enum.case.md): Authentication could not start because there was no paired companion device nearby.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

### Type Properties

- [companionNotAvailable](code/companionnotavailable-swift.type.property.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [LAError](../laerror-swift.struct.md): Errors issued by the LocalAuthentication framework.
- [LAErrorDomain](../laerrordomain.md): The error domain that the framework uses when issuing errors.

# LAError (Objective-C)

**Framework:** Local Authentication  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 3.0+

Errors issued by the LocalAuthentication framework.

## Declaration

```objectivec
enum LAError : NSInteger;
```

## Topics

### Cancellation

- [LAErrorAppCancel](code/appcancel.md): The app canceled authentication.
- [LAErrorSystemCancel](code/systemcancel.md): The system canceled authentication.
- [LAErrorUserCancel](code/usercancel.md): The user tapped the cancel button in the authentication dialog.

### Biometry failure

- [LAErrorBiometryDisconnected](code/biometrydisconnected.md): The device supports biometry only using a removable accessory, but the paired accessory isn’t connected.
- [LAErrorBiometryLockout](../laerror-c.enum/laerrorbiometrylockout.md): Biometry is locked because there were too many failed attempts.
- [LAErrorBiometryNotAvailable](../laerror-c.enum/laerrorbiometrynotavailable.md): Biometry is not available on the device.
- [LAErrorBiometryNotEnrolled](../laerror-c.enum/laerrorbiometrynotenrolled.md): The user has no enrolled biometric identities.
- [LAErrorBiometryNotPaired](code/biometrynotpaired.md): The device supports biometry only using a removable accessory, but no accessory is paired.
- [LAErrorTouchIDLockout](code/touchidlockout.md): Deprecated. Touch ID is locked because there were too many failed attempts.
- [LAErrorTouchIDNotAvailable](code/touchidnotavailable.md): Deprecated. Touch ID is not available on the device.
- [LAErrorTouchIDNotEnrolled](code/touchidnotenrolled.md): Deprecated. The user has no enrolled Touch ID fingers.

### Other errors

- [LAErrorAuthenticationFailed](code/authenticationfailed.md): The user failed to provide valid credentials.
- [LAErrorInvalidContext](code/invalidcontext.md): The context was previously invalidated.
- [LAErrorInvalidDimensions](code/invaliddimensions.md)
- [LAErrorNotInteractive](code/notinteractive.md): Displaying the required authentication user interface is forbidden.
- [LAErrorPasscodeNotSet](code/passcodenotset.md): A passcode isn’t set on the device.
- [LAErrorUserFallback](code/userfallback.md): The user tapped the fallback button in the authentication dialog, but no fallback is available for the authentication policy.
- [LAErrorWatchNotAvailable](code/watchnotavailable.md): Deprecated. An attempt to authenticate with Apple Watch failed.

### Supporting Constants

- [kLAErrorDomain](../klaerrordomain.md): The error domain used by LocalAuthentication.
- [kLAErrorAppCancel](../klaerrorappcancel.md): The app canceled authentication.
- [kLAErrorSystemCancel](../klaerrorsystemcancel.md): The system canceled authentication.
- [kLAErrorUserCancel](../klaerrorusercancel.md): The user tapped the cancel button in the authentication dialog.
- [kLAErrorBiometryDisconnected](../klaerrorbiometrydisconnected.md): The device supports biometry only using a removable accessory, but the paired accessory isn’t connected.
- [kLAErrorBiometryLockout](../klaerrorbiometrylockout.md): Biometry is locked because there were too many failed attempts.
- [kLAErrorBiometryNotAvailable](../klaerrorbiometrynotavailable.md): Biometry is not available on the device.
- [kLAErrorBiometryNotEnrolled](../klaerrorbiometrynotenrolled.md): The user has no enrolled biometric identities.
- [kLAErrorBiometryNotPaired](../klaerrorbiometrynotpaired.md): The device supports biometry only using a removable accessory, but no accessory is paired.
- [kLAErrorTouchIDLockout](../klaerrortouchidlockout.md): Touch ID is locked because there were too many failed attempts.
- [kLAErrorTouchIDNotAvailable](../klaerrortouchidnotavailable.md): Touch ID is not available on the device.
- [kLAErrorTouchIDNotEnrolled](../klaerrortouchidnotenrolled.md): The user has no enrolled Touch ID fingers.
- [kLAErrorAuthenticationFailed](../klaerrorauthenticationfailed.md): The user failed to provide valid credentials.
- [kLAErrorInvalidContext](../klaerrorinvalidcontext.md): The context was previously invalidated.
- [kLAErrorInvalidDimensions](../klaerrorinvaliddimensions.md)
- [kLAErrorNotInteractive](../klaerrornotinteractive.md): Displaying the required authentication user interface is forbidden.
- [kLAErrorPasscodeNotSet](../klaerrorpasscodenotset.md): A passcode isn’t set on the device.
- [kLAErrorUserFallback](../klaerroruserfallback.md): The user tapped the fallback button in the authentication dialog, but no fallback is available for the authentication policy.
- [kLAErrorWatchNotAvailable](../klaerrorwatchnotavailable.md): An attempt to authenticate with Apple Watch failed.

### Enumeration Cases

- [LAErrorCompanionNotAvailable](code/companionnotavailable-swift.enum.case.md): Authentication could not start because there was no paired companion device nearby.

## See Also

### Errors

- [LAErrorDomain](../laerrordomain.md): The error domain that the framework uses when issuing errors.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laerror-swift.struct](https://developer.apple.com/documentation/localauthentication/laerror-swift.struct)

# LAError

**Framework:** Local Authentication  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 3.0+

Errors issued by the LocalAuthentication framework.

## Declaration

```swift
struct LAError
```

## Topics

### Error Characteristics

- [LAErrorDomain](laerrordomain.md): The error domain that the framework uses when issuing errors.

### Error Codes

- [appCancel](laerror-swift.struct/appcancel.md): The app canceled authentication.
- [systemCancel](laerror-swift.struct/systemcancel.md): The system canceled authentication.
- [userCancel](laerror-swift.struct/usercancel.md): The user tapped the cancel button in the authentication dialog.
- [biometryDisconnected](laerror-swift.struct/biometrydisconnected.md): The device supports biometry only using a removable accessory, but the paired accessory isn’t connected.
- [biometryLockout](laerror-swift.struct/biometrylockout.md): Biometry is locked because there were too many failed attempts.
- [biometryNotAvailable](laerror-swift.struct/biometrynotavailable.md): Biometry is not available on the device.
- [biometryNotEnrolled](laerror-swift.struct/biometrynotenrolled.md): The user has no enrolled biometric identities.
- [biometryNotPaired](laerror-swift.struct/biometrynotpaired.md): The device supports biometry only using a removable accessory, but no accessory is paired.
- [touchIDLockout](laerror-swift.struct/touchidlockout.md): Deprecated. Touch ID is locked because there were too many failed attempts.
- [touchIDNotAvailable](laerror-swift.struct/touchidnotavailable.md): Deprecated. Touch ID is not available on the device.
- [touchIDNotEnrolled](laerror-swift.struct/touchidnotenrolled.md): Deprecated. The user has no enrolled Touch ID fingers.
- [authenticationFailed](laerror-swift.struct/authenticationfailed.md): The user failed to provide valid credentials.
- [invalidContext](laerror-swift.struct/invalidcontext.md): The context was previously invalidated.
- [invalidDimensions](laerror-swift.struct/invaliddimensions.md)
- [notInteractive](laerror-swift.struct/notinteractive.md): Displaying the required authentication user interface is forbidden.
- [passcodeNotSet](laerror-swift.struct/passcodenotset.md): A passcode isn’t set on the device.
- [userFallback](laerror-swift.struct/userfallback.md): The user tapped the fallback button in the authentication dialog, but no fallback is available for the authentication policy.
- [watchNotAvailable](laerror-swift.struct/watchnotavailable.md): Deprecated. An attempt to authenticate with Apple Watch failed.
- [LAError.Code](laerror-swift.struct/code.md): Errors issued by the LocalAuthentication framework.

### Type Properties

- [companionNotAvailable](laerror-swift.struct/companionnotavailable.md)
- [errorDomain](laerror-swift.struct/errordomain.md)

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [LAError.Code](laerror-swift.struct/code.md): Errors issued by the LocalAuthentication framework.
- [LAErrorDomain](laerrordomain.md): The error domain that the framework uses when issuing errors.

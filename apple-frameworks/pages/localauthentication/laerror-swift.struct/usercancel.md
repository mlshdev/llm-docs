> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laerror-swift.struct/usercancel](https://developer.apple.com/documentation/localauthentication/laerror-swift.struct/usercancel)

# userCancel

**Framework:** Local Authentication  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 3.0+

The user tapped the cancel button in the authentication dialog.

## Declaration

```swift
static var userCancel: LAError.Code { get }
```

## See Also

### Error Codes

- [appCancel](appcancel.md): The app canceled authentication.
- [systemCancel](systemcancel.md): The system canceled authentication.
- [biometryDisconnected](biometrydisconnected.md): The device supports biometry only using a removable accessory, but the paired accessory isn’t connected.
- [biometryLockout](biometrylockout.md): Biometry is locked because there were too many failed attempts.
- [biometryNotAvailable](biometrynotavailable.md): Biometry is not available on the device.
- [biometryNotEnrolled](biometrynotenrolled.md): The user has no enrolled biometric identities.
- [biometryNotPaired](biometrynotpaired.md): The device supports biometry only using a removable accessory, but no accessory is paired.
- [touchIDLockout](touchidlockout.md): Deprecated. Touch ID is locked because there were too many failed attempts.
- [touchIDNotAvailable](touchidnotavailable.md): Deprecated. Touch ID is not available on the device.
- [touchIDNotEnrolled](touchidnotenrolled.md): Deprecated. The user has no enrolled Touch ID fingers.
- [authenticationFailed](authenticationfailed.md): The user failed to provide valid credentials.
- [invalidContext](invalidcontext.md): The context was previously invalidated.
- [invalidDimensions](invaliddimensions.md)
- [notInteractive](notinteractive.md): Displaying the required authentication user interface is forbidden.
- [passcodeNotSet](passcodenotset.md): A passcode isn’t set on the device.

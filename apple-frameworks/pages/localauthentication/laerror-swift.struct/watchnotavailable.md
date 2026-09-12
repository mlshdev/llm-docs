> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laerror-swift.struct/watchnotavailable](https://developer.apple.com/documentation/localauthentication/laerror-swift.struct/watchnotavailable)

# watchNotAvailable

**Framework:** Local Authentication  
**Kind:** Type Property  
**Availability:** macOS 10.15+ (deprecated in 15.0)

An attempt to authenticate with Apple Watch failed.

## Declaration

```swift
static var watchNotAvailable: LAError.Code { get }
```

<a id="Discussion"></a>

## Discussion

You receive this error when the system fails to locate a nearby, paired Apple Watch running watchOS 6 or later while trying to authenticate using one of the watch authentication policies like [deviceOwnerAuthenticationWithWatch](../lapolicy/deviceownerauthenticationwithwatch.md).

## See Also

### Error Codes

- [appCancel](appcancel.md): The app canceled authentication.
- [systemCancel](systemcancel.md): The system canceled authentication.
- [userCancel](usercancel.md): The user tapped the cancel button in the authentication dialog.
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

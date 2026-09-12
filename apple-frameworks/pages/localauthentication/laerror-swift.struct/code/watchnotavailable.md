> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laerror-swift.struct/code/watchnotavailable](https://developer.apple.com/documentation/localauthentication/laerror-swift.struct/code/watchnotavailable)

# LAError.Code.watchNotAvailable (Swift)

**Framework:** Local Authentication  
**Kind:** Case  
**Availability:** macOS 10.15+ (deprecated in 15.0)

An attempt to authenticate with Apple Watch failed.

## Declaration

```swift
case watchNotAvailable
```

<a id="Discussion"></a>

## Discussion

You receive this error when the system fails to locate a nearby, paired Apple Watch running watchOS 6 or later while trying to authenticate using one of the watch authentication policies like [deviceOwnerAuthenticationWithWatch](../../lapolicy/deviceownerauthenticationwithwatch.md).

## See Also

### Other errors

- [LAError.Code.authenticationFailed](authenticationfailed.md): The user failed to provide valid credentials.
- [LAError.Code.invalidContext](invalidcontext.md): The context was previously invalidated.
- [LAError.Code.invalidDimensions](invaliddimensions.md)
- [LAError.Code.notInteractive](notinteractive.md): Displaying the required authentication user interface is forbidden.
- [LAError.Code.passcodeNotSet](passcodenotset.md): A passcode isn’t set on the device.
- [LAError.Code.userFallback](userfallback.md): The user tapped the fallback button in the authentication dialog, but no fallback is available for the authentication policy.

# LAErrorWatchNotAvailable (Objective-C)

**Framework:** Local Authentication  
**Kind:** Enumeration Case  
**Availability:** macOS 10.15+ (deprecated in 15.0)

An attempt to authenticate with Apple Watch failed.

## Declaration

```objectivec
LAErrorWatchNotAvailable
```

<a id="Discussion"></a>

## Discussion

You receive this error when the system fails to locate a nearby, paired Apple Watch running watchOS 6 or later while trying to authenticate using one of the watch authentication policies like [LAPolicyDeviceOwnerAuthenticationWithWatch](../../lapolicy/deviceownerauthenticationwithwatch.md).

## See Also

### Other errors

- [LAErrorAuthenticationFailed](authenticationfailed.md): The user failed to provide valid credentials.
- [LAErrorInvalidContext](invalidcontext.md): The context was previously invalidated.
- [LAErrorInvalidDimensions](invaliddimensions.md)
- [LAErrorNotInteractive](notinteractive.md): Displaying the required authentication user interface is forbidden.
- [LAErrorPasscodeNotSet](passcodenotset.md): A passcode isn’t set on the device.
- [LAErrorUserFallback](userfallback.md): The user tapped the fallback button in the authentication dialog, but no fallback is available for the authentication policy.

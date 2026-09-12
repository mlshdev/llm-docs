> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laerror-swift.struct/code/userfallback](https://developer.apple.com/documentation/localauthentication/laerror-swift.struct/code/userfallback)

# LAError.Code.userFallback (Swift)

**Framework:** Local Authentication  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 3.0+

The user tapped the fallback button in the authentication dialog, but no fallback is available for the authentication policy.

## Declaration

```swift
case userFallback
```

## See Also

### Other errors

- [LAError.Code.authenticationFailed](authenticationfailed.md): The user failed to provide valid credentials.
- [LAError.Code.invalidContext](invalidcontext.md): The context was previously invalidated.
- [LAError.Code.invalidDimensions](invaliddimensions.md)
- [LAError.Code.notInteractive](notinteractive.md): Displaying the required authentication user interface is forbidden.
- [LAError.Code.passcodeNotSet](passcodenotset.md): A passcode isn’t set on the device.
- [LAError.Code.watchNotAvailable](watchnotavailable.md): Deprecated. An attempt to authenticate with Apple Watch failed.

# LAErrorUserFallback (Objective-C)

**Framework:** Local Authentication  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 3.0+

The user tapped the fallback button in the authentication dialog, but no fallback is available for the authentication policy.

## Declaration

```objectivec
LAErrorUserFallback
```

## See Also

### Other errors

- [LAErrorAuthenticationFailed](authenticationfailed.md): The user failed to provide valid credentials.
- [LAErrorInvalidContext](invalidcontext.md): The context was previously invalidated.
- [LAErrorInvalidDimensions](invaliddimensions.md)
- [LAErrorNotInteractive](notinteractive.md): Displaying the required authentication user interface is forbidden.
- [LAErrorPasscodeNotSet](passcodenotset.md): A passcode isn’t set on the device.
- [LAErrorWatchNotAvailable](watchnotavailable.md): Deprecated. An attempt to authenticate with Apple Watch failed.

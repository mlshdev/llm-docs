> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laerror-swift.struct/code/notinteractive](https://developer.apple.com/documentation/localauthentication/laerror-swift.struct/code/notinteractive)

# LAError.Code.notInteractive (Swift)

**Framework:** Local Authentication  
**Kind:** Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 3.0+

Displaying the required authentication user interface is forbidden.

## Declaration

```swift
case notInteractive
```

<a id="Discussion"></a>

## Discussion

Permit the display of the authentication UI by setting the [interactionNotAllowed](../../lacontext/interactionnotallowed.md) property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Other errors

- [LAError.Code.authenticationFailed](authenticationfailed.md): The user failed to provide valid credentials.
- [LAError.Code.invalidContext](invalidcontext.md): The context was previously invalidated.
- [LAError.Code.invalidDimensions](invaliddimensions.md)
- [LAError.Code.passcodeNotSet](passcodenotset.md): A passcode isn’t set on the device.
- [LAError.Code.userFallback](userfallback.md): The user tapped the fallback button in the authentication dialog, but no fallback is available for the authentication policy.
- [LAError.Code.watchNotAvailable](watchnotavailable.md): Deprecated. An attempt to authenticate with Apple Watch failed.

# LAErrorNotInteractive (Objective-C)

**Framework:** Local Authentication  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+ · watchOS 3.0+

Displaying the required authentication user interface is forbidden.

## Declaration

```objectivec
LAErrorNotInteractive
```

<a id="Discussion"></a>

## Discussion

Permit the display of the authentication UI by setting the [interactionNotAllowed](../../lacontext/interactionnotallowed.md) property to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Other errors

- [LAErrorAuthenticationFailed](authenticationfailed.md): The user failed to provide valid credentials.
- [LAErrorInvalidContext](invalidcontext.md): The context was previously invalidated.
- [LAErrorInvalidDimensions](invaliddimensions.md)
- [LAErrorPasscodeNotSet](passcodenotset.md): A passcode isn’t set on the device.
- [LAErrorUserFallback](userfallback.md): The user tapped the fallback button in the authentication dialog, but no fallback is available for the authentication policy.
- [LAErrorWatchNotAvailable](watchnotavailable.md): Deprecated. An attempt to authenticate with Apple Watch failed.

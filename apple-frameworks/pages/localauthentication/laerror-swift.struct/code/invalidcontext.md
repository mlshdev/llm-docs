> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/localauthentication/laerror-swift.struct/code/invalidcontext](https://developer.apple.com/documentation/localauthentication/laerror-swift.struct/code/invalidcontext)

# LAError.Code.invalidContext (Swift)

**Framework:** Local Authentication  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 2.0+

The context was previously invalidated.

## Declaration

```swift
case invalidContext
```

<a id="Discussion"></a>

## Discussion

You invalidate a context by calling its [invalidate()](../../lacontext/invalidate%28%29.md) method.

## See Also

### Other errors

- [LAError.Code.authenticationFailed](authenticationfailed.md): The user failed to provide valid credentials.
- [LAError.Code.invalidDimensions](invaliddimensions.md)
- [LAError.Code.notInteractive](notinteractive.md): Displaying the required authentication user interface is forbidden.
- [LAError.Code.passcodeNotSet](passcodenotset.md): A passcode isn’t set on the device.
- [LAError.Code.userFallback](userfallback.md): The user tapped the fallback button in the authentication dialog, but no fallback is available for the authentication policy.
- [LAError.Code.watchNotAvailable](watchnotavailable.md): Deprecated. An attempt to authenticate with Apple Watch failed.

# LAErrorInvalidContext (Objective-C)

**Framework:** Local Authentication  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 3.0+

The context was previously invalidated.

## Declaration

```objectivec
LAErrorInvalidContext
```

<a id="Discussion"></a>

## Discussion

You invalidate a context by calling its [invalidate](../../lacontext/invalidate%28%29.md) method.

## See Also

### Other errors

- [LAErrorAuthenticationFailed](authenticationfailed.md): The user failed to provide valid credentials.
- [LAErrorInvalidDimensions](invaliddimensions.md)
- [LAErrorNotInteractive](notinteractive.md): Displaying the required authentication user interface is forbidden.
- [LAErrorPasscodeNotSet](passcodenotset.md): A passcode isn’t set on the device.
- [LAErrorUserFallback](userfallback.md): The user tapped the fallback button in the authentication dialog, but no fallback is available for the authentication policy.
- [LAErrorWatchNotAvailable](watchnotavailable.md): Deprecated. An attempt to authenticate with Apple Watch failed.

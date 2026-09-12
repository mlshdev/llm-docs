> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsautosigninauthorization/vsautosigninauthorizationnotdetermined](https://developer.apple.com/documentation/videosubscriberaccount/vsautosigninauthorization/vsautosigninauthorizationnotdetermined)

# VSAutoSignInAuthorizationNotDetermined

**Interface language:** Objective-C

**Framework:** Video Subscriber Account  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A state that indicates the framework needs to reauthorize Automatic Sign-In.

## Declaration

```objectivec
VSAutoSignInAuthorizationNotDetermined
```

<a id="discussion"></a>

## Discussion

This authorization state indicates that either a person hasn’t answered the prompt to opt in to Automatic Sign-In, or that the app (or server) deletes the token value.

When [authorization](../vsuseraccountmanager/autosignintoken-swift.struct/authorization.md) for the current Automatic Sign-In token is this state, the app needs to call [requestAutoSignInAuthorization()](../vsuseraccountmanager/requestautosigninauthorization%28%29.md) again before creating a token value for the account.

For more information, see [Signing people in to their media accounts automatically](../signing-people-in-to-media-apps-automatically.md).

## See Also

### Possible states

- [VSAutoSignInAuthorizationGranted](vsautosigninauthorizationgranted.md): A state that indicates the person opts in to Automatic Sign-In.
- [VSAutoSignInAuthorizationDenied](vsautosigninauthorizationdenied.md): A state that indicates the person denied authorization.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsuseraccountmanager/autosigninauthorization/notdetermined](https://developer.apple.com/documentation/videosubscriberaccount/vsuseraccountmanager/autosigninauthorization/notdetermined)

# VSUserAccountManager.AutoSignInAuthorization.notDetermined

**Framework:** Video Subscriber Account  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A state that indicates the framework needs to reauthorize Automatic Sign-In.

## Declaration

```swift
case notDetermined
```

## Mentioned In

- [Signing people in to their media accounts automatically](../../signing-people-in-to-media-apps-automatically.md)

<a id="discussion"></a>

## Discussion

This authorization state indicates that either a person hasn’t answered the prompt to opt in to Automatic Sign-In, or that the app (or server) deletes the token value.

When [authorization](../autosignintoken-swift.struct/authorization.md) for the current Automatic Sign-In token is this state, the app needs to call [requestAutoSignInAuthorization()](../requestautosigninauthorization%28%29.md) again before creating a token value for the account.

For more information, see [Signing people in to their media accounts automatically](../../signing-people-in-to-media-apps-automatically.md).

## See Also

### Possible states

- [VSUserAccountManager.AutoSignInAuthorization.granted](granted.md): A state that indicates the person opts in to Automatic Sign-In.
- [VSUserAccountManager.AutoSignInAuthorization.denied](denied.md): A state that indicates denied authorization.

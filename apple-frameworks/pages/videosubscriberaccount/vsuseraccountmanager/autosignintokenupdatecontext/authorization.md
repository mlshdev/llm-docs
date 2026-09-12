> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsuseraccountmanager/autosignintokenupdatecontext/authorization](https://developer.apple.com/documentation/videosubscriberaccount/vsuseraccountmanager/autosignintokenupdatecontext/authorization)

# authorization

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · tvOS 26.0+

A state that represents a person’s approval of Automatic Sign-In.

## Declaration

```swift
var authorization: VSUserAccountManager.AutoSignInAuthorization { get }
```

## Mentioned In

- [Signing people in to their media accounts automatically](../../signing-people-in-to-media-apps-automatically.md)

<a id="discussion"></a>

## Discussion

The system prompts the person to opt in to Automatic Sign-In when the app calls   [requestAutoSignInAuthorization()](../requestautosigninauthorization%28%29.md). If the person approves the prompt, the framework sets the [authorization](authorization.md) status to [VSUserAccountManager.AutoSignInAuthorization.granted](../autosigninauthorization/granted.md). If the person dismisses the prompt without approving, the system leaves the authorization status [VSUserAccountManager.AutoSignInAuthorization.notDetermined](../autosigninauthorization/notdetermined.md) and the framework doesn’t prompt them again until the app calls [requestAutoSignInAuthorization()](../requestautosigninauthorization%28%29.md) once more.

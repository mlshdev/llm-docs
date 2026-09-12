> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsuseraccountmanager/autosignintoken-swift.struct/authorization](https://developer.apple.com/documentation/videosubscriberaccount/vsuseraccountmanager/autosignintoken-swift.struct/authorization)

# authorization

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A state that represents a person’s approval of Automatic Sign-In.

## Declaration

```swift
var authorization: VSUserAccountManager.AutoSignInAuthorization { get }
```

## Mentioned In

- [Signing people in to their media accounts automatically](../../signing-people-in-to-media-apps-automatically.md)

<a id="discussion"></a>

## Discussion

The default value is [VSUserAccountManager.AutoSignInAuthorization.notDetermined](../autosigninauthorization/notdetermined.md). The framework updates the value based on a person’s answer to the prompt to opt in to Automatic Sign-In (see [requestAutoSignInAuthorization()](../requestautosigninauthorization%28%29.md)).

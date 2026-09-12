> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsuseraccountmanager/autosignintoken-swift.property](https://developer.apple.com/documentation/videosubscriberaccount/vsuseraccountmanager/autosignintoken-swift.property)

# autoSignInToken

**Framework:** Video Subscriber Account  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The current Automatic Sign-In token.

## Declaration

```swift
var autoSignInToken: VSUserAccountManager.AutoSignInToken { get async throws }
```

## Mentioned In

- [Signing people in to their media accounts automatically](../signing-people-in-to-media-apps-automatically.md)

<a id="discussion"></a>

## Discussion

The framework sets this property to the current Automatic Sign-In token value and authorization status according to information on the person’s Account Account.

For more information, see [Signing people in to their media accounts automatically](../signing-people-in-to-media-apps-automatically.md).

## See Also

### Signing people in automatically

- [VSUserAccountManager.AutoSignInToken](autosignintoken-swift.struct.md): A value that represents a person’s account and their consent to Automatic Sign-In.
- [VSUserAccountManager.AutoSignInTokenUpdateContext](autosignintokenupdatecontext.md): An object that contains information about a person’s choice in the Automatic Sign-In prompt.
- [VSUserAccountManager.AutoSignInAuthorization](autosigninauthorization.md): The possible states the framework sets for Automatic Sign-In.
- [deleteAutoSignInToken()](deleteautosignintoken%28%29.md): Deletes the value of the current Automatic Sign-In token.
- [requestAutoSignInAuthorization()](requestautosigninauthorization%28%29.md): Presents a modal sheet that offers a person to opt in to Automatic Sign-In.
- [updateAutoSignInToken(\_:updateContext:)](updateautosignintoken%28__updatecontext_%29.md): Sets the current Automatic Sign-In token.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsuseraccountmanager/deleteautosignintoken()](https://developer.apple.com/documentation/videosubscriberaccount/vsuseraccountmanager/deleteautosignintoken())

# deleteAutoSignInToken()

**Framework:** Video Subscriber Account  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Deletes the value of the current Automatic Sign-In token.

## Declaration

```swift
func deleteAutoSignInToken() async throws
```

## Mentioned In

- [Signing people in to their media accounts automatically](../signing-people-in-to-media-apps-automatically.md)

<a id="discussion"></a>

## Discussion

This method sets the contents of [value](autosignintoken-swift.struct/value.md) to `nil` for the current [autoSignInToken](autosignintoken-swift.property.md).

You might delete an Automatic Sign-In token, for example, if:

- Your app provides its own UI that lets the person opt out of Automatic Sign-In.
- The person changes their password and wants to sign out from all of their devices.
- Your app implements conditions to invalidate a token, such as if a person flags a specific log in as unauthorized.

## See Also

### Signing people in automatically

- [VSUserAccountManager.AutoSignInToken](autosignintoken-swift.struct.md): A value that represents a person’s account and their consent to Automatic Sign-In.
- [VSUserAccountManager.AutoSignInTokenUpdateContext](autosignintokenupdatecontext.md): An object that contains information about a person’s choice in the Automatic Sign-In prompt.
- [VSUserAccountManager.AutoSignInAuthorization](autosigninauthorization.md): The possible states the framework sets for Automatic Sign-In.
- [autoSignInToken](autosignintoken-swift.property.md): The current Automatic Sign-In token.
- [requestAutoSignInAuthorization()](requestautosigninauthorization%28%29.md): Presents a modal sheet that offers a person to opt in to Automatic Sign-In.
- [updateAutoSignInToken(\_:updateContext:)](updateautosignintoken%28__updatecontext_%29.md): Sets the current Automatic Sign-In token.

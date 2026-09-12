> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsuseraccountmanager/updateautosignintoken(_:updatecontext:)](https://developer.apple.com/documentation/videosubscriberaccount/vsuseraccountmanager/updateautosignintoken(_:updatecontext:))

# updateAutoSignInToken(\_:updateContext:)

**Framework:** Video Subscriber Account  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · tvOS 26.0+

Sets the current Automatic Sign-In token.

## Declaration

```swift
func updateAutoSignInToken(_ newToken: String, updateContext: VSUserAccountManager.AutoSignInTokenUpdateContext) async throws
```

## Parameters

- `newToken`: The new token value to store in the person’s Apple Account. Your app determines the contents of this string using a mechanism you determine fitting to identify the account. In addition, ensure its value is of sufficient length, complexity, and security. For more information on setting this property, see [value](../vsautosignintoken/value.md).
- `updateContext`: The object the framework provides that reflects the person’s choice in the authorization prompt; pass the result of the [requestAutoSignInAuthorization()](requestautosigninauthorization%28%29.md) method.

## Mentioned In

- [Signing people in to their media accounts automatically](../signing-people-in-to-media-apps-automatically.md)

<a id="discussion"></a>

## Discussion

Call this method when generating a new token value for an account. To update the token, request the person’s authorization for Automatic Sign-In. For more information, see [requestAutoSignInAuthorization()](requestautosigninauthorization%28%29.md).

## See Also

### Signing people in automatically

- [VSUserAccountManager.AutoSignInToken](autosignintoken-swift.struct.md): A value that represents a person’s account and their consent to Automatic Sign-In.
- [VSUserAccountManager.AutoSignInTokenUpdateContext](autosignintokenupdatecontext.md): An object that contains information about a person’s choice in the Automatic Sign-In prompt.
- [VSUserAccountManager.AutoSignInAuthorization](autosigninauthorization.md): The possible states the framework sets for Automatic Sign-In.
- [autoSignInToken](autosignintoken-swift.property.md): The current Automatic Sign-In token.
- [deleteAutoSignInToken()](deleteautosignintoken%28%29.md): Deletes the value of the current Automatic Sign-In token.
- [requestAutoSignInAuthorization()](requestautosigninauthorization%28%29.md): Presents a modal sheet that offers a person to opt in to Automatic Sign-In.

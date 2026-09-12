> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsuseraccountmanager/autosignintoken-swift.struct](https://developer.apple.com/documentation/videosubscriberaccount/vsuseraccountmanager/autosignintoken-swift.struct)

# VSUserAccountManager.AutoSignInToken

**Framework:** Video Subscriber Account  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A value that represents a person’s account and their consent to Automatic Sign-In.

## Declaration

```swift
struct AutoSignInToken
```

<a id="overview"></a>

## Overview

Automatic Sign-In tokens implement a single sign-on experience for media streaming services for a signed-in Apple Account.

The framework sets [autoSignInToken](autosignintoken-swift.property.md) to an instance of this structure. The source of the information inside depends on whether the person approves the prompt to opt in to Automatic Sign-In. For more information, see [requestAutoSignInAuthorization()](requestautosigninauthorization%28%29.md).

Alternatively, if you delete the token value by calling [deleteAutoSignInToken()](deleteautosignintoken%28%29.md), the framework sets [value](autosignintoken-swift.struct/value.md) to `nil` and [authorization](autosignintoken-swift.struct/authorization.md) to [VSUserAccountManager.AutoSignInAuthorization.notDetermined](autosigninauthorization/notdetermined.md).

> **Important**

> Only use an Automatic Sign-In token to turn on media streaming. For example, avoid using the token itself as a gate that lets the person manage their account.

For more information about Automatic Sign-In tokens, see [Signing people in to their media accounts automatically](../signing-people-in-to-media-apps-automatically.md).

## Topics

### Defining the token value

- [value](autosignintoken-swift.struct/value.md): A string that represents a person’s account.

### Determining status

- [authorization](autosignintoken-swift.struct/authorization.md): A state that represents a person’s approval of Automatic Sign-In.

## See Also

### Signing people in automatically

- [VSUserAccountManager.AutoSignInTokenUpdateContext](autosignintokenupdatecontext.md): An object that contains information about a person’s choice in the Automatic Sign-In prompt.
- [VSUserAccountManager.AutoSignInAuthorization](autosigninauthorization.md): The possible states the framework sets for Automatic Sign-In.
- [autoSignInToken](autosignintoken-swift.property.md): The current Automatic Sign-In token.
- [deleteAutoSignInToken()](deleteautosignintoken%28%29.md): Deletes the value of the current Automatic Sign-In token.
- [requestAutoSignInAuthorization()](requestautosigninauthorization%28%29.md): Presents a modal sheet that offers a person to opt in to Automatic Sign-In.
- [updateAutoSignInToken(\_:updateContext:)](updateautosignintoken%28__updatecontext_%29.md): Sets the current Automatic Sign-In token.

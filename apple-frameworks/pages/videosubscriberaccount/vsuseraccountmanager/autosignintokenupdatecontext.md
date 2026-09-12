> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsuseraccountmanager/autosignintokenupdatecontext](https://developer.apple.com/documentation/videosubscriberaccount/vsuseraccountmanager/autosignintokenupdatecontext)

# VSUserAccountManager.AutoSignInTokenUpdateContext

**Framework:** Video Subscriber Account  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · tvOS 26.0+

An object that contains information about a person’s choice in the Automatic Sign-In prompt.

## Declaration

```swift
struct AutoSignInTokenUpdateContext
```

## Mentioned In

- [Signing people in to their media accounts automatically](../signing-people-in-to-media-apps-automatically.md)

<a id="overview"></a>

## Overview

The framework returns an instance of this structure when your app calls [requestAutoSignInAuthorization()](requestautosigninauthorization%28%29.md) to prompt a person for approval to opt in to Automatic Sign-In.

Check the [authorization](../vsautosignintokenupdatecontext/authorization.md) property of this structure to determine the person’s answer to the prompt. If the value is [VSUserAccountManager.AutoSignInAuthorization.granted](autosigninauthorization/granted.md), generate a sign in token and pass the instance of this structure and the newly-generated token to the framework using the [updateAutoSignInToken(\_:updateContext:)](updateautosignintoken%28__updatecontext_%29.md) method.

## Topics

### Determining status

- [authorization](autosignintokenupdatecontext/authorization.md): A state that represents a person’s approval of Automatic Sign-In.

## See Also

### Signing people in automatically

- [VSUserAccountManager.AutoSignInToken](autosignintoken-swift.struct.md): A value that represents a person’s account and their consent to Automatic Sign-In.
- [VSUserAccountManager.AutoSignInAuthorization](autosigninauthorization.md): The possible states the framework sets for Automatic Sign-In.
- [autoSignInToken](autosignintoken-swift.property.md): The current Automatic Sign-In token.
- [deleteAutoSignInToken()](deleteautosignintoken%28%29.md): Deletes the value of the current Automatic Sign-In token.
- [requestAutoSignInAuthorization()](requestautosigninauthorization%28%29.md): Presents a modal sheet that offers a person to opt in to Automatic Sign-In.
- [updateAutoSignInToken(\_:updateContext:)](updateautosignintoken%28__updatecontext_%29.md): Sets the current Automatic Sign-In token.

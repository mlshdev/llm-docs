> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsuseraccountmanager](https://developer.apple.com/documentation/videosubscriberaccount/vsuseraccountmanager)

# VSUserAccountManager (Swift)

**Framework:** Video Subscriber Account  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+

The object that coordinates your app’s user account actions.

## Declaration

```swift
class VSUserAccountManager
```

<a id="overview"></a>

## Overview

Don’t create `VSUserAccountManager` directly; use [shared](vsuseraccountmanager/shared.md).

## Topics

### Getting the account manager

- [shared](vsuseraccountmanager/shared.md): A shared instance of the user account manager class.

### Getting user accounts

- [userAccounts(options:)](vsuseraccountmanager/useraccounts%28options_%29.md): Returns a list of registered user accounts for your app.
- [VSUserAccountManager.QueryOptions](vsuseraccountmanager/queryoptions.md): Constants that represent options you use to fetch a list of user accounts.

### Updating a user account

- [update(\_:)](vsuseraccountmanager/update%28__%29.md): Registers a new user account.

### Signing people in automatically

- [VSUserAccountManager.AutoSignInToken](vsuseraccountmanager/autosignintoken-swift.struct.md): A value that represents a person’s account and their consent to Automatic Sign-In.
- [VSUserAccountManager.AutoSignInTokenUpdateContext](vsuseraccountmanager/autosignintokenupdatecontext.md): An object that contains information about a person’s choice in the Automatic Sign-In prompt.
- [VSUserAccountManager.AutoSignInAuthorization](vsuseraccountmanager/autosigninauthorization.md): The possible states the framework sets for Automatic Sign-In.
- [autoSignInToken](vsuseraccountmanager/autosignintoken-swift.property.md): The current Automatic Sign-In token.
- [deleteAutoSignInToken()](vsuseraccountmanager/deleteautosignintoken%28%29.md): Deletes the value of the current Automatic Sign-In token.
- [requestAutoSignInAuthorization()](vsuseraccountmanager/requestautosigninauthorization%28%29.md): Presents a modal sheet that offers a person to opt in to Automatic Sign-In.
- [updateAutoSignInToken(\_:updateContext:)](vsuseraccountmanager/updateautosignintoken%28__updatecontext_%29.md): Sets the current Automatic Sign-In token.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### User account management

- [Signing people in to their media accounts automatically](signing-people-in-to-media-apps-automatically.md): Implement single sign-on for media-streaming apps by managing a sign-in token on a person’s Apple Account.
- [VSUserAccount](vsuseraccount-swift.struct.md): An object that represents a user’s account.

# VSUserAccountManager (Objective-C)

**Framework:** Video Subscriber Account  
**Kind:** Class  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+

The object that coordinates your app’s user account actions.

## Declaration

```objectivec
@interface VSUserAccountManager : NSObject
```

<a id="overview"></a>

## Overview

Don’t create `VSUserAccountManager` directly; use [sharedUserAccountManager](vsuseraccountmanager/shared.md).

## Topics

### Getting the account manager

- [sharedUserAccountManager](vsuseraccountmanager/shared.md): A shared instance of the user account manager class.

### Getting user accounts

- [queryUserAccountsWithOptions:completion:](vsuseraccountmanager/queryuseraccountswithoptions_completion_.md): Returns a list of registered user accounts for your app.
- [VSUserAccountQueryOptions](vsuseraccountmanager/queryoptions.md): Constants that represent options you use to fetch a list of user accounts.

### Updating a user account

- [updateUserAccount:completion:](vsuseraccountmanager/updateuseraccount_completion_.md): Registers a new user account.

### Signing people in automatically

- [VSAutoSignInToken](vsautosignintoken.md): A value that represents a person’s account and their consent to Automatic Sign-In.
- [VSAutoSignInTokenUpdateContext](vsautosignintokenupdatecontext.md): An object that contains information about a person’s choice in the Automatic Sign-In prompt.
- [VSAutoSignInAuthorization](vsautosigninauthorization.md): The possible states the framework sets for Automatic Sign-In.
- [queryAutoSignInTokenWithCompletionHandler:](vsuseraccountmanager/queryautosignintokenwithcompletionhandler_.md): Retrieves the current Automatic Sign-In token.
- [deleteAutoSignInTokenWithCompletionHandler:](vsuseraccountmanager/deleteautosignintokenwithcompletionhandler_.md): Deletes the value of the current Automatic Sign-In token.
- [requestAutoSignInAuthorizationWithCompletionHandler:](vsuseraccountmanager/requestautosigninauthorizationwithcompletionhandler_.md): Presents a modal sheet that offers a person to opt in to Automatic Sign-In.
- [updateAutoSignInToken:updateContext:completionHandler:](vsuseraccountmanager/updateautosignintoken_updatecontext_completionhandler_.md): Sets the current Automatic Sign-In token.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### User account management

- [Signing people in to their media accounts automatically](signing-people-in-to-media-apps-automatically.md): Implement single sign-on for media-streaming apps by managing a sign-in token on a person’s Apple Account.
- [VSUserAccount](vsuseraccount-c.class.md): An object that represents a user’s account with a TV provider.

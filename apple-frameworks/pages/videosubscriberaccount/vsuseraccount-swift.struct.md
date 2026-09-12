> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videosubscriberaccount/vsuseraccount-swift.struct](https://developer.apple.com/documentation/videosubscriberaccount/vsuseraccount-swift.struct)

# VSUserAccount

**Framework:** Video Subscriber Account  
**Kind:** Structure  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS

An object that represents a user’s account.

## Declaration

```swift
struct VSUserAccount
```

<a id="overview"></a>

## Overview

There are two sources for a `VSUserAccount` instance:

- You create an instance when a person registers a new account or signs into an existing account in your app, and you call [update(\_:)](vsuseraccountmanager/update%28__%29.md) on [VSUserAccountManager](vsuseraccountmanager.md) with the instance.
- You fetch user accounts by calling [userAccounts(options:)](vsuseraccountmanager/useraccounts%28options_%29.md), which can return user accounts created on the current device, or user accounts registered on all the devices signed into the person’s iCloud account.

## Topics

### Creating user accounts

- [init(accountType:updateURL:)](vsuseraccount-swift.struct/init%28accounttype_updateurl_%29.md): Creates a user account object with a URL for account update requests.
- [VSUserAccount.AccountType](vsuseraccount-swift.struct/accounttype-swift.enum.md): Constants that represent whether a user has access to paid content.

### User account information

- [accountProviderIdentifier](vsuseraccount-swift.struct/accountprovideridentifier.md): A string that uniquely identifies a provider known to Apple that provides the user account.
- [accountType](vsuseraccount-swift.struct/accounttype-swift.property.md): A constant that represents whether a user has access to paid content.
- [authenticationData](vsuseraccount-swift.struct/authenticationdata.md): A string that represents an authentication token for the user account to authenticate with a provider.
- [billingIdentifier](vsuseraccount-swift.struct/billingidentifier.md): A string that Identifies the billing group associated with the user account’s subscription.
- [deviceCategory](vsuseraccount-swift.struct/devicecategory.md): A constant that indicates whether the device from which the user registered is mobile.
- [VSUserAccount.OriginatingDeviceCategory](vsuseraccount-swift.struct/originatingdevicecategory.md): Constants that represent whether the device from which the user originally registered is mobile.
- [identifier](vsuseraccount-swift.struct/identifier.md): A string you provide that uniquely identifies the account.
- [isFromCurrentDevice](vsuseraccount-swift.struct/isfromcurrentdevice.md): A Boolean value that indicates whether the user originated their account on the current device.
- [isSignedOut](vsuseraccount-swift.struct/issignedout.md): A Boolean value that indicates whether the user has signed out of their account.
- [requiresSystemTrust](vsuseraccount-swift.struct/requiressystemtrust.md): A Boolean value that indicates whether the update URL must have a system-trusted certificate.
- [subscriptionBillingCycleEndDate](vsuseraccount-swift.struct/subscriptionbillingcycleenddate.md): A date that indicates when the billing cycle ends for a paid account.
- [tierIdentifiers](vsuseraccount-swift.struct/tieridentifiers.md): An array of strings that identify a subset of content from your catalog that the subscriber can play.
- [updateURL](vsuseraccount-swift.struct/updateurl.md): A URL that points to the application’s JavaScript endpoint for update requests.

### Instance Properties

- [appleSubscription](vsuseraccount-swift.struct/applesubscription.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### User account management

- [Signing people in to their media accounts automatically](signing-people-in-to-media-apps-automatically.md): Implement single sign-on for media-streaming apps by managing a sign-in token on a person’s Apple Account.
- [VSUserAccountManager](vsuseraccountmanager.md): The object that coordinates your app’s user account actions.

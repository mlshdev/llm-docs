> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/account](https://developer.apple.com/documentation/financekit/account)

# Account

**Framework:** FinanceKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A structure that describes a financial account.

## Declaration

```swift
enum Account
```

<a id="overview"></a>

## Overview

Accounts can include a variety of financial account types such as a bank account, a credit card, or a college fund.

## Topics

### Enumeration Casess

- [Account.asset(\_:)](account/asset%28__%29.md): An asset account.
- [Account.liability(\_:)](account/liability%28__%29.md): A liability account.

### Instance Properties

- [accountDescription](account/accountdescription.md): A person’s description of this account.
- [assetAccount](account/assetaccount.md): An asset account.
- [currencyCode](account/currencycode.md): The ISO 4217 currency code that identifies the currency that denominates the account.
- [displayName](account/displayname.md): The name for this account that a person provided.
- [id](account/id.md): The unique account ID for this account.
- [institutionName](account/institutionname.md): The name of the institution that holds this account.
- [liabilityAccount](account/liabilityaccount.md): A liability account.
- [openingDate](account/openingdate.md): The date the account was opened, if known.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accounts

- [accounts(query:)](financestore/accounts%28query_%29.md): Returns a list of accounts a person added to their Wallet that meet the criteria in the provided account query.
- [accountHistory(since:isMonitoring:)](financestore/accounthistory%28since_ismonitoring_%29.md): Returns a list of accounts a person added since a time specified by the provided financial history token.
- [AssetAccount](assetaccount.md): A structure that describes the characteristics of an asset account.
- [LiabilityAccount](liabilityaccount.md): A structure that describes the characteristics of a liability account.

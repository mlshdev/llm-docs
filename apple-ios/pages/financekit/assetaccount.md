> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/assetaccount](https://developer.apple.com/documentation/financekit/assetaccount)

# AssetAccount

**Framework:** FinanceKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A structure that describes the characteristics of an asset account.

## Declaration

```swift
struct AssetAccount
```

<a id="overview"></a>

## Overview

An asset account includes accounts such as a bank account or a savings account.

## Topics

### Instance Properties

- [accountDescription](assetaccount/accountdescription.md): The description of the account.
- [currencyCode](assetaccount/currencycode.md): ISO 4217 currency code that identifies the currency in which the account is held.
- [displayName](assetaccount/displayname.md): The name for the account given by a person.
- [id](assetaccount/id.md): A unique account identifier.
- [institutionName](assetaccount/institutionname.md): The name of the institution that holds the account.
- [openingDate](assetaccount/openingdate.md): The date the account was opened, if known.

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
- [LiabilityAccount](liabilityaccount.md): A structure that describes the characteristics of a liability account.
- [Account](account.md): A structure that describes a financial account.

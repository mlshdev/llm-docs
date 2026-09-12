> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/liabilityaccount](https://developer.apple.com/documentation/financekit/liabilityaccount)

# LiabilityAccount

**Framework:** FinanceKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A structure that describes the characteristics of a liability account.

## Declaration

```swift
struct LiabilityAccount
```

<a id="overview"></a>

## Overview

A liability account includes accounts such as credit cards.

## Topics

### Instance Properties

- [accountDescription](liabilityaccount/accountdescription.md): A description of the account.
- [creditInformation](liabilityaccount/creditinformation.md): Information regarding credits to the account.
- [currencyCode](liabilityaccount/currencycode.md): An ISO 4217 currency code that identifies the currency in which the account is held.
- [displayName](liabilityaccount/displayname.md): The name for the account given by an individual.
- [id](liabilityaccount/id.md): A unique account ID.
- [institutionName](liabilityaccount/institutionname.md): The name of the institution that holds the account.
- [openingDate](liabilityaccount/openingdate.md): The date the account was opened, if known.

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
- [Account](account.md): A structure that describes a financial account.

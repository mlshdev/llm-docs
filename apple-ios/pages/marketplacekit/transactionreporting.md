> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/transactionreporting](https://developer.apple.com/documentation/marketplacekit/transactionreporting)

# TransactionReporting

**Framework:** MarketplaceKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An enumeration that provides token services for transaction reporting.

## Declaration

```swift
enum TransactionReporting
```

## Mentioned In

- [Creating an alternative app marketplace](creating-an-alternative-app-marketplace.md)
- [Distributing your app on an alternative app marketplace](distributing-your-app-on-an-alternative-marketplace.md)
- [Reporting transactions for the Core Technology Commission](reporting-transactions-for-core-technology-commission.md)

<a id="overview"></a>

## Overview

Track any eligible purchases, related to your app, that you offer a person and report them to Apple using tokens provided by this enumeration. For more information, see [Reporting transactions for the Core Technology Commission](reporting-transactions-for-core-technology-commission.md).

## Topics

### Retrieving a token

- [token(for:)](transactionreporting/token%28for_%29.md): Returns a token of the specified type.

### Specifying the token type

- [TransactionReporting.TokenType](transactionreporting/tokentype.md): The type of transaction reporting token.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Token and transaction reporting

- [Reporting transactions for the Core Technology Commission](reporting-transactions-for-core-technology-commission.md): Track any eligible purchases that you offer a person that relate to your app and report them to Apple using a token.

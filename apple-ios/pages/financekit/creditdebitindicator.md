> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/creditdebitindicator](https://developer.apple.com/documentation/financekit/creditdebitindicator)

# CreditDebitIndicator

**Framework:** FinanceKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Values that the framework uses to describe transactions as credits or debits.

## Declaration

```swift
enum CreditDebitIndicator
```

## Topics

### Enumeration Cases

- [CreditDebitIndicator.credit](creditdebitindicator/credit.md): A value that indicates an amount which increases an asset or decreases a liability.
- [CreditDebitIndicator.debit](creditdebitindicator/debit.md): A value that indicates an amount which increases a liability or decreases an asset.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Balances

- [accountBalances(query:)](financestore/accountbalances%28query_%29.md): Returns a list of balances that meet the criteria in the provided account query.
- [accountBalanceHistory(forAccountID:since:isMonitoring:)](financestore/accountbalancehistory%28foraccountid_since_ismonitoring_%29.md): Returns the account balance history since a time specified by the provided financial history token.
- [AccountBalance](accountbalance.md): A structure that describes the financial balance of an account at a specific point in time. The financial balance of an account at a specific point in time.
- [AccountBalanceQuery](accountbalancequery.md): A structure that defines an account balance query.
- [Balance](balance.md): A structure that describes an account balance.
- [CurrentBalance](currentbalance.md): Values that describe the state of an account’s credit balance.

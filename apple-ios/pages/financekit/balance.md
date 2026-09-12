> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/balance](https://developer.apple.com/documentation/financekit/balance)

# Balance

**Framework:** FinanceKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A structure that describes an account balance.

## Declaration

```swift
struct Balance
```

## Topics

### Instance Properties

- [amount](balance/amount.md): The amount of the balance.
- [asOfDate](balance/asofdate.md): The date and time the system calculated the balance.
- [creditDebitIndicator](balance/creditdebitindicator.md): A value that indicates whether the balance is a credit or a debit balance.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Balances

- [accountBalances(query:)](financestore/accountbalances%28query_%29.md): Returns a list of balances that meet the criteria in the provided account query.
- [accountBalanceHistory(forAccountID:since:isMonitoring:)](financestore/accountbalancehistory%28foraccountid_since_ismonitoring_%29.md): Returns the account balance history since a time specified by the provided financial history token.
- [AccountBalance](accountbalance.md): A structure that describes the financial balance of an account at a specific point in time. The financial balance of an account at a specific point in time.
- [AccountBalanceQuery](accountbalancequery.md): A structure that defines an account balance query.
- [CreditDebitIndicator](creditdebitindicator.md): Values that the framework uses to describe transactions as credits or debits.
- [CurrentBalance](currentbalance.md): Values that describe the state of an account’s credit balance.

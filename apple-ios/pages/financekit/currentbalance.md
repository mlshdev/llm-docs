> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/currentbalance](https://developer.apple.com/documentation/financekit/currentbalance)

# CurrentBalance

**Framework:** FinanceKit  
**Kind:** Enumeration  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Values that describe the state of an account’s credit balance.

## Declaration

```swift
enum CurrentBalance
```

## Topics

### Enumeration Cases

- [CurrentBalance.available(\_:)](currentbalance/available%28__%29.md): Only the available balance is present.
- [CurrentBalance.availableAndBooked(available:booked:)](currentbalance/availableandbooked%28available_booked_%29.md): Both available and booked balances are present.
- [CurrentBalance.booked(\_:)](currentbalance/booked%28__%29.md): Only the booked balance is present.

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
- [Balance](balance.md): A structure that describes an account balance.
- [CreditDebitIndicator](creditdebitindicator.md): Values that the framework uses to describe transactions as credits or debits.

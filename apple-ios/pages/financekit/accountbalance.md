> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/accountbalance](https://developer.apple.com/documentation/financekit/accountbalance)

# AccountBalance

**Framework:** FinanceKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A structure that describes the financial balance of an account at a specific point in time. The financial balance of an account at a specific point in time.

## Declaration

```swift
struct AccountBalance
```

## Topics

### Instance Properties

- [accountID](accountbalance/accountid.md): The account ID the balance belongs to.
- [available](accountbalance/available.md): The available balance, if present.
- [booked](accountbalance/booked.md): The booked balance, if present.
- [currencyCode](accountbalance/currencycode.md): The balance currency.
- [currentBalance](accountbalance/currentbalance.md): The balance at a particular moment in time.
- [id](accountbalance/id.md): A unique account balance ID.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Balances

- [accountBalances(query:)](financestore/accountbalances%28query_%29.md): Returns a list of balances that meet the criteria in the provided account query.
- [accountBalanceHistory(forAccountID:since:isMonitoring:)](financestore/accountbalancehistory%28foraccountid_since_ismonitoring_%29.md): Returns the account balance history since a time specified by the provided financial history token.
- [AccountBalanceQuery](accountbalancequery.md): A structure that defines an account balance query.
- [Balance](balance.md): A structure that describes an account balance.
- [CreditDebitIndicator](creditdebitindicator.md): Values that the framework uses to describe transactions as credits or debits.
- [CurrentBalance](currentbalance.md): Values that describe the state of an account’s credit balance.

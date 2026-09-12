> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/accountbalancequery](https://developer.apple.com/documentation/financekit/accountbalancequery)

# AccountBalanceQuery

**Framework:** FinanceKit  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A structure that defines an account balance query.

## Declaration

```swift
struct AccountBalanceQuery
```

<a id="overview"></a>

## Overview

Use an `AccountBalanceQuery` to find and filter specific balances in a person’s accounts.

## Topics

### Initializers

- [init(sortDescriptors:predicate:limit:offset:)](accountbalancequery/init%28sortdescriptors_predicate_limit_offset_%29.md): Creates a new account balance query structure with the provided sort descriptors.

### Type Methods

- [predicate(availableSince:until:)](accountbalancequery/predicate%28availablesince_until_%29.md): A predicate that returns available account balances since a specified date, and, optionally, until another date.
- [predicate(bookedSince:until:)](accountbalancequery/predicate%28bookedsince_until_%29.md): A predicate that returns booked account balances since a specified date until another date.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Balances

- [accountBalances(query:)](financestore/accountbalances%28query_%29.md): Returns a list of balances that meet the criteria in the provided account query.
- [accountBalanceHistory(forAccountID:since:isMonitoring:)](financestore/accountbalancehistory%28foraccountid_since_ismonitoring_%29.md): Returns the account balance history since a time specified by the provided financial history token.
- [AccountBalance](accountbalance.md): A structure that describes the financial balance of an account at a specific point in time. The financial balance of an account at a specific point in time.
- [Balance](balance.md): A structure that describes an account balance.
- [CreditDebitIndicator](creditdebitindicator.md): Values that the framework uses to describe transactions as credits or debits.
- [CurrentBalance](currentbalance.md): Values that describe the state of an account’s credit balance.

> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/financestore](https://developer.apple.com/documentation/financekit/financestore)

# FinanceStore

**Framework:** FinanceKit  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Secure storage for Apple Wallet orders.

## Declaration

```swift
class FinanceStore
```

## Topics

### Retrieving the shared instance

- [shared](financestore/shared.md): The shared instance of the store that you make calls through.

### Determining data availability

- [isDataAvailable(\_:)](financestore/isdataavailable%28__%29.md): Returns a Boolean value that indicates if data that represents the provided type is available in the finance store.

### Checking authorization status and requesting authorization

- [authorizationStatus()](financestore/authorizationstatus%28%29.md): Checks the authorization status for the calling application.
- [requestAuthorization()](financestore/requestauthorization%28%29.md): Prompts a person to give FinanceKit authorization to access financial data.

### Finding accounts

- [accountHistory(since:isMonitoring:)](financestore/accounthistory%28since_ismonitoring_%29.md): Returns a list of accounts a person added since a time specified by the provided financial history token.
- [accounts(query:)](financestore/accounts%28query_%29.md): Returns a list of accounts a person added to their Wallet that meet the criteria in the provided account query.

### Getting account balances

- [accountBalances(query:)](financestore/accountbalances%28query_%29.md): Returns a list of balances that meet the criteria in the provided account query.
- [accountBalanceHistory(forAccountID:since:isMonitoring:)](financestore/accountbalancehistory%28foraccountid_since_ismonitoring_%29.md): Returns the account balance history since a time specified by the provided financial history token.

### Searching for a specific order

- [containsOrder(matching:updatedDate:)](financestore/containsorder%28matching_updateddate_%29.md): Checks whether the finance store contains an order.

### Saving or updating orders

- [saveOrder(signedArchive:)](financestore/saveorder%28signedarchive_%29.md): Adds an order to the store or updates an existing order.

### Monitoring transactions

- [transactionHistory(forAccountID:since:isMonitoring:)](financestore/transactionhistory%28foraccountid_since_ismonitoring_%29.md): Returns the transactions for the specified account ID, optional starting time, and monitoring indicator for long running transaction queries.
- [transactions(query:)](financestore/transactions%28query_%29.md): Returns transactions that match the provided transaction query.

### Enumerations

- [FinanceStore.ContainsOrderResult](financestore/containsorderresult.md): Result type for queries against the finance store’s orders.
- [FinanceStore.DataType](financestore/datatype.md): Values that describe the kinds of data in the finance store.
- [FinanceStore.SaveOrderResult](financestore/saveorderresult.md): Result type for the finance store’s save order method.
- [FinanceStore.BackgroundDataType](financestore/backgrounddatatype.md): Types of data in the finance store supported by background delivery.
- [FinanceStore.UpdateFrequency](financestore/updatefrequency.md): Frequencies of background delivery updates.

### Structures

- [FinanceStore.Changes](financestore/changes.md): A structure that records changes to the finance store.
- [FinanceStore.History](financestore/history.md): A structure the framework uses to collect and iterate over finance store model objects.
- [FinanceStore.HistoryToken](financestore/historytoken.md): A structure that describes the starting point to use for financial data queries.

### Instance Methods

- [disableAllBackgroundDelivery()](financestore/disableallbackgrounddelivery%28%29.md): Disables background delivery for all data types.
- [disableBackgroundDelivery(for:)](financestore/disablebackgrounddelivery%28for_%29.md): Disables background delivery for the specified types.
- [enableBackgroundDelivery(for:frequency:)](financestore/enablebackgrounddelivery%28for_frequency_%29.md): Enables background delivery for the specified types and frequency.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

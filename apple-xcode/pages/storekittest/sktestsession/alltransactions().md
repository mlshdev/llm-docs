> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/alltransactions()](https://developer.apple.com/documentation/storekittest/sktestsession/alltransactions())

# allTransactions() (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Gets a list of all transactions in the test environment.

## Declaration

```swift
func allTransactions() -> [SKTestTransaction]
```

<a id="return-value"></a>

## Return Value

An array that contains all transactions.

<a id="discussion"></a>

## Discussion

This array contains all transactions, including those that don’t appear in the receipt, such as:

- Failed transactions
- Pending Ask to Buy transactions
- Purchases of consumable products

Use this list to work with Ask to Buy, to refund a specific transaction, or delete a transaction from the history, so you can repeat the test.

## See Also

### Managing transactions in the test environment

- [deleteTransaction(identifier:)](deletetransaction%28identifier_%29.md): Deletes a specific transaction from the test environment.
- [clearTransactions()](cleartransactions%28%29.md): Removes all transactions from the test environment.

# allTransactions (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Gets a list of all transactions in the test environment.

## Declaration

```objectivec
- (NSArray<SKTestTransaction *> *) allTransactions;
```

<a id="return-value"></a>

## Return Value

An array that contains all transactions.

<a id="discussion"></a>

## Discussion

This array contains all transactions, including those that don’t appear in the receipt, such as:

- Failed transactions
- Pending Ask to Buy transactions
- Purchases of consumable products

Use this list to work with Ask to Buy, to refund a specific transaction, or delete a transaction from the history, so you can repeat the test.

## See Also

### Managing transactions in the test environment

- [deleteTransactionWithIdentifier:error:](deletetransaction%28identifier_%29.md): Deletes a specific transaction from the test environment.
- [clearTransactions](cleartransactions%28%29.md): Removes all transactions from the test environment.

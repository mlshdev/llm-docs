> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/deletetransaction(identifier:)](https://developer.apple.com/documentation/storekittest/sktestsession/deletetransaction(identifier:))

# deleteTransaction(identifier:) (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Deletes a specific transaction from the test environment.

## Declaration

```swift
func deleteTransaction(identifier: Int) throws
```

## Parameters

- `identifier`: The transaction identifier.

<a id="discussion"></a>

## Discussion

When you delete a transaction, the test environment also removes the existing transaction from the receipt. Some transactions don’t appear in the receipt, including finished consumable purchases, failed purchases, Ask To Buy transactions pending approval, and restored purchases. Deleting a transaction deletes its child transactions, for example:

- Deleting an original subscription transaction deletes all related renewal transactions.
- Deleting a transaction deletes any associated restored transactions.

## See Also

### Managing transactions in the test environment

- [allTransactions()](alltransactions%28%29.md): Gets a list of all transactions in the test environment.
- [clearTransactions()](cleartransactions%28%29.md): Removes all transactions from the test environment.

# deleteTransactionWithIdentifier:error: (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Deletes a specific transaction from the test environment.

## Declaration

```objectivec
- (BOOL) deleteTransactionWithIdentifier:(NSUInteger) identifier error:(NSError **) error;
```

## Parameters

- `identifier`: The transaction identifier.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation is successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="discussion"></a>

## Discussion

When you delete a transaction, the test environment also removes the existing transaction from the receipt. Some transactions don’t appear in the receipt, including finished consumable purchases, failed purchases, Ask To Buy transactions pending approval, and restored purchases. Deleting a transaction deletes its child transactions, for example:

- Deleting an original subscription transaction deletes all related renewal transactions.
- Deleting a transaction deletes any associated restored transactions.

## See Also

### Managing transactions in the test environment

- [allTransactions](alltransactions%28%29.md): Gets a list of all transactions in the test environment.
- [clearTransactions](cleartransactions%28%29.md): Removes all transactions from the test environment.

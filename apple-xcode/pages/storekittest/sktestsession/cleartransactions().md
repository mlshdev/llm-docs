> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/cleartransactions()](https://developer.apple.com/documentation/storekittest/sktestsession/cleartransactions())

# clearTransactions() (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Removes all transactions from the test environment.

## Declaration

```swift
func clearTransactions()
```

<a id="discussion"></a>

## Discussion

After you clear the transactions from the test environment, the test environment produces an empty receipt. Use this method to enable repeating tests for one-time purchases.

To revert all the settings in the test environment to those in the StoreKit configuration file, see [resetToDefaultState()](resettodefaultstate%28%29.md).

## See Also

### Managing transactions in the test environment

- [allTransactions()](alltransactions%28%29.md): Gets a list of all transactions in the test environment.
- [deleteTransaction(identifier:)](deletetransaction%28identifier_%29.md): Deletes a specific transaction from the test environment.

# clearTransactions (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Removes all transactions from the test environment.

## Declaration

```objectivec
- (void) clearTransactions;
```

<a id="discussion"></a>

## Discussion

After you clear the transactions from the test environment, the test environment produces an empty receipt. Use this method to enable repeating tests for one-time purchases.

To revert all the settings in the test environment to those in the StoreKit configuration file, see [resetToDefaultState](resettodefaultstate%28%29.md).

## See Also

### Managing transactions in the test environment

- [allTransactions](alltransactions%28%29.md): Gets a list of all transactions in the test environment.
- [deleteTransactionWithIdentifier:error:](deletetransaction%28identifier_%29.md): Deletes a specific transaction from the test environment.

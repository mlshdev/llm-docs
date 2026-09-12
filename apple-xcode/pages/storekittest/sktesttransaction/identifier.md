> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktesttransaction/identifier](https://developer.apple.com/documentation/storekittest/sktesttransaction/identifier)

# identifier (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The identifier of the transaction in the testing environment.

## Declaration

```swift
var identifier: Int { get }
```

<a id="discussion"></a>

## Discussion

To get a list of all the transactions available in the testing environment, see [allTransactions()](../sktestsession/alltransactions%28%29.md).

Use this [identifier](identifier.md) if you want to perform actions on the transaction in the testing environment, such as:

- [approveAskToBuyTransaction(identifier:)](../sktestsession/approveasktobuytransaction%28identifier_%29.md)
- [consentToPriceIncreaseForTransaction(identifier:)](../sktestsession/consenttopriceincreasefortransaction%28identifier_%29.md)
- [declineAskToBuyTransaction(identifier:)](../sktestsession/declineasktobuytransaction%28identifier_%29.md)
- [declinePriceIncreaseForTransaction(identifier:)](../sktestsession/declinepriceincreasefortransaction%28identifier_%29.md)
- [deleteTransaction(identifier:)](../sktestsession/deletetransaction%28identifier_%29.md)
- [disableAutoRenewForTransaction(identifier:)](../sktestsession/disableautorenewfortransaction%28identifier_%29.md)
- [enableAutoRenewForTransaction(identifier:)](../sktestsession/enableautorenewfortransaction%28identifier_%29.md)
- [refundTransaction(identifier:)](../sktestsession/refundtransaction%28identifier_%29.md)
- [requestPriceIncreaseConsentForTransaction(identifier:)](../sktestsession/requestpriceincreaseconsentfortransaction%28identifier_%29.md)
- [resolveIssueForTransaction(identifier:)](../sktestsession/resolveissuefortransaction%28identifier_%29.md)

## See Also

### Identifying Transactions and Products

- [originalTransactionIdentifier](originaltransactionidentifier.md): The identifier of the original transaction.
- [productIdentifier](productidentifier.md): An identifier that uniquely represents a product, which you provide in the StoreKit configuration file.

# identifier (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The identifier of the transaction in the testing environment.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger identifier;
```

<a id="discussion"></a>

## Discussion

To get a list of all the transactions available in the testing environment, see [allTransactions](../sktestsession/alltransactions%28%29.md).

Use this [identifier](identifier.md) if you want to perform actions on the transaction in the testing environment, such as:

- [approveAskToBuyTransactionWithIdentifier:error:](../sktestsession/approveasktobuytransaction%28identifier_%29.md)
- [consentToPriceIncreaseForTransactionWithIdentifier:error:](../sktestsession/consenttopriceincreasefortransaction%28identifier_%29.md)
- [declineAskToBuyTransactionWithIdentifier:error:](../sktestsession/declineasktobuytransaction%28identifier_%29.md)
- [declinePriceIncreaseForTransactionWithIdentifier:error:](../sktestsession/declinepriceincreasefortransaction%28identifier_%29.md)
- [deleteTransactionWithIdentifier:error:](../sktestsession/deletetransaction%28identifier_%29.md)
- [disableAutoRenewForTransactionWithIdentifier:error:](../sktestsession/disableautorenewfortransaction%28identifier_%29.md)
- [enableAutoRenewForTransactionWithIdentifier:error:](../sktestsession/enableautorenewfortransaction%28identifier_%29.md)
- [refundTransactionWithIdentifier:error:](../sktestsession/refundtransaction%28identifier_%29.md)
- [requestPriceIncreaseConsentForTransactionWithIdentifier:error:](../sktestsession/requestpriceincreaseconsentfortransaction%28identifier_%29.md)
- [resolveIssueForTransactionWithIdentifier:error:](../sktestsession/resolveissuefortransaction%28identifier_%29.md)

## See Also

### Identifying Transactions and Products

- [originalTransactionIdentifier](originaltransactionidentifier.md): The identifier of the original transaction.
- [productIdentifier](productidentifier.md): An identifier that uniquely represents a product, which you provide in the StoreKit configuration file.

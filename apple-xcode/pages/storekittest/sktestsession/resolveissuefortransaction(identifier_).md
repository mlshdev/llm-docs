> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/resolveissuefortransaction(identifier:)](https://developer.apple.com/documentation/storekittest/sktestsession/resolveissuefortransaction(identifier:))

# resolveIssueForTransaction(identifier:) (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Simulates resolving an issue when you test interrupted purchases or billing retry scenarios.

## Declaration

```swift
func resolveIssueForTransaction(identifier: Int) throws
```

## Parameters

- `identifier`: The transaction [identifier](../sktesttransaction/identifier.md) for the transaction that the test environment resolves.

<a id="discussion"></a>

## Discussion

Call this method to simulate a user resolving an issue that prevents a purchase, such as an interrupted purchase or a billing issue. You enable the testing environment to simulate the issues by setting the [interruptedPurchasesEnabled](interruptedpurchasesenabled.md) and [billingGracePeriodIsEnabled](billinggraceperiodisenabled.md) properties, respectively.

In the production environment, users resolve the issues by completing actions outside of your app. For example, users may need to agree to new terms and conditions or update a payment card.

When you call [resolveIssueForTransaction(identifier:)](resolveissuefortransaction%28identifier_%29.md), your app receives the new transaction in the [updates](https://developer.apple.com/documentation/storekit/transaction/updates) sequence or the [transactionObservers](https://developer.apple.com/documentation/storekit/skpaymentqueue/transactionobservers).

## See Also

### Testing interrupted purchases

- [interruptedPurchasesEnabled](interruptedpurchasesenabled.md): A Boolean value that determines whether the test environment simulates an interrupted purchase.

# resolveIssueForTransactionWithIdentifier:error: (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Simulates resolving an issue when you test interrupted purchases or billing retry scenarios.

## Declaration

```objectivec
- (BOOL) resolveIssueForTransactionWithIdentifier:(NSUInteger) identifier error:(NSError **) error;
```

## Parameters

- `identifier`: The transaction [identifier](../sktesttransaction/identifier.md) for the transaction that the test environment resolves.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation is successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="discussion"></a>

## Discussion

Call this method to simulate a user resolving an issue that prevents a purchase, such as an interrupted purchase or a billing issue. You enable the testing environment to simulate the issues by setting the [interruptedPurchasesEnabled](interruptedpurchasesenabled.md) and [billingGracePeriodEnabled](billinggraceperiodisenabled.md) properties, respectively.

In the production environment, users resolve the issues by completing actions outside of your app. For example, users may need to agree to new terms and conditions or update a payment card.

When you call [resolveIssueForTransactionWithIdentifier:error:](resolveissuefortransaction%28identifier_%29.md), your app receives the new transaction in the [updates](https://developer.apple.com/documentation/storekit/transaction/updates) sequence or the [transactionObservers](https://developer.apple.com/documentation/storekit/skpaymentqueue/transactionobservers).

## See Also

### Testing interrupted purchases

- [interruptedPurchasesEnabled](interruptedpurchasesenabled.md): A Boolean value that determines whether the test environment simulates an interrupted purchase.

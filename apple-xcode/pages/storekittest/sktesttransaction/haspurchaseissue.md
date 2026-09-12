> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktesttransaction/haspurchaseissue](https://developer.apple.com/documentation/storekittest/sktesttransaction/haspurchaseissue)

# hasPurchaseIssue (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that indicates whether you resolve this transaction using the test framework functions.

## Declaration

```swift
var hasPurchaseIssue: Bool { get }
```

<a id="discussion"></a>

## Discussion

To test interrupted purchases, first set [interruptedPurchasesEnabled](../sktestsession/interruptedpurchasesenabled.md) to `true` before making a purchase. If [hasPurchaseIssue](haspurchaseissue.md) value is `true`, then resolve the identified transaction by calling [resolveIssueForTransaction(identifier:)](../sktestsession/resolveissuefortransaction%28identifier_%29.md).

## See Also

### Getting Test Environment States

- [autoRenewingEnabled](autorenewingenabled.md): A Boolean value that indicates whether automatic renewal is enabled for the subscription.
- [isPendingPriceIncreaseConsent](ispendingpriceincreaseconsent.md): A Boolean value that indicates whether the auto-renewable subscription has a price increase that’s awaiting user consent in the test environment.
- [pendingAskToBuyConfirmation](pendingasktobuyconfirmation.md): A Boolean value that indicates whether the transaction is awaiting an Ask to Buy confirmation.

# hasPurchaseIssue (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that indicates whether you resolve this transaction using the test framework functions.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasPurchaseIssue;
```

<a id="discussion"></a>

## Discussion

To test interrupted purchases, first set [interruptedPurchasesEnabled](../sktestsession/interruptedpurchasesenabled.md) to `true` before making a purchase. If [hasPurchaseIssue](haspurchaseissue.md) value is `true`, then resolve the identified transaction by calling [resolveIssueForTransactionWithIdentifier:error:](../sktestsession/resolveissuefortransaction%28identifier_%29.md).

## See Also

### Getting Test Environment States

- [autoRenewingEnabled](autorenewingenabled.md): A Boolean value that indicates whether automatic renewal is enabled for the subscription.
- [pendingPriceIncreaseConsent](ispendingpriceincreaseconsent.md): A Boolean value that indicates whether the auto-renewable subscription has a price increase that’s awaiting user consent in the test environment.
- [pendingAskToBuyConfirmation](pendingasktobuyconfirmation.md): A Boolean value that indicates whether the transaction is awaiting an Ask to Buy confirmation.

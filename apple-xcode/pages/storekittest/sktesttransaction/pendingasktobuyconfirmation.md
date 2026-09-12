> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktesttransaction/pendingasktobuyconfirmation](https://developer.apple.com/documentation/storekittest/sktesttransaction/pendingasktobuyconfirmation)

# pendingAskToBuyConfirmation (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that indicates whether the transaction is awaiting an Ask to Buy confirmation.

## Declaration

```swift
var pendingAskToBuyConfirmation: Bool { get }
```

<a id="discussion"></a>

## Discussion

To test an Ask to Buy scenario, first set [askToBuyEnabled](../sktestsession/asktobuyenabled.md) to `true` before making a purchase. If [pendingAskToBuyConfirmation](pendingasktobuyconfirmation.md) is `true`, approve the transaction by calling [approveAskToBuyTransaction(identifier:)](../sktestsession/approveasktobuytransaction%28identifier_%29.md) , or decline it by calling [declineAskToBuyTransaction(identifier:)](../sktestsession/declineasktobuytransaction%28identifier_%29.md).

## See Also

### Getting Test Environment States

- [autoRenewingEnabled](autorenewingenabled.md): A Boolean value that indicates whether automatic renewal is enabled for the subscription.
- [hasPurchaseIssue](haspurchaseissue.md): A Boolean value that indicates whether you resolve this transaction using the test framework functions.
- [isPendingPriceIncreaseConsent](ispendingpriceincreaseconsent.md): A Boolean value that indicates whether the auto-renewable subscription has a price increase that’s awaiting user consent in the test environment.

# pendingAskToBuyConfirmation (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that indicates whether the transaction is awaiting an Ask to Buy confirmation.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL pendingAskToBuyConfirmation;
```

<a id="discussion"></a>

## Discussion

To test an Ask to Buy scenario, first set [askToBuyEnabled](../sktestsession/asktobuyenabled.md) to `true` before making a purchase. If [pendingAskToBuyConfirmation](pendingasktobuyconfirmation.md) is `true`, approve the transaction by calling [approveAskToBuyTransactionWithIdentifier:error:](../sktestsession/approveasktobuytransaction%28identifier_%29.md) , or decline it by calling [declineAskToBuyTransactionWithIdentifier:error:](../sktestsession/declineasktobuytransaction%28identifier_%29.md).

## See Also

### Getting Test Environment States

- [autoRenewingEnabled](autorenewingenabled.md): A Boolean value that indicates whether automatic renewal is enabled for the subscription.
- [hasPurchaseIssue](haspurchaseissue.md): A Boolean value that indicates whether you resolve this transaction using the test framework functions.
- [pendingPriceIncreaseConsent](ispendingpriceincreaseconsent.md): A Boolean value that indicates whether the auto-renewable subscription has a price increase that’s awaiting user consent in the test environment.

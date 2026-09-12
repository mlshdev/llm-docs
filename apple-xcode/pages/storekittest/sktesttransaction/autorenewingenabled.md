> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktesttransaction/autorenewingenabled](https://developer.apple.com/documentation/storekittest/sktesttransaction/autorenewingenabled)

# autoRenewingEnabled (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that indicates whether automatic renewal is enabled for the subscription.

## Declaration

```swift
var autoRenewingEnabled: Bool { get }
```

<a id="discussion"></a>

## Discussion

By default, the system creates subscriptions with auto-renew enabled. To disable auto-renew, call [disableAutoRenewForTransaction(identifier:)](../sktestsession/disableautorenewfortransaction%28identifier_%29.md).

## See Also

### Getting Test Environment States

- [hasPurchaseIssue](haspurchaseissue.md): A Boolean value that indicates whether you resolve this transaction using the test framework functions.
- [isPendingPriceIncreaseConsent](ispendingpriceincreaseconsent.md): A Boolean value that indicates whether the auto-renewable subscription has a price increase that’s awaiting user consent in the test environment.
- [pendingAskToBuyConfirmation](pendingasktobuyconfirmation.md): A Boolean value that indicates whether the transaction is awaiting an Ask to Buy confirmation.

# autoRenewingEnabled (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

A Boolean value that indicates whether automatic renewal is enabled for the subscription.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL autoRenewingEnabled;
```

<a id="discussion"></a>

## Discussion

By default, the system creates subscriptions with auto-renew enabled. To disable auto-renew, call [disableAutoRenewForTransactionWithIdentifier:error:](../sktestsession/disableautorenewfortransaction%28identifier_%29.md).

## See Also

### Getting Test Environment States

- [hasPurchaseIssue](haspurchaseissue.md): A Boolean value that indicates whether you resolve this transaction using the test framework functions.
- [pendingPriceIncreaseConsent](ispendingpriceincreaseconsent.md): A Boolean value that indicates whether the auto-renewable subscription has a price increase that’s awaiting user consent in the test environment.
- [pendingAskToBuyConfirmation](pendingasktobuyconfirmation.md): A Boolean value that indicates whether the transaction is awaiting an Ask to Buy confirmation.

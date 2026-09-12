> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktesttransaction/ispendingpriceincreaseconsent](https://developer.apple.com/documentation/storekittest/sktesttransaction/ispendingpriceincreaseconsent)

# isPendingPriceIncreaseConsent (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+ · watchOS 8.5+

A Boolean value that indicates whether the auto-renewable subscription has a price increase that’s awaiting user consent in the test environment.

## Declaration

```swift
var isPendingPriceIncreaseConsent: Bool { get }
```

<a id="discussion"></a>

## Discussion

This value applies only to subscription price increases that require customer consent in the test environment.

## See Also

### Getting Test Environment States

- [autoRenewingEnabled](autorenewingenabled.md): A Boolean value that indicates whether automatic renewal is enabled for the subscription.
- [hasPurchaseIssue](haspurchaseissue.md): A Boolean value that indicates whether you resolve this transaction using the test framework functions.
- [pendingAskToBuyConfirmation](pendingasktobuyconfirmation.md): A Boolean value that indicates whether the transaction is awaiting an Ask to Buy confirmation.

# pendingPriceIncreaseConsent (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+ · watchOS 8.5+

A Boolean value that indicates whether the auto-renewable subscription has a price increase that’s awaiting user consent in the test environment.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL pendingPriceIncreaseConsent;
```

<a id="discussion"></a>

## Discussion

This value applies only to subscription price increases that require customer consent in the test environment.

## See Also

### Getting Test Environment States

- [autoRenewingEnabled](autorenewingenabled.md): A Boolean value that indicates whether automatic renewal is enabled for the subscription.
- [hasPurchaseIssue](haspurchaseissue.md): A Boolean value that indicates whether you resolve this transaction using the test framework functions.
- [pendingAskToBuyConfirmation](pendingasktobuyconfirmation.md): A Boolean value that indicates whether the transaction is awaiting an Ask to Buy confirmation.

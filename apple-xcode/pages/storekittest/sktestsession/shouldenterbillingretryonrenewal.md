> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/shouldenterbillingretryonrenewal](https://developer.apple.com/documentation/storekittest/sktestsession/shouldenterbillingretryonrenewal)

# shouldEnterBillingRetryOnRenewal (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+ · watchOS 8.5+

A Boolean value that indicates whether the testing environment enters a billing retry state when an auto-renewable subscription renews.

## Declaration

```swift
var shouldEnterBillingRetryOnRenewal: Bool { get set }
```

<a id="discussion"></a>

## Discussion

The default value is `false`.

While this property is enabled, all renewals of auto-renewable subscriptions in the test environment fail due to a simulated billing issue and enter a billing retry state. To resolve the simulated billing issue, call [resolveIssueForTransaction(identifier:)](resolveissuefortransaction%28identifier_%29.md) for the affected auto-renewable subscription.

The [timeRate](timerate-swift.property.md) value determines the length of the billing retry period in the testing environment.

## See Also

### Testing billing retry and grace period

- [billingGracePeriodIsEnabled](billinggraceperiodisenabled.md): A Boolean value that indicates whether the test environment simulates a billing grace period for auto-renewable subscriptions.
- [resolveIssueForTransaction(identifier:)](resolveissuefortransaction%28identifier_%29.md): Simulates resolving an issue when you test interrupted purchases or billing retry scenarios.

# billingRetryOnRenewalEnabled (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+ · watchOS 8.5+

A Boolean value that indicates whether the testing environment enters a billing retry state when an auto-renewable subscription renews.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL billingRetryOnRenewalEnabled;
```

<a id="discussion"></a>

## Discussion

The default value is `false`.

While this property is enabled, all renewals of auto-renewable subscriptions in the test environment fail due to a simulated billing issue and enter a billing retry state. To resolve the simulated billing issue, call [resolveIssueForTransactionWithIdentifier:error:](resolveissuefortransaction%28identifier_%29.md) for the affected auto-renewable subscription.

The [timeRate](timerate-swift.property.md) value determines the length of the billing retry period in the testing environment.

## See Also

### Testing billing retry and grace period

- [billingGracePeriodEnabled](billinggraceperiodisenabled.md): A Boolean value that indicates whether the test environment simulates a billing grace period for auto-renewable subscriptions.
- [resolveIssueForTransactionWithIdentifier:error:](resolveissuefortransaction%28identifier_%29.md): Simulates resolving an issue when you test interrupted purchases or billing retry scenarios.

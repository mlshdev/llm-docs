> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/timerate-swift.property](https://developer.apple.com/documentation/storekittest/sktestsession/timerate-swift.property)

# timeRate (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The rate at which time passes for subscriptions in the test environment as compared to real time.

## Declaration

```swift
var timeRate: SKTestSession.TimeRate { get set }
```

<a id="discussion"></a>

## Discussion

Use the [timeRate](timerate-swift.property.md) value when you test auto-renewable subscriptions to speed up or slow down the time it takes for subscriptions to renew in the test environment. The default value is [SKTestSession.TimeRate.realTime](timerate-swift.enum/realtime.md). For maximum accelerated time, use [SKTestSession.TimeRate.oneRenewalEveryTwoSeconds](timerate-swift.enum/onerenewaleverytwoseconds.md).

To test subscription renewals, you can also call [forceRenewalOfSubscription(productIdentifier:)](forcerenewalofsubscription%28productidentifier_%29.md) to prompt a subscription to renew immediately.

The time rate also affects the length of the billing retry period and the billing grace period in the test environment. See the [SKTestSession.TimeRate](timerate-swift.enum.md) enumeration for the actual time values of each case.

Changing this property overrides its setting in the StoreKit configuration file for this test session. Call [resetToDefaultState()](resettodefaultstate%28%29.md) to revert all settings to those in the configuration file.

## See Also

### Testing subscription renewals

- [SKTestSession.TimeRate](timerate-swift.enum.md): The values for rates of time passing in the test environment.
- [enableAutoRenewForTransaction(identifier:)](enableautorenewfortransaction%28identifier_%29.md): Enables auto-renewing for an auto-renewable subscription in the test environment.
- [disableAutoRenewForTransaction(identifier:)](disableautorenewfortransaction%28identifier_%29.md): Disables auto-renewing for an auto-renewable subscription in the test environment.
- [forceRenewalOfSubscription(productIdentifier:)](forcerenewalofsubscription%28productidentifier_%29.md): Ends the previous subscription period and begins the next period in the test environment.
- [expireSubscription(productIdentifier:)](expiresubscription%28productidentifier_%29.md): Causes the identified auto-renewable subscription to expire immediately in the test environment.

# timeRate (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The rate at which time passes for subscriptions in the test environment as compared to real time.

## Declaration

```objectivec
@property (nonatomic, assign) SKTestTimeRate timeRate;
```

<a id="discussion"></a>

## Discussion

Use the [timeRate](timerate-swift.property.md) value when you test auto-renewable subscriptions to speed up or slow down the time it takes for subscriptions to renew in the test environment. The default value is [SKTestTimeRateRealTime](timerate-swift.enum/realtime.md). For maximum accelerated time, use [SKTestTimeRateOneRenewalEveryTwoSeconds](timerate-swift.enum/onerenewaleverytwoseconds.md).

To test subscription renewals, you can also call [forceRenewalOfSubscriptionWithProductIdentifier:error:](forcerenewalofsubscription%28productidentifier_%29.md) to prompt a subscription to renew immediately.

The time rate also affects the length of the billing retry period and the billing grace period in the test environment. See the [SKTestTimeRate](timerate-swift.enum.md) enumeration for the actual time values of each case.

Changing this property overrides its setting in the StoreKit configuration file for this test session. Call [resetToDefaultState](resettodefaultstate%28%29.md) to revert all settings to those in the configuration file.

## See Also

### Testing subscription renewals

- [SKTestTimeRate](timerate-swift.enum.md): The values for rates of time passing in the test environment.
- [enableAutoRenewForTransactionWithIdentifier:error:](enableautorenewfortransaction%28identifier_%29.md): Enables auto-renewing for an auto-renewable subscription in the test environment.
- [disableAutoRenewForTransactionWithIdentifier:error:](disableautorenewfortransaction%28identifier_%29.md): Disables auto-renewing for an auto-renewable subscription in the test environment.
- [forceRenewalOfSubscriptionWithProductIdentifier:error:](forcerenewalofsubscription%28productidentifier_%29.md): Ends the previous subscription period and begins the next period in the test environment.
- [expireSubscriptionWithProductIdentifier:error:](expiresubscription%28productidentifier_%29.md): Causes the identified auto-renewable subscription to expire immediately in the test environment.

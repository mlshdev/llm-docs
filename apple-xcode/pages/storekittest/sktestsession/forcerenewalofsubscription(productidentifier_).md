> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/forcerenewalofsubscription(productidentifier:)](https://developer.apple.com/documentation/storekittest/sktestsession/forcerenewalofsubscription(productidentifier:))

# forceRenewalOfSubscription(productIdentifier:) (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Ends the previous subscription period and begins the next period in the test environment.

## Declaration

```swift
func forceRenewalOfSubscription(productIdentifier: String) throws
```

## Parameters

- `productIdentifier`: The [productIdentifier](../sktesttransaction/productidentifier.md) of the auto-renewable subscription to renew.

<a id="discussion"></a>

## Discussion

Use this method to test how your code handles subscription renewals. When you call this method, the subscription expires at the time you call the method, and a new subscription period begins.

To force the subscription renewal, the testing environment changes the [expirationDate](https://developer.apple.com/documentation/storekit/transaction/expirationdate) property on the [Transaction](https://developer.apple.com/documentation/storekit/transaction) to the current system time. (If your app uses receipts, the receipt also shows this expiration date change). The testing environment also:

- Enables the subscription auto-renew state
- Removes a pending price increase, setting it to [Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus.noIncreasePending](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/noincreasepending)

The testing environment doesn’t change the billing retry state with this call.

You can also test subscription renewals by accelerating the time in the testing environment to speed up subscription renewal periods. See [timeRate](timerate-swift.property.md) for more information.

## See Also

### Testing subscription renewals

- [timeRate](timerate-swift.property.md): The rate at which time passes for subscriptions in the test environment as compared to real time.
- [SKTestSession.TimeRate](timerate-swift.enum.md): The values for rates of time passing in the test environment.
- [enableAutoRenewForTransaction(identifier:)](enableautorenewfortransaction%28identifier_%29.md): Enables auto-renewing for an auto-renewable subscription in the test environment.
- [disableAutoRenewForTransaction(identifier:)](disableautorenewfortransaction%28identifier_%29.md): Disables auto-renewing for an auto-renewable subscription in the test environment.
- [expireSubscription(productIdentifier:)](expiresubscription%28productidentifier_%29.md): Causes the identified auto-renewable subscription to expire immediately in the test environment.

# forceRenewalOfSubscriptionWithProductIdentifier:error: (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Ends the previous subscription period and begins the next period in the test environment.

## Declaration

```objectivec
- (BOOL) forceRenewalOfSubscriptionWithProductIdentifier:(NSString *) productIdentifier error:(NSError **) error;
```

## Parameters

- `productIdentifier`: The [productIdentifier](../sktesttransaction/productidentifier.md) of the auto-renewable subscription to renew.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation is successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="discussion"></a>

## Discussion

Use this method to test how your code handles subscription renewals. When you call this method, the subscription expires at the time you call the method, and a new subscription period begins.

To force the subscription renewal, the testing environment changes the [expirationDate](https://developer.apple.com/documentation/storekit/transaction/expirationdate) property on the [Transaction](https://developer.apple.com/documentation/storekit/transaction) to the current system time. (If your app uses receipts, the receipt also shows this expiration date change). The testing environment also:

- Enables the subscription auto-renew state
- Removes a pending price increase, setting it to [Product.SubscriptionInfo.RenewalInfo.PriceIncreaseStatus.noIncreasePending](https://developer.apple.com/documentation/storekit/product/subscriptioninfo/renewalinfo/priceincreasestatus-swift.enum/noincreasepending)

The testing environment doesn’t change the billing retry state with this call.

You can also test subscription renewals by accelerating the time in the testing environment to speed up subscription renewal periods. See [timeRate](timerate-swift.property.md) for more information.

## See Also

### Testing subscription renewals

- [timeRate](timerate-swift.property.md): The rate at which time passes for subscriptions in the test environment as compared to real time.
- [SKTestTimeRate](timerate-swift.enum.md): The values for rates of time passing in the test environment.
- [enableAutoRenewForTransactionWithIdentifier:error:](enableautorenewfortransaction%28identifier_%29.md): Enables auto-renewing for an auto-renewable subscription in the test environment.
- [disableAutoRenewForTransactionWithIdentifier:error:](disableautorenewfortransaction%28identifier_%29.md): Disables auto-renewing for an auto-renewable subscription in the test environment.
- [expireSubscriptionWithProductIdentifier:error:](expiresubscription%28productidentifier_%29.md): Causes the identified auto-renewable subscription to expire immediately in the test environment.

> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/enableautorenewfortransaction(identifier:)](https://developer.apple.com/documentation/storekittest/sktestsession/enableautorenewfortransaction(identifier:))

# enableAutoRenewForTransaction(identifier:) (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Enables auto-renewing for an auto-renewable subscription in the test environment.

## Declaration

```swift
func enableAutoRenewForTransaction(identifier: Int) throws
```

## Parameters

- `identifier`: The transaction [identifier](../sktesttransaction/identifier.md) of the auto-renewable subscription.

<a id="discussion"></a>

## Discussion

Call this method to enable the subscription to automatically renew in the testing environment. By default, all auto-renewable subscriptions have auto-renew enabled.

## See Also

### Testing subscription renewals

- [timeRate](timerate-swift.property.md): The rate at which time passes for subscriptions in the test environment as compared to real time.
- [SKTestSession.TimeRate](timerate-swift.enum.md): The values for rates of time passing in the test environment.
- [disableAutoRenewForTransaction(identifier:)](disableautorenewfortransaction%28identifier_%29.md): Disables auto-renewing for an auto-renewable subscription in the test environment.
- [forceRenewalOfSubscription(productIdentifier:)](forcerenewalofsubscription%28productidentifier_%29.md): Ends the previous subscription period and begins the next period in the test environment.
- [expireSubscription(productIdentifier:)](expiresubscription%28productidentifier_%29.md): Causes the identified auto-renewable subscription to expire immediately in the test environment.

# enableAutoRenewForTransactionWithIdentifier:error: (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Enables auto-renewing for an auto-renewable subscription in the test environment.

## Declaration

```objectivec
- (BOOL) enableAutoRenewForTransactionWithIdentifier:(NSUInteger) identifier error:(NSError **) error;
```

## Parameters

- `identifier`: The transaction [identifier](../sktesttransaction/identifier.md) of the auto-renewable subscription.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation is successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="discussion"></a>

## Discussion

Call this method to enable the subscription to automatically renew in the testing environment. By default, all auto-renewable subscriptions have auto-renew enabled.

## See Also

### Testing subscription renewals

- [timeRate](timerate-swift.property.md): The rate at which time passes for subscriptions in the test environment as compared to real time.
- [SKTestTimeRate](timerate-swift.enum.md): The values for rates of time passing in the test environment.
- [disableAutoRenewForTransactionWithIdentifier:error:](disableautorenewfortransaction%28identifier_%29.md): Disables auto-renewing for an auto-renewable subscription in the test environment.
- [forceRenewalOfSubscriptionWithProductIdentifier:error:](forcerenewalofsubscription%28productidentifier_%29.md): Ends the previous subscription period and begins the next period in the test environment.
- [expireSubscriptionWithProductIdentifier:error:](expiresubscription%28productidentifier_%29.md): Causes the identified auto-renewable subscription to expire immediately in the test environment.

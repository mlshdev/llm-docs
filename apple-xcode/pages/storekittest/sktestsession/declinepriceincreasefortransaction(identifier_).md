> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/declinepriceincreasefortransaction(identifier:)](https://developer.apple.com/documentation/storekittest/sktestsession/declinepriceincreasefortransaction(identifier:))

# declinePriceIncreaseForTransaction(identifier:) (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+ · watchOS 8.5+

Simulates a user canceling an auto-renewable subscription by disabling auto-renew.

## Declaration

```swift
func declinePriceIncreaseForTransaction(identifier: Int) throws
```

## Parameters

- `identifier`: The transaction [identifier](../sktesttransaction/identifier.md) of the auto-renewable subscription that has a pending price increase.

<a id="discussion"></a>

## Discussion

To test how your app handles the price increase consent flow for auto-renewable subscriptions, first call [requestPriceIncreaseConsentForTransaction(identifier:)](requestpriceincreaseconsentfortransaction%28identifier_%29.md).

Call [declinePriceIncreaseForTransaction(identifier:)](declinepriceincreasefortransaction%28identifier_%29.md) to simulate a user canceling the subscription. Specifically, this method disables auto-renew and removes the subscription’s pending price increase status. The subscription expires at the end of the billing period in the testing environment.

## See Also

### Testing price increase consent

- [requestPriceIncreaseConsentForTransaction(identifier:)](requestpriceincreaseconsentfortransaction%28identifier_%29.md): Simulates a price increase that requires customer consent for an auto-renewable subscription.
- [consentToPriceIncreaseForTransaction(identifier:)](consenttopriceincreasefortransaction%28identifier_%29.md): Simulates a user consenting to a price increase for an auto-renewable subscription.

# declinePriceIncreaseForTransactionWithIdentifier:error: (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+ · watchOS 8.5+

Simulates a user canceling an auto-renewable subscription by disabling auto-renew.

## Declaration

```objectivec
- (BOOL) declinePriceIncreaseForTransactionWithIdentifier:(NSUInteger) identifier error:(NSError **) error;
```

## Parameters

- `identifier`: The transaction [identifier](../sktesttransaction/identifier.md) of the auto-renewable subscription that has a pending price increase.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation is successful; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="discussion"></a>

## Discussion

To test how your app handles the price increase consent flow for auto-renewable subscriptions, first call [requestPriceIncreaseConsentForTransactionWithIdentifier:error:](requestpriceincreaseconsentfortransaction%28identifier_%29.md).

Call [declinePriceIncreaseForTransactionWithIdentifier:error:](declinepriceincreasefortransaction%28identifier_%29.md) to simulate a user canceling the subscription. Specifically, this method disables auto-renew and removes the subscription’s pending price increase status. The subscription expires at the end of the billing period in the testing environment.

## See Also

### Testing price increase consent

- [requestPriceIncreaseConsentForTransactionWithIdentifier:error:](requestpriceincreaseconsentfortransaction%28identifier_%29.md): Simulates a price increase that requires customer consent for an auto-renewable subscription.
- [consentToPriceIncreaseForTransactionWithIdentifier:error:](consenttopriceincreasefortransaction%28identifier_%29.md): Simulates a user consenting to a price increase for an auto-renewable subscription.

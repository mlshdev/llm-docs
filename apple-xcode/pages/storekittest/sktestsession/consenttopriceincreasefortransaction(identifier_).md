> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/storekittest/sktestsession/consenttopriceincreasefortransaction(identifier:)](https://developer.apple.com/documentation/storekittest/sktestsession/consenttopriceincreasefortransaction(identifier:))

# consentToPriceIncreaseForTransaction(identifier:) (Swift)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+ · watchOS 8.5+

Simulates a user consenting to a price increase for an auto-renewable subscription.

## Declaration

```swift
func consentToPriceIncreaseForTransaction(identifier: Int) throws
```

## Parameters

- `identifier`: The transaction [identifier](../sktesttransaction/identifier.md) of the auto-renewable subscription that has a pending price increase.

<a id="discussion"></a>

## Discussion

To test how your app handles the price increase consent flow for auto-renewable subscriptions, first call [requestPriceIncreaseConsentForTransaction(identifier:)](requestpriceincreaseconsentfortransaction%28identifier_%29.md).

Call the [consentToPriceIncreaseForTransaction(identifier:)](consenttopriceincreasefortransaction%28identifier_%29.md) method to simulate a user consenting to the price increase. This method removes the subscription’s pending price increase status. The subscription renews at the next billing period.

## See Also

### Testing price increase consent

- [requestPriceIncreaseConsentForTransaction(identifier:)](requestpriceincreaseconsentfortransaction%28identifier_%29.md): Simulates a price increase that requires customer consent for an auto-renewable subscription.
- [declinePriceIncreaseForTransaction(identifier:)](declinepriceincreasefortransaction%28identifier_%29.md): Simulates a user canceling an auto-renewable subscription by disabling auto-renew.

# consentToPriceIncreaseForTransactionWithIdentifier:error: (Objective-C)

**Framework:** StoreKit Test  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · macOS 12.3+ · tvOS 15.4+ · visionOS 1.0+ · watchOS 8.5+

Simulates a user consenting to a price increase for an auto-renewable subscription.

## Declaration

```objectivec
- (BOOL) consentToPriceIncreaseForTransactionWithIdentifier:(NSUInteger) identifier error:(NSError **) error;
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

Call the [consentToPriceIncreaseForTransactionWithIdentifier:error:](consenttopriceincreasefortransaction%28identifier_%29.md) method to simulate a user consenting to the price increase. This method removes the subscription’s pending price increase status. The subscription renews at the next billing period.

## See Also

### Testing price increase consent

- [requestPriceIncreaseConsentForTransactionWithIdentifier:error:](requestpriceincreaseconsentfortransaction%28identifier_%29.md): Simulates a price increase that requires customer consent for an auto-renewable subscription.
- [declinePriceIncreaseForTransactionWithIdentifier:error:](declinepriceincreasefortransaction%28identifier_%29.md): Simulates a user canceling an auto-renewable subscription by disabling auto-renew.

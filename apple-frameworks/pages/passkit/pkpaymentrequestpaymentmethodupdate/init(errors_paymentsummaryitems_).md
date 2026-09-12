> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequestpaymentmethodupdate/init(errors:paymentsummaryitems:)](https://developer.apple.com/documentation/passkit/pkpaymentrequestpaymentmethodupdate/init(errors:paymentsummaryitems:))

# init(errors:paymentSummaryItems:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a payment-method update with your specified payment summary items.

## Declaration

```swift
init(errors: [any Error]?, paymentSummaryItems: [PKPaymentSummaryItem])
```

## Parameters

- `errors`: An array of errors in the selected payment-method that the user must resolve.
- `paymentSummaryItems`: An array of summary items that include any changes due to fees or credit card surcharges associated with the payment method.

<a id="Discussion"></a>

## Discussion

Use the `errors` array to specify any errors in the payment method that the user must resolve. For more information on creating user errors, see [PKPaymentError](../pkpaymenterror.md).

# initWithErrors:paymentSummaryItems: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a payment-method update with your specified payment summary items.

## Declaration

```objectivec
- (instancetype) initWithErrors:(NSArray<NSError *> *) errors paymentSummaryItems:(NSArray<PKPaymentSummaryItem *> *) paymentSummaryItems;
```

## Parameters

- `errors`: An array of errors in the selected payment-method that the user must resolve.
- `paymentSummaryItems`: An array of summary items that include any changes due to fees or credit card surcharges associated with the payment method.

<a id="Discussion"></a>

## Discussion

Use the `errors` array to specify any errors in the payment method that the user must resolve. For more information on creating user errors, see [PKPaymentError](../pkpaymenterror.md).

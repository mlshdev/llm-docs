> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequestshippingcontactupdate/init(errors:paymentsummaryitems:shippingmethods:)](https://developer.apple.com/documentation/passkit/pkpaymentrequestshippingcontactupdate/init(errors:paymentsummaryitems:shippingmethods:))

# init(errors:paymentSummaryItems:shippingMethods:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a shipping contact update with your specified payment summary items and shipping methods.

## Declaration

```swift
init(errors: [any Error]?, paymentSummaryItems: [PKPaymentSummaryItem], shippingMethods: [PKShippingMethod])
```

## Parameters

- `errors`: An array of errors in the shipping contact information that the user must resolve.
- `paymentSummaryItems`: An array of summary items that include any changes due to fees or credit card surcharges associated with the payment method.
- `shippingMethods`: An array of shipping methods.

<a id="Discussion"></a>

## Discussion

Use the `errors` array to specify any errors in the shipping method that the user must resolve. For more information on creating user errors, see [PKPaymentError](../pkpaymenterror.md).

# initWithErrors:paymentSummaryItems:shippingMethods: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a shipping contact update with your specified payment summary items and shipping methods.

## Declaration

```objectivec
- (instancetype) initWithErrors:(NSArray<NSError *> *) errors paymentSummaryItems:(NSArray<PKPaymentSummaryItem *> *) paymentSummaryItems shippingMethods:(NSArray<PKShippingMethod *> *) shippingMethods;
```

## Parameters

- `errors`: An array of errors in the shipping contact information that the user must resolve.
- `paymentSummaryItems`: An array of summary items that include any changes due to fees or credit card surcharges associated with the payment method.
- `shippingMethods`: An array of shipping methods.

<a id="Discussion"></a>

## Discussion

Use the `errors` array to specify any errors in the shipping method that the user must resolve. For more information on creating user errors, see [PKPaymentError](../pkpaymenterror.md).

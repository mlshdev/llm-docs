> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequestcouponcodeupdate/init(errors:paymentsummaryitems:shippingmethods:)](https://developer.apple.com/documentation/passkit/pkpaymentrequestcouponcodeupdate/init(errors:paymentsummaryitems:shippingmethods:))

# init(errors:paymentSummaryItems:shippingMethods:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Creates a payment coupon update with your specified payment summary items, errors, and shipping methods.

## Declaration

```swift
init(errors: [any Error]?, paymentSummaryItems: [PKPaymentSummaryItem], shippingMethods: [PKShippingMethod])
```

## Parameters

- `errors`: An array of errors for the coupon code that the user must resolve.
- `paymentSummaryItems`: An array of summary items that include any changes due to the coupon.
- `shippingMethods`: An array of shipping methods.

# initWithErrors:paymentSummaryItems:shippingMethods: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · visionOS 1.0+

Creates a payment coupon update with your specified payment summary items, errors, and shipping methods.

## Declaration

```objectivec
- (instancetype) initWithErrors:(NSArray<NSError *> *) errors paymentSummaryItems:(NSArray<PKPaymentSummaryItem *> *) paymentSummaryItems shippingMethods:(NSArray<PKShippingMethod *> *) shippingMethods;
```

## Parameters

- `errors`: An array of errors for the coupon code that the user must resolve.
- `paymentSummaryItems`: An array of summary items that include any changes due to the coupon.
- `shippingMethods`: An array of shipping methods.

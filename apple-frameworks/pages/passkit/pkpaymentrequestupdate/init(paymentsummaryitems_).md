> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequestupdate/init(paymentsummaryitems:)](https://developer.apple.com/documentation/passkit/pkpaymentrequestupdate/init(paymentsummaryitems:))

# init(paymentSummaryItems:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a payment request update with the specified payment summary items.

## Declaration

```swift
init(paymentSummaryItems: [PKPaymentSummaryItem])
```

## Parameters

- `paymentSummaryItems`: An array of summary items that include any changes due to fees or credit card surcharges associated with the payment method.

# initWithPaymentSummaryItems: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Creates a payment request update with the specified payment summary items.

## Declaration

```objectivec
- (instancetype) initWithPaymentSummaryItems:(NSArray<PKPaymentSummaryItem *> *) paymentSummaryItems;
```

## Parameters

- `paymentSummaryItems`: An array of summary items that include any changes due to fees or credit card surcharges associated with the payment method.

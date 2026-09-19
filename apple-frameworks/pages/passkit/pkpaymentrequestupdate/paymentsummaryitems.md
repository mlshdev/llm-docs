> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/passkit/pkpaymentrequestupdate/paymentsummaryitems

# paymentSummaryItems (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The list of payment summary items for the instance.

## Declaration

```swift
var paymentSummaryItems: [PKPaymentSummaryItem] { get set }
```

## See Also

### Updating summary items

- [PKPaymentSummaryItem](../pkpaymentsummaryitem.md): An object that defines a summary item in a payment request, taxes, discounts, shipping, a grand total, and the like.

# paymentSummaryItems (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The list of payment summary items for the instance.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<PKPaymentSummaryItem *> * paymentSummaryItems;
```

## See Also

### Updating summary items

- [PKPaymentSummaryItem](../pkpaymentsummaryitem.md): An object that defines a summary item in a payment request, taxes, discounts, shipping, a grand total, and the like.

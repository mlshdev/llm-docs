> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymenttokencontext/amount](https://developer.apple.com/documentation/passkit/pkpaymenttokencontext/amount)

# amount (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The amount to authorize for the payment token.

## Declaration

```swift
@NSCopying var amount: NSDecimalNumber { get set }
```

<a id="Discussion"></a>

## Discussion

The currency for the amount is the currency set in the enclosing payment request.

This amount must be less than or equal to the total of the enclosing payment request. The sum of all payment token contexts must be less than or equal to the grand total amount of the enclosing payment request that you provide in the last payment summary item. For more information, see [PKPaymentSummaryItem](../pkpaymentsummaryitem.md).

# amount (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The amount to authorize for the payment token.

## Declaration

```objectivec
@property (nonatomic, copy) NSDecimalNumber * amount;
```

<a id="Discussion"></a>

## Discussion

The currency for the amount is the currency set in the enclosing payment request.

This amount must be less than or equal to the total of the enclosing payment request. The sum of all payment token contexts must be less than or equal to the grand total amount of the enclosing payment request that you provide in the last payment summary item. For more information, see [PKPaymentSummaryItem](../pkpaymentsummaryitem.md).

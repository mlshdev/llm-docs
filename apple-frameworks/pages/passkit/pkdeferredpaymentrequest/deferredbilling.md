> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdeferredpaymentrequest/deferredbilling](https://developer.apple.com/documentation/passkit/pkdeferredpaymentrequest/deferredbilling)

# deferredBilling (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

An object that contains details about the deferred payment.

## Declaration

```swift
var deferredBilling: PKDeferredPaymentSummaryItem { get set }
```

<a id="Discussion"></a>

## Discussion

For example “Pay $2.99 on October 9, 2023.”

## See Also

### Setting payment summary items

- [PKDeferredPaymentSummaryItem](../pkdeferredpaymentsummaryitem.md): An object that defines a summary item for a payment that occurs at a later date, such as a pre-order.

# deferredBilling (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

An object that contains details about the deferred payment.

## Declaration

```objectivec
@property (nonatomic, strong) PKDeferredPaymentSummaryItem * deferredBilling;
```

<a id="Discussion"></a>

## Discussion

For example “Pay $2.99 on October 9, 2023.”

## See Also

### Setting payment summary items

- [PKDeferredPaymentSummaryItem](../pkdeferredpaymentsummaryitem.md): An object that defines a summary item for a payment that occurs at a later date, such as a pre-order.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkrecurringpaymentrequest/regularbilling](https://developer.apple.com/documentation/passkit/pkrecurringpaymentrequest/regularbilling)

# regularBilling (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The regular billing cycle for the recurring payment, including start and end dates, an interval, and an interval count.

## Declaration

```swift
var regularBilling: PKRecurringPaymentSummaryItem { get set }
```

## See Also

### Setting payment summary items

- [trialBilling](trialbilling.md): The trial billing cycle for the recurring payment.
- [PKRecurringPaymentSummaryItem](../pkrecurringpaymentsummaryitem.md): An object that defines a summary item for a payment that occurs repeatedly at a specified interval, such as a subscription.

# regularBilling (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The regular billing cycle for the recurring payment, including start and end dates, an interval, and an interval count.

## Declaration

```objectivec
@property (nonatomic, strong) PKRecurringPaymentSummaryItem * regularBilling;
```

## See Also

### Setting payment summary items

- [trialBilling](trialbilling.md): The trial billing cycle for the recurring payment.
- [PKRecurringPaymentSummaryItem](../pkrecurringpaymentsummaryitem.md): An object that defines a summary item for a payment that occurs repeatedly at a specified interval, such as a subscription.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkrecurringpaymentrequest/trialbilling](https://developer.apple.com/documentation/passkit/pkrecurringpaymentrequest/trialbilling)

# trialBilling (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The trial billing cycle for the recurring payment.

## Declaration

```swift
var trialBilling: PKRecurringPaymentSummaryItem? { get set }
```

<a id="Discussion"></a>

## Discussion

The trial billing cycle is optional; use it if the purchase has a trial period.

## See Also

### Setting payment summary items

- [regularBilling](regularbilling.md): The regular billing cycle for the recurring payment, including start and end dates, an interval, and an interval count.
- [PKRecurringPaymentSummaryItem](../pkrecurringpaymentsummaryitem.md): An object that defines a summary item for a payment that occurs repeatedly at a specified interval, such as a subscription.

# trialBilling (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The trial billing cycle for the recurring payment.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) PKRecurringPaymentSummaryItem * trialBilling;
```

<a id="Discussion"></a>

## Discussion

The trial billing cycle is optional; use it if the purchase has a trial period.

## See Also

### Setting payment summary items

- [regularBilling](regularbilling.md): The regular billing cycle for the recurring payment, including start and end dates, an interval, and an interval count.
- [PKRecurringPaymentSummaryItem](../pkrecurringpaymentsummaryitem.md): An object that defines a summary item for a payment that occurs repeatedly at a specified interval, such as a subscription.

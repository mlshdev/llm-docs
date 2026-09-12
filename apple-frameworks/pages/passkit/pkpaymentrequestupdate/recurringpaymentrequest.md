> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequestupdate/recurringpaymentrequest](https://developer.apple.com/documentation/passkit/pkpaymentrequestupdate/recurringpaymentrequest)

# recurringPaymentRequest (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The recurring payment request to update the payment request with.

## Declaration

```swift
var recurringPaymentRequest: PKRecurringPaymentRequest? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which indicates the recurring payment request doesn’t require an update.

> **Warning**

>  Changing the [billingAgreement](../pkrecurringpaymentrequest/billingagreement.md) along with this property causes the framework to invalidate the current payment request, close the payment sheet, and return an error in the completion handler.

You can’t use this property simultaneously with multitoken contexts or automatic reload payment requests.

# recurringPaymentRequest (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The recurring payment request to update the payment request with.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) PKRecurringPaymentRequest * recurringPaymentRequest;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which indicates the recurring payment request doesn’t require an update.

> **Warning**

>  Changing the [billingAgreement](../pkrecurringpaymentrequest/billingagreement.md) along with this property causes the framework to invalidate the current payment request, close the payment sheet, and return an error in the completion handler.

You can’t use this property simultaneously with multitoken contexts or automatic reload payment requests.

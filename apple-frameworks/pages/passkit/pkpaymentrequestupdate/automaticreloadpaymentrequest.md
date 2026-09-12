> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequestupdate/automaticreloadpaymentrequest](https://developer.apple.com/documentation/passkit/pkpaymentrequestupdate/automaticreloadpaymentrequest)

# automaticReloadPaymentRequest (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The automatic reload payment request to update the payment request with.

## Declaration

```swift
var automaticReloadPaymentRequest: PKAutomaticReloadPaymentRequest? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is nil, which indicates the automatic reload payment request needs no update.

> **Warning**

>  Changing the [billingAgreement](../pkrecurringpaymentrequest/billingagreement.md) along with this property causes the framework to invalidate the current payment request, close the payment sheet, and return an error in the completion handler.

You can’t use this property simultaneously with: multitoken contexts, recurring payment requests, or automatic reload payment requests.

# automaticReloadPaymentRequest (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The automatic reload payment request to update the payment request with.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) PKAutomaticReloadPaymentRequest * automaticReloadPaymentRequest;
```

<a id="Discussion"></a>

## Discussion

The default value is nil, which indicates the automatic reload payment request needs no update.

> **Warning**

>  Changing the [billingAgreement](../pkrecurringpaymentrequest/billingagreement.md) along with this property causes the framework to invalidate the current payment request, close the payment sheet, and return an error in the completion handler.

You can’t use this property simultaneously with: multitoken contexts, recurring payment requests, or automatic reload payment requests.

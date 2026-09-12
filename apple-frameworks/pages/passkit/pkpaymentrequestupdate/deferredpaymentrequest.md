> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequestupdate/deferredpaymentrequest](https://developer.apple.com/documentation/passkit/pkpaymentrequestupdate/deferredpaymentrequest)

# deferredPaymentRequest (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

The deferred payment request to update the payment request with.

## Declaration

```swift
var deferredPaymentRequest: PKDeferredPaymentRequest? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which indicates the request doesn’t require an update.

> **Warning**

>  Changing the [billingAgreement](../pkdeferredpaymentrequest/billingagreement.md) along with this property causes the framework to invalidate the current payment request, close the payment sheet, and return an error in the completion handler

You can’t use this property simultaneously with multitoken contexts, recurring payment requests, or automatic reload payment requests.

# deferredPaymentRequest (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

The deferred payment request to update the payment request with.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) PKDeferredPaymentRequest * deferredPaymentRequest;
```

<a id="Discussion"></a>

## Discussion

The default value is `nil`, which indicates the request doesn’t require an update.

> **Warning**

>  Changing the [billingAgreement](../pkdeferredpaymentrequest/billingagreement.md) along with this property causes the framework to invalidate the current payment request, close the payment sheet, and return an error in the completion handler

You can’t use this property simultaneously with multitoken contexts, recurring payment requests, or automatic reload payment requests.

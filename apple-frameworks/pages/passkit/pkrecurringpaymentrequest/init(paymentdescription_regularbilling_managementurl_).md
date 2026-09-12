> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkrecurringpaymentrequest/init(paymentdescription:regularbilling:managementurl:)](https://developer.apple.com/documentation/passkit/pkrecurringpaymentrequest/init(paymentdescription:regularbilling:managementurl:))

# init(paymentDescription:regularBilling:managementURL:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Create a recurring payment object with a description, regular billing information, and a management URL.

## Declaration

```swift
init(paymentDescription: String, regularBilling: PKRecurringPaymentSummaryItem, managementURL: URL)
```

## Parameters

- `paymentDescription`: The description you provide of the recurring payment and that Apple Pay displays to the user in the payment sheet.
- `regularBilling`: The summary item for the recurring payment that includes the payment period and interval.
- `managementURL`: The URL to a web page where the user can update or delete the payment method for the recurring payment.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You must set the [recurringPaymentRequest](../pkpaymentrequest/recurringpaymentrequest.md) property on a [PKPaymentRequest](../pkpaymentrequest.md) object to use this class to request a recurring payment.

# initWithPaymentDescription:regularBilling:managementURL: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Create a recurring payment object with a description, regular billing information, and a management URL.

## Declaration

```objectivec
- (instancetype) initWithPaymentDescription:(NSString *) paymentDescription regularBilling:(PKRecurringPaymentSummaryItem *) regularBilling managementURL:(NSURL *) managementURL;
```

## Parameters

- `paymentDescription`: The description you provide of the recurring payment and that Apple Pay displays to the user in the payment sheet.
- `regularBilling`: The summary item for the recurring payment that includes the payment period and interval.
- `managementURL`: The URL to a web page where the user can update or delete the payment method for the recurring payment.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You must set the [recurringPaymentRequest](../pkpaymentrequest/recurringpaymentrequest.md) property on a [PKPaymentRequest](../pkpaymentrequest.md) object to use this class to request a recurring payment.

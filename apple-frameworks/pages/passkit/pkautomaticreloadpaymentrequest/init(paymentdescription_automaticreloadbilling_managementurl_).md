> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkautomaticreloadpaymentrequest/init(paymentdescription:automaticreloadbilling:managementurl:)](https://developer.apple.com/documentation/passkit/pkautomaticreloadpaymentrequest/init(paymentdescription:automaticreloadbilling:managementurl:))

# init(paymentDescription:automaticReloadBilling:managementURL:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Create an automatic reload payment object with a description, automatic billing information, and a management URL.

## Declaration

```swift
init(paymentDescription: String, automaticReloadBilling: PKAutomaticReloadPaymentSummaryItem, managementURL: URL)
```

## Parameters

- `paymentDescription`: The description you provide of the automatic reload payment and that Apple Pay displays to the user in the payment sheet.
- `automaticReloadBilling`: The summary item for the automatic reload payment that includes the threshold amount and reload amount.
- `managementURL`: The URL to a web page where the user can update or delete the payment method for the recurring payment.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You must set the [automaticReloadPaymentRequest](../pkpaymentrequest/automaticreloadpaymentrequest.md) property on a [PKPaymentRequest](../pkpaymentrequest.md) object to set up an automatic reload payment.

# initWithPaymentDescription:automaticReloadBilling:managementURL: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Create an automatic reload payment object with a description, automatic billing information, and a management URL.

## Declaration

```objectivec
- (instancetype) initWithPaymentDescription:(NSString *) paymentDescription automaticReloadBilling:(PKAutomaticReloadPaymentSummaryItem *) automaticReloadBilling managementURL:(NSURL *) managementURL;
```

## Parameters

- `paymentDescription`: The description you provide of the automatic reload payment and that Apple Pay displays to the user in the payment sheet.
- `automaticReloadBilling`: The summary item for the automatic reload payment that includes the threshold amount and reload amount.
- `managementURL`: The URL to a web page where the user can update or delete the payment method for the recurring payment.

<a id="Discussion"></a>

## Discussion

> **Important**

>  You must set the [automaticReloadPaymentRequest](../pkpaymentrequest/automaticreloadpaymentrequest.md) property on a [PKPaymentRequest](../pkpaymentrequest.md) object to set up an automatic reload payment.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkpaymentrequest/applepaylateravailability-inpf](https://developer.apple.com/documentation/passkit/pkpaymentrequest/applepaylateravailability-inpf)

# applePayLaterAvailability

**Interface language:** Objective-C

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.0+ · watchOS 10.0+

A value that indicates whether Apple Pay Later is available for a transaction.

> Apple Pay Later is deprecated.

## Declaration

```objectivec
@property (nonatomic, assign) PKApplePayLaterAvailability applePayLaterAvailability;
```

<a id="Discussion"></a>

## Discussion

Defaults to enabled.

Use this property to suppress Apple Pay Later for a specific transaction. Only set this property if you have a specific requirement to disable Apple Pay Later.

Ensure you select the correct mode that matches your requirement, because the framework displays Apple Pay Later availability to the user.

> **Important**

>  If you later decide to stop providing Apple Pay Later in your app, contact your acquirer or payment service provider (PSP) and notify them that you no longer wish to participate in the Mastercard Installments Program. You can always change this decision later.

## See Also

### Deprecated

- [PKAddressField](../pkaddressfield.md): Deprecated. Billing or shipping address fields.
- [PKApplePayLaterAvailability](../pkapplepaylateravailability.md): Deprecated. Values you use to enable or disable Apple Pay Later for a specific transaction.

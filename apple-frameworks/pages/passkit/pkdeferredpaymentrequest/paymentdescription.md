> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdeferredpaymentrequest/paymentdescription](https://developer.apple.com/documentation/passkit/pkdeferredpaymentrequest/paymentdescription)

# paymentDescription (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

A description of the deferred payment.

## Declaration

```swift
var paymentDescription: String { get set }
```

<a id="Discussion"></a>

## Discussion

Use a plain language description that explains what the payment is for, for example “Hotel stay, 2 nights.”

## See Also

### Describing a deferred payment

- [freeCancellationDate](freecancellationdate.md): The date before which you must cancel a deferred payment without incurring any cancellation charges.
- [billingAgreement](billingagreement.md): The localized billing agreement the framework displays to the user prior to payment authorization.
- [freeCancellationDateTimeZone](freecancellationdatetimezone.md): The time zone at the destination location of the payment.

# paymentDescription (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

A description of the deferred payment.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * paymentDescription;
```

<a id="Discussion"></a>

## Discussion

Use a plain language description that explains what the payment is for, for example “Hotel stay, 2 nights.”

## See Also

### Describing a deferred payment

- [freeCancellationDate](freecancellationdate.md): The date before which you must cancel a deferred payment without incurring any cancellation charges.
- [billingAgreement](billingagreement.md): The localized billing agreement the framework displays to the user prior to payment authorization.
- [freeCancellationDateTimeZone](freecancellationdatetimezone.md): The time zone at the destination location of the payment.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdeferredpaymentrequest/billingagreement](https://developer.apple.com/documentation/passkit/pkdeferredpaymentrequest/billingagreement)

# billingAgreement (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

The localized billing agreement the framework displays to the user prior to payment authorization.

## Declaration

```swift
var billingAgreement: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This may include additional details about the cancellation period or penalties for late cancellation. This value is optional.

## See Also

### Describing a deferred payment

- [freeCancellationDate](freecancellationdate.md): The date before which you must cancel a deferred payment without incurring any cancellation charges.
- [paymentDescription](paymentdescription.md): A description of the deferred payment.
- [freeCancellationDateTimeZone](freecancellationdatetimezone.md): The time zone at the destination location of the payment.

# billingAgreement (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

The localized billing agreement the framework displays to the user prior to payment authorization.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * billingAgreement;
```

<a id="Discussion"></a>

## Discussion

This may include additional details about the cancellation period or penalties for late cancellation. This value is optional.

## See Also

### Describing a deferred payment

- [freeCancellationDate](freecancellationdate.md): The date before which you must cancel a deferred payment without incurring any cancellation charges.
- [paymentDescription](paymentdescription.md): A description of the deferred payment.
- [freeCancellationDateTimeZone](freecancellationdatetimezone.md): The time zone at the destination location of the payment.

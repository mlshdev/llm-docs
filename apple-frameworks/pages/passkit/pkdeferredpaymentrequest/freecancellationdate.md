> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdeferredpaymentrequest/freecancellationdate](https://developer.apple.com/documentation/passkit/pkdeferredpaymentrequest/freecancellationdate)

# freeCancellationDate (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

The date before which you must cancel a deferred payment without incurring any cancellation charges.

## Declaration

```swift
var freeCancellationDate: Date? { get set }
```

<a id="Discussion"></a>

## Discussion

If you set [freeCancellationDate](freecancellationdate.md), you need to set [freeCancellationDateTimeZone](freecancellationdatetimezone.md) as well.

## See Also

### Describing a deferred payment

- [billingAgreement](billingagreement.md): The localized billing agreement the framework displays to the user prior to payment authorization.
- [paymentDescription](paymentdescription.md): A description of the deferred payment.
- [freeCancellationDateTimeZone](freecancellationdatetimezone.md): The time zone at the destination location of the payment.

# freeCancellationDate (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

The date before which you must cancel a deferred payment without incurring any cancellation charges.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSDate * freeCancellationDate;
```

<a id="Discussion"></a>

## Discussion

If you set [freeCancellationDate](freecancellationdate.md), you need to set [freeCancellationDateTimeZone](freecancellationdatetimezone.md) as well.

## See Also

### Describing a deferred payment

- [billingAgreement](billingagreement.md): The localized billing agreement the framework displays to the user prior to payment authorization.
- [paymentDescription](paymentdescription.md): A description of the deferred payment.
- [freeCancellationDateTimeZone](freecancellationdatetimezone.md): The time zone at the destination location of the payment.

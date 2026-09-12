> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkdeferredpaymentrequest/freecancellationdatetimezone](https://developer.apple.com/documentation/passkit/pkdeferredpaymentrequest/freecancellationdatetimezone)

# freeCancellationDateTimeZone (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

The time zone at the destination location of the payment.

## Declaration

```swift
var freeCancellationDateTimeZone: TimeZone? { get set }
```

<a id="Discussion"></a>

## Discussion

For a hotel booking, for example, this refers to the local time zone of the hotel. On the payment sheet, this is the time zone the framework uses to format the cancellation date. If you set the `freeCancellationDateTimeZone` date, you need to set [freeCancellationDate](freecancellationdate.md) as well.

## See Also

### Describing a deferred payment

- [freeCancellationDate](freecancellationdate.md): The date before which you must cancel a deferred payment without incurring any cancellation charges.
- [billingAgreement](billingagreement.md): The localized billing agreement the framework displays to the user prior to payment authorization.
- [paymentDescription](paymentdescription.md): A description of the deferred payment.

# freeCancellationDateTimeZone (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · visionOS 1.0+

The time zone at the destination location of the payment.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSTimeZone * freeCancellationDateTimeZone;
```

<a id="Discussion"></a>

## Discussion

For a hotel booking, for example, this refers to the local time zone of the hotel. On the payment sheet, this is the time zone the framework uses to format the cancellation date. If you set the `freeCancellationDateTimeZone` date, you need to set [freeCancellationDate](freecancellationdate.md) as well.

## See Also

### Describing a deferred payment

- [freeCancellationDate](freecancellationdate.md): The date before which you must cancel a deferred payment without incurring any cancellation charges.
- [billingAgreement](billingagreement.md): The localized billing agreement the framework displays to the user prior to payment authorization.
- [paymentDescription](paymentdescription.md): A description of the deferred payment.

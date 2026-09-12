> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbilldetails/billpayee](https://developer.apple.com/documentation/intents/inbilldetails/billpayee)

# billPayee (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The entity receiving the payment.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var billPayee: INBillPayee? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the recipient of the payment. The payee may refer to a bank, a utility, or any entity for which the user has set up online bill payment in your app. The user must configure payees in advance in your app.

## See Also

### Accessing the Bill Information

- [paymentDate](paymentdate.md): Deprecated. The scheduled payment date for the bill.
- [paymentStatus](paymentstatus.md): Deprecated. The current status of the payment.
- [billType](billtype.md): Deprecated. The type of the bill.

# billPayee (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The entity receiving the payment.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INBillPayee * billPayee;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INBillPayee * billPayee;
```

<a id="Discussion"></a>

## Discussion

Use this property to specify the recipient of the payment. The payee may refer to a bank, a utility, or any entity for which the user has set up online bill payment in your app. The user must configure payees in advance in your app.

## See Also

### Accessing the Bill Information

- [paymentDate](paymentdate.md): Deprecated. The scheduled payment date for the bill.
- [paymentStatus](paymentstatus.md): Deprecated. The current status of the payment.
- [billType](billtype.md): Deprecated. The type of the bill.

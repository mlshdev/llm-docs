> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintent/billpayee](https://developer.apple.com/documentation/intents/inpaybillintent/billpayee)

# billPayee (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The recipient of the payment.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
@NSCopying var billPayee: INBillPayee? { get }
```

<a id="Discussion"></a>

## Discussion

Use the information in this property to identify the recipient of the payment. You must configure your app to process payments for the specified payee before handling the request.

## See Also

### Getting the Bill Information

- [billType](billtype.md): Deprecated. The type of the bill.
- [dueDate](duedate.md): Deprecated. The due date of the payment.

# billPayee (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The recipient of the payment.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INBillPayee * billPayee;
```

```objectivec
@property (atomic, copy, readonly, nullable) INBillPayee * billPayee;
```

<a id="Discussion"></a>

## Discussion

Use the information in this property to identify the recipient of the payment. You must configure your app to process payments for the specified payee before handling the request.

## See Also

### Getting the Bill Information

- [billType](billtype.md): Deprecated. The type of the bill.
- [dueDate](duedate.md): Deprecated. The due date of the payment.

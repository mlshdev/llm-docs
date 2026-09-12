> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaybillintent/billtype](https://developer.apple.com/documentation/intents/inpaybillintent/billtype)

# billType (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The type of the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
var billType: INBillType { get }
```

<a id="Discussion"></a>

## Discussion

Use this information to identify which bill the user wants to pay. You might use this property when the payee provides multiple services, but bills them separately.

## See Also

### Getting the Bill Information

- [billPayee](billpayee.md): Deprecated. The recipient of the payment.
- [dueDate](duedate.md): Deprecated. The due date of the payment.

# billType (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

The type of the bill.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@property (nonatomic, assign, readonly) INBillType billType;
```

```objectivec
@property (atomic, assign, readonly) INBillType billType;
```

<a id="Discussion"></a>

## Discussion

Use this information to identify which bill the user wants to pay. You might use this property when the payee provides multiple services, but bills them separately.

## See Also

### Getting the Bill Information

- [billPayee](billpayee.md): Deprecated. The recipient of the payment.
- [dueDate](duedate.md): Deprecated. The due date of the payment.

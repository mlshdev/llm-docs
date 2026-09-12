> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendpaymentintent/payee](https://developer.apple.com/documentation/intents/insendpaymentintent/payee)

# payee (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The recipient of the payment.

## Declaration

```swift
@NSCopying var payee: INPerson? { get }
```

<a id="Discussion"></a>

## Discussion

Use the payee information to determine which account receives the payment.

## See Also

### Getting Details About the Payment

- [currencyAmount](currencyamount.md): The amount of the payment.
- [note](note.md): A note associated with the payment.

# payee (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The recipient of the payment.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INPerson * payee;
```

```objectivec
@property (atomic, copy, readonly, nullable) INPerson * payee;
```

<a id="Discussion"></a>

## Discussion

Use the payee information to determine which account receives the payment.

## See Also

### Getting Details About the Payment

- [currencyAmount](currencyamount.md): The amount of the payment.
- [note](note.md): A note associated with the payment.

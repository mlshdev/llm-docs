> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestpaymentintent/payer](https://developer.apple.com/documentation/intents/inrequestpaymentintent/payer)

# payer (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The recipient of the payment request.

## Declaration

```swift
@NSCopying var payer: INPerson? { get }
```

<a id="Discussion"></a>

## Discussion

Use the payer information to determine which user to notify.

## See Also

### Getting Details About the Payment

- [currencyAmount](currencyamount.md): The amount of the payment.
- [note](note.md): A note associated with the request.

# payer (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The recipient of the payment request.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INPerson * payer;
```

```objectivec
@property (atomic, copy, readonly, nullable) INPerson * payer;
```

<a id="Discussion"></a>

## Discussion

Use the payer information to determine which user to notify.

## See Also

### Getting Details About the Payment

- [currencyAmount](currencyamount.md): The amount of the payment.
- [note](note.md): A note associated with the request.

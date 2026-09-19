> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/insendpaymentintent/note

# note (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A note associated with the payment.

## Declaration

```swift
var note: String? { get }
```

<a id="Discussion"></a>

## Discussion

The user can include a note to indicate the reason for the payment. Notes are not normally required, but you can require them as needed to help process the transaction.

## See Also

### Getting Details About the Payment

- [payee](payee.md): The recipient of the payment.
- [currencyAmount](currencyamount.md): The amount of the payment.

# note (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A note associated with the payment.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * note;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * note;
```

<a id="Discussion"></a>

## Discussion

The user can include a note to indicate the reason for the payment. Notes are not normally required, but you can require them as needed to help process the transaction.

## See Also

### Getting Details About the Payment

- [payee](payee.md): The recipient of the payment.
- [currencyAmount](currencyamount.md): The amount of the payment.

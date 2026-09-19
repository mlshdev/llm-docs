> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/insendpaymentintent/currencyamount

# currencyAmount (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The amount of the payment.

## Declaration

```swift
@NSCopying var currencyAmount: INCurrencyAmount? { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to verify that you can handle the transfer successfully. For example, you might verify they are using a supported currency type and that the user’s account has the needed funds to complete the transaction.

## See Also

### Getting Details About the Payment

- [payee](payee.md): The recipient of the payment.
- [note](note.md): A note associated with the payment.

# currencyAmount (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The amount of the payment.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INCurrencyAmount * currencyAmount;
```

```objectivec
@property (atomic, copy, readonly, nullable) INCurrencyAmount * currencyAmount;
```

<a id="Discussion"></a>

## Discussion

Use this property to verify that you can handle the transfer successfully. For example, you might verify they are using a supported currency type and that the user’s account has the needed funds to complete the transaction.

## See Also

### Getting Details About the Payment

- [payee](payee.md): The recipient of the payment.
- [note](note.md): A note associated with the payment.

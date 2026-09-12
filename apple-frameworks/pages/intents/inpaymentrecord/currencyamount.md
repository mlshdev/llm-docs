> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentrecord/currencyamount](https://developer.apple.com/documentation/intents/inpaymentrecord/currencyamount)

# currencyAmount (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The type of currency to transfer and the amount to transfer.

## Declaration

```swift
@NSCopying var currencyAmount: INCurrencyAmount? { get }
```

## See Also

### Getting Payment Record Details

- [payee](payee.md): The person receiving the funds.
- [payer](payer.md): The person providing the funds.
- [feeAmount](feeamount.md): The total amount of any fees added to the payment record.
- [paymentMethod](paymentmethod.md): The payment method used to supply the funds.
- [note](note.md): A description of the payment to send.

# currencyAmount (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The type of currency to transfer and the amount to transfer.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INCurrencyAmount * currencyAmount;
```

```objectivec
@property (atomic, copy, readonly, nullable) INCurrencyAmount * currencyAmount;
```

## See Also

### Getting Payment Record Details

- [payee](payee.md): The person receiving the funds.
- [payer](payer.md): The person providing the funds.
- [feeAmount](feeamount.md): The total amount of any fees added to the payment record.
- [paymentMethod](paymentmethod.md): The payment method used to supply the funds.
- [note](note.md): A description of the payment to send.

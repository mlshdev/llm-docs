> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentrecord/feeamount](https://developer.apple.com/documentation/intents/inpaymentrecord/feeamount)

# feeAmount (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The total amount of any fees added to the payment record.

## Declaration

```swift
@NSCopying var feeAmount: INCurrencyAmount? { get }
```

## See Also

### Getting Payment Record Details

- [payee](payee.md): The person receiving the funds.
- [payer](payer.md): The person providing the funds.
- [currencyAmount](currencyamount.md): The type of currency to transfer and the amount to transfer.
- [paymentMethod](paymentmethod.md): The payment method used to supply the funds.
- [note](note.md): A description of the payment to send.

# feeAmount (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The total amount of any fees added to the payment record.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INCurrencyAmount * feeAmount;
```

```objectivec
@property (atomic, copy, readonly, nullable) INCurrencyAmount * feeAmount;
```

## See Also

### Getting Payment Record Details

- [payee](payee.md): The person receiving the funds.
- [payer](payer.md): The person providing the funds.
- [currencyAmount](currencyamount.md): The type of currency to transfer and the amount to transfer.
- [paymentMethod](paymentmethod.md): The payment method used to supply the funds.
- [note](note.md): A description of the payment to send.

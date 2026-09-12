> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentrecord/payer](https://developer.apple.com/documentation/intents/inpaymentrecord/payer)

# payer (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The person providing the funds.

## Declaration

```swift
@NSCopying var payer: INPerson? { get }
```

## See Also

### Getting Payment Record Details

- [payee](payee.md): The person receiving the funds.
- [currencyAmount](currencyamount.md): The type of currency to transfer and the amount to transfer.
- [feeAmount](feeamount.md): The total amount of any fees added to the payment record.
- [paymentMethod](paymentmethod.md): The payment method used to supply the funds.
- [note](note.md): A description of the payment to send.

# payer (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The person providing the funds.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INPerson * payer;
```

```objectivec
@property (atomic, copy, readonly, nullable) INPerson * payer;
```

## See Also

### Getting Payment Record Details

- [payee](payee.md): The person receiving the funds.
- [currencyAmount](currencyamount.md): The type of currency to transfer and the amount to transfer.
- [feeAmount](feeamount.md): The total amount of any fees added to the payment record.
- [paymentMethod](paymentmethod.md): The payment method used to supply the funds.
- [note](note.md): A description of the payment to send.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentrecord/payee](https://developer.apple.com/documentation/intents/inpaymentrecord/payee)

# payee (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The person receiving the funds.

## Declaration

```swift
@NSCopying var payee: INPerson? { get }
```

## See Also

### Getting Payment Record Details

- [payer](payer.md): The person providing the funds.
- [currencyAmount](currencyamount.md): The type of currency to transfer and the amount to transfer.
- [feeAmount](feeamount.md): The total amount of any fees added to the payment record.
- [paymentMethod](paymentmethod.md): The payment method used to supply the funds.
- [note](note.md): A description of the payment to send.

# payee (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The person receiving the funds.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INPerson * payee;
```

```objectivec
@property (atomic, copy, readonly, nullable) INPerson * payee;
```

## See Also

### Getting Payment Record Details

- [payer](payer.md): The person providing the funds.
- [currencyAmount](currencyamount.md): The type of currency to transfer and the amount to transfer.
- [feeAmount](feeamount.md): The total amount of any fees added to the payment record.
- [paymentMethod](paymentmethod.md): The payment method used to supply the funds.
- [note](note.md): A description of the payment to send.

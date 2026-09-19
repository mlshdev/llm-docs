> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inpaymentrecord/paymentmethod

# paymentMethod (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The payment method used to supply the funds.

## Declaration

```swift
@NSCopying var paymentMethod: INPaymentMethod? { get }
```

## See Also

### Getting Payment Record Details

- [payee](payee.md): The person receiving the funds.
- [payer](payer.md): The person providing the funds.
- [currencyAmount](currencyamount.md): The type of currency to transfer and the amount to transfer.
- [feeAmount](feeamount.md): The total amount of any fees added to the payment record.
- [note](note.md): A description of the payment to send.

# paymentMethod (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

The payment method used to supply the funds.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INPaymentMethod * paymentMethod;
```

```objectivec
@property (atomic, copy, readonly, nullable) INPaymentMethod * paymentMethod;
```

## See Also

### Getting Payment Record Details

- [payee](payee.md): The person receiving the funds.
- [payer](payer.md): The person providing the funds.
- [currencyAmount](currencyamount.md): The type of currency to transfer and the amount to transfer.
- [feeAmount](feeamount.md): The total amount of any fees added to the payment record.
- [note](note.md): A description of the payment to send.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentrecord/note](https://developer.apple.com/documentation/intents/inpaymentrecord/note)

# note (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A description of the payment to send.

## Declaration

```swift
var note: String? { get }
```

<a id="Discussion"></a>

## Discussion

You can use notes to provide additional details about the purpose of the transaction.

## See Also

### Getting Payment Record Details

- [payee](payee.md): The person receiving the funds.
- [payer](payer.md): The person providing the funds.
- [currencyAmount](currencyamount.md): The type of currency to transfer and the amount to transfer.
- [feeAmount](feeamount.md): The total amount of any fees added to the payment record.
- [paymentMethod](paymentmethod.md): The payment method used to supply the funds.

# note (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A description of the payment to send.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * note;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * note;
```

<a id="Discussion"></a>

## Discussion

You can use notes to provide additional details about the purpose of the transaction.

## See Also

### Getting Payment Record Details

- [payee](payee.md): The person receiving the funds.
- [payer](payer.md): The person providing the funds.
- [currencyAmount](currencyamount.md): The type of currency to transfer and the amount to transfer.
- [feeAmount](feeamount.md): The total amount of any fees added to the payment record.
- [paymentMethod](paymentmethod.md): The payment method used to supply the funds.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentrecord/init(payee:payer:currencyamount:paymentmethod:note:status:feeamount:)](https://developer.apple.com/documentation/intents/inpaymentrecord/init(payee:payer:currencyamount:paymentmethod:note:status:feeamount:))

# init(payee:payer:currencyAmount:paymentMethod:note:status:feeAmount:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes a payment record with the specified payment details.

## Declaration

```swift
init?(payee: INPerson?, payer: INPerson?, currencyAmount: INCurrencyAmount?, paymentMethod: INPaymentMethod?, note: String?, status: INPaymentStatus, feeAmount: INCurrencyAmount?)
```

## Parameters

- `payee`: The person receiving the funds.
- `payer`: The person providing the funds.
- `currencyAmount`: The amount being transferred.
- `paymentMethod`: The payment method that represents the source of the funds.
- `note`: Any notes or instructions associated with the payment. Provide notes to convey extra details about the reason for the payment.
- `status`: The status of the transaction. For a list of possible values, see [INPaymentStatus](../inpaymentstatus.md).
- `feeAmount`: The fee associated with performing the transaction.

<a id="return-value"></a>

## Return Value

An initialized payment record object.

## See Also

### Creating a Payment Record Object

- [init(payee:payer:currencyAmount:paymentMethod:note:status:)](init%28payee_payer_currencyamount_paymentmethod_note_status_%29.md): Initializes a payment record with the specified payment details.

# initWithPayee:payer:currencyAmount:paymentMethod:note:status:feeAmount: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes a payment record with the specified payment details.

## Declaration

```objectivec
- (instancetype) initWithPayee:(INPerson *) payee payer:(INPerson *) payer currencyAmount:(INCurrencyAmount *) currencyAmount paymentMethod:(INPaymentMethod *) paymentMethod note:(NSString *) note status:(INPaymentStatus) status feeAmount:(INCurrencyAmount *) feeAmount;
```

## Parameters

- `payee`: The person receiving the funds.
- `payer`: The person providing the funds.
- `currencyAmount`: The amount being transferred.
- `paymentMethod`: The payment method that represents the source of the funds.
- `note`: Any notes or instructions associated with the payment. Provide notes to convey extra details about the reason for the payment.
- `status`: The status of the transaction. For a list of possible values, see [INPaymentStatus](../inpaymentstatus.md).
- `feeAmount`: The fee associated with performing the transaction.

<a id="return-value"></a>

## Return Value

An initialized payment record object.

## See Also

### Creating a Payment Record Object

- [initWithPayee:payer:currencyAmount:paymentMethod:note:status:](init%28payee_payer_currencyamount_paymentmethod_note_status_%29.md): Initializes a payment record with the specified payment details.

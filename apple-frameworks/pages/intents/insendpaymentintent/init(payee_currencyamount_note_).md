> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insendpaymentintent/init(payee:currencyamount:note:)](https://developer.apple.com/documentation/intents/insendpaymentintent/init(payee:currencyamount:note:))

# init(payee:currencyAmount:note:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes the send payment intent object with the specified recipient and payment information.

## Declaration

```swift
init(payee: INPerson?, currencyAmount: INCurrencyAmount?, note: String?)
```

## Parameters

- `payee`: The person receiving the funds.
- `currencyAmount`: The amount to transfer from the current user’s account to the `payee`.
- `note`: A note to include with the payment. Use this string to convey the reason for the payment.

<a id="return-value"></a>

## Return Value

An initialized intent or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, SiriKit creates instances when the user asks to send a payment to another user. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

# initWithPayee:currencyAmount:note: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes the send payment intent object with the specified recipient and payment information.

## Declaration

```objectivec
- (instancetype) initWithPayee:(INPerson *) payee currencyAmount:(INCurrencyAmount *) currencyAmount note:(NSString *) note;
```

## Parameters

- `payee`: The person receiving the funds.
- `currencyAmount`: The amount to transfer from the current user’s account to the `payee`.
- `note`: A note to include with the payment. Use this string to convey the reason for the payment.

<a id="return-value"></a>

## Return Value

An initialized intent or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you do not create instances of this class yourself. Instead, SiriKit creates instances when the user asks to send a payment to another user. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

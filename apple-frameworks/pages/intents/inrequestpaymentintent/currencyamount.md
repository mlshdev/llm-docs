> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestpaymentintent/currencyamount](https://developer.apple.com/documentation/intents/inrequestpaymentintent/currencyamount)

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

Use this property to verify that you can handle the transfer successfully. For example, you might verify that the currency amount and that your service allows the current user to make the request.

## See Also

### Getting Details About the Payment

- [payer](payer.md): The recipient of the payment request.
- [note](note.md): A note associated with the request.

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

Use this property to verify that you can handle the transfer successfully. For example, you might verify that the currency amount and that your service allows the current user to make the request.

## See Also

### Getting Details About the Payment

- [payer](payer.md): The recipient of the payment request.
- [note](note.md): A note associated with the request.

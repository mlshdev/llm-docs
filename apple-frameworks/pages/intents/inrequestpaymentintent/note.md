> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrequestpaymentintent/note](https://developer.apple.com/documentation/intents/inrequestpaymentintent/note)

# note (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A note associated with the request.

## Declaration

```swift
var note: String? { get }
```

<a id="Discussion"></a>

## Discussion

The user can include a note to indicate the reason for the request. Notes are not normally required, but you can require them as needed to help process the request.

## See Also

### Getting Details About the Payment

- [payer](payer.md): The recipient of the payment request.
- [currencyAmount](currencyamount.md): The amount of the payment.

# note (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

A note associated with the request.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * note;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * note;
```

<a id="Discussion"></a>

## Discussion

The user can include a note to indicate the reason for the request. Notes are not normally required, but you can require them as needed to help process the request.

## See Also

### Getting Details About the Payment

- [payer](payer.md): The recipient of the payment request.
- [currencyAmount](currencyamount.md): The amount of the payment.

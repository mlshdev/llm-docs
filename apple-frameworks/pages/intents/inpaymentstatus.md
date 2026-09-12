> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentstatus](https://developer.apple.com/documentation/intents/inpaymentstatus)

# INPaymentStatus (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the state of the financial transaction.

## Declaration

```swift
enum INPaymentStatus
```

## Topics

### Constants

- [INPaymentStatus.unknown](inpaymentstatus/unknown.md): The payment status is unknown.
- [INPaymentStatus.pending](inpaymentstatus/pending.md): The app hasn’t sent the payment yet.
- [INPaymentStatus.completed](inpaymentstatus/completed.md): The app made the payment.
- [INPaymentStatus.canceled](inpaymentstatus/canceled.md): The app canceled the transaction before transferring the funds.
- [INPaymentStatus.failed](inpaymentstatus/failed.md): The transaction failed and the funds were not transferred.
- [INPaymentStatus.unpaid](inpaymentstatus/unpaid.md): The bill is currently unpaid.

### Initializers

- [init(rawValue:)](inpaymentstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Data Objects

- [INAccountType](inaccounttype.md): Constants indicating the type of account involved in a financial transaction.
- [INCurrencyAmount](incurrencyamount.md): An amount of money to transfer during a financial transaction.
- [INPaymentAccount](inpaymentaccount.md): A user account that provides the funds when making a payment.
- [INPaymentAmount](inpaymentamount.md): The amount of money to apply to a bill payment.
- [INPaymentMethod](inpaymentmethod.md): Information about a form of payment supported by your app.
- [INPaymentRecord](inpaymentrecord.md): Detailed information about a financial transaction made between two users.
- [INPerson](inperson.md): Information about a person participating in a SiriKit interaction.

# INPaymentStatus (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the state of the financial transaction.

## Declaration

```objectivec
enum INPaymentStatus : NSInteger;
```

## Topics

### Constants

- [INPaymentStatusUnknown](inpaymentstatus/unknown.md): The payment status is unknown.
- [INPaymentStatusPending](inpaymentstatus/pending.md): The app hasn’t sent the payment yet.
- [INPaymentStatusCompleted](inpaymentstatus/completed.md): The app made the payment.
- [INPaymentStatusCanceled](inpaymentstatus/canceled.md): The app canceled the transaction before transferring the funds.
- [INPaymentStatusFailed](inpaymentstatus/failed.md): The transaction failed and the funds were not transferred.
- [INPaymentStatusUnpaid](inpaymentstatus/unpaid.md): The bill is currently unpaid.

## See Also

### Data Objects

- [INAccountType](inaccounttype.md): Constants indicating the type of account involved in a financial transaction.
- [INCurrencyAmount](incurrencyamount.md): An amount of money to transfer during a financial transaction.
- [INPaymentAccount](inpaymentaccount.md): A user account that provides the funds when making a payment.
- [INPaymentAmount](inpaymentamount.md): The amount of money to apply to a bill payment.
- [INPaymentMethod](inpaymentmethod.md): Information about a form of payment supported by your app.
- [INPaymentRecord](inpaymentrecord.md): Detailed information about a financial transaction made between two users.
- [INPerson](inperson.md): Information about a person participating in a SiriKit interaction.

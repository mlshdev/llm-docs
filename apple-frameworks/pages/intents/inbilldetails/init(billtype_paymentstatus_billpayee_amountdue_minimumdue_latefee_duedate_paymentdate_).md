> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbilldetails/init(billtype:paymentstatus:billpayee:amountdue:minimumdue:latefee:duedate:paymentdate:)](https://developer.apple.com/documentation/intents/inbilldetails/init(billtype:paymentstatus:billpayee:amountdue:minimumdue:latefee:duedate:paymentdate:))

# init(billType:paymentStatus:billPayee:amountDue:minimumDue:lateFee:dueDate:paymentDate:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Initializes a bill details object with information about the bill to pay.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
init?(billType: INBillType, paymentStatus: INPaymentStatus, billPayee: INBillPayee?, amountDue: INCurrencyAmount?, minimumDue: INCurrencyAmount?, lateFee: INCurrencyAmount?, dueDate: DateComponents?, paymentDate: DateComponents?)
```

## Parameters

- `billType`: The type of the bill.
- `paymentStatus`: A constant indicating the current status of the bill, such as whether the bill is pending.
- `billPayee`: The originator of the bill and the recipient of any funds applied to the bill payment.
- `amountDue`: The total amount of the bill.
- `minimumDue`: The minimum amount that the user must pay toward the bill.
- `lateFee`: The fee applied if the user pays the bill after the due date.
- `dueDate`: The date on which the bill is due.
- `paymentDate`: The date on which payment occured.

<a id="return-value"></a>

## Return Value

An initialized bill details object or `nil` if the object could not be created.

# initWithBillType:paymentStatus:billPayee:amountDue:minimumDue:lateFee:dueDate:paymentDate: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Initializes a bill details object with information about the bill to pay.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (instancetype) initWithBillType:(INBillType) billType paymentStatus:(INPaymentStatus) paymentStatus billPayee:(INBillPayee *) billPayee amountDue:(INCurrencyAmount *) amountDue minimumDue:(INCurrencyAmount *) minimumDue lateFee:(INCurrencyAmount *) lateFee dueDate:(NSDateComponents *) dueDate paymentDate:(NSDateComponents *) paymentDate;
```

## Parameters

- `billType`: The type of the bill.
- `paymentStatus`: A constant indicating the current status of the bill, such as whether the bill is pending.
- `billPayee`: The originator of the bill and the recipient of any funds applied to the bill payment.
- `amountDue`: The total amount of the bill.
- `minimumDue`: The minimum amount that the user must pay toward the bill.
- `lateFee`: The fee applied if the user pays the bill after the due date.
- `dueDate`: The date on which the bill is due.
- `paymentDate`: The date on which payment occured.

<a id="return-value"></a>

## Return Value

An initialized bill details object or `nil` if the object could not be created.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforbillsintent/init(billpayee:paymentdaterange:billtype:status:duedaterange:)](https://developer.apple.com/documentation/intents/insearchforbillsintent/init(billpayee:paymentdaterange:billtype:status:duedaterange:))

# init(billPayee:paymentDateRange:billType:status:dueDateRange:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Initializes an intent object that describes a search for bill details with the specified search parameters.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
init(billPayee: INBillPayee?, paymentDateRange: INDateComponentsRange?, billType: INBillType, status: INPaymentStatus, dueDateRange: INDateComponentsRange?)
```

## Parameters

- `billPayee`: The entity that created the bill. The user must configure payees in advance using your app. Use this parameter to search for bills from a specific organization.
- `paymentDateRange`: The date range during which payment occured. Use this parameter to search for bill payments within the specified date range.
- `billType`: The type of bill to pay. Use this parameter to search for bills of a specific type. Specify [INBillType.unknown](../inbilltype/unknown.md) to search for bills of any type.
- `status`: The current status of the bill. Use this parameter to search for pending or paid bills, or failed attempts to pay a bill.
- `dueDateRange`: The date range during which payment is due. Use this parameter to search for bills whose due date falls within the specified date range.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, SiriKit creates instances when the user asks to search for bills. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

# initWithBillPayee:paymentDateRange:billType:status:dueDateRange: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

Initializes an intent object that describes a search for bill details with the specified search parameters.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
- (instancetype) initWithBillPayee:(INBillPayee *) billPayee paymentDateRange:(INDateComponentsRange *) paymentDateRange billType:(INBillType) billType status:(INPaymentStatus) status dueDateRange:(INDateComponentsRange *) dueDateRange;
```

## Parameters

- `billPayee`: The entity that created the bill. The user must configure payees in advance using your app. Use this parameter to search for bills from a specific organization.
- `paymentDateRange`: The date range during which payment occured. Use this parameter to search for bill payments within the specified date range.
- `billType`: The type of bill to pay. Use this parameter to search for bills of a specific type. Specify [INBillTypeUnknown](../inbilltype/unknown.md) to search for bills of any type.
- `status`: The current status of the bill. Use this parameter to search for pending or paid bills, or failed attempts to pay a bill.
- `dueDateRange`: The date range during which payment is due. Use this parameter to search for bills whose due date falls within the specified date range.

<a id="return-value"></a>

## Return Value

An initialized intent object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, SiriKit creates instances when the user asks to search for bills. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

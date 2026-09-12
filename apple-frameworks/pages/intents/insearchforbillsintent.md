> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insearchforbillsintent](https://developer.apple.com/documentation/intents/insearchforbillsintent)

# INSearchForBillsIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

A request for the list of bills matching the specified criteria.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INSearchForBillsIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INSearchForBillsIntent](insearchforbillsintent.md) object when the user asks to see pending or already paid bills. The intent object contains the values to match when searching for bills. Users can search for bills based on the due date, the payee, the type, and whether they’re pending or already paid. When performing the search, use only the provided parameters to filter the search results and ignore any parameters that have a missing or unknown value.

To handle this intent, the handler object in your Intents extension must adopt the [INSearchForBillsIntentHandling](insearchforbillsintenthandling.md) protocol. Your handler should confirm the request and create an [INSearchForBillsIntentResponse](insearchforbillsintentresponse.md) object with the results of the search. For successful searches, Siri offers a way for the user to view the results.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents |
| Always requires unlocked device | Yes |

When performing a search, Siri automatically asks the user to unlock a currently locked device. You don’t need to explicitly ask to unlock the device.

## Topics

### Initializing the Intent Object

- [init(billPayee:paymentDateRange:billType:status:dueDateRange:)](insearchforbillsintent/init%28billpayee_paymentdaterange_billtype_status_duedaterange_%29.md): Deprecated. Initializes an intent object that describes a search for bill details with the specified search parameters.

### Getting the Search Attributes

- [billPayee](insearchforbillsintent/billpayee.md): Deprecated. The recipient of the payment.
- [billType](insearchforbillsintent/billtype.md): Deprecated. The type of the bill.
- [dueDateRange](insearchforbillsintent/duedaterange.md): Deprecated. The range of due dates in which to search for bills.
- [paymentDateRange](insearchforbillsintent/paymentdaterange.md): Deprecated. The range of payment dates in which to search for bills.
- [status](insearchforbillsintent/status.md): Deprecated. The status of the bill.

## Relationships

### Inherits From

- [INIntent](inintent.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentSetImageKeyPath](inintentsetimagekeypath.md)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Bill Search

- [INSearchForBillsIntentHandling](insearchforbillsintenthandling.md): Deprecated. The handler interface for searching for bills associated with the user.
- [INSearchForBillsIntentResponse](insearchforbillsintentresponse.md): Deprecated. Your app’s response to a request to a search for bills.

# INSearchForBillsIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.3+ (deprecated in 15.0) · iPadOS 10.3+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 8.0)

A request for the list of bills matching the specified criteria.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INSearchForBillsIntent : INIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INSearchForBillsIntent](insearchforbillsintent.md) object when the user asks to see pending or already paid bills. The intent object contains the values to match when searching for bills. Users can search for bills based on the due date, the payee, the type, and whether they’re pending or already paid. When performing the search, use only the provided parameters to filter the search results and ignore any parameters that have a missing or unknown value.

To handle this intent, the handler object in your Intents extension must adopt the [INSearchForBillsIntentHandling](insearchforbillsintenthandling.md) protocol. Your handler should confirm the request and create an [INSearchForBillsIntentResponse](insearchforbillsintentresponse.md) object with the results of the search. For successful searches, Siri offers a way for the user to view the results.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents |
| Always requires unlocked device | Yes |

When performing a search, Siri automatically asks the user to unlock a currently locked device. You don’t need to explicitly ask to unlock the device.

## Topics

### Initializing the Intent Object

- [initWithBillPayee:paymentDateRange:billType:status:dueDateRange:](insearchforbillsintent/init%28billpayee_paymentdaterange_billtype_status_duedaterange_%29.md): Deprecated. Initializes an intent object that describes a search for bill details with the specified search parameters.

### Getting the Search Attributes

- [billPayee](insearchforbillsintent/billpayee.md): Deprecated. The recipient of the payment.
- [billType](insearchforbillsintent/billtype.md): Deprecated. The type of the bill.
- [dueDateRange](insearchforbillsintent/duedaterange.md): Deprecated. The range of due dates in which to search for bills.
- [paymentDateRange](insearchforbillsintent/paymentdaterange.md): Deprecated. The range of payment dates in which to search for bills.
- [status](insearchforbillsintent/status.md): Deprecated. The status of the bill.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Bill Search

- [INSearchForBillsIntentHandling](insearchforbillsintenthandling.md): Deprecated. The handler interface for searching for bills associated with the user.
- [INSearchForBillsIntentResponse](insearchforbillsintentresponse.md): Deprecated. Your app’s response to a request to a search for bills.

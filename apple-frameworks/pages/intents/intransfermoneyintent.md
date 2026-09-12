> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intransfermoneyintent](https://developer.apple.com/documentation/intents/intransfermoneyintent)

# INTransferMoneyIntent (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

A request to transfer money between two accounts.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```swift
class INTransferMoneyIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INTransferMoneyIntent](intransfermoneyintent.md) object when the user asks to transfer money between two accounts. Transfers can occur only between accounts associated with the user. Use the information provided by the intent object to identify the involved accounts and the amount to transfer.

To handle this intent, the handler object in your Intents extension must adopt the [INTransferMoneyIntentHandling](intransfermoneyintenthandling.md) protocol. Your handler should confirm the request and create an [INTransferMoneyIntentResponse](intransfermoneyintentresponse.md) object with the transaction details. For successful transfers, Siri offers a way for the user to view the results.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device | Yes |

When performing a search, Siri automatically asks the user to unlock a currently locked device. You don’t need to explicitly ask to unlock the device. In addition, Siri always prompts the user to confirm the request before asking your Intents extension to handle it.

## Topics

### Initializing the Intent Object

- [init(from:to:transactionAmount:transactionScheduledDate:transactionNote:)](intransfermoneyintent/init%28from_to_transactionamount_transactionscheduleddate_transactionnote_%29.md): Deprecated. Initializes the intent object with the specified transaction details.

### Getting the Account Information

- [fromAccount](intransfermoneyintent/fromaccount.md): Deprecated. The account containing the funds to transfer.
- [toAccount](intransfermoneyintent/toaccount.md): Deprecated. The account receiving the funds.

### Getting the Transaction Details

- [transactionAmount](intransfermoneyintent/transactionamount.md): Deprecated. The amount to transfer.
- [transactionScheduledDate](intransfermoneyintent/transactionscheduleddate.md): Deprecated. The date on which to transfer the funds.
- [transactionNote](intransfermoneyintent/transactionnote.md): Deprecated. An optional note associated with the transaction.

### Initializers

- [init(fromAccount:toAccount:transactionAmount:transactionScheduledDate:transactionNote:)](intransfermoneyintent/init%28fromaccount_toaccount_transactionamount_transactionscheduleddate_transactionnote_%29.md): Deprecated.

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

### Money Transfers

- [INTransferMoneyIntentHandling](intransfermoneyintenthandling.md): Deprecated. The handler interface for transferring money between accounts.
- [INTransferMoneyIntentResponse](intransfermoneyintentresponse.md): Deprecated. Your app’s response to a request to transfer money.

# INTransferMoneyIntent (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 8.0)

A request to transfer money between two accounts.

> This intent is no longer available. You may define a custom intent instead. For more information, see [Deprecated SiriKit Intent Domains](https://developer.apple.com/support/deprecated-sirikit-intent-domains).

## Declaration

```objectivec
@interface INTransferMoneyIntent : INIntent
```

<a id="overview"></a>

## Overview

Siri creates an [INTransferMoneyIntent](intransfermoneyintent.md) object when the user asks to transfer money between two accounts. Transfers can occur only between accounts associated with the user. Use the information provided by the intent object to identify the involved accounts and the amount to transfer.

To handle this intent, the handler object in your Intents extension must adopt the [INTransferMoneyIntentHandling](intransfermoneyintenthandling.md) protocol. Your handler should confirm the request and create an [INTransferMoneyIntentResponse](intransfermoneyintentresponse.md) object with the transaction details. For successful transfers, Siri offers a way for the user to view the results.

<a id="Additional-Intent-Attributes"></a>

### Additional Intent Attributes

The following table lists additional attributes of this intent object:

| Attribute | Description |
| --- | --- |
| Supported by | Siri Intents, Siri Suggestions |
| Always requires unlocked device | Yes |

When performing a search, Siri automatically asks the user to unlock a currently locked device. You don’t need to explicitly ask to unlock the device. In addition, Siri always prompts the user to confirm the request before asking your Intents extension to handle it.

## Topics

### Initializing the Intent Object

- [initWithFromAccount:toAccount:transactionAmount:transactionScheduledDate:transactionNote:](intransfermoneyintent/init%28from_to_transactionamount_transactionscheduleddate_transactionnote_%29.md): Deprecated. Initializes the intent object with the specified transaction details.

### Getting the Account Information

- [fromAccount](intransfermoneyintent/fromaccount.md): Deprecated. The account containing the funds to transfer.
- [toAccount](intransfermoneyintent/toaccount.md): Deprecated. The account receiving the funds.

### Getting the Transaction Details

- [transactionAmount](intransfermoneyintent/transactionamount.md): Deprecated. The amount to transfer.
- [transactionScheduledDate](intransfermoneyintent/transactionscheduleddate.md): Deprecated. The date on which to transfer the funds.
- [transactionNote](intransfermoneyintent/transactionnote.md): Deprecated. An optional note associated with the transaction.

## Relationships

### Inherits From

- [INIntent](inintent.md)

## See Also

### Money Transfers

- [INTransferMoneyIntentHandling](intransfermoneyintenthandling.md): Deprecated. The handler interface for transferring money between accounts.
- [INTransferMoneyIntentResponse](intransfermoneyintentresponse.md): Deprecated. Your app’s response to a request to transfer money.

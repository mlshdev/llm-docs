> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inpaymentsdomainhandling](https://developer.apple.com/documentation/intents/inpaymentsdomainhandling)

# INPaymentsDomainHandling (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 6.0)

An interface for adopting all of the protocols in the payments domain.

> Please conform to INSendPaymentIntentHandling, INRequestPaymentIntentHandling, INPayBillIntentHandling, INSearchForBillsIntentHandling, INSearchForAccountsIntentHandling and INTransferMoneyIntentHandling instead

## Declaration

```swift
protocol INPaymentsDomainHandling : INPayBillIntentHandling, INRequestPaymentIntentHandling, INSearchForAccountsIntentHandling, INSearchForBillsIntentHandling, INSendPaymentIntentHandling, INTransferMoneyIntentHandling
```

```swift
protocol INPaymentsDomainHandling : INRequestPaymentIntentHandling, INSendPaymentIntentHandling
```

<a id="overview"></a>

## Overview

The [INPaymentsDomainHandling](inpaymentsdomainhandling.md) protocol is a convenience protocol that adopts all of the protocols used to handle payment-related intents. When your app adopts all of the protocols associated with payments, you can adopt this one protocol instead of adopting the [INSendPaymentIntentHandling](insendpaymentintenthandling.md), [INRequestPaymentIntentHandling](inrequestpaymentintenthandling.md), [INPayBillIntentHandling](inpaybillintenthandling.md), [INSearchForBillsIntentHandling](insearchforbillsintenthandling.md), [INSearchForAccountsIntentHandling](insearchforaccountsintenthandling.md), and [INTransferMoneyIntentHandling](intransfermoneyintenthandling.md) protocols separately.

An object that adopts this protocol must be able to respond to the following intents:

- [INRequestPaymentIntent](inrequestpaymentintent.md), a request for a payment from another user.
- [INSendPaymentIntent](insendpaymentintent.md), a request to send a payment to another user.
- [INPayBillIntent](inpaybillintent.md), a request to pay a bill.
- [INSearchForBillsIntent](insearchforbillsintent.md), a request to search for bills to pay.
- [INSearchForAccountsIntent](insearchforaccountsintent.md), a request to provide a list of the user’s accounts.
- [INTransferMoneyIntent](intransfermoneyintent.md), a request to transfer money between the designated accounts.

Your handler object must be prepared to resolve any parameters associated with these intents and to confirm and handle the requests. When confirming and handling a request, you provide the response object that matches the specified intent.

## Relationships

### Inherits From

- [INPayBillIntentHandling](inpaybillintenthandling.md)
- [INRequestPaymentIntentHandling](inrequestpaymentintenthandling.md)
- [INSearchForAccountsIntentHandling](insearchforaccountsintenthandling.md)
- [INSearchForBillsIntentHandling](insearchforbillsintenthandling.md)
- [INSendPaymentIntentHandling](insendpaymentintenthandling.md)
- [INTransferMoneyIntentHandling](intransfermoneyintenthandling.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Domain-Handling Protocols

- [INMessagesDomainHandling](inmessagesdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the messages domain.
- [INNotebookDomainHandling](innotebookdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the lists and notes domain.
- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the workouts domain.
- [INCallsDomainHandling](incallsdomainhandling.md): Deprecated. Provides a convenient way to adopt all of the protocols in the VoIP calling domain.
- [INVisualCodeDomainHandling](invisualcodedomainhandling.md): Deprecated. An interface for adopting all of the protocols in the visual codes domain.
- [INPhotosDomainHandling](inphotosdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the photos domain.
- [INRidesharingDomainHandling](inridesharingdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the ride-booking domain.
- [INCarCommandsDomainHandling](incarcommandsdomainhandling.md): Deprecated. An interface for adopting all the handling protocols in the car commands domain.
- [INCarPlayDomainHandling](incarplaydomainhandling.md): Deprecated. An interface for adopting all of the protocols in the CarPlay domain.
- [INRadioDomainHandling](inradiodomainhandling.md): Deprecated. An interface for adopting all of the protocols in the radio domain.

# INPaymentsDomainHandling (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 6.0)

An interface for adopting all of the protocols in the payments domain.

> Please conform to INSendPaymentIntentHandling, INRequestPaymentIntentHandling, INPayBillIntentHandling, INSearchForBillsIntentHandling, INSearchForAccountsIntentHandling and INTransferMoneyIntentHandling instead

## Declaration

```objectivec
@protocol INPaymentsDomainHandling <INSendPaymentIntentHandling, INRequestPaymentIntentHandling, INPayBillIntentHandling, INSearchForBillsIntentHandling, INSearchForAccountsIntentHandling, INTransferMoneyIntentHandling>
```

```objectivec
@protocol INPaymentsDomainHandling <INSendPaymentIntentHandling, INRequestPaymentIntentHandling>
```

<a id="overview"></a>

## Overview

The [INPaymentsDomainHandling](inpaymentsdomainhandling.md) protocol is a convenience protocol that adopts all of the protocols used to handle payment-related intents. When your app adopts all of the protocols associated with payments, you can adopt this one protocol instead of adopting the [INSendPaymentIntentHandling](insendpaymentintenthandling.md), [INRequestPaymentIntentHandling](inrequestpaymentintenthandling.md), [INPayBillIntentHandling](inpaybillintenthandling.md), [INSearchForBillsIntentHandling](insearchforbillsintenthandling.md), [INSearchForAccountsIntentHandling](insearchforaccountsintenthandling.md), and [INTransferMoneyIntentHandling](intransfermoneyintenthandling.md) protocols separately.

An object that adopts this protocol must be able to respond to the following intents:

- [INRequestPaymentIntent](inrequestpaymentintent.md), a request for a payment from another user.
- [INSendPaymentIntent](insendpaymentintent.md), a request to send a payment to another user.
- [INPayBillIntent](inpaybillintent.md), a request to pay a bill.
- [INSearchForBillsIntent](insearchforbillsintent.md), a request to search for bills to pay.
- [INSearchForAccountsIntent](insearchforaccountsintent.md), a request to provide a list of the user’s accounts.
- [INTransferMoneyIntent](intransfermoneyintent.md), a request to transfer money between the designated accounts.

Your handler object must be prepared to resolve any parameters associated with these intents and to confirm and handle the requests. When confirming and handling a request, you provide the response object that matches the specified intent.

## Relationships

### Inherits From

- [INPayBillIntentHandling](inpaybillintenthandling.md)
- [INRequestPaymentIntentHandling](inrequestpaymentintenthandling.md)
- [INSearchForAccountsIntentHandling](insearchforaccountsintenthandling.md)
- [INSearchForBillsIntentHandling](insearchforbillsintenthandling.md)
- [INSendPaymentIntentHandling](insendpaymentintenthandling.md)
- [INTransferMoneyIntentHandling](intransfermoneyintenthandling.md)

## See Also

### Domain-Handling Protocols

- [INMessagesDomainHandling](inmessagesdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the messages domain.
- [INNotebookDomainHandling](innotebookdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the lists and notes domain.
- [INWorkoutsDomainHandling](inworkoutsdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the workouts domain.
- [INCallsDomainHandling](incallsdomainhandling.md): Deprecated. Provides a convenient way to adopt all of the protocols in the VoIP calling domain.
- [INVisualCodeDomainHandling](invisualcodedomainhandling.md): Deprecated. An interface for adopting all of the protocols in the visual codes domain.
- [INPhotosDomainHandling](inphotosdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the photos domain.
- [INRidesharingDomainHandling](inridesharingdomainhandling.md): Deprecated. An interface for adopting all of the protocols in the ride-booking domain.
- [INCarCommandsDomainHandling](incarcommandsdomainhandling.md): Deprecated. An interface for adopting all the handling protocols in the car commands domain.
- [INCarPlayDomainHandling](incarplaydomainhandling.md): Deprecated. An interface for adopting all of the protocols in the CarPlay domain.
- [INRadioDomainHandling](inradiodomainhandling.md): Deprecated. An interface for adopting all of the protocols in the radio domain.

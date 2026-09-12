> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/vasrequest](https://developer.apple.com/documentation/proximityreader/vasrequest)

# VASRequest

**Framework:** ProximityReader  
**Kind:** Class  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

A request to read a contactless loyalty card and retrieve loyalty program identifiers for the person.

## Declaration

```swift
class VASRequest
```

## Mentioned In

- [Accepting loyalty passes from Wallet](accepting-loyalty-passes-from-wallet.md)

<a id="overview"></a>

## Overview

Create a `VASRequest` object to obtain details from someone’s loyalty card so that you can process associated transactions. After you create this object, pass it to the [readVAS(\_:)](paymentcardreadersession/readvas%28__%29.md)or [readPaymentCard(\_:vasRequest:stopOnVASResult:)](paymentcardreadersession/readpaymentcard%28__vasrequest_stoponvasresult_%29.md) method of [PaymentCardReaderSession](paymentcardreadersession.md).

## Topics

### Creating a loyalty card request

- [init(vasMerchants:localizedVASType:)](vasrequest/init%28vasmerchants_localizedvastype_%29.md): Creates a request to read loyalty card service information.

### Getting the loyalty card details

- [localizedVASType](vasrequest/localizedvastype.md): The localized name of the loyalty program.
- [vasMerchants](vasrequest/vasmerchants.md): The list of merchants to match against the user’s Wallet content or loyalty card.
- [VASRequest.Merchant](vasrequest/merchant.md): The identity of a merchant that offers a loyalty program.

### Setting the user interface language

- [userInterfaceLanguage](vasrequest/userinterfacelanguage.md): The language to use when localizing the user interface.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Loyalty card requests

- [Accepting loyalty passes from Wallet](accepting-loyalty-passes-from-wallet.md): Set up the necessary components so your app can begin using Tap to Pay on iPhone to read and issue loyalty passes.
- [VASReadResult](vasreadresult.md): The result of a request to read loyalty card information.

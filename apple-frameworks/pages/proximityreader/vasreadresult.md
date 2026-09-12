> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/vasreadresult](https://developer.apple.com/documentation/proximityreader/vasreadresult)

# VASReadResult

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

The result of a request to read loyalty card information.

## Declaration

```swift
struct VASReadResult
```

## Mentioned In

- [Accepting loyalty passes from Wallet](accepting-loyalty-passes-from-wallet.md)

<a id="overview"></a>

## Overview

A `VASReadResult` object contains the encrypted loyalty card information from the customer. Typically, you receive this object only after calling the [readVAS(\_:)](paymentcardreadersession/readvas%28__%29.md) or [readPaymentCard(\_:vasRequest:stopOnVASResult:)](paymentcardreadersession/readpaymentcard%28__vasrequest_stoponvasresult_%29.md) method of [PaymentCardReaderSession](paymentcardreadersession.md).

## Topics

### Creating a read result structure

- [init(id:entries:)](vasreadresult/init%28id_entries_%29.md): Deprecated. Creates a new result object with the specified identifier and customer entries.

### Getting the entry details

- [entries](vasreadresult/entries.md): The list of loyalty reward card entries received from the customer.
- [VASReadResult.ReadEntry](vasreadresult/readentry.md): An object containing encrypted data associated with a customer’s loyalty or reward pass.

### Getting the result ID

- [id](vasreadresult/id.md): A unique identifier string for the requested read operation.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Loyalty card requests

- [Accepting loyalty passes from Wallet](accepting-loyalty-passes-from-wallet.md): Set up the necessary components so your app can begin using Tap to Pay on iPhone to read and issue loyalty passes.
- [VASRequest](vasrequest.md): A request to read a contactless loyalty card and retrieve loyalty program identifiers for the person.

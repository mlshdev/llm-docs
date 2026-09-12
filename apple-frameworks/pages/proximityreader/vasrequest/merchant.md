> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/proximityreader/vasrequest/merchant](https://developer.apple.com/documentation/proximityreader/vasrequest/merchant)

# VASRequest.Merchant

**Framework:** ProximityReader  
**Kind:** Structure  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 17.0+

The identity of a merchant that offers a loyalty program.

## Declaration

```swift
struct Merchant
```

## Mentioned In

- [Accepting loyalty passes from Wallet](../accepting-loyalty-passes-from-wallet.md)

<a id="overview"></a>

## Overview

Create `Merchant` objects to identify merchants whose loyalty programs you support. When placing a request for loyalty card information, or Value Added Services (VAS) information, specify the associated merchant details. The system uses the merchant information to return details only for those merchants.

## Topics

### Creating a merchant structure

- [init(id:url:shouldSendURLOnly:localizedName:)](merchant/init%28id_url_shouldsendurlonly_localizedname_%29.md): Deprecated. Creates a new merchant object with the specified information.

### Getting the merchant name

- [localizedName](merchant/localizedname.md): The localized name of the merchant or corresponding loyalty program.

### Getting the merchant URL details

- [url](merchant/url.md): The URL to display to the customer if the matching loyalty or reward ID isn’t found.
- [shouldSendURLOnly](merchant/shouldsendurlonly.md): Deprecated. A Boolean value that indicates whether to send only the merchant URL to the customer’s device without requesting data.

### Getting the merchant ID

- [id](merchant/id.md): A unique identifier for the merchant.

### Initializers

- [init(id:url:localizedName:)](merchant/init%28id_url_localizedname_%29.md): Creates a new merchant object with the specified information.

## Relationships

### Conforms To

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the loyalty card details

- [localizedVASType](localizedvastype.md): The localized name of the loyalty program.
- [vasMerchants](vasmerchants.md): The list of merchants to match against the user’s Wallet content or loyalty card.

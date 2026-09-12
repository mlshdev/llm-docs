> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/merchanttokennotificationservices/merchanttokenmetadata](https://developer.apple.com/documentation/merchanttokennotificationservices/merchanttokenmetadata)

# MerchantTokenMetadata

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Management API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0.10+ · Apple Pay Merchant Token Management API 1.0.12+

The card information related to a merchant token, including its card art and metadata.

## Declaration

```
object MerchantTokenMetadata
```

## Properties

- `cardArt` — `[CardArt]`: An array that contains data you use to display art that represents the card related to the merchant token.
- `cardMetadata` — `CardMetadata`: Card data, including its expiration date and suffix, for the card related to the merchant token.

## See Also

### Merchant token event retrieval

- [Get Details of a Merchant Token Event](merchant-token-event-retrieval.md): Get the details of a merchant token event after receiving a notification.
- [MerchantTokenEventResponse](merchanttokeneventresponse.md): A response body that contains information about a life-cycle event for a merchant token.
- [CardArt](cardart.md): Data for displaying art to represent a card.
- [CardMetadata](cardmetadata.md): Data about the card, including its expiration date and suffix.

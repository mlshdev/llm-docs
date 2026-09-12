> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/merchanttokennotificationservices/merchanttokeneventresponse](https://developer.apple.com/documentation/merchanttokennotificationservices/merchanttokeneventresponse)

# MerchantTokenEventResponse

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Management API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0.10+ · Apple Pay Merchant Token Management API 1.0.12+

A response body that contains information about a life-cycle event for a merchant token.

## Declaration

```
object MerchantTokenEventResponse
```

## Properties

- `eventType` — `string` (required): A field that indicates the type of event for this notification.
  **Maximum length:** `64`  
  **Allowed values:** `UNLINK`, `UPDATED_METADATA`, `UPDATED_CARD_ART`, `UPDATED_MERCHANT_TOKEN_PUBLIC_KEY`
- `merchantTokenIdentifier` — `string` (required): The unique identifier of the merchant token.
  **Maximum length:** `64`
- `merchantTokenMetadata` — `MerchantTokenMetadata`: Data about the card, including its expiration date and suffix.
- `reason` — `string` (required): A string that indicates who originated the token event,  either the user or the card issuer.
  **Maximum length:** `256`

## See Also

### Merchant token event retrieval

- [Get Details of a Merchant Token Event](merchant-token-event-retrieval.md): Get the details of a merchant token event after receiving a notification.
- [MerchantTokenMetadata](merchanttokenmetadata.md): The card information related to a merchant token, including its card art and metadata.
- [CardArt](cardart.md): Data for displaying art to represent a card.
- [CardMetadata](cardmetadata.md): Data about the card, including its expiration date and suffix.

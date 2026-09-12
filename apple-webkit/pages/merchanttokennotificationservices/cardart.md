> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/merchanttokennotificationservices/cardart](https://developer.apple.com/documentation/merchanttokennotificationservices/cardart)

# CardArt

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Management API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0.10+ · Apple Pay Merchant Token Management API 1.0.12+

Data for displaying art to represent a card.

## Declaration

```
object CardArt
```

## Properties

- `name` — `string` (required): A name representing the bank and the card used for the transaction.
  **Minimum length:** `1`  
  **Maximum length:** `64`
- `type` — `string` (required): The card type.
  **Minimum length:** `1`  
  **Maximum length:** `64`
- `url` — `string` (required): The URL for downloading the card art, as provided by the issuing bank.
  **Minimum length:** `1`  
  **Maximum length:** `128`

## See Also

### Merchant token event retrieval

- [Get Details of a Merchant Token Event](merchant-token-event-retrieval.md): Get the details of a merchant token event after receiving a notification.
- [MerchantTokenEventResponse](merchanttokeneventresponse.md): A response body that contains information about a life-cycle event for a merchant token.
- [MerchantTokenMetadata](merchanttokenmetadata.md): The card information related to a merchant token, including its card art and metadata.
- [CardMetadata](cardmetadata.md): Data about the card, including its expiration date and suffix.

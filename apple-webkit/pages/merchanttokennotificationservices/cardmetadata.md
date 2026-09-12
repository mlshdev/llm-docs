> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/merchanttokennotificationservices/cardmetadata](https://developer.apple.com/documentation/merchanttokennotificationservices/cardmetadata)

# CardMetadata

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Management API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0.10+ · Apple Pay Merchant Token Management API 1.0.12+

Data about the card, including its expiration date and suffix.

## Declaration

```
object CardMetadata
```

## Properties

- `cardCountry` — `string`: The 2-letter ISO country code.
  **Maximum length:** `2`
- `expirationDate` — `string`: The card’s expiration date.
  **Maximum length:** `8`
- `fpanSuffix` — `string`: The last four digits of a card’s number.
  **Maximum length:** `4`
- `longDescription` — `string`: The long card description.
  **Maximum length:** `128`
- `shortDescription` — `string`: The short card description.
  **Maximum length:** `64`

## See Also

### Merchant token event retrieval

- [Get Details of a Merchant Token Event](merchant-token-event-retrieval.md): Get the details of a merchant token event after receiving a notification.
- [MerchantTokenEventResponse](merchanttokeneventresponse.md): A response body that contains information about a life-cycle event for a merchant token.
- [MerchantTokenMetadata](merchanttokenmetadata.md): The card information related to a merchant token, including its card art and metadata.
- [CardArt](cardart.md): Data for displaying art to represent a card.

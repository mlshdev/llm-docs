> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-8cd502625a0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/merchanttokennotificationservices/tokenmetadata

# TokenMetadata

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Management API  
**Kind:** Object  
**Availability:** App Store Connect API 1.0.11+ · Apple Pay Merchant Token Management API 1.0.12+

Unencrypted metadata about a merchant token, including its Merchant Payment Account Number (MPAN) and expiration date.

## Declaration

```
object TokenMetadata
```

## Properties

- `expirationDate` — `string` (required): The merchant token’s expiration date, in YYMMDD format, in which DD is the last day of the expiration month. For example, `200131` is the DD for January 2020.
  **Maximum length:** `6`
- `mpan` — `string` (required): The Merchant Payment Account Number (MPAN) for the merchant token.
- `mpanId` — `string`: The new MPAN identifier, if it changed. If the MPAN identifier didn’t change, this key is omitted from the JSON payload rather than sent as `null`.
  **Maximum length:** `64`

## See Also

### Merchant token event retrieval

- [Get Details of a Merchant Token Event](merchant-token-event-retrieval.md): Get the details of a merchant token event after receiving a notification.
- [MerchantTokenEventResponse](merchanttokeneventresponse.md): A response body that contains information about a life-cycle event for a merchant token.
- [MerchantTokenMetadata](merchanttokenmetadata.md): The card information related to a merchant token, including its card art and metadata.
- [CardArt](cardart.md): Data for displaying art to represent a card.
- [CardMetadata](cardmetadata.md): Data about the card, including its expiration date and suffix.
- [EncryptedTokenMetadata](encryptedtokenmetadata.md): Encrypted data about the merchant token, including its Merchant Payment Account Number (MPAN) and expiration date.

> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/merchanttokennotificationservices/updatemerchantmetadatarequest](https://developer.apple.com/documentation/merchanttokennotificationservices/updatemerchantmetadatarequest)

# UpdateMerchantMetadataRequest

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Management API  
**Kind:** Object  
**Availability:** Apple Pay Merchant Token Management API 1.0.12+

Update the merchant token’s notification metadata.

## Declaration

```
object UpdateMerchantMetadataRequest
```

## Properties

- `merchantMetadata` — `MerchantMetadata` (required): The metadata of the merchant.
- `merchantTokenIdentifier` — `string` (required): The unique identifier of the merchant token.
  **Maximum length:** `64`

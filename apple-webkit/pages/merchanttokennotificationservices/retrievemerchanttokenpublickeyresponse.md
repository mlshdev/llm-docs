> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/merchanttokennotificationservices/retrievemerchanttokenpublickeyresponse](https://developer.apple.com/documentation/merchanttokennotificationservices/retrievemerchanttokenpublickeyresponse)

# RetrieveMerchantTokenPublicKeyResponse

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Management API  
**Kind:** Object  
**Availability:** Apple Pay Merchant Token Management API 1.0.12+

Get the merchant token public key response.

## Declaration

```
object RetrieveMerchantTokenPublicKeyResponse
```

## Properties

- `merchantTokenPublicKey` — `string` (required): The X9.63-encoded public key, Base64-encoded.
  **Maximum length:** `256`
- `statusCode` — `integer` (required): The HTTP status code.
- `supportedCiphersuite` — `string` (required): The Apple-supported ciphersuite for HPKE in authorization mode. Supported: HPKE_AUTH_P384_SHA384_AES_GCM_256.
  **Maximum length:** `64`

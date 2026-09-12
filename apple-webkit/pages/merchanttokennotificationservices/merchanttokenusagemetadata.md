> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/merchanttokennotificationservices/merchanttokenusagemetadata](https://developer.apple.com/documentation/merchanttokennotificationservices/merchanttokenusagemetadata)

# MerchantTokenUsageMetadata

**Interface language:** Data

**Framework:** Apple Pay Merchant Token Management API  
**Kind:** Object  
**Availability:** Apple Pay Merchant Token Management API 1.0.12+

Metadata about where and how to retrieve the latest usage information.

## Declaration

```
object MerchantTokenUsageMetadata
```

## Properties

- `ciphersuite` — `string` (required): The cipher suite used for HPKE in authorization mode. Use the value sent as `supportedCiphersuite` in the `Retrieve MerchantToken PublicKey API` response.
  **Maximum length:** `64`
- `data` — `string` (required): Metadata encyrpted using the merchant token public key.
  **Maximum length:** `4000`
- `ephemeralPublicKey` — `string` (required): The ephemeral public key in X9.63 representation, Base64-encoded.
  **Maximum length:** `256`
- `infoHash` — `string` (required): A SHA-256 digest of the `info`, hex-encoded.
  **Maximum length:** `256`
- `merchantPublicKey` — `string` (required): The `merchantPublicKey` in X9.63 representation, Base64-encoded.
  **Maximum length:** `256`
- `merchantTokenPublicKeyHash` — `string` (required): An SHA-256 digest of the `merchantTokenPublicKey`, hex-encoded.
  **Maximum length:** `256`

<a id="Discussion"></a>

## Discussion

The `merchantPublicKey` includes encrypted metadata. When decrypted, you get a `data` JSON object that contains the `webServiceURL` of the merchant server, which hosts the usage information, and an opaque `authenticationToken`. The user’s devices present the `authenticationToken` when retrieving the latest usage information from the merchant server. This allows the merchant server to authenticate these requests.

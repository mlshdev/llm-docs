> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accountorganizationaldatasharing/jwkset/jwkset.keys

# JWKSet.Keys

**Interface language:** Data

**Framework:** Account & Organizational Data Sharing  
**Kind:** Dictionary  
**Availability:** AccountOrganizationalDataSharing 1.0+

An object that defines a single JSON Web Key.

## Declaration

```
object JWKSet.Keys
```

## Properties

- `alg` — `string`: The encryption algorithm used to encrypt the token.
- `e` — `string`: The exponent value for the RSA public key.
- `kid` — `string`: A 10-character identifier key, obtained from your developer account.
- `kty` — `string`: The key type parameter setting. Use the value `RSA`.
- `n` — `string`: The modulus value for the RSA public key.
- `use` — `string`: The intended use for the public key.

<a id="overview"></a>

## Overview

JWK is an open standard ([RFC 7517](https://www.rfc-editor.org/rfc/rfc7517)) that defines a data structure to represent cryptographic keys.

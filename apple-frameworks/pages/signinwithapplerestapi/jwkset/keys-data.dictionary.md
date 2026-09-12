> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/signinwithapplerestapi/jwkset/keys-data.dictionary](https://developer.apple.com/documentation/signinwithapplerestapi/jwkset/keys-data.dictionary)

# JWKSet.Keys

**Interface language:** Data

**Framework:** Sign in with Apple REST API  
**Kind:** Object  
**Availability:** Sign in with Apple REST API 1.0+

An object that defines a single JSON Web Key.

## Declaration

```
object JWKSet.Keys
```

## Properties

- `alg` — `string`: The encryption algorithm used to encrypt the token.
- `e` — `string`: The exponent value for the RSA public key.
- `kid` — `string`: A 10-character identifier key, obtained from your developer account.
- `kty` — `string`: The key type parameter setting. You must set to “RSA”.
- `n` — `string`: The modulus value for the RSA public key.
- `use` — `string`: The intended use for the public key.

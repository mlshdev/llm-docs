> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/signinwithapplerestapi/jwkset](https://developer.apple.com/documentation/signinwithapplerestapi/jwkset)

# JWKSet

**Interface language:** Data

**Framework:** Sign in with Apple REST API  
**Kind:** Object  
**Availability:** Sign in with Apple REST API 1.0+

A set of JSON Web Key objects.

## Declaration

```
object JWKSet
```

## Properties

- `keys` — `[JWKSet.Keys]`: An array that contains JSON Web Key objects.

## Topics

### Keys object

- [JWKSet.Keys](jwkset/keys-data.dictionary.md): An object that defines a single JSON Web Key.

## See Also

### Common objects

- [TokenResponse](tokenresponse.md): The response token object returned on a successful request.
- [ErrorResponse](errorresponse.md): The error object returned after an unsuccessful request.

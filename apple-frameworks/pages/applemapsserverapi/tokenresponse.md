> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applemapsserverapi/tokenresponse

# TokenResponse

**Interface language:** Data

**Framework:** Apple Maps Server API  
**Kind:** Object  
**Availability:** Apple Maps Server API 1.2+

An object that contains an access token and an expiration time in seconds.

## Declaration

```
object TokenResponse
```

## Properties

- `accessToken` — `string`: A string that represents the access token.
- `expiresInSeconds` — `integer`: An integer that indicates the time, in seconds from now until the token expires.

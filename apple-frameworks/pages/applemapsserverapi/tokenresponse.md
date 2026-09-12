> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applemapsserverapi/tokenresponse](https://developer.apple.com/documentation/applemapsserverapi/tokenresponse)

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

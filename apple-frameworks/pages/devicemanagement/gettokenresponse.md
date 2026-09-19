> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/gettokenresponse

# GetTokenResponse

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS 1.1+

The get token response details.

## Declaration

```
object GetTokenResponse
```

## Properties

- `TokenData` — `data` (required): The token data. If the token is a string value, it needs to be a UTF-8-encoded string.

## See Also

### Requests and responses

- [GetTokenRequest](gettokenrequest.md): The get token request details.

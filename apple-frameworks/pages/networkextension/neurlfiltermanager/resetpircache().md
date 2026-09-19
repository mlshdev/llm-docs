> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neurlfiltermanager/resetpircache()

# resetPIRCache()

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Resets the PIR on-device cache.

## Declaration

```swift
func resetPIRCache() async throws
```

<a id="discussion"></a>

## Discussion

The PIR system on device caches previous PIR queries and responses to minimize exchanges with the PIR server. When there is a dataset change on the PIR server, perform a reset of the on-device cache to avoid using stale cache entries.

## See Also

### Working with a Private Information Retrieval server

- [pirAuthenticationToken](pirauthenticationtoken.md): A PIR per-user authentication token string.
- [refreshPIRParameters()](refreshpirparameters%28%29.md): Refetches PIR parameters from the server.
- [pirServerURL](pirserverurl.md): Deprecated. A URL that contains the domain name of the PIR server.
- [pirPrivacyPassIssuerURL](pirprivacypassissuerurl.md): Deprecated. A URL that contains the domain name of Privacy Pass issuer.

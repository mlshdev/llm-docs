> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neurlfiltermanager/pirprivacypassissuerurl

# pirPrivacyPassIssuerURL

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.2) · iPadOS 26.0+ (deprecated in 27.2) · Mac Catalyst 26.0+ (deprecated in 27.2) · macOS 26.0+ (deprecated in 27.2)

A URL that contains the domain name of Privacy Pass issuer.

> Set the PIR privacy pass-issuer URL in your information property list in the `NSPIRConfiguration` dictionary.

## Declaration

```swift
var pirPrivacyPassIssuerURL: URL? { get }
```

## See Also

### Working with a Private Information Retrieval server

- [pirAuthenticationToken](pirauthenticationtoken.md): A PIR per-user authentication token string.
- [refreshPIRParameters()](refreshpirparameters%28%29.md): Refetches PIR parameters from the server.
- [resetPIRCache()](resetpircache%28%29.md): Resets the PIR on-device cache.
- [pirServerURL](pirserverurl.md): Deprecated. A URL that contains the domain name of the PIR server.

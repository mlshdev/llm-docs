> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/pirprivacypassissuerurl](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/pirprivacypassissuerurl)

# pirPrivacyPassIssuerURL

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A URL that contains the domain name of Privacy Pass issuer.

## Declaration

```swift
var pirPrivacyPassIssuerURL: URL? { get }
```

## See Also

### Working with a Private Information Retrieval server

- [pirServerURL](pirserverurl.md): A URL that contains the domain name of the PIR server.
- [pirAuthenticationToken](pirauthenticationtoken.md): A PIR per-user authentication token string.
- [refreshPIRParameters()](refreshpirparameters%28%29.md): Refetches PIR parameters from the server.
- [resetPIRCache()](resetpircache%28%29.md): Resets the PIR on-device cache.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neurlfiltermanager/pirserverurl

# pirServerURL

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ (deprecated in 27.2) · iPadOS 26.0+ (deprecated in 27.2) · Mac Catalyst 26.0+ (deprecated in 27.2) · macOS 26.0+ (deprecated in 27.2)

A URL that contains the domain name of the PIR server.

> Set the PIR server URL in your information property list in the `NSPIRConfiguration` dictionary.

## Declaration

```swift
var pirServerURL: URL? { get }
```

<a id="discussion"></a>

## Discussion

Have your URL filter app implementation set up a PIR server, which hosts a URL dataset, that’s reachable at this URL. When making an HTTP request with any of the system networking frameworks, NetworkExtension validates the URL with the specified PIR server before sending the request.

To use the PIR server for URL filtering, make sure the server contains a PIR use case with the name format “*bundleidentifier*.url.filtering” where *bundleidentifier* is the bundle identifier of your URL filter app.

## See Also

### Working with a Private Information Retrieval server

- [pirAuthenticationToken](pirauthenticationtoken.md): A PIR per-user authentication token string.
- [refreshPIRParameters()](refreshpirparameters%28%29.md): Refetches PIR parameters from the server.
- [resetPIRCache()](resetpircache%28%29.md): Resets the PIR on-device cache.
- [pirPrivacyPassIssuerURL](pirprivacypassissuerurl.md): Deprecated. A URL that contains the domain name of Privacy Pass issuer.

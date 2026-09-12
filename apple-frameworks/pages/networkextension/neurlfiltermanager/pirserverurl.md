> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/pirserverurl](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/pirserverurl)

# pirServerURL

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A URL that contains the domain name of the PIR server.

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

- [pirPrivacyPassIssuerURL](pirprivacypassissuerurl.md): A URL that contains the domain name of Privacy Pass issuer.
- [pirAuthenticationToken](pirauthenticationtoken.md): A PIR per-user authentication token string.
- [refreshPIRParameters()](refreshpirparameters%28%29.md): Refetches PIR parameters from the server.
- [resetPIRCache()](resetpircache%28%29.md): Resets the PIR on-device cache.

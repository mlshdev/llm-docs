> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfiltermanager/pirauthenticationtoken](https://developer.apple.com/documentation/networkextension/neurlfiltermanager/pirauthenticationtoken)

# pirAuthenticationToken

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A PIR per-user authentication token string.

## Declaration

```swift
var pirAuthenticationToken: String? { get }
```

<a id="discussion"></a>

## Discussion

This value is an HTTP bearer token that authenticates the person using your app. The system uses this token to attest that it is a valid user when requesting anonymous authentication tokens.

## See Also

### Working with a Private Information Retrieval server

- [pirServerURL](pirserverurl.md): A URL that contains the domain name of the PIR server.
- [pirPrivacyPassIssuerURL](pirprivacypassissuerurl.md): A URL that contains the domain name of Privacy Pass issuer.
- [refreshPIRParameters()](refreshpirparameters%28%29.md): Refetches PIR parameters from the server.
- [resetPIRCache()](resetpircache%28%29.md): Resets the PIR on-device cache.

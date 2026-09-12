> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetworkerrors/cfnetserviceerrortimeout](https://developer.apple.com/documentation/cfnetwork/cfnetworkerrors/cfnetserviceerrortimeout)

# CFNetworkErrors.cfNetServiceErrorTimeout (Swift)

**Framework:** CFNetwork  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Resolution failed because the timeout was reached.

## Declaration

```swift
case cfNetServiceErrorTimeout
```

## See Also

### Constants

- [CFNetworkErrors.cfHostErrorHostNotFound](cfhosterrorhostnotfound.md): The specified host wasn’t found.
- [CFNetworkErrors.cfHostErrorUnknown](cfhosterrorunknown.md): An unknown error.
- [CFNetworkErrors.cfsocksErrorUnknownClientVersion](cfsockserrorunknownclientversion.md): The SOCKS server rejected access because it doesn’t support connections with the requested SOCKS version.
- [CFNetworkErrors.cfsocksErrorUnsupportedServerVersion](cfsockserrorunsupportedserverversion.md): The SOCKS server doesn’t support the requested version.
- [CFNetworkErrors.cfsocks4ErrorRequestFailed](cfsocks4errorrequestfailed.md): The server rejected the request, or the request failed.
- [CFNetworkErrors.cfsocks4ErrorIdentdFailed](cfsocks4erroridentdfailed.md): The server couldn’t connect to the `identd` daemon on the client and rejected the request.
- [CFNetworkErrors.cfsocks4ErrorIdConflict](cfsocks4erroridconflict.md): The server rejected the request because the client program and the `identd` daemon reported different user IDs.
- [CFNetworkErrors.cfsocks4ErrorUnknownStatusCode](cfsocks4errorunknownstatuscode.md): The server returned an unknown status code.
- [CFNetworkErrors.cfsocks5ErrorBadState](cfsocks5errorbadstate.md): The stream isn’t in a state that allows the requested operation.
- [CFNetworkErrors.cfsocks5ErrorBadResponseAddr](cfsocks5errorbadresponseaddr.md): The address type returned isn’t supported.
- [CFNetworkErrors.cfsocks5ErrorBadCredentials](cfsocks5errorbadcredentials.md): The SOCKS server refused the client connection because of bad login credentials.
- [CFNetworkErrors.cfsocks5ErrorUnsupportedNegotiationMethod](cfsocks5errorunsupportednegotiationmethod.md): The requested method isn’t supported.
- [CFNetworkErrors.cfsocks5ErrorNoAcceptableMethod](cfsocks5errornoacceptablemethod.md): The client and server couldn’t find a mutually agreeable authentication method.
- [CFNetworkErrors.cfftpErrorUnexpectedStatusCode](cfftperrorunexpectedstatuscode.md): The server returned an unexpected status code.
- [CFNetworkErrors.cfErrorHTTPAuthenticationTypeUnsupported](cferrorhttpauthenticationtypeunsupported.md): The client and server couldn’t agree on a supported authentication type.

# kCFNetServiceErrorTimeout (Objective-C)

**Framework:** CFNetwork  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Resolution failed because the timeout was reached.

## Declaration

```objectivec
kCFNetServiceErrorTimeout
```

## See Also

### Constants

- [kCFHostErrorHostNotFound](cfhosterrorhostnotfound.md): The specified host wasn’t found.
- [kCFHostErrorUnknown](cfhosterrorunknown.md): An unknown error.
- [kCFSOCKSErrorUnknownClientVersion](cfsockserrorunknownclientversion.md): The SOCKS server rejected access because it doesn’t support connections with the requested SOCKS version.
- [kCFSOCKSErrorUnsupportedServerVersion](cfsockserrorunsupportedserverversion.md): The SOCKS server doesn’t support the requested version.
- [kCFSOCKS4ErrorRequestFailed](cfsocks4errorrequestfailed.md): The server rejected the request, or the request failed.
- [kCFSOCKS4ErrorIdentdFailed](cfsocks4erroridentdfailed.md): The server couldn’t connect to the `identd` daemon on the client and rejected the request.
- [kCFSOCKS4ErrorIdConflict](cfsocks4erroridconflict.md): The server rejected the request because the client program and the `identd` daemon reported different user IDs.
- [kCFSOCKS4ErrorUnknownStatusCode](cfsocks4errorunknownstatuscode.md): The server returned an unknown status code.
- [kCFSOCKS5ErrorBadState](cfsocks5errorbadstate.md): The stream isn’t in a state that allows the requested operation.
- [kCFSOCKS5ErrorBadResponseAddr](cfsocks5errorbadresponseaddr.md): The address type returned isn’t supported.
- [kCFSOCKS5ErrorBadCredentials](cfsocks5errorbadcredentials.md): The SOCKS server refused the client connection because of bad login credentials.
- [kCFSOCKS5ErrorUnsupportedNegotiationMethod](cfsocks5errorunsupportednegotiationmethod.md): The requested method isn’t supported.
- [kCFSOCKS5ErrorNoAcceptableMethod](cfsocks5errornoacceptablemethod.md): The client and server couldn’t find a mutually agreeable authentication method.
- [kCFFTPErrorUnexpectedStatusCode](cfftperrorunexpectedstatuscode.md): The server returned an unexpected status code.
- [kCFErrorHTTPAuthenticationTypeUnsupported](cferrorhttpauthenticationtypeunsupported.md): The client and server couldn’t agree on a supported authentication type.

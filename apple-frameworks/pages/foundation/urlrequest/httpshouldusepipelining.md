> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlrequest/httpshouldusepipelining](https://developer.apple.com/documentation/foundation/urlrequest/httpshouldusepipelining)

# httpShouldUsePipelining

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 18.4) · iPadOS 8.0+ (deprecated in 18.4) · Mac Catalyst 8.0+ (deprecated in 18.4) · macOS 10.10+ (deprecated in 15.4) · tvOS 9.0+ (deprecated in 18.4) · visionOS 1.0+ (deprecated in 2.4) · watchOS 2.0+ (deprecated in 11.4)

A Boolean value indicating whether the request should transmit before the previous response is received.

> Pipelining is an HTTP/1.1 concept. Adopt HTTP/2 or later instead.

## Declaration

```swift
var httpShouldUsePipelining: Bool { get set }
```

<a id="discussion"></a>

## Discussion

HTTP/2 and later ignore this property. HTTP/1.1 only considers this property in the classic loading mode (`usesClassicLoadingMode`).

## See Also

### Controlling request behavior

- [timeoutInterval](timeoutinterval.md): The timeout interval of the request.
- [httpShouldHandleCookies](httpshouldhandlecookies.md): A Boolean value indicating whether cookies will be sent with and set for this request.
- [allowsCellularAccess](allowscellularaccess.md): A Boolean value indicating whether the request is allowed to use the built-in cellular radios to satisfy the request.
- [allowsPersistentDNS](allowspersistentdns.md): `true` if the request is allowed to store and use DNS answers, potentially beyond TTL expiry, in a persistent per-process cache, `false` otherwise. Defaults to `false`. This should only be set to `true` for hostnames whose resolutions are not expected to change across networks.
- [assumesHTTP3Capable](assumeshttp3capable.md): `true` if server endpoint is known to support HTTP/3. Enables QUIC racing without HTTP/3 service discovery. Defaults to `false`. The default may be `true` in a future OS update.
- [cookiePartitionIdentifier](cookiepartitionidentifier.md)
- [requiresDNSSECValidation](requiresdnssecvalidation.md): `true` if the request is required to do DNSSEC validation during DNS lookup. `false` otherwise. Defaults to `false`.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlrequest/assumeshttp3capable](https://developer.apple.com/documentation/foundation/urlrequest/assumeshttp3capable)

# assumesHTTP3Capable

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

`true` if server endpoint is known to support HTTP/3. Enables QUIC racing without HTTP/3 service discovery. Defaults to `false`. The default may be `true` in a future OS update.

## Declaration

```swift
var assumesHTTP3Capable: Bool { get set }
```

## See Also

### Controlling request behavior

- [timeoutInterval](timeoutinterval.md): The timeout interval of the request.
- [httpShouldHandleCookies](httpshouldhandlecookies.md): A Boolean value indicating whether cookies will be sent with and set for this request.
- [httpShouldUsePipelining](httpshouldusepipelining.md): Deprecated. A Boolean value indicating whether the request should transmit before the previous response is received.
- [allowsCellularAccess](allowscellularaccess.md): A Boolean value indicating whether the request is allowed to use the built-in cellular radios to satisfy the request.
- [allowsPersistentDNS](allowspersistentdns.md): `true` if the request is allowed to store and use DNS answers, potentially beyond TTL expiry, in a persistent per-process cache, `false` otherwise. Defaults to `false`. This should only be set to `true` for hostnames whose resolutions are not expected to change across networks.
- [cookiePartitionIdentifier](cookiepartitionidentifier.md)
- [requiresDNSSECValidation](requiresdnssecvalidation.md): `true` if the request is required to do DNSSEC validation during DNS lookup. `false` otherwise. Defaults to `false`.

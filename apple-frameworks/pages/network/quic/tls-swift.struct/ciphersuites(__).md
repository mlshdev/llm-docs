> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/quic/tls-swift.struct/ciphersuites(_:)](https://developer.apple.com/documentation/network/quic/tls-swift.struct/ciphersuites(_:))

# cipherSuites(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set TLS cipher suites to the set of enabled ciphersuites.

## Declaration

```swift
func cipherSuites(_ suites: [tls_ciphersuite_t]) -> QUIC
```

## Parameters

- `suites`: The cipher suites to set.

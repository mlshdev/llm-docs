> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/dtls/ciphersuites(_:)](https://developer.apple.com/documentation/network/dtls/ciphersuites(_:))

# cipherSuites(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Set DTLS ciphersuites to the set of enabled ciphersuites.

## Declaration

```swift
func cipherSuites(_ suites: [tls_ciphersuite_t]) -> DTLS
```

## Parameters

- `suites`: The cipher suites to set.

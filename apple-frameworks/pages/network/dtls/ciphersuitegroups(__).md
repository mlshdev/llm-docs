> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/dtls/ciphersuitegroups(_:)

# cipherSuiteGroups(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Set DTLS ciphersuite groups to the set of enabled ciphersuites.

## Declaration

```swift
func cipherSuiteGroups(_ groups: [tls_ciphersuite_group_t]) -> DTLS
```

## Parameters

- `groups`: The cipher suite groups to set.

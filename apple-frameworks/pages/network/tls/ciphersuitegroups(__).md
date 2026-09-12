> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/tls/ciphersuitegroups(_:)](https://developer.apple.com/documentation/network/tls/ciphersuitegroups(_:))

# cipherSuiteGroups(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set TLS ciphersuite groups to the set of enabled ciphersuites.

## Declaration

```swift
func cipherSuiteGroups(_ groups: [tls_ciphersuite_group_t]) -> TLS
```

## Parameters

- `groups`: The cipher suite groups to set.

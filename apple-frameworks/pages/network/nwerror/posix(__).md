> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwerror/posix(_:)](https://developer.apple.com/documentation/network/nwerror/posix(_:))

# NWError.posix(\_:)

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A POSIX error, which is used for most network protocol and routing errors.

## Declaration

```swift
case posix(POSIXErrorCode)
```

## See Also

### Checking Error Types

- [NWError.dns(\_:)](dns%28__%29.md): A DNS error encountered in resolving, browsing, or advertising.
- [NWError.tls(\_:)](tls%28__%29.md): A TLS error reported by a TLS connection or listener.

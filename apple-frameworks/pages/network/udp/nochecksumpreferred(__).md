> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/udp/nochecksumpreferred(_:)](https://developer.apple.com/documentation/network/udp/nochecksumpreferred(_:))

# noChecksumPreferred(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Skip computing checksums when sending UDP packets.

## Declaration

```swift
func noChecksumPreferred(_ noChecksum: Bool) -> UDP
```

<a id="discussion"></a>

## Discussion

This will only take effect when running over IPv4 (`UDP_NOCKSUM`).

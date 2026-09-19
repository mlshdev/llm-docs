> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/withnetworkconnection(to:using:_:)-1sik8

# withNetworkConnection(to:using:\_:)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
nonisolated(nonsending) func withNetworkConnection<ApplicationProtocol>(to endpoint: NWEndpoint, @ProtocolStackBuilder<ApplicationProtocol> using builder: () -> ApplicationProtocol, _ handler: (NetworkConnection<ApplicationProtocol>) async throws -> Void) async throws where ApplicationProtocol : OneToOneProtocol
```

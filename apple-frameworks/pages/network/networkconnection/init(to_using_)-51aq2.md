> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/networkconnection/init(to:using:)-51aq2

# init(to:using:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Create a new connection to an endpoint, with protocol stack.

## Declaration

```swift
convenience init(to provider: any Connectable, @ProtocolStackBuilder<ApplicationProtocol> using builder: () -> ApplicationProtocol)
```

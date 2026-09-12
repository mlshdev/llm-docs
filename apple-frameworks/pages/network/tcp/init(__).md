> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/tcp/init(_:)](https://developer.apple.com/documentation/network/tcp/init(_:))

# init(\_:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Create an instance of TCP.

## Declaration

```swift
init(@ProtocolStackBuilder<IP> _ builder: () -> IP)
```

## Parameters

- `builder`: The protocol stack below TCP. Defaults to `IP()`.

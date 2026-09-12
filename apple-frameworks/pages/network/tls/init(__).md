> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/tls/init(_:)](https://developer.apple.com/documentation/network/tls/init(_:))

# init(\_:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Create a TLS protocol to use in a protocol stack.

## Declaration

```swift
init(@ProtocolStackBuilder<TCP> _ builder: () -> TCP)
```

## Parameters

- `builder`: The protocol stack below TLS.

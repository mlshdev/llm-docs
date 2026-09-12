> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/proxyrepresentation/init(exporting:)-6gjdh](https://developer.apple.com/documentation/coretransferable/proxyrepresentation/init(exporting:)-6gjdh)

# init(exporting:)

**Framework:** Core Transferable  
**Kind:** Initializer  
**Availability:** iOS 16.1+ (deprecated in 17.0) · iPadOS 16.1+ (deprecated in 17.0) · Mac Catalyst 16.1+ (deprecated in 17.0) · macOS 13.0+ (deprecated in 14.0) · tvOS 16.1+ (deprecated in 17.0) · visionOS 1.0+ · watchOS 9.1+ (deprecated in 10.0)

Creates a transfer representation that’s exported by proxy through another transfer representation.

> A synchronous exporter should be used instead.

## Declaration

```swift
init(exporting: @escaping @Sendable (Item) async throws -> ProxyRepresentation)
```

## Parameters

- `exporting`: A closure that converts the item into desired representation.

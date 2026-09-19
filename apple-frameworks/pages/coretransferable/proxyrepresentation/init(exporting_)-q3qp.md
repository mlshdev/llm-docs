> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretransferable/proxyrepresentation/init(exporting:)-q3qp

# init(exporting:)

**Framework:** Core Transferable  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a transfer representation that’s exported by proxy through another transfer representation.

## Declaration

```swift
init(exporting: @escaping @Sendable (Item) throws -> ProxyRepresentation)
```

## Parameters

- `exporting`: A closure that converts the item into desired representation.

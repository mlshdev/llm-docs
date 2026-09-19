> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretransferable/proxyrepresentation/init(importing:)-pq40

# init(importing:)

**Framework:** Core Transferable  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a transfer representation that’s imported by proxy through another transfer representation.

## Declaration

```swift
init(importing: @escaping @Sendable (ProxyRepresentation) throws -> Item)
```

## Parameters

- `importing`: A closure that converts the chosen representation into the transported item.

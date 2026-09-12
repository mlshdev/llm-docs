> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/proxyrepresentation/init(exporting:importing:)-4aiur](https://developer.apple.com/documentation/coretransferable/proxyrepresentation/init(exporting:importing:)-4aiur)

# init(exporting:importing:)

**Framework:** Core Transferable  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a transfer representation that’s imported and exported by proxy through another transfer representation.

## Declaration

```swift
init(exporting: @escaping @Sendable (Item) throws -> ProxyRepresentation, importing: @escaping @Sendable (ProxyRepresentation) throws -> Item)
```

## Parameters

- `exporting`: A closure that converts the item into desired representation.
- `importing`: A closure that converts the chosen representation back into the transported item.

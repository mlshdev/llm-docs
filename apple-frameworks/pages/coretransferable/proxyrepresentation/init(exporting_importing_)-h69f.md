> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretransferable/proxyrepresentation/init(exporting:importing:)-h69f](https://developer.apple.com/documentation/coretransferable/proxyrepresentation/init(exporting:importing:)-h69f)

# init(exporting:importing:)

**Framework:** Core Transferable  
**Kind:** Initializer  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 14.2+ · tvOS 17.2+ · visionOS 1.0+ · watchOS 10.2+

Creates a transfer representation that’s imported and exported by proxy through another transfer representation.

## Declaration

```swift
init(exporting: @escaping @Sendable (Item) throws -> ProxyRepresentation, importing: @escaping @Sendable (ProxyRepresentation) async throws -> Item)
```

## Parameters

- `exporting`: A closure that converts the item into desired representation.
- `importing`: A closure that converts the chosen representation back into the transported item.

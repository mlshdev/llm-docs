> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/loadanchor(contentsof:withname:)](https://developer.apple.com/documentation/realitykit/entity/loadanchor(contentsof:withname:))

# loadAnchor(contentsOf:withName:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Synchronously loads an anchor entity from a file URL.

## Declaration

```swift
@MainActor @preconcurrency static func loadAnchor(contentsOf url: URL, withName resourceName: String? = nil) throws -> AnchorEntity
```

## Parameters

- `url`: A file URL representing the file to load.
- `resourceName`: A unique name the method assigns to the resource it loads, for use in network synchronization.

<a id="return-value"></a>

## Return Value

The root entity in the loaded file, which Reality Kit casts as an [AnchorEntity](../anchorentity.md).

<a id="discussion"></a>

## Discussion

Loading an [Entity](../entity.md) with this method blocks the main actor because it’s synchronous, so only call it from a command-line application. The method can stall a regular app, which makes it visibly hitch, and the system terminates an app if its UI becomes unresponsive. See [init(named:in:)](init%28named_in_%29.md) for an example that demonstrates how to safely load content.

## See Also

### Loading an anchor entity

- [loadAnchor(named:in:)](loadanchor%28named_in_%29.md): Synchronously loads an anchor entity from a bundle.
- [loadAnchorAsync(named:in:)](loadanchorasync%28named_in_%29.md): Deprecated. Asynchronously loads an anchor entity from a bundle.
- [loadAnchorAsync(contentsOf:withName:)](loadanchorasync%28contentsof_withname_%29.md): Deprecated. Asynchronously loads an anchor entity from a file URL.

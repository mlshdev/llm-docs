> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationcomponent/layer](https://developer.apple.com/documentation/realitykit/navigationcomponent/layer)

# layer

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The layer to use when searching for a NavigationMeshResource in a Scene. If not set, the first available NavigationMeshResource will be used.

## Declaration

```swift
var layer: NavigationMeshResource.Layer? { get set }
```

## See Also

### Configuring navigation

- [filter](filter-swift.property.md): The filter to use when pathfinding.
- [NavigationComponent.Filter](filter-swift.struct.md): A struct that stores information about flags to ignore and include, and area costs for a pathfind.

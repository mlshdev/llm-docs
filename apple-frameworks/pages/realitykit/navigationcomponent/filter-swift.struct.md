> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationcomponent/filter-swift.struct](https://developer.apple.com/documentation/realitykit/navigationcomponent/filter-swift.struct)

# NavigationComponent.Filter

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A struct that stores information about flags to ignore and include, and area costs for a pathfind.

## Declaration

```swift
struct Filter
```

## Topics

### Configuring the filter

- [includeFlags](filter-swift.struct/includeflags.md): The set of flags to include when pathfinding. The path will only move through polygons that have any of these flags set.
- [ignoreFlags](filter-swift.struct/ignoreflags.md): The set of flags to ignore when pathfinding. The path will not be able to move through any polygons with any of these flags set.
- [areaCosts](filter-swift.struct/areacosts.md): The costs for pathing through an area. The path can move through polygons with these areas, but will try to find the lowest-cost path, avoiding high-cost areas if possible.

### Initializers

- [init()](filter-swift.struct/init%28%29.md)

## See Also

### Configuring navigation

- [layer](layer.md): The layer to use when searching for a NavigationMeshResource in a Scene. If not set, the first available NavigationMeshResource will be used.
- [filter](filter-swift.property.md): The filter to use when pathfinding.

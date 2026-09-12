> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationcomponent/filter-swift.struct/includeflags](https://developer.apple.com/documentation/realitykit/navigationcomponent/filter-swift.struct/includeflags)

# includeFlags

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The set of flags to include when pathfinding. The path will only move through polygons that have any of these flags set.

## Declaration

```swift
var includeFlags: NavigationMeshResource.FlagGroup
```

## See Also

### Configuring the filter

- [ignoreFlags](ignoreflags.md): The set of flags to ignore when pathfinding. The path will not be able to move through any polygons with any of these flags set.
- [areaCosts](areacosts.md): The costs for pathing through an area. The path can move through polygons with these areas, but will try to find the lowest-cost path, avoiding high-cost areas if possible.

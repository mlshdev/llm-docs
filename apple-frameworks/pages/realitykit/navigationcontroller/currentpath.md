> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationcontroller/currentpath](https://developer.apple.com/documentation/realitykit/navigationcontroller/currentpath)

# currentPath

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The computed path to the target position found by requestPath(). If called before the pathfind completes, a partial path will be returned. This partial path may be suboptimal. If the pathfind failed or was not requested, the function will return an empty array.

## Declaration

```swift
var currentPath: [NavigationMeshResource.PathNode] { get }
```

## See Also

### Monitoring pathfinding status

- [pathfindStatus](pathfindstatus-swift.property.md): The current pathfind status.
- [NavigationController.PathfindStatus](pathfindstatus-swift.enum.md): The status of a pathfinding request.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/navigationcontroller/pathfindstatus-swift.enum](https://developer.apple.com/documentation/realitykit/navigationcontroller/pathfindstatus-swift.enum)

# NavigationController.PathfindStatus

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The status of a pathfinding request.

## Declaration

```swift
enum PathfindStatus
```

## Topics

### Reading the pathfinding status

- [NavigationController.PathfindStatus.inProgress](pathfindstatus-swift.enum/inprogress.md): The pathfind is still running and has not completed.
- [NavigationController.PathfindStatus.succeeded](pathfindstatus-swift.enum/succeeded.md): The pathfind succeeded in finding a path.
- [NavigationController.PathfindStatus.failed](pathfindstatus-swift.enum/failed.md): The pathfind failed to run or find a path.
- [NavigationController.PathfindStatus.none](pathfindstatus-swift.enum/none.md): No pathfind request was made or any existing ones were cancelled.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Monitoring pathfinding status

- [pathfindStatus](pathfindstatus-swift.property.md): The current pathfind status.
- [currentPath](currentpath.md): The computed path to the target position found by requestPath(). If called before the pathfind completes, a partial path will be returned. This partial path may be suboptimal. If the pathfind failed or was not requested, the function will return an empty array.

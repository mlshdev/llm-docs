> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsworld/testsearchmode/closest](https://developer.apple.com/documentation/scenekit/scnphysicsworld/testsearchmode/closest)

# closest (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Searches should return only the closest contact to the beginning of the search.

## Declaration

```swift
static let closest: SCNPhysicsWorld.TestSearchMode
```

## See Also

### Type Properties

- [all](all.md): Searches should return all contacts matching the search parameters.
- [any](any.md): Searches should return only the first contact found regardless of its position relative to the search parameters.

# SCNPhysicsTestSearchModeClosest (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Searches should return only the closest contact to the beginning of the search.

## Declaration

```objectivec
extern SCNPhysicsTestSearchMode const SCNPhysicsTestSearchModeClosest;
```

## See Also

### Type Properties

- [SCNPhysicsTestSearchModeAll](all.md): Searches should return all contacts matching the search parameters.
- [SCNPhysicsTestSearchModeAny](any.md): Searches should return only the first contact found regardless of its position relative to the search parameters.

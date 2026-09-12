> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsworld/testsearchmode](https://developer.apple.com/documentation/scenekit/scnphysicsworld/testsearchmode)

# SCNPhysicsWorld.TestSearchMode (Swift)

**Framework:** SceneKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Options affecting how SceneKit searches for bodies in a collision, ray, or sweep test, used with the [searchMode](testoption/searchmode.md) key.

## Declaration

```swift
struct TestSearchMode
```

## Topics

### Type Properties

- [all](testsearchmode/all.md): Searches should return all contacts matching the search parameters.
- [any](testsearchmode/any.md): Searches should return only the first contact found regardless of its position relative to the search parameters.
- [closest](testsearchmode/closest.md): Searches should return only the closest contact to the beginning of the search.

### Initializers

- [init(rawValue:)](testsearchmode/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Type Properties

- [backfaceCulling](testoption/backfaceculling.md): The key for choosing whether to ignore back-facing polygons in physics shapes when searching for contacts.
- [collisionBitMask](testoption/collisionbitmask.md): The key for selecting which categories of physics bodies that SceneKit should test for contacts.
- [searchMode](testoption/searchmode.md): The key for selecting the number and order of contacts to be tested.

# SCNPhysicsTestSearchMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options affecting how SceneKit searches for bodies in a collision, ray, or sweep test, used with the [SCNPhysicsTestSearchModeKey](testoption/searchmode.md) key.

## Declaration

```objectivec
typedef NSString * SCNPhysicsTestSearchMode;
```

## Topics

### Type Properties

- [SCNPhysicsTestSearchModeAll](testsearchmode/all.md): Searches should return all contacts matching the search parameters.
- [SCNPhysicsTestSearchModeAny](testsearchmode/any.md): Searches should return only the first contact found regardless of its position relative to the search parameters.
- [SCNPhysicsTestSearchModeClosest](testsearchmode/closest.md): Searches should return only the closest contact to the beginning of the search.

## See Also

### Type Properties

- [SCNPhysicsTestBackfaceCullingKey](testoption/backfaceculling.md): The key for choosing whether to ignore back-facing polygons in physics shapes when searching for contacts.
- [SCNPhysicsTestCollisionBitMaskKey](testoption/collisionbitmask.md): The key for selecting which categories of physics bodies that SceneKit should test for contacts.
- [SCNPhysicsTestSearchModeKey](testoption/searchmode.md): The key for selecting the number and order of contacts to be tested.

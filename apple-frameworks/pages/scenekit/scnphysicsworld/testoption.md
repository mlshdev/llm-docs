> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnphysicsworld/testoption](https://developer.apple.com/documentation/scenekit/scnphysicsworld/testoption)

# SCNPhysicsWorld.TestOption (Swift)

**Framework:** SceneKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Keys in options dictionaries that affect how SceneKit searches for bodies in a collision, ray, or sweep test.

## Declaration

```swift
struct TestOption
```

<a id="Discussion"></a>

## Discussion

Pass a dictionary containing one or more of these keys (with values as described above) for the `options` parameter when calling one of these methods:

- [contactTestBetween(\_:\_:options:)](contacttestbetween%28____options_%29.md)
- [contactTest(with:options:)](contacttest%28with_options_%29.md)
- [rayTestWithSegment(from:to:options:)](raytestwithsegment%28from_to_options_%29.md)
- [convexSweepTest(with:from:to:options:)](convexsweeptest%28with_from_to_options_%29.md)

## Topics

### Type Properties

- [backfaceCulling](testoption/backfaceculling.md): The key for choosing whether to ignore back-facing polygons in physics shapes when searching for contacts.
- [collisionBitMask](testoption/collisionbitmask.md): The key for selecting which categories of physics bodies that SceneKit should test for contacts.
- [searchMode](testoption/searchmode.md): The key for selecting the number and order of contacts to be tested.
- [SCNPhysicsWorld.TestSearchMode](testsearchmode.md): Options affecting how SceneKit searches for bodies in a collision, ray, or sweep test, used with the [searchMode](testoption/searchmode.md) key.

### Initializers

- [init(rawValue:)](testoption/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# SCNPhysicsTestOption (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Keys in options dictionaries that affect how SceneKit searches for bodies in a collision, ray, or sweep test.

## Declaration

```objectivec
typedef NSString * SCNPhysicsTestOption;
```

<a id="Discussion"></a>

## Discussion

Pass a dictionary containing one or more of these keys (with values as described above) for the `options` parameter when calling one of these methods:

- [contactTestBetweenBody:andBody:options:](contacttestbetween%28____options_%29.md)
- [contactTestWithBody:options:](contacttest%28with_options_%29.md)
- [rayTestWithSegmentFromPoint:toPoint:options:](raytestwithsegment%28from_to_options_%29.md)
- [convexSweepTestWithShape:fromTransform:toTransform:options:](convexsweeptest%28with_from_to_options_%29.md)

## Topics

### Type Properties

- [SCNPhysicsTestBackfaceCullingKey](testoption/backfaceculling.md): The key for choosing whether to ignore back-facing polygons in physics shapes when searching for contacts.
- [SCNPhysicsTestCollisionBitMaskKey](testoption/collisionbitmask.md): The key for selecting which categories of physics bodies that SceneKit should test for contacts.
- [SCNPhysicsTestSearchModeKey](testoption/searchmode.md): The key for selecting the number and order of contacts to be tested.
- [SCNPhysicsTestSearchMode](testsearchmode.md): Options affecting how SceneKit searches for bodies in a collision, ray, or sweep test, used with the [SCNPhysicsTestSearchModeKey](testoption/searchmode.md) key.

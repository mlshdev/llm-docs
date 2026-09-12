> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnhittestsearchmode](https://developer.apple.com/documentation/scenekit/scnhittestsearchmode)

# SCNHitTestSearchMode (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Possible values for the [searchMode](scnhittestoption/searchmode.md) option used with hit-testing methods.

## Declaration

```swift
enum SCNHitTestSearchMode
```

## Topics

### Search Modes

- [SCNHitTestSearchMode.all](scnhittestsearchmode/all.md): The hit test should return all possible results, sorted from nearest to farthest.
- [SCNHitTestSearchMode.any](scnhittestsearchmode/any.md): The hit test should return only the first object found, regardless of distance.
- [SCNHitTestSearchMode.closest](scnhittestsearchmode/closest.md): The hit test should return only the closes object found.

### Initializers

- [init(rawValue:)](scnhittestsearchmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Options

- [backFaceCulling](scnhittestoption/backfaceculling.md): An option to ignore faces not oriented toward the camera.
- [boundingBoxOnly](scnhittestoption/boundingboxonly.md): An option to search for objects by bounding box only.
- [categoryBitMask](scnhittestoption/categorybitmask.md): An option to search only for objects matching a specified bitmask.
- [clipToZRange](scnhittestoption/cliptozrange.md): An option to search for objects only within the depth range of the current point of view.
- [ignoreChildNodes](scnhittestoption/ignorechildnodes.md): An option to ignore child nodes when searching.
- [ignoreHiddenNodes](scnhittestoption/ignorehiddennodes.md): An option to ignore hidden nodes when searching.
- [rootNode](scnhittestoption/rootnode.md): The root of the node hierarchy to be searched.
- [searchMode](scnhittestoption/searchmode.md): An option for the number and order of hit test results to provide.

# SCNHitTestSearchMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Possible values for the [SCNHitTestOptionSearchMode](scnhittestoption/searchmode.md) option used with hit-testing methods.

## Declaration

```objectivec
enum SCNHitTestSearchMode : NSInteger;
```

## Topics

### Search Modes

- [SCNHitTestSearchModeAll](scnhittestsearchmode/all.md): The hit test should return all possible results, sorted from nearest to farthest.
- [SCNHitTestSearchModeAny](scnhittestsearchmode/any.md): The hit test should return only the first object found, regardless of distance.
- [SCNHitTestSearchModeClosest](scnhittestsearchmode/closest.md): The hit test should return only the closes object found.

## See Also

### Options

- [SCNHitTestBackFaceCullingKey](scnhittestoption/backfaceculling.md): An option to ignore faces not oriented toward the camera.
- [SCNHitTestBoundingBoxOnlyKey](scnhittestoption/boundingboxonly.md): An option to search for objects by bounding box only.
- [SCNHitTestOptionCategoryBitMask](scnhittestoption/categorybitmask.md): An option to search only for objects matching a specified bitmask.
- [SCNHitTestClipToZRangeKey](scnhittestoption/cliptozrange.md): An option to search for objects only within the depth range of the current point of view.
- [SCNHitTestIgnoreChildNodesKey](scnhittestoption/ignorechildnodes.md): An option to ignore child nodes when searching.
- [SCNHitTestIgnoreHiddenNodesKey](scnhittestoption/ignorehiddennodes.md): An option to ignore hidden nodes when searching.
- [SCNHitTestRootNodeKey](scnhittestoption/rootnode.md): The root of the node hierarchy to be searched.
- [SCNHitTestOptionSearchMode](scnhittestoption/searchmode.md): An option for the number and order of hit test results to provide.

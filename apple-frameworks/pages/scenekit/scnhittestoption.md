> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnhittestoption](https://developer.apple.com/documentation/scenekit/scnhittestoption)

# SCNHitTestOption (Swift)

**Framework:** SceneKit  
**Kind:** Structure  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Options affecting the behavior of SceneKit hit-testing methods.

## Declaration

```swift
struct SCNHitTestOption
```

## Topics

### Options

- [backFaceCulling](scnhittestoption/backfaceculling.md): An option to ignore faces not oriented toward the camera.
- [boundingBoxOnly](scnhittestoption/boundingboxonly.md): An option to search for objects by bounding box only.
- [categoryBitMask](scnhittestoption/categorybitmask.md): An option to search only for objects matching a specified bitmask.
- [clipToZRange](scnhittestoption/cliptozrange.md): An option to search for objects only within the depth range of the current point of view.
- [ignoreChildNodes](scnhittestoption/ignorechildnodes.md): An option to ignore child nodes when searching.
- [ignoreHiddenNodes](scnhittestoption/ignorehiddennodes.md): An option to ignore hidden nodes when searching.
- [rootNode](scnhittestoption/rootnode.md): The root of the node hierarchy to be searched.
- [searchMode](scnhittestoption/searchmode.md): An option for the number and order of hit test results to provide.
- [SCNHitTestSearchMode](scnhittestsearchmode.md): Possible values for the [searchMode](scnhittestoption/searchmode.md) option used with hit-testing methods.

### Deprecated

- [firstFoundOnly](scnhittestoption/firstfoundonly.md): Deprecated. An option to return only the first object found.
- [sortResults](scnhittestoption/sortresults.md): Deprecated. An option to sort the results of a hit-test.

### Initializers

- [init(rawValue:)](scnhittestoption/init%28rawvalue_%29.md): Deprecated.

### Type Properties

- [ignoreLightArea](scnhittestoption/ignorelightarea.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [hitTestWithSegment(from:to:options:)](scnnode/hittestwithsegment%28from_to_options_%29.md): Searches the node’s child node subtree for objects intersecting a line segment between two specified points.

### Hit-Testing

- [hitTestWithSegment(from:to:options:)](scnnode/hittestwithsegment%28from_to_options_%29.md): Searches the node’s child node subtree for objects intersecting a line segment between two specified points.

# SCNHitTestOption (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options affecting the behavior of SceneKit hit-testing methods.

## Declaration

```objectivec
typedef NSString * SCNHitTestOption;
```

## Topics

### Options

- [SCNHitTestBackFaceCullingKey](scnhittestoption/backfaceculling.md): An option to ignore faces not oriented toward the camera.
- [SCNHitTestBoundingBoxOnlyKey](scnhittestoption/boundingboxonly.md): An option to search for objects by bounding box only.
- [SCNHitTestOptionCategoryBitMask](scnhittestoption/categorybitmask.md): An option to search only for objects matching a specified bitmask.
- [SCNHitTestClipToZRangeKey](scnhittestoption/cliptozrange.md): An option to search for objects only within the depth range of the current point of view.
- [SCNHitTestIgnoreChildNodesKey](scnhittestoption/ignorechildnodes.md): An option to ignore child nodes when searching.
- [SCNHitTestIgnoreHiddenNodesKey](scnhittestoption/ignorehiddennodes.md): An option to ignore hidden nodes when searching.
- [SCNHitTestRootNodeKey](scnhittestoption/rootnode.md): The root of the node hierarchy to be searched.
- [SCNHitTestOptionSearchMode](scnhittestoption/searchmode.md): An option for the number and order of hit test results to provide.
- [SCNHitTestSearchMode](scnhittestsearchmode.md): Possible values for the [SCNHitTestOptionSearchMode](scnhittestoption/searchmode.md) option used with hit-testing methods.

### Deprecated

- [SCNHitTestFirstFoundOnlyKey](scnhittestoption/firstfoundonly.md): Deprecated. An option to return only the first object found.
- [SCNHitTestSortResultsKey](scnhittestoption/sortresults.md): Deprecated. An option to sort the results of a hit-test.

## See Also

### Related Documentation

- [hitTestWithSegmentFromPoint:toPoint:options:](scnnode/hittestwithsegment%28from_to_options_%29.md): Searches the node’s child node subtree for objects intersecting a line segment between two specified points.

### Hit-Testing

- [hitTestWithSegmentFromPoint:toPoint:options:](scnnode/hittestwithsegment%28from_to_options_%29.md): Searches the node’s child node subtree for objects intersecting a line segment between two specified points.

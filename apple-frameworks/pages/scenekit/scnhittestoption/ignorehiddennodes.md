> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnhittestoption/ignorehiddennodes](https://developer.apple.com/documentation/scenekit/scnhittestoption/ignorehiddennodes)

# ignoreHiddenNodes (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An option to ignore hidden nodes when searching.

## Declaration

```swift
static let ignoreHiddenNodes: SCNHitTestOption
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../foundation/nsnumber.md) object containing a Boolean value. The default value is [true](https://developer.apple.com/documentation/swift/true), specifying that hit-testing should not return nodes whose hidden property value is [true](https://developer.apple.com/documentation/swift/true). Specify [false](https://developer.apple.com/documentation/swift/false) to search nodes regardless of their visibility.

## See Also

### Options

- [backFaceCulling](backfaceculling.md): An option to ignore faces not oriented toward the camera.
- [boundingBoxOnly](boundingboxonly.md): An option to search for objects by bounding box only.
- [categoryBitMask](categorybitmask.md): An option to search only for objects matching a specified bitmask.
- [clipToZRange](cliptozrange.md): An option to search for objects only within the depth range of the current point of view.
- [ignoreChildNodes](ignorechildnodes.md): An option to ignore child nodes when searching.
- [rootNode](rootnode.md): The root of the node hierarchy to be searched.
- [searchMode](searchmode.md): An option for the number and order of hit test results to provide.
- [SCNHitTestSearchMode](../scnhittestsearchmode.md): Possible values for the [searchMode](searchmode.md) option used with hit-testing methods.

# SCNHitTestIgnoreHiddenNodesKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

An option to ignore hidden nodes when searching.

## Declaration

```objectivec
extern SCNHitTestOption const SCNHitTestIgnoreHiddenNodesKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../foundation/nsnumber.md) object containing a Boolean value. The default value is [true](https://developer.apple.com/documentation/swift/true), specifying that hit-testing should not return nodes whose hidden property value is [true](https://developer.apple.com/documentation/swift/true). Specify [false](https://developer.apple.com/documentation/swift/false) to search nodes regardless of their visibility.

## See Also

### Options

- [SCNHitTestBackFaceCullingKey](backfaceculling.md): An option to ignore faces not oriented toward the camera.
- [SCNHitTestBoundingBoxOnlyKey](boundingboxonly.md): An option to search for objects by bounding box only.
- [SCNHitTestOptionCategoryBitMask](categorybitmask.md): An option to search only for objects matching a specified bitmask.
- [SCNHitTestClipToZRangeKey](cliptozrange.md): An option to search for objects only within the depth range of the current point of view.
- [SCNHitTestIgnoreChildNodesKey](ignorechildnodes.md): An option to ignore child nodes when searching.
- [SCNHitTestRootNodeKey](rootnode.md): The root of the node hierarchy to be searched.
- [SCNHitTestOptionSearchMode](searchmode.md): An option for the number and order of hit test results to provide.
- [SCNHitTestSearchMode](../scnhittestsearchmode.md): Possible values for the [SCNHitTestOptionSearchMode](searchmode.md) option used with hit-testing methods.

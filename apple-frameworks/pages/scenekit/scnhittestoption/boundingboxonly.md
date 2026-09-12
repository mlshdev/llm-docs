> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnhittestoption/boundingboxonly](https://developer.apple.com/documentation/scenekit/scnhittestoption/boundingboxonly)

# boundingBoxOnly (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An option to search for objects by bounding box only.

## Declaration

```swift
static let boundingBoxOnly: SCNHitTestOption
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../foundation/nsnumber.md) object containing a Boolean value. The default value is [false](https://developer.apple.com/documentation/swift/false), specifying that hit-testing searches should test against node geometry. Specifying [true](https://developer.apple.com/documentation/swift/true) for this option increases search performance at the expense of geometric accuracy.

## See Also

### Options

- [backFaceCulling](backfaceculling.md): An option to ignore faces not oriented toward the camera.
- [categoryBitMask](categorybitmask.md): An option to search only for objects matching a specified bitmask.
- [clipToZRange](cliptozrange.md): An option to search for objects only within the depth range of the current point of view.
- [ignoreChildNodes](ignorechildnodes.md): An option to ignore child nodes when searching.
- [ignoreHiddenNodes](ignorehiddennodes.md): An option to ignore hidden nodes when searching.
- [rootNode](rootnode.md): The root of the node hierarchy to be searched.
- [searchMode](searchmode.md): An option for the number and order of hit test results to provide.
- [SCNHitTestSearchMode](../scnhittestsearchmode.md): Possible values for the [searchMode](searchmode.md) option used with hit-testing methods.

# SCNHitTestBoundingBoxOnlyKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option to search for objects by bounding box only.

## Declaration

```objectivec
extern SCNHitTestOption const SCNHitTestBoundingBoxOnlyKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../foundation/nsnumber.md) object containing a Boolean value. The default value is [false](https://developer.apple.com/documentation/swift/false), specifying that hit-testing searches should test against node geometry. Specifying [true](https://developer.apple.com/documentation/swift/true) for this option increases search performance at the expense of geometric accuracy.

## See Also

### Options

- [SCNHitTestBackFaceCullingKey](backfaceculling.md): An option to ignore faces not oriented toward the camera.
- [SCNHitTestOptionCategoryBitMask](categorybitmask.md): An option to search only for objects matching a specified bitmask.
- [SCNHitTestClipToZRangeKey](cliptozrange.md): An option to search for objects only within the depth range of the current point of view.
- [SCNHitTestIgnoreChildNodesKey](ignorechildnodes.md): An option to ignore child nodes when searching.
- [SCNHitTestIgnoreHiddenNodesKey](ignorehiddennodes.md): An option to ignore hidden nodes when searching.
- [SCNHitTestRootNodeKey](rootnode.md): The root of the node hierarchy to be searched.
- [SCNHitTestOptionSearchMode](searchmode.md): An option for the number and order of hit test results to provide.
- [SCNHitTestSearchMode](../scnhittestsearchmode.md): Possible values for the [SCNHitTestOptionSearchMode](searchmode.md) option used with hit-testing methods.

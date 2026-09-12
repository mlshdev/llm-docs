> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnhittestoption/cliptozrange](https://developer.apple.com/documentation/scenekit/scnhittestoption/cliptozrange)

# clipToZRange (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An option to search for objects only within the depth range of the current point of view.

## Declaration

```swift
static let clipToZRange: SCNHitTestOption
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../foundation/nsnumber.md) object containing a Boolean value. The default value is [true](https://developer.apple.com/documentation/swift/true), specifying that hit-testing searches only objects between the [zNear](../scncamera/znear.md) and [zFar](../scncamera/zfar.md) distances of the [pointOfView](../scnscenerenderer/pointofview.md) camera. Specify [false](https://developer.apple.com/documentation/swift/false) to include objects outside this depth range in the search.

This option is valid only when hit-testing in the screen space of an [SCNSceneRenderer](../scnscenerenderer.md) object with the [hitTest(\_:options:)](../scnscenerenderer/hittest%28__options_%29.md) method.

## See Also

### Options

- [backFaceCulling](backfaceculling.md): An option to ignore faces not oriented toward the camera.
- [boundingBoxOnly](boundingboxonly.md): An option to search for objects by bounding box only.
- [categoryBitMask](categorybitmask.md): An option to search only for objects matching a specified bitmask.
- [ignoreChildNodes](ignorechildnodes.md): An option to ignore child nodes when searching.
- [ignoreHiddenNodes](ignorehiddennodes.md): An option to ignore hidden nodes when searching.
- [rootNode](rootnode.md): The root of the node hierarchy to be searched.
- [searchMode](searchmode.md): An option for the number and order of hit test results to provide.
- [SCNHitTestSearchMode](../scnhittestsearchmode.md): Possible values for the [searchMode](searchmode.md) option used with hit-testing methods.

# SCNHitTestClipToZRangeKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

An option to search for objects only within the depth range of the current point of view.

## Declaration

```objectivec
extern SCNHitTestOption const SCNHitTestClipToZRangeKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [NSNumber](../../foundation/nsnumber.md) object containing a Boolean value. The default value is [true](https://developer.apple.com/documentation/swift/true), specifying that hit-testing searches only objects between the [zNear](../scncamera/znear.md) and [zFar](../scncamera/zfar.md) distances of the [pointOfView](../scnscenerenderer/pointofview.md) camera. Specify [false](https://developer.apple.com/documentation/swift/false) to include objects outside this depth range in the search.

This option is valid only when hit-testing in the screen space of an [SCNSceneRenderer](../scnscenerenderer.md) object with the [hitTest:options:](../scnscenerenderer/hittest%28__options_%29.md) method.

## See Also

### Options

- [SCNHitTestBackFaceCullingKey](backfaceculling.md): An option to ignore faces not oriented toward the camera.
- [SCNHitTestBoundingBoxOnlyKey](boundingboxonly.md): An option to search for objects by bounding box only.
- [SCNHitTestOptionCategoryBitMask](categorybitmask.md): An option to search only for objects matching a specified bitmask.
- [SCNHitTestIgnoreChildNodesKey](ignorechildnodes.md): An option to ignore child nodes when searching.
- [SCNHitTestIgnoreHiddenNodesKey](ignorehiddennodes.md): An option to ignore hidden nodes when searching.
- [SCNHitTestRootNodeKey](rootnode.md): The root of the node hierarchy to be searched.
- [SCNHitTestOptionSearchMode](searchmode.md): An option for the number and order of hit test results to provide.
- [SCNHitTestSearchMode](../scnhittestsearchmode.md): Possible values for the [SCNHitTestOptionSearchMode](searchmode.md) option used with hit-testing methods.

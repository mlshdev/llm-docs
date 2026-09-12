> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnhittestoption/rootnode](https://developer.apple.com/documentation/scenekit/scnhittestoption/rootnode)

# rootNode (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The root of the node hierarchy to be searched.

## Declaration

```swift
static let rootNode: SCNHitTestOption
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [SCNNode](../scnnode.md) object. Hit-testing searches only the child node hierarchy under this node. When hit-testing takes place in the screen space of an [SCNSceneRenderer](../scnscenerenderer.md) object with the [hitTest(\_:options:)](../scnscenerenderer/hittest%28__options_%29.md) method, the default value is the presented scene’s root node. When hit-testing is in a node using its [hitTestWithSegment(from:to:options:)](../scnnode/hittestwithsegment%28from_to_options_%29.md), the default value is the node.

## See Also

### Options

- [backFaceCulling](backfaceculling.md): An option to ignore faces not oriented toward the camera.
- [boundingBoxOnly](boundingboxonly.md): An option to search for objects by bounding box only.
- [categoryBitMask](categorybitmask.md): An option to search only for objects matching a specified bitmask.
- [clipToZRange](cliptozrange.md): An option to search for objects only within the depth range of the current point of view.
- [ignoreChildNodes](ignorechildnodes.md): An option to ignore child nodes when searching.
- [ignoreHiddenNodes](ignorehiddennodes.md): An option to ignore hidden nodes when searching.
- [searchMode](searchmode.md): An option for the number and order of hit test results to provide.
- [SCNHitTestSearchMode](../scnhittestsearchmode.md): Possible values for the [searchMode](searchmode.md) option used with hit-testing methods.

# SCNHitTestRootNodeKey (Objective-C)

**Framework:** SceneKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The root of the node hierarchy to be searched.

## Declaration

```objectivec
extern SCNHitTestOption const SCNHitTestRootNodeKey;
```

<a id="Discussion"></a>

## Discussion

The value for this key is an [SCNNode](../scnnode.md) object. Hit-testing searches only the child node hierarchy under this node. When hit-testing takes place in the screen space of an [SCNSceneRenderer](../scnscenerenderer.md) object with the [hitTest:options:](../scnscenerenderer/hittest%28__options_%29.md) method, the default value is the presented scene’s root node. When hit-testing is in a node using its [hitTestWithSegmentFromPoint:toPoint:options:](../scnnode/hittestwithsegment%28from_to_options_%29.md), the default value is the node.

## See Also

### Options

- [SCNHitTestBackFaceCullingKey](backfaceculling.md): An option to ignore faces not oriented toward the camera.
- [SCNHitTestBoundingBoxOnlyKey](boundingboxonly.md): An option to search for objects by bounding box only.
- [SCNHitTestOptionCategoryBitMask](categorybitmask.md): An option to search only for objects matching a specified bitmask.
- [SCNHitTestClipToZRangeKey](cliptozrange.md): An option to search for objects only within the depth range of the current point of view.
- [SCNHitTestIgnoreChildNodesKey](ignorechildnodes.md): An option to ignore child nodes when searching.
- [SCNHitTestIgnoreHiddenNodesKey](ignorehiddennodes.md): An option to ignore hidden nodes when searching.
- [SCNHitTestOptionSearchMode](searchmode.md): An option for the number and order of hit test results to provide.
- [SCNHitTestSearchMode](../scnhittestsearchmode.md): Possible values for the [SCNHitTestOptionSearchMode](searchmode.md) option used with hit-testing methods.

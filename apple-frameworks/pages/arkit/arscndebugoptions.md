> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arscndebugoptions](https://developer.apple.com/documentation/arkit/arscndebugoptions)

# ARSCNDebugOptions (Swift)

**Framework:** ARKit  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Options for drawing overlay content to aid debugging of AR tracking in a SceneKit view.

## Declaration

```swift
typealias ARSCNDebugOptions = SCNDebugOptions
```

<a id="Discussion"></a>

## Discussion

To use these debugging overlays, add them to the option set in the view’s [debugOptions](../scenekit/scnscenerenderer/debugoptions.md) property (inherited from the [SCNView](../scenekit/scnview.md) class).

# ARSCNDebugOptions (Objective-C)

**Framework:** ARKit  
**Kind:** Type Alias  
**Availability:** iOS 11.0+ · iPadOS 11.0+

Options for drawing overlay content to aid debugging of AR tracking in a SceneKit view.

## Declaration

```objectivec
typedef SCNDebugOptions ARSCNDebugOptions;
```

<a id="Discussion"></a>

## Discussion

To use these debugging overlays, add them to the option set in the view’s [debugOptions](../scenekit/scnscenerenderer/debugoptions.md) property (inherited from the [SCNView](../scenekit/scnview.md) class).

## Topics

### AR Debugging Overlays

- [ARSCNDebugOptionShowWorldOrigin](arscndebugoptionshowworldorigin.md): Display a coordinate axis visualization indicating the position and orientation of the AR world coordinate system.
- [ARSCNDebugOptionShowFeaturePoints](arscndebugoptionshowfeaturepoints.md): Display a point cloud showing intermediate results of the scene analysis that ARKit uses to track device position.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scndebugoptions/showwireframe](https://developer.apple.com/documentation/scenekit/scndebugoptions/showwireframe)

# showWireframe (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Display geometries in the scene with wireframe rendering.

## Declaration

```swift
static var showWireframe: SCNDebugOptions { get }
```

<a id="Discussion"></a>

## Discussion

When this option is enabled, SceneKit still renders scene geometry with all associated materials, then overlays a wireframe rendering of the same geometry. You can use this option, for example, to debug material rendering issues.

## See Also

### Debugging Geometry and Animation

- [showBoundingBoxes](showboundingboxes.md): Display the bounding boxes for any nodes with content.
- [renderAsWireframe](renderaswireframe.md): Display only wireframe placeholders for geometries in the scene.
- [showSkeletons](showskeletons.md): Display visualizations of the skeletal animation parameters for relevant geometries.
- [showCreases](showcreases.md): Display nonsmoothed crease regions for geometries affected by surface subdivision.
- [showConstraints](showconstraints.md): Display visualizations of the constraint objects acting on nodes in the scene.

# SCNDebugOptionShowWireframe (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Display geometries in the scene with wireframe rendering.

## Declaration

```objectivec
SCNDebugOptionShowWireframe
```

<a id="Discussion"></a>

## Discussion

When this option is enabled, SceneKit still renders scene geometry with all associated materials, then overlays a wireframe rendering of the same geometry. You can use this option, for example, to debug material rendering issues.

## See Also

### Debugging Geometry and Animation

- [SCNDebugOptionShowBoundingBoxes](showboundingboxes.md): Display the bounding boxes for any nodes with content.
- [SCNDebugOptionRenderAsWireframe](renderaswireframe.md): Display only wireframe placeholders for geometries in the scene.
- [SCNDebugOptionShowSkeletons](showskeletons.md): Display visualizations of the skeletal animation parameters for relevant geometries.
- [SCNDebugOptionShowCreases](showcreases.md): Display nonsmoothed crease regions for geometries affected by surface subdivision.
- [SCNDebugOptionShowConstraints](showconstraints.md): Display visualizations of the constraint objects acting on nodes in the scene.

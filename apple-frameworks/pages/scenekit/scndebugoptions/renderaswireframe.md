> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scndebugoptions/renderaswireframe](https://developer.apple.com/documentation/scenekit/scndebugoptions/renderaswireframe)

# renderAsWireframe (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Display only wireframe placeholders for geometries in the scene.

## Declaration

```swift
static var renderAsWireframe: SCNDebugOptions { get }
```

<a id="Discussion"></a>

## Discussion

Unlike the [showWireframe](showwireframe.md) option, this option disables normal surface rendering, displaying only the wireframe for each geometry.

## See Also

### Debugging Geometry and Animation

- [showBoundingBoxes](showboundingboxes.md): Display the bounding boxes for any nodes with content.
- [showWireframe](showwireframe.md): Display geometries in the scene with wireframe rendering.
- [showSkeletons](showskeletons.md): Display visualizations of the skeletal animation parameters for relevant geometries.
- [showCreases](showcreases.md): Display nonsmoothed crease regions for geometries affected by surface subdivision.
- [showConstraints](showconstraints.md): Display visualizations of the constraint objects acting on nodes in the scene.

# SCNDebugOptionRenderAsWireframe (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Display only wireframe placeholders for geometries in the scene.

## Declaration

```objectivec
SCNDebugOptionRenderAsWireframe
```

<a id="Discussion"></a>

## Discussion

Unlike the [SCNDebugOptionShowWireframe](showwireframe.md) option, this option disables normal surface rendering, displaying only the wireframe for each geometry.

## See Also

### Debugging Geometry and Animation

- [SCNDebugOptionShowBoundingBoxes](showboundingboxes.md): Display the bounding boxes for any nodes with content.
- [SCNDebugOptionShowWireframe](showwireframe.md): Display geometries in the scene with wireframe rendering.
- [SCNDebugOptionShowSkeletons](showskeletons.md): Display visualizations of the skeletal animation parameters for relevant geometries.
- [SCNDebugOptionShowCreases](showcreases.md): Display nonsmoothed crease regions for geometries affected by surface subdivision.
- [SCNDebugOptionShowConstraints](showconstraints.md): Display visualizations of the constraint objects acting on nodes in the scene.

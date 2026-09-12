> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/readsfromdepthbuffer](https://developer.apple.com/documentation/scenekit/scnmaterial/readsfromdepthbuffer)

# readsFromDepthBuffer (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether SceneKit uses depth information when rendering the material.

## Declaration

```swift
var readsFromDepthBuffer: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

SceneKit’s rendering process uses a depth buffer to determine the ordering of rendered surfaces relative to the viewer. The default value of this property is [true](https://developer.apple.com/documentation/swift/true), specifying that SceneKit compares the depth of each rendered pixel to the corresponding value in its depth buffer when rendering the material. If the pixel is at a greater depth than the corresponding point in the depth buffer, SceneKit does not render the pixel.

Typically, you disable reading from the depth buffer when rendering objects that should always be visible regardless of the already rendered content in the scene—for example, a heads-up display in a game. In such cases, you should also set a high value for the [renderingOrder](../scnnode/renderingorder.md) property of the node containing whatever content is to be always visible.

## See Also

### Managing Render Targets

- [writesToDepthBuffer](writestodepthbuffer.md): A Boolean value that determines whether SceneKit produces depth information when rendering the material.
- [colorBufferWriteMask](colorbufferwritemask.md)
- [SCNColorMask](../scncolormask.md)

# readsFromDepthBuffer (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

A Boolean value that determines whether SceneKit uses depth information when rendering the material.

## Declaration

```objectivec
@property (nonatomic) BOOL readsFromDepthBuffer;
```

<a id="Discussion"></a>

## Discussion

SceneKit’s rendering process uses a depth buffer to determine the ordering of rendered surfaces relative to the viewer. The default value of this property is [true](https://developer.apple.com/documentation/swift/true), specifying that SceneKit compares the depth of each rendered pixel to the corresponding value in its depth buffer when rendering the material. If the pixel is at a greater depth than the corresponding point in the depth buffer, SceneKit does not render the pixel.

Typically, you disable reading from the depth buffer when rendering objects that should always be visible regardless of the already rendered content in the scene—for example, a heads-up display in a game. In such cases, you should also set a high value for the [renderingOrder](../scnnode/renderingorder.md) property of the node containing whatever content is to be always visible.

## See Also

### Managing Render Targets

- [writesToDepthBuffer](writestodepthbuffer.md): A Boolean value that determines whether SceneKit produces depth information when rendering the material.
- [colorBufferWriteMask](colorbufferwritemask.md)
- [SCNColorMask](../scncolormask.md)

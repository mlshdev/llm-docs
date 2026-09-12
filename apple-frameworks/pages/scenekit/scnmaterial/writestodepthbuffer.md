> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmaterial/writestodepthbuffer](https://developer.apple.com/documentation/scenekit/scnmaterial/writestodepthbuffer)

# writesToDepthBuffer (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A Boolean value that determines whether SceneKit produces depth information when rendering the material.

## Declaration

```swift
var writesToDepthBuffer: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

SceneKit’s rendering process uses a depth buffer to determine the ordering of rendered surfaces relative to the viewer. The default value of this property is [true](https://developer.apple.com/documentation/swift/true), specifying that SceneKit saves depth information for each rendered pixel for use by later rendering passes.

Typically, you disable writing to the depth buffer when rendering semitransparent objects, because later stages of the rendering process may require depth information about the opaque objects behind them.

## See Also

### Managing Render Targets

- [readsFromDepthBuffer](readsfromdepthbuffer.md): A Boolean value that determines whether SceneKit uses depth information when rendering the material.
- [colorBufferWriteMask](colorbufferwritemask.md)
- [SCNColorMask](../scncolormask.md)

# writesToDepthBuffer (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A Boolean value that determines whether SceneKit produces depth information when rendering the material.

## Declaration

```objectivec
@property (nonatomic) BOOL writesToDepthBuffer;
```

<a id="Discussion"></a>

## Discussion

SceneKit’s rendering process uses a depth buffer to determine the ordering of rendered surfaces relative to the viewer. The default value of this property is [true](https://developer.apple.com/documentation/swift/true), specifying that SceneKit saves depth information for each rendered pixel for use by later rendering passes.

Typically, you disable writing to the depth buffer when rendering semitransparent objects, because later stages of the rendering process may require depth information about the opaque objects behind them.

## See Also

### Managing Render Targets

- [readsFromDepthBuffer](readsfromdepthbuffer.md): A Boolean value that determines whether SceneKit uses depth information when rendering the material.
- [colorBufferWriteMask](colorbufferwritemask.md)
- [SCNColorMask](../scncolormask.md)

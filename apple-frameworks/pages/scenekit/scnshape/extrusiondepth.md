> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnshape/extrusiondepth](https://developer.apple.com/documentation/scenekit/scnshape/extrusiondepth)

# extrusionDepth (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The thickness of the extruded shape along the z-axis. Animatable.

## Declaration

```swift
var extrusionDepth: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The extruded shape is centered at the zero point of its z-axis. For example, an extrusion depth of `1.0` creates a shape that extends from `-0.5` to `0.5` along the z-axis. An extrusion depth of zero creates a flat, one-sided shape.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Modifying a Shape

- [path](path.md): The two-dimensional path forming the basis of the shape.

# extrusionDepth (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

The thickness of the extruded shape along the z-axis. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat extrusionDepth;
```

<a id="Discussion"></a>

## Discussion

The extruded shape is centered at the zero point of its z-axis. For example, an extrusion depth of `1.0` creates a shape that extends from `-0.5` to `0.5` along the z-axis. An extrusion depth of zero creates a flat, one-sided shape.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Modifying a Shape

- [path](path.md): The two-dimensional path forming the basis of the shape.

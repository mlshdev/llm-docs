> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnshape/init(path:extrusiondepth:)](https://developer.apple.com/documentation/scenekit/scnshape/init(path:extrusiondepth:))

# init(path:extrusionDepth:) (Swift)

**Framework:** SceneKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a shape geometry with the specified path and extrusion depth.

## Declaration

```swift
convenience init(path: UIBezierPath?, extrusionDepth: CGFloat)
```

```swift
convenience init(path: NSBezierPath?, extrusionDepth: CGFloat)
```

## Parameters

- `path`: The two-dimensional path forming the basis of the shape.
- `extrusionDepth`: The thickness of the extruded shape along the z-axis.

<a id="return-value"></a>

## Return Value

A shape geometry.

<a id="Discussion"></a>

## Discussion

SceneKit determines the filled area of the path using the even-odd winding rule (see [Winding Rules](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaDrawingGuide/Paths/Paths.html#//apple_ref/doc/uid/TP40003290-CH206-BAJIJJGD) in [Cocoa Drawing Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaDrawingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40003290)) and extrudes this area to create a three-dimensional geometry. The result of extruding a self-intersecting path is undefined.

The extruded shape is centered at the zero point of its z-axis. For example, an extrusion depth of `1.0` creates a shape that extends from `-0.5` to `0.5` along the z-axis. An extrusion depth of zero creates a flat, one-sided shape.

The path’s flatness (see [flatness](https://developer.apple.com/documentation/appkit/nsbezierpath/flatness) in [NSBezierPath](https://developer.apple.com/documentation/appkit/nsbezierpath)) determines the level of detail SceneKit uses in building a three-dimensional shape from the path. A larger flatness value results in fewer polygons to render, increasing performance, and a smaller flatness value increases the smoothness of curves at a cost to performance.

# shapeWithPath:extrusionDepth: (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Creates a shape geometry with the specified path and extrusion depth.

## Declaration

```objectivec
+ (instancetype) shapeWithPath:(UIBezierPath *) path extrusionDepth:(CGFloat) extrusionDepth;
```

```objectivec
+ (instancetype) shapeWithPath:(NSBezierPath *) path extrusionDepth:(CGFloat) extrusionDepth;
```

## Parameters

- `path`: The two-dimensional path forming the basis of the shape.
- `extrusionDepth`: The thickness of the extruded shape along the z-axis.

<a id="return-value"></a>

## Return Value

A shape geometry.

<a id="Discussion"></a>

## Discussion

SceneKit determines the filled area of the path using the even-odd winding rule (see [Winding Rules](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaDrawingGuide/Paths/Paths.html#//apple_ref/doc/uid/TP40003290-CH206-BAJIJJGD) in [Cocoa Drawing Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaDrawingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40003290)) and extrudes this area to create a three-dimensional geometry. The result of extruding a self-intersecting path is undefined.

The extruded shape is centered at the zero point of its z-axis. For example, an extrusion depth of `1.0` creates a shape that extends from `-0.5` to `0.5` along the z-axis. An extrusion depth of zero creates a flat, one-sided shape.

The path’s flatness (see [flatness](https://developer.apple.com/documentation/appkit/nsbezierpath/flatness) in [NSBezierPath](https://developer.apple.com/documentation/appkit/nsbezierpath)) determines the level of detail SceneKit uses in building a three-dimensional shape from the path. A larger flatness value results in fewer polygons to render, increasing performance, and a smaller flatness value increases the smoothness of curves at a cost to performance.

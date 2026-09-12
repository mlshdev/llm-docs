> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnshape/path](https://developer.apple.com/documentation/scenekit/scnshape/path)

# path (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The two-dimensional path forming the basis of the shape.

## Declaration

```swift
@NSCopying var path: UIBezierPath? { get set }
```

```swift
@NSCopying var path: NSBezierPath? { get set }
```

<a id="Discussion"></a>

## Discussion

SceneKit determines the filled area of the path using the even-odd winding rule (see [Winding Rules](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaDrawingGuide/Paths/Paths.html#//apple_ref/doc/uid/TP40003290-CH206-BAJIJJGD) in [Cocoa Drawing Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaDrawingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40003290)) and extrudes this area to create a three-dimensional geometry. The result of extruding a self-intersecting path is undefined.

The path’s flatness (see [flatness](https://developer.apple.com/documentation/appkit/nsbezierpath/flatness) in [NSBezierPath](https://developer.apple.com/documentation/appkit/nsbezierpath)) determines the level of detail SceneKit uses in building a three-dimensional shape from the path—a larger flatness value results in fewer polygons to render, increasing performance.

## See Also

### Modifying a Shape

- [extrusionDepth](extrusiondepth.md): The thickness of the extruded shape along the z-axis. Animatable.

# path (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

The two-dimensional path forming the basis of the shape.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIBezierPath * path;
```

```objectivec
@property (nonatomic, copy, nullable) NSBezierPath * path;
```

<a id="Discussion"></a>

## Discussion

SceneKit determines the filled area of the path using the even-odd winding rule (see [Winding Rules](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaDrawingGuide/Paths/Paths.html#//apple_ref/doc/uid/TP40003290-CH206-BAJIJJGD) in [Cocoa Drawing Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CocoaDrawingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40003290)) and extrudes this area to create a three-dimensional geometry. The result of extruding a self-intersecting path is undefined.

The path’s flatness (see [flatness](https://developer.apple.com/documentation/appkit/nsbezierpath/flatness) in [NSBezierPath](https://developer.apple.com/documentation/appkit/nsbezierpath)) determines the level of detail SceneKit uses in building a three-dimensional shape from the path—a larger flatness value results in fewer polygons to render, increasing performance.

## See Also

### Modifying a Shape

- [extrusionDepth](extrusiondepth.md): The thickness of the extruded shape along the z-axis. Animatable.

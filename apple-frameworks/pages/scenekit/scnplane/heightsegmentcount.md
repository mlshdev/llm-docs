> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnplane/heightsegmentcount](https://developer.apple.com/documentation/scenekit/scnplane/heightsegmentcount)

# heightSegmentCount (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The number of subdivisions in the plane’s surface along its vertical axis. Animatable.

## Declaration

```swift
var heightSegmentCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

A larger number of segments adds more vertex data to the geometry. Although the plane is flat, extra vertices can be useful for lighting or other special effects. For example, you can add a GLSL source code snippet to the plane’s [shaderModifiers](../scnshadable/shadermodifiers.md) property that modulates the position of each vertex. Adding vertices increases rendering cost, so use the minimal segment count that produces your desired visual effect.

The default segment count is `1`. Setting this property’s value to a number less than `1` results in undefined behavior. If the [cornerRadius](cornerradius.md) property’s value is greater than zero, the segment count applies to the area between corners.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [cornerSegmentCount](cornersegmentcount.md): The number of line segments used to create each rounded corner of the plane. Animatable.

### Adjusting Geometric Detail

- [widthSegmentCount](widthsegmentcount.md): The number of subdivisions in the plane’s surface along its horizontal axis. Animatable.

# heightSegmentCount (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of subdivisions in the plane’s surface along its vertical axis. Animatable.

## Declaration

```objectivec
@property (nonatomic) NSInteger heightSegmentCount;
```

<a id="Discussion"></a>

## Discussion

A larger number of segments adds more vertex data to the geometry. Although the plane is flat, extra vertices can be useful for lighting or other special effects. For example, you can add a GLSL source code snippet to the plane’s [shaderModifiers](../scnshadable/shadermodifiers.md) property that modulates the position of each vertex. Adding vertices increases rendering cost, so use the minimal segment count that produces your desired visual effect.

The default segment count is `1`. Setting this property’s value to a number less than `1` results in undefined behavior. If the [cornerRadius](cornerradius.md) property’s value is greater than zero, the segment count applies to the area between corners.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Related Documentation

- [cornerSegmentCount](cornersegmentcount.md): The number of line segments used to create each rounded corner of the plane. Animatable.

### Adjusting Geometric Detail

- [widthSegmentCount](widthsegmentcount.md): The number of subdivisions in the plane’s surface along its horizontal axis. Animatable.

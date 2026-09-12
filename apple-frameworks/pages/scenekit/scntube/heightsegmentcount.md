> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntube/heightsegmentcount](https://developer.apple.com/documentation/scenekit/scntube/heightsegmentcount)

# heightSegmentCount (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The number of subdivisions in the inner and outer surfaces of the tube along its y-axis. Animatable.

## Declaration

```swift
var heightSegmentCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

A larger number of segments adds more vertex data to the geometry. Although the inner and outer surfaces of the tube are flat in the y-axis direction, extra vertices can be useful for lighting or custom shader programs. Adding vertices increases rendering cost, so use the minimal segment count that produces your desired visual effect.

The default segment count is `1`. Setting this property’s value to a number less than `1` results in undefined behavior.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting Geometric Detail

- [radialSegmentCount](radialsegmentcount.md): The number of subdivisions around the circumference of the tube. Animatable.

# heightSegmentCount (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of subdivisions in the inner and outer surfaces of the tube along its y-axis. Animatable.

## Declaration

```objectivec
@property (nonatomic) NSInteger heightSegmentCount;
```

<a id="Discussion"></a>

## Discussion

A larger number of segments adds more vertex data to the geometry. Although the inner and outer surfaces of the tube are flat in the y-axis direction, extra vertices can be useful for lighting or custom shader programs. Adding vertices increases rendering cost, so use the minimal segment count that produces your desired visual effect.

The default segment count is `1`. Setting this property’s value to a number less than `1` results in undefined behavior.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting Geometric Detail

- [radialSegmentCount](radialsegmentcount.md): The number of subdivisions around the circumference of the tube. Animatable.

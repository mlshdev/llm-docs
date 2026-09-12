> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncone/radialsegmentcount](https://developer.apple.com/documentation/scenekit/scncone/radialsegmentcount)

# radialSegmentCount (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The number of subdivisions around the circumference of the cone. Animatable.

## Declaration

```swift
var radialSegmentCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

A larger number of segments adds more vertex data to the geometry, creating a smoother curve for the cone’s circular cross section at a cost to rendering performance.

The default segment count is `48`. Setting this property’s value to a number less than `3` results in undefined behavior.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting Geometric Detail

- [heightSegmentCount](heightsegmentcount.md): The number of subdivisions in the sides of the cone along its y-axis. Animatable.

# radialSegmentCount (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of subdivisions around the circumference of the cone. Animatable.

## Declaration

```objectivec
@property (nonatomic) NSInteger radialSegmentCount;
```

<a id="Discussion"></a>

## Discussion

A larger number of segments adds more vertex data to the geometry, creating a smoother curve for the cone’s circular cross section at a cost to rendering performance.

The default segment count is `48`. Setting this property’s value to a number less than `3` results in undefined behavior.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting Geometric Detail

- [heightSegmentCount](heightsegmentcount.md): The number of subdivisions in the sides of the cone along its y-axis. Animatable.

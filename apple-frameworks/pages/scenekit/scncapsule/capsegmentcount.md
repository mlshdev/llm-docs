> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scncapsule/capsegmentcount](https://developer.apple.com/documentation/scenekit/scncapsule/capsegmentcount)

# capSegmentCount (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The number of subdivisions in the height of each hemispherical end of the capsule. Animatable.

## Declaration

```swift
var capSegmentCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

A larger number of segments adds more vertex data to the geometry, creating a smoother curved surface for the capsule’s ends at a cost to rendering performance.

The default segment count is `24`. Setting this property’s value to a number less than `1` results in undefined behavior.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting Geometric Detail

- [radialSegmentCount](radialsegmentcount.md): The number of subdivisions around the lateral circumference of the capsule. Animatable.
- [heightSegmentCount](heightsegmentcount.md): The number of subdivisions in the sides of the capsule along its y-axis. Animatable.

# capSegmentCount (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of subdivisions in the height of each hemispherical end of the capsule. Animatable.

## Declaration

```objectivec
@property (nonatomic) NSInteger capSegmentCount;
```

<a id="Discussion"></a>

## Discussion

A larger number of segments adds more vertex data to the geometry, creating a smoother curved surface for the capsule’s ends at a cost to rendering performance.

The default segment count is `24`. Setting this property’s value to a number less than `1` results in undefined behavior.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting Geometric Detail

- [radialSegmentCount](radialsegmentcount.md): The number of subdivisions around the lateral circumference of the capsule. Animatable.
- [heightSegmentCount](heightsegmentcount.md): The number of subdivisions in the sides of the capsule along its y-axis. Animatable.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntorus/ringsegmentcount](https://developer.apple.com/documentation/scenekit/scntorus/ringsegmentcount)

# ringSegmentCount (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The number of subdivisions around the torus ring. Animatable.

## Declaration

```swift
var ringSegmentCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

This segment count corresponds to the circle formed by the torus’ major radius or [ringRadius](ringradius.md) property. A larger number of segments adds more vertex data to the geometry, creating a more smoothly curved surface at a cost to rendering performance.

The default segment count is `48`. Setting this property’s value to a number less than `3` results in undefined behavior.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Configuring Torus Properties

- [pipeSegmentCount](pipesegmentcount.md): The number of subdivisions around the torus pipe. Animatable.

# ringSegmentCount (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of subdivisions around the torus ring. Animatable.

## Declaration

```objectivec
@property (nonatomic) NSInteger ringSegmentCount;
```

<a id="Discussion"></a>

## Discussion

This segment count corresponds to the circle formed by the torus’ major radius or [ringRadius](ringradius.md) property. A larger number of segments adds more vertex data to the geometry, creating a more smoothly curved surface at a cost to rendering performance.

The default segment count is `48`. Setting this property’s value to a number less than `3` results in undefined behavior.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Configuring Torus Properties

- [pipeSegmentCount](pipesegmentcount.md): The number of subdivisions around the torus pipe. Animatable.

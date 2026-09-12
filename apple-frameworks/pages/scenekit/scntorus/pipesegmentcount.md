> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scntorus/pipesegmentcount](https://developer.apple.com/documentation/scenekit/scntorus/pipesegmentcount)

# pipeSegmentCount (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The number of subdivisions around the torus pipe. Animatable.

## Declaration

```swift
var pipeSegmentCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

This segment count corresponds to the circle formed by the torus’ minor radius or [pipeRadius](piperadius.md) property. A larger number of segments adds more vertex data to the geometry, creating a more smoothly curved surface at a cost to rendering performance.

The default segment count is `24`. Setting this property’s value to a number less than `3` results in undefined behavior.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Configuring Torus Properties

- [ringSegmentCount](ringsegmentcount.md): The number of subdivisions around the torus ring. Animatable.

# pipeSegmentCount (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The number of subdivisions around the torus pipe. Animatable.

## Declaration

```objectivec
@property (nonatomic) NSInteger pipeSegmentCount;
```

<a id="Discussion"></a>

## Discussion

This segment count corresponds to the circle formed by the torus’ minor radius or [pipeRadius](piperadius.md) property. A larger number of segments adds more vertex data to the geometry, creating a more smoothly curved surface at a cost to rendering performance.

The default segment count is `24`. Setting this property’s value to a number less than `3` results in undefined behavior.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Configuring Torus Properties

- [ringSegmentCount](ringsegmentcount.md): The number of subdivisions around the torus ring. Animatable.

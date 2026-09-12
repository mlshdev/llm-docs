> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnbox/chamferradius](https://developer.apple.com/documentation/scenekit/scnbox/chamferradius)

# chamferRadius (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The radius of curvature for the edges and corners of the box. Animatable.

## Declaration

```swift
var chamferRadius: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The minimum (and default) corner radius is `0.0`, specifying square corners. Set this property to a nonzero value to add rounded edges and corners to the box. Setting a corner radius of less than zero creates an empty geometry.

The maximum corner radius is half the box’s smallest dimension. For example, if a box’s width and length are both `5.0` and its height is `10.0`, its maximum corner radius is `2.5`. With these dimensions, the box’s four rounded vertical edges join to form a cylinder and its vertical faces disappear. Increasing the corner radius beyond the maximum has no visible effect.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adding Rounded Edges and Corners

- [chamferSegmentCount](chamfersegmentcount.md): The number of line segments used to create each rounded edge of the box. Animatable.

# chamferRadius (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The radius of curvature for the edges and corners of the box. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat chamferRadius;
```

<a id="Discussion"></a>

## Discussion

The minimum (and default) corner radius is `0.0`, specifying square corners. Set this property to a nonzero value to add rounded edges and corners to the box. Setting a corner radius of less than zero creates an empty geometry.

The maximum corner radius is half the box’s smallest dimension. For example, if a box’s width and length are both `5.0` and its height is `10.0`, its maximum corner radius is `2.5`. With these dimensions, the box’s four rounded vertical edges join to form a cylinder and its vertical faces disappear. Increasing the corner radius beyond the maximum has no visible effect.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adding Rounded Edges and Corners

- [chamferSegmentCount](chamfersegmentcount.md): The number of line segments used to create each rounded edge of the box. Animatable.

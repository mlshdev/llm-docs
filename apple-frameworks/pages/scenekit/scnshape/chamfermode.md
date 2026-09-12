> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnshape/chamfermode](https://developer.apple.com/documentation/scenekit/scnshape/chamfermode)

# chamferMode (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A constant specifying which ends of the extruded shape’s profile are chamfered.

## Declaration

```swift
var chamferMode: SCNChamferMode { get set }
```

<a id="Discussion"></a>

## Discussion

See [SCNChamferMode](../scnchamfermode.md) for allowed values. The default chamfer mode is [SCNChamferMode.both](../scnchamfermode/both.md).

## See Also

### Chamfering a Shape

- [SCNChamferMode](../scnchamfermode.md): Options for which edges of an extruded shape are chamfered, used by the [chamferMode](chamfermode.md) property.
- [chamferProfile](chamferprofile.md): A path that determines the cross-sectional contour of each chamfered edge.
- [chamferRadius](chamferradius.md): The width or depth of each chamfered edge. Animatable.

# chamferMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

A constant specifying which ends of the extruded shape’s profile are chamfered.

## Declaration

```objectivec
@property (nonatomic) SCNChamferMode chamferMode;
```

<a id="Discussion"></a>

## Discussion

See [SCNChamferMode](../scnchamfermode.md) for allowed values. The default chamfer mode is [SCNChamferModeBoth](../scnchamfermode/both.md).

## See Also

### Chamfering a Shape

- [SCNChamferMode](../scnchamfermode.md): Options for which edges of an extruded shape are chamfered, used by the [chamferMode](chamfermode.md) property.
- [chamferProfile](chamferprofile.md): A path that determines the cross-sectional contour of each chamfered edge.
- [chamferRadius](chamferradius.md): The width or depth of each chamfered edge. Animatable.

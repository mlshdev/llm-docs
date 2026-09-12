> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/spotouterangle](https://developer.apple.com/documentation/scenekit/scnlight/spotouterangle)

# spotOuterAngle (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The angle, in degrees, of the area partially lit by a spotlight. Animatable.

## Declaration

```swift
var spotOuterAngle: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

You define the cone-shaped illuminated area of a spotlight with a position and direction (from the node containing the light) and with an angle specifying the cone’s width. Additionally, the illuminated area can smoothly transition from full illumination to no illumination. This property determines the width of the transition area.

The default value is `45.0`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Spotlight Extent

- [spotInnerAngle](spotinnerangle.md): The angle, in degrees, of the area fully lit by a spotlight. Animatable.
- [gobo](gobo.md): An image or other visual content affecting the shape and color of a light’s illuminated area.

# spotOuterAngle (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The angle, in degrees, of the area partially lit by a spotlight. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat spotOuterAngle;
```

<a id="Discussion"></a>

## Discussion

You define the cone-shaped illuminated area of a spotlight with a position and direction (from the node containing the light) and with an angle specifying the cone’s width. Additionally, the illuminated area can smoothly transition from full illumination to no illumination. This property determines the width of the transition area.

The default value is `45.0`.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Managing Spotlight Extent

- [spotInnerAngle](spotinnerangle.md): The angle, in degrees, of the area fully lit by a spotlight. Animatable.
- [gobo](gobo.md): An image or other visual content affecting the shape and color of a light’s illuminated area.

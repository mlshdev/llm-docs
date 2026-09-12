> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight/gobo](https://developer.apple.com/documentation/scenekit/scnlight/gobo)

# gobo (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

An image or other visual content affecting the shape and color of a light’s illuminated area.

## Declaration

```swift
var gobo: SCNMaterialProperty? { get }
```

<a id="Discussion"></a>

## Discussion

In photographic and stage lighting terminology, a gobo (also known as a *flag* or *cookie*) is a stencil, gel, or other object placed just in front of a light source, shaping or coloring the beam of light.

You alter the appearance of a spotlight by changing the [contents](../scnmaterialproperty/contents.md) property of the object permanently assigned to this property. As with other material properties, you can use a color or image, or a Core Animation layer containing animated content, as a lighting gobo.

This property applies only to lights whose [type](type.md) property is [spot](lighttype/spot.md).

## See Also

### Managing Spotlight Extent

- [spotInnerAngle](spotinnerangle.md): The angle, in degrees, of the area fully lit by a spotlight. Animatable.
- [spotOuterAngle](spotouterangle.md): The angle, in degrees, of the area partially lit by a spotlight. Animatable.

# gobo (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

An image or other visual content affecting the shape and color of a light’s illuminated area.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) SCNMaterialProperty * gobo;
```

<a id="Discussion"></a>

## Discussion

In photographic and stage lighting terminology, a gobo (also known as a *flag* or *cookie*) is a stencil, gel, or other object placed just in front of a light source, shaping or coloring the beam of light.

You alter the appearance of a spotlight by changing the [contents](../scnmaterialproperty/contents.md) property of the object permanently assigned to this property. As with other material properties, you can use a color or image, or a Core Animation layer containing animated content, as a lighting gobo.

This property applies only to lights whose [type](type.md) property is [SCNLightTypeSpot](lighttype/spot.md).

## See Also

### Managing Spotlight Extent

- [spotInnerAngle](spotinnerangle.md): The angle, in degrees, of the area fully lit by a spotlight. Animatable.
- [spotOuterAngle](spotouterangle.md): The angle, in degrees, of the area partially lit by a spotlight. Animatable.

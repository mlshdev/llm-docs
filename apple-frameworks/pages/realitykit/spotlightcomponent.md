> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spotlightcomponent](https://developer.apple.com/documentation/realitykit/spotlightcomponent)

# SpotLightComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS 2.0+

A component that defines a spotlight source.

## Declaration

```swift
struct SpotLightComponent
```

## Mentioned In

- [Automatically animating RealityKit entities](automatically-animating-realitykit-entities.md)

<a id="overview"></a>

## Overview

A spotlight illuminates a cone-shaped volume in the entity’s local forward direction along the z-axis’s negative direction, or `[0.0, 0.0, -1.0]`. Change the a spotlight’s direction with the `Entity/orientation` or [look(at:from:upVector:relativeTo:)](hastransform/look%28at_from_upvector_relativeto_%29.md) method, of the [Entity](entity.md) with a spotlight component.

The light’s [innerAngleInDegrees](spotlightcomponent/innerangleindegrees.md) and [outerAngleInDegrees](spotlightcomponent/outerangleindegrees.md) reflect the size of the light’s cone relative to the entity’s forward direction. The light is at full intensity between `0` degrees and [innerAngleInDegrees](spotlightcomponent/innerangleindegrees.md). RealityKit attenuates the light’s intensity between the inner angle and the outer angle. The spotlight’s intensity is `0.0` beyond the outer angle.

> **Tip**

> Turn on shadows for a spotlight by adding the [SpotLightComponent.Shadow](spotlightcomponent/shadow.md) component to an entity that has a `SpotLightComponent`.

The following table shows some real-world scenarios, to better explain how you can use [intensity](spotlightcomponent/intensity.md) to control the brightness of the light in lumens, and [attenuationRadius](spotlightcomponent/attenuationradius.md) to control how the level of brightness diminishes with distance from the light source:

| Scenario | Approximate Lumens | Attenuation Radius | Description |
| --- | --- | --- | --- |
| Small Accent Spotlight | 100-200 lumens | 5-10 meters | Highlights small objects or artwork |
| LED flashlight | 300-600 lumens | 50-70 meters | Beams a long distance illumination |
| Theatrical Spotlight | 500-1,000 lumens | 20-40 meters | Focuses attention to performers on a stage |
| Outdoor Security Spotlight | 1,000-2,000 lumens | 20-30 meters | Brightly illuminates specific outdoor areas |
| Film/TV Production Spotlight | 5,000-10,000 lumens | 50-100 meters | Provides focused, high-intensity lighting for sets |
| Large-Scale Event Spotlight | 50,000-100,000 lumens | 200-500 meters | Lights large outdoor events or concerts |

<a id="Dynamic-light-capacity"></a>

## Dynamic light capacity

On older hardware, only a limited number of dynamic lights can affect each object. Devices that support `MTLGPUFamily.apple6` or later lift this limit.

Excessive use of dynamic lights may contribute to user-noticeable frame drops and can cause the device to heat up in graphically demanding situations. Both the number of lights and each light’s coverage affect performance, so use properties like [attenuationRadius](spotlightcomponent/attenuationradius.md) to keep a light’s influence no larger than your scene needs. Monitor the thermal state and reduce usage as a mitigation, if necessary.

Because this behavior varies by device, verify your scene’s lighting on the oldest hardware you support. You can check for this support at runtime with `MTLDevice.supportsFamily(.apple6)`.

## Topics

### Configuring the spotlight

- [intensity](spotlightcomponent/intensity.md): The intensity of the spotlight measured in lumen.
- [innerAngleInDegrees](spotlightcomponent/innerangleindegrees.md): The inner angle of the spotlight in degrees.
- [outerAngleInDegrees](spotlightcomponent/outerangleindegrees.md): The outer angle of the spotlight in degrees.
- [attenuationRadius](spotlightcomponent/attenuationradius.md): The distance from the light source where its intensity reaches zero.
- [attenuationFalloffExponent](spotlightcomponent/attenuationfalloffexponent.md): The exponent value for the light’s intensity falloff-transition curve.

### Supporting types

- [SpotLightComponent.Color](spotlightcomponent/color-swift.typealias.md): A platform-specific type used to define color for a spotlight.

### Specifying the render layers

- [layers](spotlightcomponent/layers.md): The layers this light illuminates.

### Defining the light contribution

- [SpotLightComponent.SurroundingsLight](spotlightcomponent/surroundingslight.md): A component that specifies that the spot light illuminates the physical and immersive environment.
- [SpotLightComponent.ProjectiveTexture](spotlightcomponent/projectivetexture.md): A component that specifies a map of a projective texture or cookie light to use for shadow mapping.

### Structures

- [SpotLightComponent.Shadow](spotlightcomponent/shadow.md): A spotlight component that adds shadows to entities that it illuminates.

### Initializers

- [init(color:intensity:innerAngleInDegrees:outerAngleInDegrees:attenuationRadius:)](spotlightcomponent/init%28color_intensity_innerangleindegrees_outerangleindegrees_attenuationradius_%29.md): Creates a spotlight with the given parameters.
- [init(color:intensity:innerAngleInDegrees:outerAngleInDegrees:attenuationRadius:attenuationFalloffExponent:)](spotlightcomponent/init%28color_intensity_innerangleindegrees_outerangleindegrees_attenuationradius_attenuationfalloffexponent_%29.md): Creates a spotlight with the given parameters.

### Instance Properties

- [color](spotlightcomponent/color-2o8ve.md): A color for the spotlight.
- [color](spotlightcomponent/color-6enoj.md): A color for the spotlight.

## Relationships

### Conforms To

- [Component](component.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)

## See Also

### Spotlights and their shadows

- [SpotLightComponent.Shadow](spotlightcomponent/shadow.md): A spotlight component that adds shadows to entities that it illuminates.
- [SpotLightComponent.Shadow.ShadowClippingPlane](spotlightcomponent/shadow/shadowclippingplane.md): An object that specifies the mode of a shadow clipping plane.
- [SpotLightComponent.Shadow.ShadowMapCullMode](spotlightcomponent/shadow/shadowmapcullmode.md)

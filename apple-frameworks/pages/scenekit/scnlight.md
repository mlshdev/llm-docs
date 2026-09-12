> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnlight](https://developer.apple.com/documentation/scenekit/scnlight)

# SCNLight (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A light source that can be attached to a node to illuminate the scene.

## Declaration

```swift
class SCNLight
```

<a id="overview"></a>

## Overview

You illuminate your scene by attaching lights to [SCNNode](scnnode.md) objects using their [light](scnnode/light.md) property.

You set a light’s type using its [type](scnlight/type.md) property. Depending on a light’s type, its position and direction may affect its behavior—you control the light’s position and direction through the node that the light is attached to. The direction of a light, if applicable to its type, is along the negative z-axis of its node’s local coordinate system.

A light’s other properties affect how it illuminates a scene. All lights have a [color](scnlight/color.md) property, which interacts with [SCNMaterial](scnmaterial.md) objects to produce the pixel colors in a rendered scene. Other properties, such as attenuation, shadowing, and spot angle, can affect the behavior of certain types of lights.

The number and type of lights in a scene is a key factor in SceneKit’s rendering performance. For efficient rendering, follow these tips:

- Use SceneKit lights only for dynamic light sources or lights that affect moving objects. For statically lit portions of your scene, create a light map texture in an external 3D authoring tool (also known as *baked lighting*) and apply it to objects in the scene using the [multiply](scnmaterial/multiply.md) material property.
- Minimize the number of lights on each element of the scene. You can achieve most common lighting effects using no more than three lights, and you only need a single ambient light source. SceneKit only uses up to eight light sources per node when rendering, ignoring any additional lights. If you set the [attenuationEndDistance](scnlight/attenuationenddistance.md) property on a spotlight or omnidirectional light to limit its area of effect, SceneKit ignores the light (and its performance cost) when rendering objects outside that area. You can also use the [categoryBitMask](scnlight/categorybitmask.md) property to choose which nodes are illuminated by a light.

## Topics

### Modifying a Light’s Appearance

- [type](scnlight/type.md): A constant identifying the general behavior of the light.
- [SCNLight.LightType](scnlight/lighttype.md): Constants specifying the general behavior of a light, used by the [type](scnlight/type.md) property.
- [color](scnlight/color.md): The color of the light. Animatable.
- [temperature](scnlight/temperature.md): The color temperature, in degrees Kelvin, of the light source. Animatable.
- [intensity](scnlight/intensity.md): The luminous flux, in lumens, or total brightness of the light. Animatable.
- [sphericalHarmonicsCoefficients](scnlight/sphericalharmonicscoefficients.md): Data describing the estimated lighting environment in all directions for a light probe.

### Managing Light Attributes

- [name](scnlight/name.md): A name associated with the light.
- [attribute(forKey:)](scnlight/attribute%28forkey_%29.md): Deprecated. Returns the value of a lighting attribute.
- [setAttribute(\_:forKey:)](scnlight/setattribute%28__forkey_%29.md): Deprecated. Sets the value for a lighting attribute.
- [Lighting Attribute Keys](lighting-attribute-keys.md): Keys for specifying the behavior of a light using the [attribute(forKey:)](scnlight/attribute%28forkey_%29.md) and [setAttribute(\_:forKey:)](scnlight/setattribute%28__forkey_%29.md) methods.

### Managing Light Attenuation

- [attenuationStartDistance](scnlight/attenuationstartdistance.md): The distance from the light at which its intensity begins to diminish. Animatable.
- [attenuationEndDistance](scnlight/attenuationenddistance.md): The distance from the light at which its intensity is completely diminished. Animatable.
- [attenuationFalloffExponent](scnlight/attenuationfalloffexponent.md): The transition curve for the light’s intensity between its attenuation start and end distances. Animatable.

### Managing Spotlight Extent

- [spotInnerAngle](scnlight/spotinnerangle.md): The angle, in degrees, of the area fully lit by a spotlight. Animatable.
- [spotOuterAngle](scnlight/spotouterangle.md): The angle, in degrees, of the area partially lit by a spotlight. Animatable.
- [gobo](scnlight/gobo.md): An image or other visual content affecting the shape and color of a light’s illuminated area.

### Managing Shadows Cast by the Light

- [castsShadow](scnlight/castsshadow.md): A Boolean value that determines whether the light casts shadows.
- [shadowRadius](scnlight/shadowradius.md): A number that specifies the amount of blurring around the edges of shadows cast by the light. Animatable.
- [shadowColor](scnlight/shadowcolor.md): The color of shadows cast by the light. Animatable.
- [shadowMapSize](scnlight/shadowmapsize.md): The size of the shadow map image that SceneKit renders when creating shadows.
- [shadowSampleCount](scnlight/shadowsamplecount.md): The number of samples from the shadow map that SceneKit uses to render each pixel.
- [shadowMode](scnlight/shadowmode.md): The mode SceneKit uses to render shadows.
- [SCNShadowMode](scnshadowmode.md): Options for SceneKit’s rendering of shadows cast by a light, used by the [shadowMode](scnlight/shadowmode.md) property.
- [shadowBias](scnlight/shadowbias.md): The amount of correction to apply to the shadow to prevent rendering artifacts.
- [orthographicScale](scnlight/orthographicscale.md): The orthographic scale SceneKit uses when rendering the shadow map for a directional light.
- [zFar](scnlight/zfar.md): The maximum distance between the light and a visible surface for casting shadows.
- [zNear](scnlight/znear.md): The minimum distance between the light and a visible surface for casting shadows. Animatable.

### Choosing Nodes to be Illuminated by the Light

- [categoryBitMask](scnlight/categorybitmask.md): A mask that defines which categories this light belongs to.

### Managing Photometric Lights

- [iesProfileURL](scnlight/iesprofileurl.md): The URL for a file that contains photometry data describing the intended appearance of the light.

### Initializers

- [init(coder:)](scnlight/init%28coder_%29.md)

### Instance Properties

- [areaExtents](scnlight/areaextents.md)
- [areaPolygonVertices](scnlight/areapolygonvertices.md)
- [areaType](scnlight/areatype.md)
- [automaticallyAdjustsShadowProjection](scnlight/automaticallyadjustsshadowprojection.md)
- [doubleSided](scnlight/doublesided.md)
- [drawsArea](scnlight/drawsarea.md)
- [forcesBackFaceCasters](scnlight/forcesbackfacecasters.md)
- [maximumShadowDistance](scnlight/maximumshadowdistance.md)
- [parallaxCenterOffset](scnlight/parallaxcenteroffset.md)
- [parallaxCorrectionEnabled](scnlight/parallaxcorrectionenabled.md)
- [parallaxExtentsFactor](scnlight/parallaxextentsfactor.md)
- [probeEnvironment](scnlight/probeenvironment.md)
- [probeExtents](scnlight/probeextents.md)
- [probeOffset](scnlight/probeoffset.md)
- [probeType](scnlight/probetype.md)
- [probeUpdateType](scnlight/probeupdatetype.md)
- [sampleDistributedShadowMaps](scnlight/sampledistributedshadowmaps.md)
- [shadowCascadeCount](scnlight/shadowcascadecount.md)
- [shadowCascadeSplittingFactor](scnlight/shadowcascadesplittingfactor.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNAnimatable](scnanimatable.md)
- [SCNTechniqueSupport](scntechniquesupport.md)

## See Also

### Lighting, Cameras, and Shading

- [SCNCamera](scncamera.md): A set of camera attributes that can be attached to a node to provide a point of view for displaying the scene.
- [SCNMaterial](scnmaterial.md): A set of shading attributes that define the appearance of a geometry’s surface when rendered.
- [SCNMaterialProperty](scnmaterialproperty.md): A container for the color or texture of one of a material’s visual properties.

# SCNLight (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A light source that can be attached to a node to illuminate the scene.

## Declaration

```objectivec
@interface SCNLight : NSObject
```

<a id="overview"></a>

## Overview

You illuminate your scene by attaching lights to [SCNNode](scnnode.md) objects using their [light](scnnode/light.md) property.

You set a light’s type using its [type](scnlight/type.md) property. Depending on a light’s type, its position and direction may affect its behavior—you control the light’s position and direction through the node that the light is attached to. The direction of a light, if applicable to its type, is along the negative z-axis of its node’s local coordinate system.

A light’s other properties affect how it illuminates a scene. All lights have a [color](scnlight/color.md) property, which interacts with [SCNMaterial](scnmaterial.md) objects to produce the pixel colors in a rendered scene. Other properties, such as attenuation, shadowing, and spot angle, can affect the behavior of certain types of lights.

The number and type of lights in a scene is a key factor in SceneKit’s rendering performance. For efficient rendering, follow these tips:

- Use SceneKit lights only for dynamic light sources or lights that affect moving objects. For statically lit portions of your scene, create a light map texture in an external 3D authoring tool (also known as *baked lighting*) and apply it to objects in the scene using the [multiply](scnmaterial/multiply.md) material property.
- Minimize the number of lights on each element of the scene. You can achieve most common lighting effects using no more than three lights, and you only need a single ambient light source. SceneKit only uses up to eight light sources per node when rendering, ignoring any additional lights. If you set the [attenuationEndDistance](scnlight/attenuationenddistance.md) property on a spotlight or omnidirectional light to limit its area of effect, SceneKit ignores the light (and its performance cost) when rendering objects outside that area. You can also use the [categoryBitMask](scnlight/categorybitmask.md) property to choose which nodes are illuminated by a light.

## Topics

### Creating a Light

- [light](scnlight/light.md): Deprecated. Creates a new light object.
- [lightWithMDLLight:](scnlight/lightwithmdllight_.md): Deprecated. Creates a light from the specified Model I/O light object.

### Modifying a Light’s Appearance

- [type](scnlight/type.md): A constant identifying the general behavior of the light.
- [SCNLightType](scnlight/lighttype.md): Constants specifying the general behavior of a light, used by the [type](scnlight/type.md) property.
- [color](scnlight/color.md): The color of the light. Animatable.
- [temperature](scnlight/temperature.md): The color temperature, in degrees Kelvin, of the light source. Animatable.
- [intensity](scnlight/intensity.md): The luminous flux, in lumens, or total brightness of the light. Animatable.
- [sphericalHarmonicsCoefficients](scnlight/sphericalharmonicscoefficients.md): Data describing the estimated lighting environment in all directions for a light probe.

### Managing Light Attributes

- [name](scnlight/name.md): A name associated with the light.
- [attributeForKey:](scnlight/attribute%28forkey_%29.md): Deprecated. Returns the value of a lighting attribute.
- [setAttribute:forKey:](scnlight/setattribute%28__forkey_%29.md): Deprecated. Sets the value for a lighting attribute.
- [Lighting Attribute Keys](lighting-attribute-keys.md): Keys for specifying the behavior of a light using the [attributeForKey:](scnlight/attribute%28forkey_%29.md) and [setAttribute:forKey:](scnlight/setattribute%28__forkey_%29.md) methods.

### Managing Light Attenuation

- [attenuationStartDistance](scnlight/attenuationstartdistance.md): The distance from the light at which its intensity begins to diminish. Animatable.
- [attenuationEndDistance](scnlight/attenuationenddistance.md): The distance from the light at which its intensity is completely diminished. Animatable.
- [attenuationFalloffExponent](scnlight/attenuationfalloffexponent.md): The transition curve for the light’s intensity between its attenuation start and end distances. Animatable.

### Managing Spotlight Extent

- [spotInnerAngle](scnlight/spotinnerangle.md): The angle, in degrees, of the area fully lit by a spotlight. Animatable.
- [spotOuterAngle](scnlight/spotouterangle.md): The angle, in degrees, of the area partially lit by a spotlight. Animatable.
- [gobo](scnlight/gobo.md): An image or other visual content affecting the shape and color of a light’s illuminated area.

### Managing Shadows Cast by the Light

- [castsShadow](scnlight/castsshadow.md): A Boolean value that determines whether the light casts shadows.
- [shadowRadius](scnlight/shadowradius.md): A number that specifies the amount of blurring around the edges of shadows cast by the light. Animatable.
- [shadowColor](scnlight/shadowcolor.md): The color of shadows cast by the light. Animatable.
- [shadowMapSize](scnlight/shadowmapsize.md): The size of the shadow map image that SceneKit renders when creating shadows.
- [shadowSampleCount](scnlight/shadowsamplecount.md): The number of samples from the shadow map that SceneKit uses to render each pixel.
- [shadowMode](scnlight/shadowmode.md): The mode SceneKit uses to render shadows.
- [SCNShadowMode](scnshadowmode.md): Options for SceneKit’s rendering of shadows cast by a light, used by the [shadowMode](scnlight/shadowmode.md) property.
- [shadowBias](scnlight/shadowbias.md): The amount of correction to apply to the shadow to prevent rendering artifacts.
- [orthographicScale](scnlight/orthographicscale.md): The orthographic scale SceneKit uses when rendering the shadow map for a directional light.
- [zFar](scnlight/zfar.md): The maximum distance between the light and a visible surface for casting shadows.
- [zNear](scnlight/znear.md): The minimum distance between the light and a visible surface for casting shadows. Animatable.

### Choosing Nodes to be Illuminated by the Light

- [categoryBitMask](scnlight/categorybitmask.md): A mask that defines which categories this light belongs to.

### Managing Photometric Lights

- [IESProfileURL](scnlight/iesprofileurl.md): The URL for a file that contains photometry data describing the intended appearance of the light.

### Instance Properties

- [areaExtents](scnlight/areaextents.md)
- [areaPolygonVertices](scnlight/areapolygonvertices.md)
- [areaType](scnlight/areatype.md)
- [automaticallyAdjustsShadowProjection](scnlight/automaticallyadjustsshadowprojection.md)
- [doubleSided](scnlight/doublesided.md)
- [drawsArea](scnlight/drawsarea.md)
- [forcesBackFaceCasters](scnlight/forcesbackfacecasters.md)
- [maximumShadowDistance](scnlight/maximumshadowdistance.md)
- [parallaxCenterOffset](scnlight/parallaxcenteroffset.md)
- [parallaxCorrectionEnabled](scnlight/parallaxcorrectionenabled.md)
- [parallaxExtentsFactor](scnlight/parallaxextentsfactor.md)
- [probeEnvironment](scnlight/probeenvironment.md)
- [probeExtents](scnlight/probeextents.md)
- [probeOffset](scnlight/probeoffset.md)
- [probeType](scnlight/probetype.md)
- [probeUpdateType](scnlight/probeupdatetype.md)
- [sampleDistributedShadowMaps](scnlight/sampledistributedshadowmaps.md)
- [shadowCascadeCount](scnlight/shadowcascadecount.md)
- [shadowCascadeSplittingFactor](scnlight/shadowcascadesplittingfactor.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [SCNAnimatable](scnanimatable.md)
- [SCNTechniqueSupport](scntechniquesupport.md)

## See Also

### Lighting, Cameras, and Shading

- [SCNCamera](scncamera.md): A set of camera attributes that can be attached to a node to provide a point of view for displaying the scene.
- [SCNMaterial](scnmaterial.md): A set of shading attributes that define the appearance of a geometry’s surface when rendered.
- [SCNMaterialProperty](scnmaterialproperty.md): A container for the color or texture of one of a material’s visual properties.

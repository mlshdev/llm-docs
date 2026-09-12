> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arenvironmentprobeanchor](https://developer.apple.com/documentation/arkit/arenvironmentprobeanchor)

# AREnvironmentProbeAnchor (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+

An object that provides environmental lighting information for a specific area of space in a world-tracking AR session.

## Declaration

```swift
class AREnvironmentProbeAnchor
```

<a id="overview"></a>

## Overview

Environment textures depict the view in all directions from a specific point in a scene. In 3D asset rendering, environment textures are the basis for image-based lighting algorithms where surfaces can realistically reflect light from their surroundings. ARKit can generate environment textures during an AR session using camera imagery, allowing SceneKit or a custom-rendering engine to provide realistic image-based lighting for virtual objects in your AR experience.

To enable texture map generation for an AR session, set the [environmentTexturing](arworldtrackingconfiguration/environmenttexturing-swift.property.md) property:

- With [ARWorldTrackingConfiguration.EnvironmentTexturing.manual](arworldtrackingconfiguration/environmenttexturing-swift.enum/manual.md) environment texturing, you identify points in the scene for which you want light probe texture maps by creating [AREnvironmentProbeAnchor](arenvironmentprobeanchor.md) objects and adding them to the session.
- With [ARWorldTrackingConfiguration.EnvironmentTexturing.automatic](arworldtrackingconfiguration/environmenttexturing-swift.enum/automatic.md) environment texturing, ARKit automatically creates, positions, and adds [AREnvironmentProbeAnchor](arenvironmentprobeanchor.md) objects to the session.

In both cases, ARKit automatically generates environment textures as the session collects camera imagery. Use a delegate method such as [session(\_:didUpdate:)](arsessiondelegate/session%28__didupdate_%29-3qtt8.md) to find out when a texture is available, and access it from the anchor’s [environmentTexture](arenvironmentprobeanchor/environmenttexture.md) property.

If you display AR content using [ARSCNView](arscnview.md) and the [automaticallyUpdatesLighting](arscnview/automaticallyupdateslighting.md) option, SceneKit automatically retrieves [AREnvironmentProbeAnchor](arenvironmentprobeanchor.md) texture maps and uses them to light the scene.

## Topics

### Creating Probe Anchors

- [init(transform:extent:)](arenvironmentprobeanchor/init%28transform_extent_%29.md): Creates a new environment probe anchor.
- [init(name:transform:extent:)](arenvironmentprobeanchor/init%28name_transform_extent_%29.md): Creates a new anchor object with a descriptive name.

### Accessing Texture Maps

- [environmentTexture](arenvironmentprobeanchor/environmenttexture.md): A cube-map texture that represents the view in all directions from the probe anchor’s position.

### Examining a Probe Anchor

- [extent](arenvironmentprobeanchor/extent.md): The area around the anchor’s position that contains the texture.

## Relationships

### Inherits From

- [ARAnchor](aranchor.md)

### Conforms To

- [ARAnchorCopying](aranchorcopying.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Lighting Effects

- [Adding realistic reflections to an AR experience](adding-realistic-reflections-to-an-ar-experience.md): Use ARKit to generate environment probe textures from camera imagery and render reflective virtual objects.
- [ARLightEstimate](arlightestimate.md): Estimated scene lighting information associated with a captured video frame in an AR session.
- [ARDirectionalLightEstimate](ardirectionallightestimate.md): Estimated environmental lighting information associated with a captured video frame in a face-tracking AR session.

# AREnvironmentProbeAnchor (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+

An object that provides environmental lighting information for a specific area of space in a world-tracking AR session.

## Declaration

```objectivec
@interface AREnvironmentProbeAnchor : ARAnchor
```

<a id="overview"></a>

## Overview

Environment textures depict the view in all directions from a specific point in a scene. In 3D asset rendering, environment textures are the basis for image-based lighting algorithms where surfaces can realistically reflect light from their surroundings. ARKit can generate environment textures during an AR session using camera imagery, allowing SceneKit or a custom-rendering engine to provide realistic image-based lighting for virtual objects in your AR experience.

To enable texture map generation for an AR session, set the [environmentTexturing](arworldtrackingconfiguration/environmenttexturing-swift.property.md) property:

- With [AREnvironmentTexturingManual](arworldtrackingconfiguration/environmenttexturing-swift.enum/manual.md) environment texturing, you identify points in the scene for which you want light probe texture maps by creating [AREnvironmentProbeAnchor](arenvironmentprobeanchor.md) objects and adding them to the session.
- With [AREnvironmentTexturingAutomatic](arworldtrackingconfiguration/environmenttexturing-swift.enum/automatic.md) environment texturing, ARKit automatically creates, positions, and adds [AREnvironmentProbeAnchor](arenvironmentprobeanchor.md) objects to the session.

In both cases, ARKit automatically generates environment textures as the session collects camera imagery. Use a delegate method such as [session:didUpdateAnchors:](arsessiondelegate/session%28__didupdate_%29-3qtt8.md) to find out when a texture is available, and access it from the anchor’s [environmentTexture](arenvironmentprobeanchor/environmenttexture.md) property.

If you display AR content using [ARSCNView](arscnview.md) and the [automaticallyUpdatesLighting](arscnview/automaticallyupdateslighting.md) option, SceneKit automatically retrieves [AREnvironmentProbeAnchor](arenvironmentprobeanchor.md) texture maps and uses them to light the scene.

## Topics

### Creating Probe Anchors

- [initWithTransform:extent:](arenvironmentprobeanchor/init%28transform_extent_%29.md): Creates a new environment probe anchor.
- [initWithName:transform:extent:](arenvironmentprobeanchor/init%28name_transform_extent_%29.md): Creates a new anchor object with a descriptive name.

### Accessing Texture Maps

- [environmentTexture](arenvironmentprobeanchor/environmenttexture.md): A cube-map texture that represents the view in all directions from the probe anchor’s position.

### Examining a Probe Anchor

- [extent](arenvironmentprobeanchor/extent.md): The area around the anchor’s position that contains the texture.

## Relationships

### Inherits From

- [ARAnchor](aranchor.md)

## See Also

### Lighting Effects

- [Adding realistic reflections to an AR experience](adding-realistic-reflections-to-an-ar-experience.md): Use ARKit to generate environment probe textures from camera imagery and render reflective virtual objects.
- [ARLightEstimate](arlightestimate.md): Estimated scene lighting information associated with a captured video frame in an AR session.
- [ARDirectionalLightEstimate](ardirectionallightestimate.md): Estimated environmental lighting information associated with a captured video frame in a face-tracking AR session.

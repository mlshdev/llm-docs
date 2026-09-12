> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/aranchor](https://developer.apple.com/documentation/arkit/aranchor)

# ARAnchor (Swift)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An object that specifies the position and orientation of an item in the physical environment.

## Declaration

```swift
class ARAnchor
```

## Mentioned In

- [Displaying an AR Experience with Metal](displaying-an-ar-experience-with-metal.md)
- [Providing 2D Virtual Content with SpriteKit](providing-2d-virtual-content-with-spritekit.md)
- [Providing 3D Virtual Content with SceneKit](providing-3d-virtual-content-with-scenekit.md)

<a id="overview"></a>

## Overview

To track the static positions and orientations of real or virtual objects relative to the camera, create anchor objects and use the [add(anchor:)](arsession/add%28anchor_%29.md) method to add them to your AR session.

> **Tip**

>  Adding an anchor to the session helps ARKit to optimize world-tracking accuracy in the area around that anchor, so that virtual objects appear to stay in place relative to the real world. If a virtual object moves, remove the corresponding anchor from the old position and add one at the new position.

Some ARKit features automatically add special anchors to a session. World-tracking sessions can add [ARPlaneAnchor](arplaneanchor.md), [ARObjectAnchor](arobjectanchor.md), and [ARImageAnchor](arimageanchor.md) objects if you enable the corresponding features; face-tracking sessions add [ARFaceAnchor](arfaceanchor.md) objects.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

In addition to creating your own `ARAnchor` instances to track the real-world positions of your virtual content, you can also subclass `ARAnchor` to associate custom data with anchors you create. Ensure that your anchor classes behave correctly when ARKit updates frames or saves and loads anchors in an [ARWorldMap](arworldmap.md):

- Anchor subclasses must fullfill the requirements of the [ARAnchorCopying](aranchorcopying.md) protocol. ARKit calls [init(anchor:)](aranchorcopying/init%28anchor_%29.md) (on a background thread) to copy instances of your anchor class from each [ARFrame](arframe.md) to the next. Your implementation of this initializer should copy the values of any custom properties your subclass adds.
- Anchor subclasses must also adopt the [NSSecureCoding](../foundation/nssecurecoding.md) protocol. Override [encode(with:)](../foundation/nscoding/encode%28with_%29.md) and [init(coder:)](../foundation/nscoding/init%28coder_%29.md) to save and restore the values your subclass’ custom properties when ARKit saves and loads them in a world map.
- Anchors are considered equal based on their [identifier](aranchor/identifier.md) property.
- Only anchors that do not adopt [ARTrackable](artrackable.md) are included when you save a world map.

## Topics

### Creating Anchors

- [init(transform:)](aranchor/init%28transform_%29.md): Creates a new anchor object with the specified transform.
- [init(name:transform:)](aranchor/init%28name_transform_%29.md): Creates a new anchor object with the specified transform and a descriptive name.
- [name](aranchor/name.md): A descriptive name for the anchor.

### Tracking Anchors

- [identifier](aranchor/identifier.md): A unique identifier for the anchor.
- [sessionIdentifier](aranchor/sessionidentifier.md): The unique identifier of the session that owns this anchor.
- [transform](aranchor/transform.md): A matrix encoding the position, orientation, and scale of the anchor relative to the world coordinate space of the AR session the anchor is placed in.

### Initializers

- [init(anchor:)](aranchor/init%28anchor_%29.md)
- [init(coder:)](aranchor/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ARAppClipCodeAnchor](arappclipcodeanchor.md)
- [ARBodyAnchor](arbodyanchor.md)
- [AREnvironmentProbeAnchor](arenvironmentprobeanchor.md)
- [ARFaceAnchor](arfaceanchor.md)
- [ARGeoAnchor](argeoanchor.md)
- [ARImageAnchor](arimageanchor.md)
- [ARMeshAnchor](armeshanchor.md)
- [ARObjectAnchor](arobjectanchor.md)
- [ARParticipantAnchor](arparticipantanchor.md)
- [ARPlaneAnchor](arplaneanchor.md)

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

### iOS

- [Verifying Device Support and User Permission](verifying-device-support-and-user-permission.md): Check whether your app can use ARKit and respect user privacy at runtime.
- [ARSession](arsession.md): Deprecated. The object that manages the major tasks associated with every AR experience, such as motion tracking, camera passthrough, and image analysis.
- [ARKit in iOS](arkit-in-ios.md): Integrate iOS device camera and motion features to produce augmented reality experiences in your app or game.

# ARAnchor (Objective-C)

**Framework:** ARKit  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An object that specifies the position and orientation of an item in the physical environment.

## Declaration

```objectivec
@interface ARAnchor : NSObject
```

## Mentioned In

- [Displaying an AR Experience with Metal](displaying-an-ar-experience-with-metal.md)
- [Providing 2D Virtual Content with SpriteKit](providing-2d-virtual-content-with-spritekit.md)
- [Providing 3D Virtual Content with SceneKit](providing-3d-virtual-content-with-scenekit.md)

<a id="overview"></a>

## Overview

To track the static positions and orientations of real or virtual objects relative to the camera, create anchor objects and use the [addAnchor:](arsession/add%28anchor_%29.md) method to add them to your AR session.

> **Tip**

>  Adding an anchor to the session helps ARKit to optimize world-tracking accuracy in the area around that anchor, so that virtual objects appear to stay in place relative to the real world. If a virtual object moves, remove the corresponding anchor from the old position and add one at the new position.

Some ARKit features automatically add special anchors to a session. World-tracking sessions can add [ARPlaneAnchor](arplaneanchor.md), [ARObjectAnchor](arobjectanchor.md), and [ARImageAnchor](arimageanchor.md) objects if you enable the corresponding features; face-tracking sessions add [ARFaceAnchor](arfaceanchor.md) objects.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

In addition to creating your own `ARAnchor` instances to track the real-world positions of your virtual content, you can also subclass `ARAnchor` to associate custom data with anchors you create. Ensure that your anchor classes behave correctly when ARKit updates frames or saves and loads anchors in an [ARWorldMap](arworldmap.md):

- Anchor subclasses must fullfill the requirements of the [ARAnchorCopying](aranchorcopying.md) protocol. ARKit calls [initWithAnchor:](aranchorcopying/init%28anchor_%29.md) (on a background thread) to copy instances of your anchor class from each [ARFrame](arframe.md) to the next. Your implementation of this initializer should copy the values of any custom properties your subclass adds.
- Anchor subclasses must also adopt the [NSSecureCoding](../foundation/nssecurecoding.md) protocol. Override [encodeWithCoder:](../foundation/nscoding/encode%28with_%29.md) and [initWithCoder:](../foundation/nscoding/init%28coder_%29.md) to save and restore the values your subclass’ custom properties when ARKit saves and loads them in a world map.
- Anchors are considered equal based on their [identifier](aranchor/identifier.md) property.
- Only anchors that do not adopt [ARTrackable](artrackable.md) are included when you save a world map.

## Topics

### Creating Anchors

- [initWithTransform:](aranchor/init%28transform_%29.md): Creates a new anchor object with the specified transform.
- [initWithName:transform:](aranchor/init%28name_transform_%29.md): Creates a new anchor object with the specified transform and a descriptive name.
- [name](aranchor/name.md): A descriptive name for the anchor.

### Tracking Anchors

- [identifier](aranchor/identifier.md): A unique identifier for the anchor.
- [sessionIdentifier](aranchor/sessionidentifier.md): The unique identifier of the session that owns this anchor.
- [transform](aranchor/transform.md): A matrix encoding the position, orientation, and scale of the anchor relative to the world coordinate space of the AR session the anchor is placed in.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [ARAppClipCodeAnchor](arappclipcodeanchor.md)
- [ARBodyAnchor](arbodyanchor.md)
- [AREnvironmentProbeAnchor](arenvironmentprobeanchor.md)
- [ARFaceAnchor](arfaceanchor.md)
- [ARGeoAnchor](argeoanchor.md)
- [ARImageAnchor](arimageanchor.md)
- [ARMeshAnchor](armeshanchor.md)
- [ARObjectAnchor](arobjectanchor.md)
- [ARParticipantAnchor](arparticipantanchor.md)
- [ARPlaneAnchor](arplaneanchor.md)

### Conforms To

- [ARAnchorCopying](aranchorcopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### iOS

- [Verifying Device Support and User Permission](verifying-device-support-and-user-permission.md): Check whether your app can use ARKit and respect user privacy at runtime.
- [ARSession](arsession.md): Deprecated. The object that manages the major tasks associated with every AR experience, such as motion tracking, camera passthrough, and image analysis.
- [ARKit in iOS](arkit-in-ios.md): Integrate iOS device camera and motion features to produce augmented reality experiences in your app or game.

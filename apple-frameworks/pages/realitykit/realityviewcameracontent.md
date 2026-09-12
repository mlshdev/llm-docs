> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityviewcameracontent](https://developer.apple.com/documentation/realitykit/realityviewcameracontent)

# RealityViewCameraContent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

The content of a reality view that is displayed through a camera.

## Declaration

```swift
struct RealityViewCameraContent
```

<a id="overview"></a>

## Overview

On iOS, `RealityViewCameraContent` displays content in an AR camera view by default, and can display in a “non-AR” mode when requested or when AR or the device’s camera is unavailable. On macOS, `RealityViewCameraContent` always displays its content in a non-AR mode.

You can use `RealityViewCameraContent` to add and remove entities, subscribe to RealityKit events, configure the AR environment, and perform coordinate conversions such as projections and raycasts between the [RealityView](realityview.md) space and a SwiftUI View coordinate space.

## Topics

### Structures

- [RealityViewCameraContent.Body](realityviewcameracontent/body.md): The default view contents of a [RealityView](realityview.md) using [RealityViewCameraContent](realityviewcameracontent.md).

### Instance Properties

- [audioListener](realityviewcameracontent/audiolistener.md): The entity which defines the listener position and orientation for spatial audio.
- [camera](realityviewcameracontent/camera.md): The active camera for the RealityKit scene.
- [cameraTarget](realityviewcameracontent/cameratarget.md): The entity which an orbit camera targets.
- [entities](realityviewcameracontent/entities.md): A collection of RealityKit entities that this view content renders within the scene.
- [environment](realityviewcameracontent/environment.md): The view’s background and default lighting properties.
- [renderingEffects](realityviewcameracontent/renderingeffects.md): The rendering options that you use to selectively enable or disable certain rendering effects.

### Instance Methods

- [animate(body:completion:)](realityviewcameracontent/animate%28body_completion_%29.md)
- [subscribe(to:on:componentType:\_:)](realityviewcameracontent/subscribe%28to_on_componenttype___%29.md): Subscribes to an event type, optionally limited to events affecting a source entity or scene, or a specific component type for component events.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [RealityCoordinateSpaceProjecting](realitycoordinatespaceprojecting.md)
- [RealityViewContentProtocol](realityviewcontentprotocol.md)

## See Also

### SwiftUI scene presentation

- [Controlling the layout behavior of a reality view](controlling-the-layout-behavior-of-a-realityview.md): Choose a strategy for sizing frames and centering 3D content.
- [RealityView](realityview.md): A view that contains RealityKit content.
- [RealityViewContent](realityviewcontent.md): The content of a visionOS reality view.
- [RealityViewContentProtocol](realityviewcontentprotocol.md): A protocol representing the content of a reality view.
- [RealityViewDefaultPlaceholder](realityviewdefaultplaceholder.md): A view that represents the default placeholder for a RealityView.
- [RealityViewEntityCollection](realityviewentitycollection.md): A collection of entities in a RealityView.
- [RealityViewLayoutOption](realityviewlayoutoption.md): Options that specify the frame sizing and content alignment option for `RealityView`.
- [EntityCollection](entitycollection.md): An ordered, mutable collection of entities.

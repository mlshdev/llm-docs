> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityviewcontent](https://developer.apple.com/documentation/realitykit/realityviewcontent)

# RealityViewContent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** visionOS 1.0+

The content of a visionOS reality view.

## Declaration

```swift
struct RealityViewContent
```

<a id="overview"></a>

## Overview

Add content that you want your visionOS app to display to a `RealityViewContent`.

You can use `RealityViewContent` to add and remove entities, subscribe to RealityKit events, and perform coordinate conversions between RealityKit entity space and a SwiftUI View’s coordinate space.

## Topics

### Structures

- [RealityViewContent.Body](realityviewcontent/body.md): The default view contents of a reality view, using reality view content.

### Instance Methods

- [animate(body:completion:)](realityviewcontent/animate%28body_completion_%29.md)
- [subscribe(to:on:componentType:\_:)](realityviewcontent/subscribe%28to_on_componenttype___%29.md): Subscribes to an event type, optionally limited to events affecting a source entity or scene, or a specific component type for component events.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [RealityCoordinateSpace](realitycoordinatespace.md)
- [RealityCoordinateSpaceConverting](realitycoordinatespaceconverting.md)
- [RealityViewContentProtocol](realityviewcontentprotocol.md)

## See Also

### SwiftUI scene presentation

- [Controlling the layout behavior of a reality view](controlling-the-layout-behavior-of-a-realityview.md): Choose a strategy for sizing frames and centering 3D content.
- [RealityView](realityview.md): A view that contains RealityKit content.
- [RealityViewCameraContent](realityviewcameracontent.md): The content of a reality view that is displayed through a camera.
- [RealityViewContentProtocol](realityviewcontentprotocol.md): A protocol representing the content of a reality view.
- [RealityViewDefaultPlaceholder](realityviewdefaultplaceholder.md): A view that represents the default placeholder for a RealityView.
- [RealityViewEntityCollection](realityviewentitycollection.md): A collection of entities in a RealityView.
- [RealityViewLayoutOption](realityviewlayoutoption.md): Options that specify the frame sizing and content alignment option for `RealityView`.
- [EntityCollection](entitycollection.md): An ordered, mutable collection of entities.

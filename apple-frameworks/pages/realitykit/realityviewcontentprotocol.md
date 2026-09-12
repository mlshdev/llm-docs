> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityviewcontentprotocol](https://developer.apple.com/documentation/realitykit/realityviewcontentprotocol)

# RealityViewContentProtocol

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

A protocol representing the content of a reality view.

## Declaration

```swift
protocol RealityViewContentProtocol
```

<a id="overview"></a>

## Overview

Do not interface with this protocol directly. Instead, use [RealityViewContent](realityviewcontent.md) with your [RealityView](realityview.md).

## Topics

### Managing view content

- [add(\_:)](realityviewcontentprotocol/add%28__%29.md): Adds an entity to this content.
- [remove(\_:)](realityviewcontentprotocol/remove%28__%29.md): Removes an entity from this content, if present.
- [Entities](realityviewcontentprotocol/entities-swift.associatedtype.md): The type of collection used for `entities`.
- [entities](realityviewcontentprotocol/entities-swift.property.md): A collection of RealityKit entities that this view content renders within the scene.

### Handling subscriptions

- [subscribe(to:on:\_:)](realityviewcontentprotocol/subscribe%28to_on___%29.md): Subscribes to an event type, optionally limited to events affecting a source entity or scene.
- [subscribe(to:componentType:\_:)](realityviewcontentprotocol/subscribe%28to_componenttype___%29.md): Subscribes to an event type, optionally limited to a specific component type for component events.
- [subscribe(to:on:componentType:\_:)](realityviewcontentprotocol/subscribe%28to_on_componenttype___%29.md): Subscribes to an event type, optionally limited to events affecting a source entity or scene, or a specific component type for component events.

## Relationships

### Conforming Types

- [RealityViewCameraContent](realityviewcameracontent.md)
- [RealityViewContent](realityviewcontent.md)

## See Also

### SwiftUI scene presentation

- [Controlling the layout behavior of a reality view](controlling-the-layout-behavior-of-a-realityview.md): Choose a strategy for sizing frames and centering 3D content.
- [RealityView](realityview.md): A view that contains RealityKit content.
- [RealityViewContent](realityviewcontent.md): The content of a visionOS reality view.
- [RealityViewCameraContent](realityviewcameracontent.md): The content of a reality view that is displayed through a camera.
- [RealityViewDefaultPlaceholder](realityviewdefaultplaceholder.md): A view that represents the default placeholder for a RealityView.
- [RealityViewEntityCollection](realityviewentitycollection.md): A collection of entities in a RealityView.
- [RealityViewLayoutOption](realityviewlayoutoption.md): Options that specify the frame sizing and content alignment option for `RealityView`.
- [EntityCollection](entitycollection.md): An ordered, mutable collection of entities.

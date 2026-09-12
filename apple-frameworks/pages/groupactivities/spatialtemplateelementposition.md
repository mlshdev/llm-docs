> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/spatialtemplateelementposition](https://developer.apple.com/documentation/groupactivities/spatialtemplateelementposition)

# SpatialTemplateElementPosition

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A type that defines the position of an element in a spatial template.

## Declaration

```swift
struct SpatialTemplateElementPosition
```

<a id="overview"></a>

## Overview

Use the `SpatialTemplateElementPosition` type to specify the position of an element along the x- and z-axes in the shared coordinate space. You place elements relative to the app’s content, which sits at the origin of the coordinate space. Specify distances in meters. The following example positions two participants one meter away from the app’s content, and on opposite sides of it:

```swift
struct BasicTemplate: SpatialTemplate {
    var elements: [any SpatialTemplateElement] = [
        .seat(position: .app.offsetBy(x: 0, z: 1)),
        .seat(position: .app.offsetBy(x: 0, z: -1)),
    ]
}
```

## Topics

### Getting the app’s position

- [app](spatialtemplateelementposition/app.md): The position of the app’s content in the shared coordinate space.

### Modifying a position

- [offsetBy(x:z:)](spatialtemplateelementposition/offsetby%28x_z_%29.md): Returns a new position at the specified distance from the origin of the shared coordinate space.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Custom spatial templates

- [Building a guessing game for visionOS](building-a-guessing-game-for-visionos.md): Create a team-based guessing game for visionOS using Group Activities.
- [SpatialTemplate](spatialtemplate.md): An interface you use to create custom arrangements of spatial Personas in a scene.
- [SpatialTemplatePreference](spatialtemplatepreference.md): A structure that specifies the preferred arrangement of participant spatial Personas in a shared simulation space.
- [SpatialTemplateSeatElement](spatialtemplateseatelement.md): A spatial template element that represents a seat for a participant in the activity.
- [SpatialTemplateElement](spatialtemplateelement.md): An interface that defines an element in your spatial template.
- [SpatialTemplateElementDirection](spatialtemplateelementdirection.md): The initial direction a participant faces when an activity starts.
- [SpatialTemplateRole](spatialtemplaterole.md): An interface for defining roles that you assign to the participants of a group activity.

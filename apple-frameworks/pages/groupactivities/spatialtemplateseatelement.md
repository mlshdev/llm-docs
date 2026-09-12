> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/spatialtemplateseatelement](https://developer.apple.com/documentation/groupactivities/spatialtemplateseatelement)

# SpatialTemplateSeatElement

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A spatial template element that represents a seat for a participant in the activity.

## Declaration

```swift
struct SpatialTemplateSeatElement
```

<a id="overview"></a>

## Overview

Add [SpatialTemplateSeatElement](spatialtemplateseatelement.md) types to a custom [SpatialTemplate](spatialtemplate.md) to specify the placement and orientation of participants in a group activity. When an activity starts, the system places participants into the shared coordinate space and orients them according to the seat information you provide. If you associate roles with one or more seats, participants must acquire the associated role before they can occupy the corresponding seat.

Create seat elements directly from this type and add them to the [elements](spatialtemplate/elements.md) property of your custom template. Alternatively, use the inherited `seat(position:direction:role:)` function to create seats, as shown in the following example, which creates two seats on either side of the app’s content along the z-axis:

```swift
struct BasicTemplate: SpatialTemplate {
    var elements: [any SpatialTemplateElement] = [
        .seat(position: .app.offsetBy(x: 0, z: 1)),
        .seat(position: .app.offsetBy(x: 0, z: -1)),
    ]
}
```

## Topics

### Getting the element details

- [position](spatialtemplateseatelement/position.md): The location of the element in the shared coordinate space.
- [direction](spatialtemplateseatelement/direction.md): The initial orientation of the element in the shared coordinate space.
- [role](spatialtemplateseatelement/role.md): An optional role you associate with this element.

### Operators

- [==(\_:\_:)](spatialtemplateseatelement/==%28____%29.md): Returns a Boolean value that indicates whether two values are equal.

### Initializers

- [init(position:direction:role:)](spatialtemplateseatelement/init%28position_direction_role_%29.md): Creates a seat element with the specified position, direction, and role information.

### Instance Methods

- [hash(into:)](spatialtemplateseatelement/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SpatialTemplateElement](spatialtemplateelement.md)

## See Also

### Custom spatial templates

- [Building a guessing game for visionOS](building-a-guessing-game-for-visionos.md): Create a team-based guessing game for visionOS using Group Activities.
- [SpatialTemplate](spatialtemplate.md): An interface you use to create custom arrangements of spatial Personas in a scene.
- [SpatialTemplatePreference](spatialtemplatepreference.md): A structure that specifies the preferred arrangement of participant spatial Personas in a shared simulation space.
- [SpatialTemplateElement](spatialtemplateelement.md): An interface that defines an element in your spatial template.
- [SpatialTemplateElementPosition](spatialtemplateelementposition.md): A type that defines the position of an element in a spatial template.
- [SpatialTemplateElementDirection](spatialtemplateelementdirection.md): The initial direction a participant faces when an activity starts.
- [SpatialTemplateRole](spatialtemplaterole.md): An interface for defining roles that you assign to the participants of a group activity.

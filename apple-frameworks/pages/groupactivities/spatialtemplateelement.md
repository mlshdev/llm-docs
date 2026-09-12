> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/spatialtemplateelement](https://developer.apple.com/documentation/groupactivities/spatialtemplateelement)

# SpatialTemplateElement

**Framework:** Group Activities  
**Kind:** Protocol  
**Availability:** visionOS 2.0+

An interface that defines an element in your spatial template.

## Declaration

```swift
protocol SpatialTemplateElement : Hashable, Sendable
```

<a id="overview"></a>

## Overview

A type that adopts the [SpatialTemplateElement](spatialtemplateelement.md) protocol defines the location and orientation of a participant in a group activity. You don’t adopt this protocol directly in your custom types. Instead, you use types that adopt this protocol to retrieve the corresponding details.

## Topics

### Creating a seat position

- [seat(position:direction:role:)](spatialtemplateelement/seat%28position_direction_role_%29.md): Conforms when `Self` is `SpatialTemplateSeatElement`. Creates a seat element with the specified position, direction, and role information.

### Getting the element details

- [position](spatialtemplateelement/position.md): The location of the element in the shared coordinate space.
- [direction](spatialtemplateelement/direction.md): The initial orientation of the element in the shared coordinate space.
- [role](spatialtemplateelement/role.md): An optional role you associate with this element.

## Relationships

### Inherits From

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [SpatialTemplateSeatElement](spatialtemplateseatelement.md)

## See Also

### Custom spatial templates

- [Building a guessing game for visionOS](building-a-guessing-game-for-visionos.md): Create a team-based guessing game for visionOS using Group Activities.
- [SpatialTemplate](spatialtemplate.md): An interface you use to create custom arrangements of spatial Personas in a scene.
- [SpatialTemplatePreference](spatialtemplatepreference.md): A structure that specifies the preferred arrangement of participant spatial Personas in a shared simulation space.
- [SpatialTemplateSeatElement](spatialtemplateseatelement.md): A spatial template element that represents a seat for a participant in the activity.
- [SpatialTemplateElementPosition](spatialtemplateelementposition.md): A type that defines the position of an element in a spatial template.
- [SpatialTemplateElementDirection](spatialtemplateelementdirection.md): The initial direction a participant faces when an activity starts.
- [SpatialTemplateRole](spatialtemplaterole.md): An interface for defining roles that you assign to the participants of a group activity.

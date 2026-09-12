> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/spatialtemplatepreference](https://developer.apple.com/documentation/groupactivities/spatialtemplatepreference)

# SpatialTemplatePreference

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A structure that specifies the preferred arrangement of participant spatial Personas in a shared simulation space.

## Declaration

```swift
struct SpatialTemplatePreference
```

<a id="overview"></a>

## Overview

Use the static members of this structure to specify your preferred arrangement of participants around your app’s content. The system applies your preference only when displaying spatial Personas in the scene.

## Topics

### Getting the spatial position preferences

- [none](spatialtemplatepreference/none.md): An arrangement where the system places spatial Personas based on your app’s content.
- [sideBySide](spatialtemplatepreference/sidebyside.md): An arrangement where the participants sit in a line with the content in front of them.
- [conversational](spatialtemplatepreference/conversational.md): An arrangement where the participants can see one another and the app’s content.
- [custom(\_:)](spatialtemplatepreference/custom%28__%29.md): Creates a template preference with the given custom spatial template.

### Specifying the distance between content and participants

- [contentExtent(\_:)](spatialtemplatepreference/contentextent%28__%29.md): Sets the distance between the app’s content and any participants.

### Type Properties

- [surround](spatialtemplatepreference/surround.md): An arrangement where the participants sit around the content.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Custom spatial templates

- [Building a guessing game for visionOS](building-a-guessing-game-for-visionos.md): Create a team-based guessing game for visionOS using Group Activities.
- [SpatialTemplate](spatialtemplate.md): An interface you use to create custom arrangements of spatial Personas in a scene.
- [SpatialTemplateSeatElement](spatialtemplateseatelement.md): A spatial template element that represents a seat for a participant in the activity.
- [SpatialTemplateElement](spatialtemplateelement.md): An interface that defines an element in your spatial template.
- [SpatialTemplateElementPosition](spatialtemplateelementposition.md): A type that defines the position of an element in a spatial template.
- [SpatialTemplateElementDirection](spatialtemplateelementdirection.md): The initial direction a participant faces when an activity starts.
- [SpatialTemplateRole](spatialtemplaterole.md): An interface for defining roles that you assign to the participants of a group activity.

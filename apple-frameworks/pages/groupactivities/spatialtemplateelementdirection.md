> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/spatialtemplateelementdirection](https://developer.apple.com/documentation/groupactivities/spatialtemplateelementdirection)

# SpatialTemplateElementDirection

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** visionOS 2.0+

The initial direction a participant faces when an activity starts.

## Declaration

```swift
struct SpatialTemplateElementDirection
```

<a id="overview"></a>

## Overview

A `SpatialTemplateElementDirection` type indicates where a participant faces at the start of an activity. You might configure participants to face your app’s content, another participant, or an arbitrary point in the shared coordinate system. You can also modify an existing direction value by adding an arbitrary amount of additional rotation. When a participant joins an activity, the system sets the initial orientation of their spatial Persona to the direction assigned to their seat position. If you don’t specify an initial direction for a seat, the participant faces your app’s content.

The following example creates a spatial template for a table tennis game with four participants and a spectator. The template places the red and blue teams at opposite ends of the table along the z-axis, and each person faces the app’s content along that axis. The final participant sits to the side of the table to watch the game.

```swift
struct TableTennis: SpatialTemplate {
    enum Role: String, SpatialTemplateRole {
        case blueTeam
        case redTeam
    }

    var elements: [any SpatialTemplateElement] = [
        .seat(position: .app.offsetBy(x: -1, z: -3), direction: .alignedWith(appAxis: .z), role: Role.blueTeam),
        .seat(position: .app.offsetBy(x: -1, z:  3), direction: .alignedWith(appAxis: .z), role: Role.redTeam),

        .seat(position: .app.offsetBy(x:  1, z: -3), direction: .alignedWith(appAxis: .z), role: Role.blueTeam),
        .seat(position: .app.offsetBy(x:  1, z:  3), direction: .alignedWith(appAxis: .z), role: Role.redTeam),

        .seat(position: .app.offsetBy(x: -2, z:  0))
    ]
}
```

## Topics

### Looking at a specific location

- [lookingAt(\_:)](spatialtemplateelementdirection/lookingat%28__%29-70j0i.md): Creates a direction that orients the participant to face another template element.
- [lookingAt(\_:)](spatialtemplateelementdirection/lookingat%28__%29-1d7ak.md): Creates a direction that orients the participant to face the specified point in the shared coordinate space.

### Looking along an axis

- [alignedWith(appAxis:)](spatialtemplateelementdirection/alignedwith%28appaxis_%29.md): Creates a direction that orients the participant to look along the specified axis in the direction of the app’s content.
- [SpatialTemplateElementAxis](spatialtemplateelementaxis.md): An axis to use when aligning elements in a spatial template.

### Rotating the element

- [rotatedBy(\_:)](spatialtemplateelementdirection/rotatedby%28__%29.md): Returns a new direction structure that adds the specified rotation angle to the current direction’s value.

### Operators

- [+(\_:\_:)](spatialtemplateelementdirection/+%28____%29.md): Adds the y-axis rotations for the specified values together and returns a new structure with the result.

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
- [SpatialTemplateElementPosition](spatialtemplateelementposition.md): A type that defines the position of an element in a spatial template.
- [SpatialTemplateRole](spatialtemplaterole.md): An interface for defining roles that you assign to the participants of a group activity.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/systemcoordinator/participantstate](https://developer.apple.com/documentation/groupactivities/systemcoordinator/participantstate)

# SystemCoordinator.ParticipantState

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** visionOS 1.0+

A structure that tells you whether a participant supports a shared simulation space for the current activity.

## Declaration

```swift
struct ParticipantState
```

## Mentioned In

- [Adding spatial Persona support to an activity](../adding-spatial-persona-support-to-an-activity.md)

<a id="overview"></a>

## Overview

A [SystemCoordinator.ParticipantState](participantstate.md) structure reports the current person’s ability to display a spatial Persona when joined to a group activity. A person can display a spatial Persona only if the device supports it, and only if they configured that spatial Persona in advance.

When someone’s spatial Persona is active, SharePlay positions the person in the scene relative to the shared content. When that happens, share any extra activity-related details that preserve the shared context of the scene. For example, when one person scrolls the content in a shared window, communicate the new scroll position as an activity update. When your app receives those extra updates, apply them only if the current spatial Persona is also active.

Observe the participant’s spatial state from the [localParticipantState](localparticipantstate.md) property of your session’s [SystemCoordinator](../systemcoordinator.md) object. Spatial state information can change, so update your app’s presentation to reflect the person’s current support for the activity.

## Topics

### Getting the participant details

- [isSpatial](participantstate/isspatial.md): A Boolean value that indicates whether the person supports being in a shared simulation space for an activity.

### Structures

- [SystemCoordinator.ParticipantState.Seat](participantstate/seat-swift.struct.md): A seat assigned to a single participant in a spatial template.

### Instance Properties

- [pose](participantstate/pose.md): The position and rotation of the participant – at the time the system coordinator state last changed.
- [role](participantstate/role.md): The role assigned to this participant, if any.
- [seat](participantstate/seat-swift.property.md): The seat assigned to this participant.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Spatial activities

- [Configure your visionOS app for sharing with people nearby](../configure-your-app-for-sharing-with-people-nearby.md): Create shared experiences for people wearing Vision Pro in the same room and those on FaceTime.
- [Adding spatial Persona support to an activity](../adding-spatial-persona-support-to-an-activity.md): Update your SharePlay activities to support spatial Personas and the shared context when running in visionOS.
- [Implementing SharePlay for immersive spaces in visionOS](../../visionos/implementing-shareplay-for-immersive-spaces-in-visionos.md): Enable collaborative spatial experiences by using SharePlay to synchronize 3D content among participants.
- [SystemCoordinator](../systemcoordinator.md): A type you use to coordinate your interface’s behavior when an active SharePlay session supports spatial placement of content.
- [groupActivityAssociation(\_:)](https://developer.apple.com/documentation/swiftui/view/groupactivityassociation%28_:%29): Specifies how a view should be associated with the current SharePlay group activity.
- [GroupActivityAssociationInteraction](../groupactivityassociationinteraction.md): An interaction configures a view’s association with the current SharePlay group activity.
- [GroupActivityAssociationKind](../groupactivityassociationkind.md): An association a user-interface element can have with a SharePlay group activity.

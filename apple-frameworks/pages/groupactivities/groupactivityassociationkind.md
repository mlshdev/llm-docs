> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivityassociationkind](https://developer.apple.com/documentation/groupactivities/groupactivityassociationkind)

# GroupActivityAssociationKind

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** visionOS 26.0+

An association a user-interface element can have with a SharePlay group activity.

## Declaration

```swift
struct GroupActivityAssociationKind
```

## Mentioned In

- [Adding spatial Persona support to an activity](adding-spatial-persona-support-to-an-activity.md)

<a id="overview"></a>

## Overview

Use values of this type in conjunction with the `SwiftUI/View/groupActivityAssociation(_:)` view modifier or [GroupActivityAssociationInteraction](groupactivityassociationinteraction.md) UI interaction to set the scene associated with the current SharePlay activity.

## Topics

### Type Methods

- [primary(\_:)](groupactivityassociationkind/primary%28__%29.md): A primary association with a SharePlay group activity that is identified by a given string value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Spatial activities

- [Configure your visionOS app for sharing with people nearby](configure-your-app-for-sharing-with-people-nearby.md): Create shared experiences for people wearing Vision Pro in the same room and those on FaceTime.
- [Adding spatial Persona support to an activity](adding-spatial-persona-support-to-an-activity.md): Update your SharePlay activities to support spatial Personas and the shared context when running in visionOS.
- [Implementing SharePlay for immersive spaces in visionOS](../visionos/implementing-shareplay-for-immersive-spaces-in-visionos.md): Enable collaborative spatial experiences by using SharePlay to synchronize 3D content among participants.
- [SystemCoordinator](systemcoordinator.md): A type you use to coordinate your interface’s behavior when an active SharePlay session supports spatial placement of content.
- [SystemCoordinator.ParticipantState](systemcoordinator/participantstate.md): A structure that tells you whether a participant supports a shared simulation space for the current activity.
- [groupActivityAssociation(\_:)](https://developer.apple.com/documentation/swiftui/view/groupactivityassociation%28_:%29): Specifies how a view should be associated with the current SharePlay group activity.
- [GroupActivityAssociationInteraction](groupactivityassociationinteraction.md): An interaction configures a view’s association with the current SharePlay group activity.

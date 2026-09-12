> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivityassociationinteraction](https://developer.apple.com/documentation/groupactivities/groupactivityassociationinteraction)

# GroupActivityAssociationInteraction

**Framework:** GroupActivities  
**Kind:** Class  
**Availability:** visionOS 26.0+

An interaction configures a view’s association with the current SharePlay group activity.

## Declaration

```swift
@MainActor @objc class GroupActivityAssociationInteraction
```

## Mentioned In

- [Adding spatial Persona support to an activity](adding-spatial-persona-support-to-an-activity.md)

<a id="overview"></a>

## Overview

When a group of people join a SharePlay activity with their spatial Personas, the system selects a common, primary scene to arrange their spatial Personas around. This association between the group activity and a scene in your app creates a shared space for the spatial Personas to interact in; enabling participants to gesture at the associated scene and understand each other. For more information about spatial Personas and SharePlay on visionOS, see [Adding spatial Persona support to an activity](adding-spatial-persona-support-to-an-activity.md).

By default, the system uses your scene’s activation conditions in concert with your activity’s [SceneAssociationBehavior](sceneassociationbehavior.md) to select a primary scene to associate with the activity. You can specify a different scene or dynamically change the primary associated scene by adding this interaction to a view and specifying that view as the `GroupActivityAssociationKind/primary` group activity association.

> **Tip**

>  When building a custom [SpatialTemplate](spatialtemplate.md), the primary associated scene is the [app](spatialtemplateelementposition/app.md) that each seat’s position is relative to.

To add the interaction to a view, use [addInteraction(\_:)](../uikit/uiview/addinteraction%28__%29.md).

```swift
// Create and store the scene association interaction
private let groupActivityAssociationInteraction = GroupActivityAssociationInteraction(
    associationKind: .primary("content-view")
)

override func viewDidLoad() {
    super.viewDidLoad()

    // Add the interaction to the view
    view.addInteraction(groupActivityAssociationInteraction)
}
```

If there are multiple scenes that are simultaneously configured with the primary group activity association, the most recently associated scene will be used. For example, if your app defines two windows and both contain views with the primary association kind, the most recently opened one will be used as the primary scene. If that second window is subsequently closed, the original window will be used again.

You can dynamically disable the group activity association of a view by setting the optional `associationKind` property to `nil`. You can later re-associate it by setting the `associationKind` to `.primary`.

```swift
func removeGroupActivityAssociation() {
   groupActivityAssociationInteraction.associationKind = nil
}
```

## Topics

### Initializers

- [init(associationKind:)](groupactivityassociationinteraction/init%28associationkind_%29.md): Creates a group activity association interaction.

### Instance Properties

- [associationKind](groupactivityassociationinteraction/associationkind.md): An optional value that indicates the kind of group activity association, if any.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIInteraction](../uikit/uiinteraction.md)

## See Also

### Spatial activities

- [Configure your visionOS app for sharing with people nearby](configure-your-app-for-sharing-with-people-nearby.md): Create shared experiences for people wearing Vision Pro in the same room and those on FaceTime.
- [Adding spatial Persona support to an activity](adding-spatial-persona-support-to-an-activity.md): Update your SharePlay activities to support spatial Personas and the shared context when running in visionOS.
- [Implementing SharePlay for immersive spaces in visionOS](../visionos/implementing-shareplay-for-immersive-spaces-in-visionos.md): Enable collaborative spatial experiences by using SharePlay to synchronize 3D content among participants.
- [SystemCoordinator](systemcoordinator.md): A type you use to coordinate your interface’s behavior when an active SharePlay session supports spatial placement of content.
- [SystemCoordinator.ParticipantState](systemcoordinator/participantstate.md): A structure that tells you whether a participant supports a shared simulation space for the current activity.
- [groupActivityAssociation(\_:)](https://developer.apple.com/documentation/swiftui/view/groupactivityassociation%28_:%29): Specifies how a view should be associated with the current SharePlay group activity.
- [GroupActivityAssociationKind](groupactivityassociationkind.md): An association a user-interface element can have with a SharePlay group activity.

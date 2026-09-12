> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/sceneassociationbehavior](https://developer.apple.com/documentation/groupactivities/sceneassociationbehavior)

# SceneAssociationBehavior

**Framework:** Group Activities  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A type that tells the system which scene to associate with an incoming group activity.

## Declaration

```swift
struct SceneAssociationBehavior
```

<a id="overview"></a>

## Overview

Use a [SceneAssociationBehavior](sceneassociationbehavior.md) type to match SharePlay activities to your app’s scenes. The static accessors of this type offer different scene-selection behaviors. For example, you can match each activity type to a specific scene, match scenes dynamically based on the contents of the activity, or prevent matching altogether. Select one of these behaviors and assign the related type to your [GroupActivity](groupactivity.md) object’s metadata. On some platforms, the system adds a custom indicator to a scene to let people know that SharePlay is active.

Add activation conditions to your SwiftUI or UIKit scenes to tell the system which activities they support. An activation condition is a custom string that identifies one of your app’s supported activities. You add these strings to your scenes to direct different types of external events to them. In SwiftUI, specify the activation conditions for a scene using the [handlesExternalEvents(matching:)](https://developer.apple.com/documentation/swiftui/scene/handlesexternalevents%28matching:%29) modifier. In the following example, the scene handles two app-related activities, including a group activity.

```swift
let activationConditions : Set = ["com.mycompany.MySharePlayActivity",
                                  "com.mycompany.MyUserActivity"]
var body: some Scene {
   WindowGroup {
      ContentView()
   }
   .handlesExternalEvents(matching: activationConditions)
```

To handle the same activation condition in a UIKit app, add rules to the [activationConditions](../uikit/uiscene/activationconditions.md) property of your [UIScene](../uikit/uiscene.md) object. Assign these rules in the [scene(\_:willConnectTo:options:)](../uikit/uiscenedelegate/scene%28__willconnectto_options_%29.md) method when you first configure your scene for use. Use the [prefersToActivateForTargetContentIdentifierPredicate](../uikit/uisceneactivationconditions/preferstoactivatefortargetcontentidentifierpredicate.md) property when the scene is the preferred choice for handling the action. The following example shows how to configure a scene to handle two app-related activities, including a group activity.

```swift
let activationConditions = ["com.example.MySharePlayActivity", "com.example.MyUserActivity"]
func scene(_ scene: UIScene,
           willConnectTo session: UISceneSession,
           options connectionOptions: UIScene.ConnectionOptions) {
   // Specify the activities that this scene prefers to handle.
   scene.activationConditions.prefersToActivateForTargetContentIdentifierPredicate
        = NSPredicate(format: "self in %@", activationConditions)
}
```

## Topics

### Getting the scene-association options

- [default](sceneassociationbehavior/default.md): A behavior that matches the activity to a scene using the identifier of your activity object.
- [content(\_:)](sceneassociationbehavior/content%28__%29.md): A behavior that matches the activity to a scene using a custom string that you supply.
- [none](sceneassociationbehavior/none.md): A behavior that doesn’t match any scenes to the activity.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Assigning an app-specific scene

- [sceneAssociationBehavior](groupactivitymetadata/sceneassociationbehavior.md): Criteria the system uses to direct an activity to a specific scene of your app.

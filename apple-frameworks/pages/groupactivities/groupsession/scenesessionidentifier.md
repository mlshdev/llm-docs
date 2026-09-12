> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupsession/scenesessionidentifier](https://developer.apple.com/documentation/groupactivities/groupsession/scenesessionidentifier)

# sceneSessionIdentifier

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The persistent identifier of the session’s associated scene.

## Declaration

```swift
final var sceneSessionIdentifier: String? { get }
```

<a id="discussion"></a>

## Discussion

Use this property to determine which of your app’s scenes belongs with this session. You can configure a [GroupActivity](../groupactivity.md) object with a [SceneAssociationBehavior](../sceneassociationbehavior.md) type that tells the system how to associate the activity with one of your app’s scenes. After matching the activity to a specific scene, the system places the scene identifier in this property.

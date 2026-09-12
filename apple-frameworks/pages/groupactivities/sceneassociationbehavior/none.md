> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/sceneassociationbehavior/none](https://developer.apple.com/documentation/groupactivities/sceneassociationbehavior/none)

# none

**Framework:** Group Activities  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A behavior that doesn’t match any scenes to the activity.

## Declaration

```swift
static let none: SceneAssociationBehavior
```

## Mentioned In

- [Adding spatial Persona support to an activity](../adding-spatial-persona-support-to-an-activity.md)

<a id="discussion"></a>

## Discussion

Choose this option when you don’t want the system to associate one of your scenes with the SharePlay activity. You might choose this option when you handle an activity separately from your app’s scenes.

## See Also

### Getting the scene-association options

- [default](default.md): A behavior that matches the activity to a scene using the identifier of your activity object.
- [content(\_:)](content%28__%29.md): A behavior that matches the activity to a scene using a custom string that you supply.

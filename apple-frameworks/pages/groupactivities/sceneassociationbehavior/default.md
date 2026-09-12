> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/sceneassociationbehavior/default](https://developer.apple.com/documentation/groupactivities/sceneassociationbehavior/default)

# default

**Framework:** Group Activities  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A behavior that matches the activity to a scene using the identifier of your activity object.

## Declaration

```swift
static let `default`: SceneAssociationBehavior
```

## Mentioned In

- [Adding spatial Persona support to an activity](../adding-spatial-persona-support-to-an-activity.md)

<a id="discussion"></a>

## Discussion

With this option, the system uses the string in the [activityIdentifier](../groupactivity/activityidentifier.md) property of your [GroupActivity](../groupactivity.md) object to locate an appropriate scene. Choose this option if your app has only one scene, or if you always use the same scene to display the intended activity.

## See Also

### Getting the scene-association options

- [content(\_:)](content%28__%29.md): A behavior that matches the activity to a scene using a custom string that you supply.
- [none](none.md): A behavior that doesn’t match any scenes to the activity.

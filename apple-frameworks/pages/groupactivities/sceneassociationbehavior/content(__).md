> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/sceneassociationbehavior/content(_:)](https://developer.apple.com/documentation/groupactivities/sceneassociationbehavior/content(_:))

# content(\_:)

**Framework:** Group Activities  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

A behavior that matches the activity to a scene using a custom string that you supply.

## Declaration

```swift
static func content(_ contentIdentifier: String) -> SceneAssociationBehavior
```

## Parameters

- `contentIdentifier`: The string to compare against the scene’s defined activation conditions. This string has a similar purpose to the [targetContentIdentifier](../../foundation/nsuseractivity/targetcontentidentifier.md) of an [NSUserActivity](../../foundation/nsuseractivity.md) object.

<a id="return-value"></a>

## Return Value

A [SceneAssociationBehavior](../sceneassociationbehavior.md) type with the specified identifier.

## Mentioned In

- [Adding spatial Persona support to an activity](../adding-spatial-persona-support-to-an-activity.md)

<a id="discussion"></a>

## Discussion

Use this option when you want more control over the scene-selection process for your [GroupActivity](../groupactivity.md) object. You might use it to direct the activity to different scenes, or to direct the activity to a specific instance of a scene. For example, a drawing app might direct the activity to the specific canvas someone wants to share, and not to a new or unrelated canvas that uses the same scene type.

## See Also

### Getting the scene-association options

- [default](default.md): A behavior that matches the activity to a scene using the identifier of your activity object.
- [none](none.md): A behavior that doesn’t match any scenes to the activity.

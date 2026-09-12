> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivitymetadata/sceneassociationbehavior](https://developer.apple.com/documentation/groupactivities/groupactivitymetadata/sceneassociationbehavior)

# sceneAssociationBehavior

**Framework:** Group Activities  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Criteria the system uses to direct an activity to a specific scene of your app.

## Declaration

```swift
var sceneAssociationBehavior: SceneAssociationBehavior
```

## Mentioned In

- [Adding spatial Persona support to an activity](../adding-spatial-persona-support-to-an-activity.md)

<a id="discussion"></a>

## Discussion

An app with multiple [Scene](https://developer.apple.com/documentation/swiftui/scene) types typically uses each scene for a different purpose. For example, you might use one scene type for your app’s documents, and a different scene type for tool palettes, information windows, and other content. When a group activity starts, the system uses the information in this property to deliver the activity to the appropriate scene. On some platforms, the system also adds a custom indicator to the scene to let people know that SharePlay is active.

Assign a value to this property to specify the scene-selection behavior for your app. If you don’t specify a value for this property, the system adopts the [default](../sceneassociationbehavior/default.md) scene association behavior.

## See Also

### Assigning an app-specific scene

- [SceneAssociationBehavior](../sceneassociationbehavior.md): A type that tells the system which scene to associate with an incoming group activity.

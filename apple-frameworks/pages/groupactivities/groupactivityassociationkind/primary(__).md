> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivityassociationkind/primary(_:)](https://developer.apple.com/documentation/groupactivities/groupactivityassociationkind/primary(_:))

# primary(\_:)

**Framework:** Group Activities  
**Kind:** Type Method  
**Availability:** visionOS 26.0+

A primary association with a SharePlay group activity that is identified by a given string value.

## Declaration

```swift
static func primary(_ identifier: String) -> GroupActivityAssociationKind
```

## Mentioned In

- [Adding spatial Persona support to an activity](../adding-spatial-persona-support-to-an-activity.md)

<a id="discussion"></a>

## Discussion

When in an active SharePlay activity, the system will annotate the primary associated scene scene as “shared” and use it as the common scene to arrange spatial Personas around. This association between the group activity and a scene in your app creates a shared space for spatial Personas to interact in.

> **Important**

> The identifier provided must match the identifier used for the primary association across all participants in the group activity.

You should pick an identifier that reflects the content of this view. For example: `"in-game"`, `"score-board"`, or `"solar-system-photo.png"`. Synchronizing the identifier used across all participants in the activity allows FaceTime to synchronize the position of the containing scene.

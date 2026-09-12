> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/spatialtemplatepreference/contentextent(_:)](https://developer.apple.com/documentation/groupactivities/spatialtemplatepreference/contentextent(_:))

# contentExtent(\_:)

**Framework:** Group Activities  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Sets the distance between the app’s content and any participants.

## Declaration

```swift
func contentExtent(_ contentExtent: CGFloat) -> SpatialTemplatePreference
```

## Mentioned In

- [Adding spatial Persona support to an activity](../adding-spatial-persona-support-to-an-activity.md)

<a id="discussion"></a>

## Discussion

Use this modifier to set the distance between your app’s content and the participants in a shared context. You might use this modifier if the intrinsic size of your content doesn’t represent an optimal viewing distance. Specify the new size in points.

If you don’t apply this modifier, the system uses the intrinsic size of the scene’s content to determine the viewing distance for participants.

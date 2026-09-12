> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/groupactivities/groupactivityassociationinteraction/associationkind](https://developer.apple.com/documentation/groupactivities/groupactivityassociationinteraction/associationkind)

# associationKind

**Framework:** GroupActivities  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

An optional value that indicates the kind of group activity association, if any.

## Declaration

```swift
@MainActor var associationKind: GroupActivityAssociationKind? { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to `nil` to remove the view’s association with the current SharePlay group activity.

You should create an interaction for each view that your app will associate and then enable and disable them as needed. If multiple views with active associations are found, the most recently associated interaction will be used.

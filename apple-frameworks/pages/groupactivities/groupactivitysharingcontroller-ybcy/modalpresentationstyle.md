> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/groupactivities/groupactivitysharingcontroller-ybcy/modalpresentationstyle

# modalPresentationStyle

**Framework:** GroupActivities  
**Kind:** Instance Property  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+ · visionOS 1.0+

The presentation style for the view controller.

## Declaration

```swift
@MainActor override dynamic var modalPresentationStyle: UIModalPresentationStyle { get set }
```

<a id="discussion"></a>

## Discussion

This property always sets the presentation style for the view controller to [UIModalPresentationStyle.pageSheet](../../uikit/uimodalpresentationstyle/pagesheet.md).

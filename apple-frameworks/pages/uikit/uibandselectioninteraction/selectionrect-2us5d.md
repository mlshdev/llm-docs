> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibandselectioninteraction/selectionrect-2us5d](https://developer.apple.com/documentation/uikit/uibandselectioninteraction/selectionrect-2us5d)

# selectionRect

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS

The selection rectangle for an in-progress interaction.

## Declaration

```swift
@MainActor @preconcurrency var selectionRect: CGRect? { get }
```

<a id="Discussion"></a>

## Discussion

The rectangle is in the coordinate system of the view that owns the interaction object. If no interaction is active, the value of this propety is `nil`.

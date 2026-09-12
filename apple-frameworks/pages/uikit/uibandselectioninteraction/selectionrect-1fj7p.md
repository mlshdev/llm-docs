> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibandselectioninteraction/selectionrect-1fj7p](https://developer.apple.com/documentation/uikit/uibandselectioninteraction/selectionrect-1fj7p)

# selectionRect

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+

The selection rectangle for an in-progress interaction.

## Declaration

```objectivec
@property (nonatomic, readonly) CGRect selectionRect;
```

<a id="Discussion"></a>

## Discussion

The rectangle is in the coordinate system of the view that owns the interaction object. If no interaction is active, the value of this propety is `nil`.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisplitarrangement-swift.struct

# UISplitArrangement

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ beta · tvOS 27.1+ · visionOS 27.1+

An arrangement that splits views.

## Declaration

```swift
struct UISplitArrangement
```

## Topics

### Creating a split arrangement

- [init()](uisplitarrangement-swift.struct/init%28%29.md): Creates a split arrangement.

### Configuring the arrangement

- [axes(\_:)](uisplitarrangement-swift.struct/axes%28__%29.md): Sets the axes of the arrangement.
- [UISplitArrangement.Dimension](uisplitarrangement-swift.struct/dimension.md): A dimension for a view within a split arrangement.
- [UISplitArrangement.DimensionRange](uisplitarrangement-swift.struct/dimensionrange.md): A range of dimensions defining the minimum, preferred, and maximum size for a view within a split arrangement.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [UIArrangementViewController.Arrangement](uiarrangementviewcontroller/arrangement.md)

## See Also

### Configuring the arrangement

- [UIArrangementViewController.Arrangement](uiarrangementviewcontroller/arrangement.md): A type that describes how an arrangement view controller lays out its view controllers.
- [UIOverlayArrangement](uioverlayarrangement-swift.struct.md): An arrangement that overlays views.
- [updateArrangement(\_:animated:)](uiarrangementviewcontroller/updatearrangement%28__animated_%29.md): Updates the arrangement of the view controller.

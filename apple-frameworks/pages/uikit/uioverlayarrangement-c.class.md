> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uioverlayarrangement-c.class

# UIOverlayArrangement

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

An arrangement that overlays views.

## Declaration

```objectivec
@interface UIOverlayArrangement : UIArrangement
```

## Topics

### Creating an overlay arrangement

- [overlayArrangement](uioverlayarrangement-c.class/overlayarrangement.md): Beta. Returns an overlay arrangement.

### Configuring the arrangement

- [axes](uioverlayarrangement-c.class/axes.md): Beta. The supported axes of the arrangement.
- [defaultViewProperties](uioverlayarrangement-c.class/defaultviewproperties.md): Beta. Returns the default properties for a view in the overlay arrangement.
- [setViewProperties:forPlacement:](uioverlayarrangement-c.class/setviewproperties_forplacement_.md): Beta. Sets the view properties in the overlay arrangement for a specific placement.
- [UIOverlayArrangementViewProperties](uioverlayarrangementviewproperties.md): Beta. The view properties for an overlay arrangement view.

## Relationships

### Inherits From

- [UIArrangement](uiarrangement.md)

## See Also

### Configuring the arrangement

- [UIArrangement](uiarrangement.md): Beta. A type that describes how an arrangement view controller lays out its view controllers.
- [UISplitArrangement](uisplitarrangement-c.class.md): Beta. An arrangement that splits views.
- [updateArrangement:](uiarrangementviewcontroller/updatearrangement_.md): Beta. Updates the arrangement of the view controller.
- [updateArrangement:animated:](uiarrangementviewcontroller/updatearrangement_animated_.md): Beta. Updates the arrangement of the view controller.

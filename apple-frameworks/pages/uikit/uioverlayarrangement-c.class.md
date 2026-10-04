> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uioverlayarrangement-c.class

# UIOverlayArrangement

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · tvOS 27.1+ · visionOS 27.1+

An arrangement that overlays views.

## Declaration

```objectivec
@interface UIOverlayArrangement : UIArrangement
```

## Topics

### Creating an overlay arrangement

- [overlayArrangement](uioverlayarrangement-c.class/overlayarrangement.md): Returns an overlay arrangement.

### Configuring the arrangement

- [axes](uioverlayarrangement-c.class/axes.md): The supported axes of the arrangement.
- [defaultViewProperties](uioverlayarrangement-c.class/defaultviewproperties.md): Returns the default properties for a view in the overlay arrangement.
- [setViewProperties:forPlacement:](uioverlayarrangement-c.class/setviewproperties_forplacement_.md): Sets the view properties in the overlay arrangement for a specific placement.
- [UIOverlayArrangementViewProperties](uioverlayarrangementviewproperties.md): The view properties for an overlay arrangement view.

## Relationships

### Inherits From

- [UIArrangement](uiarrangement.md)

## See Also

### Configuring the arrangement

- [UIArrangement](uiarrangement.md): A type that describes how an arrangement view controller lays out its view controllers.
- [UISplitArrangement](uisplitarrangement-c.class.md): An arrangement that splits views.
- [updateArrangement:](uiarrangementviewcontroller/updatearrangement_.md): Updates the arrangement of the view controller.
- [updateArrangement:animated:](uiarrangementviewcontroller/updatearrangement_animated_.md): Updates the arrangement of the view controller.

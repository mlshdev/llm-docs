> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisplitarrangement-c.class

# UISplitArrangement

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · tvOS 27.1+ · visionOS 27.1+

An arrangement that splits views.

## Declaration

```objectivec
@interface UISplitArrangement : UIArrangement
```

## Topics

### Creating a split arrangement

- [splitArrangement](uisplitarrangement-c.class/splitarrangement.md): Returns a split arrangement.

### Configuring the arrangement

- [axes](uisplitarrangement-c.class/axes.md): The axes of the arrangement.
- [defaultViewProperties](uisplitarrangement-c.class/defaultviewproperties.md): Returns the default properties for a view in the split arrangement.
- [setViewProperties:forPlacement:](uisplitarrangement-c.class/setviewproperties_forplacement_.md): Sets the view properties in the split arrangement for a specific placement.
- [UISplitArrangementViewProperties](uisplitarrangementviewproperties.md): The view properties for a split arrangement view.

## Relationships

### Inherits From

- [UIArrangement](uiarrangement.md)

## See Also

### Configuring the arrangement

- [UIArrangement](uiarrangement.md): A type that describes how an arrangement view controller lays out its view controllers.
- [UIOverlayArrangement](uioverlayarrangement-c.class.md): An arrangement that overlays views.
- [updateArrangement:](uiarrangementviewcontroller/updatearrangement_.md): Updates the arrangement of the view controller.
- [updateArrangement:animated:](uiarrangementviewcontroller/updatearrangement_animated_.md): Updates the arrangement of the view controller.

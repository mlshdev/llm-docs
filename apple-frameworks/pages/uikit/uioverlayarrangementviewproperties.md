> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uioverlayarrangementviewproperties

# UIOverlayArrangementViewProperties

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The view properties for an overlay arrangement view.

## Declaration

```objectivec
@interface UIOverlayArrangementViewProperties : NSObject
```

## Topics

### Creating view properties

- [init](uioverlayarrangementviewproperties/init.md): Beta. Creates a set of overlay arrangement view properties.

### Configuring the view

- [edge](uioverlayarrangementviewproperties/edge.md): Beta. The edge the view occupies when the overlay arrangement transitions to a side-by-side layout.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Configuring the arrangement

- [axes](uioverlayarrangement-c.class/axes.md): Beta. The supported axes of the arrangement.
- [defaultViewProperties](uioverlayarrangement-c.class/defaultviewproperties.md): Beta. Returns the default properties for a view in the overlay arrangement.
- [setViewProperties:forPlacement:](uioverlayarrangement-c.class/setviewproperties_forplacement_.md): Beta. Sets the view properties in the overlay arrangement for a specific placement.

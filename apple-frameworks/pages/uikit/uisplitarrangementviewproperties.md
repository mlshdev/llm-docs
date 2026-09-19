> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisplitarrangementviewproperties

# UISplitArrangementViewProperties

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

The view properties for a split arrangement view.

## Declaration

```objectivec
@interface UISplitArrangementViewProperties : NSObject
```

## Topics

### Creating view properties

- [init](uisplitarrangementviewproperties/init.md): Beta. Creates a set of split arrangement view properties.

### Configuring the view

- [width](uisplitarrangementviewproperties/width.md): Beta. The width dimension range for the view.
- [height](uisplitarrangementviewproperties/height.md): Beta. The height dimension range for the view.
- [UISplitArrangementDimensionRange](uisplitarrangementdimensionrange.md): Beta. A range of dimensions defining the minimum, preferred, and maximum size for a view within a split arrangement.
- [layoutPriority](uisplitarrangementviewproperties/layoutpriority.md): Beta. The layout priority of the view within the split arrangement.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Configuring the arrangement

- [axes](uisplitarrangement-c.class/axes.md): Beta. The axes of the arrangement.
- [defaultViewProperties](uisplitarrangement-c.class/defaultviewproperties.md): Beta. Returns the default properties for a view in the split arrangement.
- [setViewProperties:forPlacement:](uisplitarrangement-c.class/setviewproperties_forplacement_.md): Beta. Sets the view properties in the split arrangement for a specific placement.

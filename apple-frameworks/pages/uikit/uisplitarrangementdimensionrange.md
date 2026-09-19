> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisplitarrangementdimensionrange

# UISplitArrangementDimensionRange

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

A range of dimensions defining the minimum, preferred, and maximum size for a view within a split arrangement.

## Declaration

```objectivec
@interface UISplitArrangementDimensionRange : NSObject
```

## Topics

### Creating a dimension range

- [init](uisplitarrangementdimensionrange/init.md): Beta. Creates a dimension range.

### Getting the dimensions

- [minimum](uisplitarrangementdimensionrange/minimum.md): Beta. The minimum dimension for the view.
- [preferred](uisplitarrangementdimensionrange/preferred.md): Beta. The preferred dimension for the view.
- [maximum](uisplitarrangementdimensionrange/maximum.md): Beta. The maximum dimension for the view.
- [UISplitArrangementDimension](uisplitarrangementdimension.md): Beta. A dimension for a view within a split arrangement.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Configuring the view

- [width](uisplitarrangementviewproperties/width.md): Beta. The width dimension range for the view.
- [height](uisplitarrangementviewproperties/height.md): Beta. The height dimension range for the view.
- [layoutPriority](uisplitarrangementviewproperties/layoutpriority.md): Beta. The layout priority of the view within the split arrangement.

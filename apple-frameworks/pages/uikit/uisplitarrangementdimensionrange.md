> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uisplitarrangementdimensionrange

# UISplitArrangementDimensionRange

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta · Mac Catalyst 27.1+ · tvOS 27.1+ · visionOS 27.1+

A range of dimensions defining the minimum, preferred, and maximum size for a view within a split arrangement.

## Declaration

```objectivec
@interface UISplitArrangementDimensionRange : NSObject
```

## Topics

### Creating a dimension range

- [init](uisplitarrangementdimensionrange/init.md): Creates a dimension range.

### Getting the dimensions

- [minimum](uisplitarrangementdimensionrange/minimum.md): The minimum dimension for the view.
- [preferred](uisplitarrangementdimensionrange/preferred.md): The preferred dimension for the view.
- [maximum](uisplitarrangementdimensionrange/maximum.md): The maximum dimension for the view.
- [UISplitArrangementDimension](uisplitarrangementdimension.md): A dimension for a view within a split arrangement.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Configuring the view

- [width](uisplitarrangementviewproperties/width.md): The width dimension range for the view.
- [height](uisplitarrangementviewproperties/height.md): The height dimension range for the view.
- [layoutPriority](uisplitarrangementviewproperties/layoutpriority.md): The layout priority of the view within the split arrangement.

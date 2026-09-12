> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutdimension/absolute(_:)](https://developer.apple.com/documentation/uikit/nscollectionlayoutdimension/absolute(_:))

# absolute(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a dimension with an absolute point value.

## Declaration

```swift
class func absolute(_ absoluteDimension: CGFloat) -> Self
```

## See Also

### Creating a dimension

- [estimated(\_:)](estimated%28__%29.md): Creates a dimension with an estimated point value.
- [fractionalHeight(\_:)](fractionalheight%28__%29.md): Creates a dimension that is computed as a fraction of the height of the containing group.
- [fractionalWidth(\_:)](fractionalwidth%28__%29.md): Creates a dimension that is computed as a fraction of the width of the containing group.
- [uniformAcrossSiblings(estimate:)](uniformacrosssiblings%28estimate_%29.md): Creates a dimension in which each item receives as much room as it requires and grows to match the dimension of its largest sibling.

# absoluteDimension: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a dimension with an absolute point value.

## Declaration

```objectivec
+ (instancetype) absoluteDimension:(CGFloat) absoluteDimension;
```

## See Also

### Creating a dimension

- [estimatedDimension:](estimated%28__%29.md): Creates a dimension with an estimated point value.
- [fractionalHeightDimension:](fractionalheight%28__%29.md): Creates a dimension that is computed as a fraction of the height of the containing group.
- [fractionalWidthDimension:](fractionalwidth%28__%29.md): Creates a dimension that is computed as a fraction of the width of the containing group.
- [uniformAcrossSiblingsWithEstimate:](uniformacrosssiblings%28estimate_%29.md): Creates a dimension in which each item receives as much room as it requires and grows to match the dimension of its largest sibling.

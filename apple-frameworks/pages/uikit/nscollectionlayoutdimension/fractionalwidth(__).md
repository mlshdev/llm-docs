> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutdimension/fractionalwidth(_:)](https://developer.apple.com/documentation/uikit/nscollectionlayoutdimension/fractionalwidth(_:))

# fractionalWidth(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a dimension that is computed as a fraction of the width of the containing group.

## Declaration

```swift
class func fractionalWidth(_ fractionalWidth: CGFloat) -> Self
```

## See Also

### Creating a dimension

- [absolute(\_:)](absolute%28__%29.md): Creates a dimension with an absolute point value.
- [estimated(\_:)](estimated%28__%29.md): Creates a dimension with an estimated point value.
- [fractionalHeight(\_:)](fractionalheight%28__%29.md): Creates a dimension that is computed as a fraction of the height of the containing group.
- [uniformAcrossSiblings(estimate:)](uniformacrosssiblings%28estimate_%29.md): Creates a dimension in which each item receives as much room as it requires and grows to match the dimension of its largest sibling.

# fractionalWidthDimension: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a dimension that is computed as a fraction of the width of the containing group.

## Declaration

```objectivec
+ (instancetype) fractionalWidthDimension:(CGFloat) fractionalWidth;
```

## See Also

### Creating a dimension

- [absoluteDimension:](absolute%28__%29.md): Creates a dimension with an absolute point value.
- [estimatedDimension:](estimated%28__%29.md): Creates a dimension with an estimated point value.
- [fractionalHeightDimension:](fractionalheight%28__%29.md): Creates a dimension that is computed as a fraction of the height of the containing group.
- [uniformAcrossSiblingsWithEstimate:](uniformacrosssiblings%28estimate_%29.md): Creates a dimension in which each item receives as much room as it requires and grows to match the dimension of its largest sibling.

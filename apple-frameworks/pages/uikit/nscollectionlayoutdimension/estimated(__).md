> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nscollectionlayoutdimension/estimated(_:)](https://developer.apple.com/documentation/uikit/nscollectionlayoutdimension/estimated(_:))

# estimated(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a dimension with an estimated point value.

## Declaration

```swift
class func estimated(_ estimatedDimension: CGFloat) -> Self
```

<a id="Discussion"></a>

## Discussion

The final size of the dimension is determined when the content is rendered.

## See Also

### Creating a dimension

- [absolute(\_:)](absolute%28__%29.md): Creates a dimension with an absolute point value.
- [fractionalHeight(\_:)](fractionalheight%28__%29.md): Creates a dimension that is computed as a fraction of the height of the containing group.
- [fractionalWidth(\_:)](fractionalwidth%28__%29.md): Creates a dimension that is computed as a fraction of the width of the containing group.
- [uniformAcrossSiblings(estimate:)](uniformacrosssiblings%28estimate_%29.md): Creates a dimension in which each item receives as much room as it requires and grows to match the dimension of its largest sibling.

# estimatedDimension: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Creates a dimension with an estimated point value.

## Declaration

```objectivec
+ (instancetype) estimatedDimension:(CGFloat) estimatedDimension;
```

<a id="Discussion"></a>

## Discussion

The final size of the dimension is determined when the content is rendered.

## See Also

### Creating a dimension

- [absoluteDimension:](absolute%28__%29.md): Creates a dimension with an absolute point value.
- [fractionalHeightDimension:](fractionalheight%28__%29.md): Creates a dimension that is computed as a fraction of the height of the containing group.
- [fractionalWidthDimension:](fractionalwidth%28__%29.md): Creates a dimension that is computed as a fraction of the width of the containing group.
- [uniformAcrossSiblingsWithEstimate:](uniformacrosssiblings%28estimate_%29.md): Creates a dimension in which each item receives as much room as it requires and grows to match the dimension of its largest sibling.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscollectionlayoutdimension/estimated(_:)](https://developer.apple.com/documentation/appkit/nscollectionlayoutdimension/estimated(_:))

# estimated(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.15+

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

# estimatedDimension: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.15+

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

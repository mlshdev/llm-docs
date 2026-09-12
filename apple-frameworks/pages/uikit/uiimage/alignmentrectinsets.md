> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/alignmentrectinsets](https://developer.apple.com/documentation/uikit/uiimage/alignmentrectinsets)

# alignmentRectInsets (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The alignment metadata for positioning the image during layout.

## Declaration

```swift
var alignmentRectInsets: UIEdgeInsets { get }
```

<a id="Discussion"></a>

## Discussion

You can use the inset values as a hint for specifying the image contents more precisely. For example, if you have a 20 x 20 pixel icon that includes a glow effect, you might set the insets to {{2, 2}, {16, 16}} to indicate the position of the underlying icon without the glow effect.

Objects that incorporate images can use these insets to place the image properly within their content.

## See Also

### Accessing image attributes

- [imageOrientation](imageorientation.md): The orientation of the receiver’s image.
- [UIImage.Orientation](orientation.md): Constants that specify the intended display orientation for an image.
- [flipsForRightToLeftLayoutDirection](flipsforrighttoleftlayoutdirection.md): A Boolean value that indicates whether the image flips in a right-to-left layout.
- [resizingMode](resizingmode-swift.property.md): The resizing mode of the image.
- [UIImage.ResizingMode](resizingmode-swift.enum.md): Constants that specify the possible resizing modes for an image.
- [duration](duration.md): The time interval for displaying an animated image.
- [capInsets](capinsets.md): The end-cap insets.
- [isSymbolImage](issymbolimage.md): A Boolean value that indicates whether the image is a symbol.

# alignmentRectInsets (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The alignment metadata for positioning the image during layout.

## Declaration

```objectivec
@property (nonatomic, readonly) UIEdgeInsets alignmentRectInsets;
```

<a id="Discussion"></a>

## Discussion

You can use the inset values as a hint for specifying the image contents more precisely. For example, if you have a 20 x 20 pixel icon that includes a glow effect, you might set the insets to {{2, 2}, {16, 16}} to indicate the position of the underlying icon without the glow effect.

Objects that incorporate images can use these insets to place the image properly within their content.

## See Also

### Accessing image attributes

- [imageOrientation](imageorientation.md): The orientation of the receiver’s image.
- [UIImageOrientation](orientation.md): Constants that specify the intended display orientation for an image.
- [flipsForRightToLeftLayoutDirection](flipsforrighttoleftlayoutdirection.md): A Boolean value that indicates whether the image flips in a right-to-left layout.
- [resizingMode](resizingmode-swift.property.md): The resizing mode of the image.
- [UIImageResizingMode](resizingmode-swift.enum.md): Constants that specify the possible resizing modes for an image.
- [duration](duration.md): The time interval for displaying an animated image.
- [capInsets](capinsets.md): The end-cap insets.
- [symbolImage](issymbolimage.md): A Boolean value that indicates whether the image is a symbol.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/imageorientation](https://developer.apple.com/documentation/uikit/uiimage/imageorientation)

# imageOrientation (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The orientation of the receiver’s image.

## Declaration

```swift
var imageOrientation: UIImage.Orientation { get }
```

<a id="Discussion"></a>

## Discussion

Image orientation affects the way the image data is displayed when drawn. By default, images are displayed in the “up” orientation. If the image has associated metadata (such as EXIF information), however, this property contains the orientation indicated by that metadata. For a list of possible values for this property, see [UIImage.Orientation](orientation.md).

## See Also

### Accessing image attributes

- [UIImage.Orientation](orientation.md): Constants that specify the intended display orientation for an image.
- [flipsForRightToLeftLayoutDirection](flipsforrighttoleftlayoutdirection.md): A Boolean value that indicates whether the image flips in a right-to-left layout.
- [resizingMode](resizingmode-swift.property.md): The resizing mode of the image.
- [UIImage.ResizingMode](resizingmode-swift.enum.md): Constants that specify the possible resizing modes for an image.
- [duration](duration.md): The time interval for displaying an animated image.
- [capInsets](capinsets.md): The end-cap insets.
- [alignmentRectInsets](alignmentrectinsets.md): The alignment metadata for positioning the image during layout.
- [isSymbolImage](issymbolimage.md): A Boolean value that indicates whether the image is a symbol.

# imageOrientation (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The orientation of the receiver’s image.

## Declaration

```objectivec
@property (nonatomic, readonly) UIImageOrientation imageOrientation;
```

<a id="Discussion"></a>

## Discussion

Image orientation affects the way the image data is displayed when drawn. By default, images are displayed in the “up” orientation. If the image has associated metadata (such as EXIF information), however, this property contains the orientation indicated by that metadata. For a list of possible values for this property, see [UIImageOrientation](orientation.md).

## See Also

### Accessing image attributes

- [UIImageOrientation](orientation.md): Constants that specify the intended display orientation for an image.
- [flipsForRightToLeftLayoutDirection](flipsforrighttoleftlayoutdirection.md): A Boolean value that indicates whether the image flips in a right-to-left layout.
- [resizingMode](resizingmode-swift.property.md): The resizing mode of the image.
- [UIImageResizingMode](resizingmode-swift.enum.md): Constants that specify the possible resizing modes for an image.
- [duration](duration.md): The time interval for displaying an animated image.
- [capInsets](capinsets.md): The end-cap insets.
- [alignmentRectInsets](alignmentrectinsets.md): The alignment metadata for positioning the image during layout.
- [symbolImage](issymbolimage.md): A Boolean value that indicates whether the image is a symbol.

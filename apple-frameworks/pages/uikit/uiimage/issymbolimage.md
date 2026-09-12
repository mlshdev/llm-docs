> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/issymbolimage](https://developer.apple.com/documentation/uikit/uiimage/issymbolimage)

# isSymbolImage (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the image is a symbol.

## Declaration

```swift
var isSymbolImage: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Symbol images are vector-based images that you use for your app’s iconography. The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the image is either a system-provided symbol image or a custom symbol image that you supplied in your asset catalog. The value is [false](https://developer.apple.com/documentation/swift/false) for all other image types.

## See Also

### Accessing image attributes

- [imageOrientation](imageorientation.md): The orientation of the receiver’s image.
- [UIImage.Orientation](orientation.md): Constants that specify the intended display orientation for an image.
- [flipsForRightToLeftLayoutDirection](flipsforrighttoleftlayoutdirection.md): A Boolean value that indicates whether the image flips in a right-to-left layout.
- [resizingMode](resizingmode-swift.property.md): The resizing mode of the image.
- [UIImage.ResizingMode](resizingmode-swift.enum.md): Constants that specify the possible resizing modes for an image.
- [duration](duration.md): The time interval for displaying an animated image.
- [capInsets](capinsets.md): The end-cap insets.
- [alignmentRectInsets](alignmentrectinsets.md): The alignment metadata for positioning the image during layout.

# symbolImage (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Boolean value that indicates whether the image is a symbol.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isSymbolImage) BOOL symbolImage;
```

<a id="Discussion"></a>

## Discussion

Symbol images are vector-based images that you use for your app’s iconography. The value of this property is [true](https://developer.apple.com/documentation/swift/true) if the image is either a system-provided symbol image or a custom symbol image that you supplied in your asset catalog. The value is [false](https://developer.apple.com/documentation/swift/false) for all other image types.

## See Also

### Accessing image attributes

- [imageOrientation](imageorientation.md): The orientation of the receiver’s image.
- [UIImageOrientation](orientation.md): Constants that specify the intended display orientation for an image.
- [flipsForRightToLeftLayoutDirection](flipsforrighttoleftlayoutdirection.md): A Boolean value that indicates whether the image flips in a right-to-left layout.
- [resizingMode](resizingmode-swift.property.md): The resizing mode of the image.
- [UIImageResizingMode](resizingmode-swift.enum.md): Constants that specify the possible resizing modes for an image.
- [duration](duration.md): The time interval for displaying an animated image.
- [capInsets](capinsets.md): The end-cap insets.
- [alignmentRectInsets](alignmentrectinsets.md): The alignment metadata for positioning the image during layout.

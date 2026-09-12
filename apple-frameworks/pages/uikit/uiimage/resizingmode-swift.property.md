> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/resizingmode-swift.property](https://developer.apple.com/documentation/uikit/uiimage/resizingmode-swift.property)

# resizingMode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The resizing mode of the image.

## Declaration

```swift
var resizingMode: UIImage.ResizingMode { get }
```

<a id="Discussion"></a>

## Discussion

The default value for this property is [UIImage.ResizingMode.tile](resizingmode-swift.enum/tile.md). However, [UIImage](../uiimage.md) will implement the resizing mode the fastest way possible while still retaining the desired visual appearance. This means that if the region to be resized is a 1-pixel region and this property is set to [UIImage.ResizingMode.tile](resizingmode-swift.enum/tile.md), the region will be stretched instead because the two are virtually indistinguishable for a region of that size and stretching is dramatically faster than tiling. To set the value of this property, you need to call either [animatedResizableImageNamed(\_:capInsets:resizingMode:duration:)](animatedresizableimagenamed%28__capinsets_resizingmode_duration_%29.md) or [resizableImage(withCapInsets:resizingMode:)](resizableimage%28withcapinsets_resizingmode_%29.md) and specify the resizing mode using the `resizingMode` parameter. For a list of possible values for this property, see [UIImage.ResizingMode](resizingmode-swift.enum.md).

## See Also

### Accessing image attributes

- [imageOrientation](imageorientation.md): The orientation of the receiver’s image.
- [UIImage.Orientation](orientation.md): Constants that specify the intended display orientation for an image.
- [flipsForRightToLeftLayoutDirection](flipsforrighttoleftlayoutdirection.md): A Boolean value that indicates whether the image flips in a right-to-left layout.
- [UIImage.ResizingMode](resizingmode-swift.enum.md): Constants that specify the possible resizing modes for an image.
- [duration](duration.md): The time interval for displaying an animated image.
- [capInsets](capinsets.md): The end-cap insets.
- [alignmentRectInsets](alignmentrectinsets.md): The alignment metadata for positioning the image during layout.
- [isSymbolImage](issymbolimage.md): A Boolean value that indicates whether the image is a symbol.

# resizingMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The resizing mode of the image.

## Declaration

```objectivec
@property (nonatomic, readonly) UIImageResizingMode resizingMode;
```

<a id="Discussion"></a>

## Discussion

The default value for this property is [UIImageResizingModeTile](resizingmode-swift.enum/tile.md). However, [UIImage](../uiimage.md) will implement the resizing mode the fastest way possible while still retaining the desired visual appearance. This means that if the region to be resized is a 1-pixel region and this property is set to [UIImageResizingModeTile](resizingmode-swift.enum/tile.md), the region will be stretched instead because the two are virtually indistinguishable for a region of that size and stretching is dramatically faster than tiling. To set the value of this property, you need to call either [animatedResizableImageNamed:capInsets:resizingMode:duration:](animatedresizableimagenamed%28__capinsets_resizingmode_duration_%29.md) or [resizableImageWithCapInsets:resizingMode:](resizableimage%28withcapinsets_resizingmode_%29.md) and specify the resizing mode using the `resizingMode` parameter. For a list of possible values for this property, see [UIImageResizingMode](resizingmode-swift.enum.md).

## See Also

### Accessing image attributes

- [imageOrientation](imageorientation.md): The orientation of the receiver’s image.
- [UIImageOrientation](orientation.md): Constants that specify the intended display orientation for an image.
- [flipsForRightToLeftLayoutDirection](flipsforrighttoleftlayoutdirection.md): A Boolean value that indicates whether the image flips in a right-to-left layout.
- [UIImageResizingMode](resizingmode-swift.enum.md): Constants that specify the possible resizing modes for an image.
- [duration](duration.md): The time interval for displaying an animated image.
- [capInsets](capinsets.md): The end-cap insets.
- [alignmentRectInsets](alignmentrectinsets.md): The alignment metadata for positioning the image during layout.
- [symbolImage](issymbolimage.md): A Boolean value that indicates whether the image is a symbol.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptionregion/size](https://developer.apple.com/documentation/avfoundation/avcaptionregion/size)

# size (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The height and width of the region.

## Declaration

```swift
var size: AVCaptionSize { get }
```

<a id="Discussion"></a>

## Discussion

CEA608 closed captions limit the [height](../avcaptionsize/height.md) property’s value to 1 cell, except when the value of its [scroll](scroll-swift.property.md) property is [AVCaptionRegion.Scroll.rollUp](scroll-swift.enum/rollup.md). In this case, the [height](../avcaptionsize/height.md) property’s value must be 2, 3 or 4 cells.

> **Note**

>  The caption size has an unspecified height and width when the region doesn’t have width or height information.

## See Also

### Accessing the size

- [AVCaptionSize](../avcaptionsize.md): A structure that defines the height and width of a caption.

# size (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 15.0+ · macOS 12.0+

The height and width of the region.

## Declaration

```objectivec
@property (nonatomic, readonly) AVCaptionSize size;
```

<a id="Discussion"></a>

## Discussion

CEA608 closed captions limit the [height](../avcaptionsize/height.md) property’s value to 1 cell, except when the value of its [scroll](scroll-swift.property.md) property is [AVCaptionRegionScrollRollUp](scroll-swift.enum/rollup.md). In this case, the [height](../avcaptionsize/height.md) property’s value must be 2, 3 or 4 cells.

> **Note**

>  The caption size has an unspecified height and width when the region doesn’t have width or height information.

## See Also

### Accessing the size

- [AVCaptionSize](../avcaptionsize.md): A structure that defines the height and width of a caption.
- [AVCaptionSizeMake](../avcaptionsizemake.md): Creates a caption size with the specified width and height.

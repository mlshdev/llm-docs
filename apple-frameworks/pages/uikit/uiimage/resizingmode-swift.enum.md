> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/resizingmode-swift.enum](https://developer.apple.com/documentation/uikit/uiimage/resizingmode-swift.enum)

# UIImage.ResizingMode (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Constants that specify the possible resizing modes for an image.

## Declaration

```swift
enum ResizingMode
```

## Topics

### Constants

- [UIImage.ResizingMode.tile](resizingmode-swift.enum/tile.md): The image is tiled when it is resized. In other words, the interior region of the original image will be repeated to fill in the interior region of the newly resized image.
- [UIImage.ResizingMode.stretch](resizingmode-swift.enum/stretch.md): The image is stretched when it is resized. In other words, the interior region of the original image will be scaled to fill in the interior region of the newly resized imaged.

### Initializers

- [init(rawValue:)](resizingmode-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing image attributes

- [imageOrientation](imageorientation.md): The orientation of the receiver’s image.
- [UIImage.Orientation](orientation.md): Constants that specify the intended display orientation for an image.
- [flipsForRightToLeftLayoutDirection](flipsforrighttoleftlayoutdirection.md): A Boolean value that indicates whether the image flips in a right-to-left layout.
- [resizingMode](resizingmode-swift.property.md): The resizing mode of the image.
- [duration](duration.md): The time interval for displaying an animated image.
- [capInsets](capinsets.md): The end-cap insets.
- [alignmentRectInsets](alignmentrectinsets.md): The alignment metadata for positioning the image during layout.
- [isSymbolImage](issymbolimage.md): A Boolean value that indicates whether the image is a symbol.

# UIImageResizingMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS 2.0+

Constants that specify the possible resizing modes for an image.

## Declaration

```objectivec
enum UIImageResizingMode : NSInteger;
```

## Topics

### Constants

- [UIImageResizingModeTile](resizingmode-swift.enum/tile.md): The image is tiled when it is resized. In other words, the interior region of the original image will be repeated to fill in the interior region of the newly resized image.
- [UIImageResizingModeStretch](resizingmode-swift.enum/stretch.md): The image is stretched when it is resized. In other words, the interior region of the original image will be scaled to fill in the interior region of the newly resized imaged.

## See Also

### Accessing image attributes

- [imageOrientation](imageorientation.md): The orientation of the receiver’s image.
- [UIImageOrientation](orientation.md): Constants that specify the intended display orientation for an image.
- [flipsForRightToLeftLayoutDirection](flipsforrighttoleftlayoutdirection.md): A Boolean value that indicates whether the image flips in a right-to-left layout.
- [resizingMode](resizingmode-swift.property.md): The resizing mode of the image.
- [duration](duration.md): The time interval for displaying an animated image.
- [capInsets](capinsets.md): The end-cap insets.
- [alignmentRectInsets](alignmentrectinsets.md): The alignment metadata for positioning the image during layout.
- [symbolImage](issymbolimage.md): A Boolean value that indicates whether the image is a symbol.

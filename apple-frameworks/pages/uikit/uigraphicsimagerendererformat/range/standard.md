> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsimagerendererformat/range/standard](https://developer.apple.com/documentation/uikit/uigraphicsimagerendererformat/range/standard)

# UIGraphicsImageRendererFormat.Range.standard (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

The image renderer context doesn’t support extended colors.

## Declaration

```swift
case standard
```

<a id="Discussion"></a>

## Discussion

If you draw wide-color content into an image renderer context that uses the standard color range, you may lose color information. The system matches the colors to the standard range of their corresponding color space.

## See Also

### Constants

- [UIGraphicsImageRendererFormat.Range.automatic](automatic.md): The system automatically chooses the image renderer context’s pixel format according to the color range of its content.
- [UIGraphicsImageRendererFormat.Range.extended](extended.md): The image renderer context supports wide color.
- [UIGraphicsImageRendererFormat.Range.unspecified](unspecified.md): The image renderer context doesn’t specify a color range.

# UIGraphicsImageRendererFormatRangeStandard (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

The image renderer context doesn’t support extended colors.

## Declaration

```objectivec
UIGraphicsImageRendererFormatRangeStandard
```

<a id="Discussion"></a>

## Discussion

If you draw wide-color content into an image renderer context that uses the standard color range, you may lose color information. The system matches the colors to the standard range of their corresponding color space.

## See Also

### Constants

- [UIGraphicsImageRendererFormatRangeAutomatic](automatic.md): The system automatically chooses the image renderer context’s pixel format according to the color range of its content.
- [UIGraphicsImageRendererFormatRangeExtended](extended.md): The image renderer context supports wide color.
- [UIGraphicsImageRendererFormatRangeUnspecified](unspecified.md): The image renderer context doesn’t specify a color range.

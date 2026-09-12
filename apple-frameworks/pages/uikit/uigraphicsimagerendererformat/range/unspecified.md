> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsimagerendererformat/range/unspecified](https://developer.apple.com/documentation/uikit/uigraphicsimagerendererformat/range/unspecified)

# UIGraphicsImageRendererFormat.Range.unspecified (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

The image renderer context doesn’t specify a color range.

## Declaration

```swift
case unspecified
```

<a id="Discussion"></a>

## Discussion

In general, avoid specifying this value for an image renderer format. Some color spaces that you access using the [imageRendererFormat](../../uiimage/imagerendererformat.md) property of [UIImage](../../uiimage.md) may use this value.

## See Also

### Constants

- [UIGraphicsImageRendererFormat.Range.automatic](automatic.md): The system automatically chooses the image renderer context’s pixel format according to the color range of its content.
- [UIGraphicsImageRendererFormat.Range.extended](extended.md): The image renderer context supports wide color.
- [UIGraphicsImageRendererFormat.Range.standard](standard.md): The image renderer context doesn’t support extended colors.

# UIGraphicsImageRendererFormatRangeUnspecified (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

The image renderer context doesn’t specify a color range.

## Declaration

```objectivec
UIGraphicsImageRendererFormatRangeUnspecified
```

<a id="Discussion"></a>

## Discussion

In general, avoid specifying this value for an image renderer format. Some color spaces that you access using the [imageRendererFormat](../../uiimage/imagerendererformat.md) property of [UIImage](../../uiimage.md) may use this value.

## See Also

### Constants

- [UIGraphicsImageRendererFormatRangeAutomatic](automatic.md): The system automatically chooses the image renderer context’s pixel format according to the color range of its content.
- [UIGraphicsImageRendererFormatRangeExtended](extended.md): The image renderer context supports wide color.
- [UIGraphicsImageRendererFormatRangeStandard](standard.md): The image renderer context doesn’t support extended colors.

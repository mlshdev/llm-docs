> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsimagerendererformat/range](https://developer.apple.com/documentation/uikit/uigraphicsimagerendererformat/range)

# UIGraphicsImageRendererFormat.Range (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

Constants that specify the color range of the image renderer context.

## Declaration

```swift
enum Range
```

## Topics

### Constants

- [UIGraphicsImageRendererFormat.Range.automatic](range/automatic.md): The system automatically chooses the image renderer context’s pixel format according to the color range of its content.
- [UIGraphicsImageRendererFormat.Range.extended](range/extended.md): The image renderer context supports wide color.
- [UIGraphicsImageRendererFormat.Range.standard](range/standard.md): The image renderer context doesn’t support extended colors.
- [UIGraphicsImageRendererFormat.Range.unspecified](range/unspecified.md): The image renderer context doesn’t specify a color range.

### Initializers

- [init(rawValue:)](range/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the renderer attributes

- [opaque](opaque.md): A Boolean value that indicates whether the underlying Core Graphics context has an alpha channel.
- [scale](scale.md): The display scale of the image renderer context.
- [preferredRange](preferredrange.md): The preferred color range of the image renderer context.
- [prefersExtendedRange](prefersextendedrange.md): Deprecated. A Boolean value that specifies whether the bitmap context uses extended color.

# UIGraphicsImageRendererFormatRange (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

Constants that specify the color range of the image renderer context.

## Declaration

```objectivec
enum UIGraphicsImageRendererFormatRange : NSInteger;
```

## Topics

### Constants

- [UIGraphicsImageRendererFormatRangeAutomatic](range/automatic.md): The system automatically chooses the image renderer context’s pixel format according to the color range of its content.
- [UIGraphicsImageRendererFormatRangeExtended](range/extended.md): The image renderer context supports wide color.
- [UIGraphicsImageRendererFormatRangeStandard](range/standard.md): The image renderer context doesn’t support extended colors.
- [UIGraphicsImageRendererFormatRangeUnspecified](range/unspecified.md): The image renderer context doesn’t specify a color range.

## See Also

### Configuring the renderer attributes

- [opaque](opaque.md): A Boolean value that indicates whether the underlying Core Graphics context has an alpha channel.
- [scale](scale.md): The display scale of the image renderer context.
- [preferredRange](preferredrange.md): The preferred color range of the image renderer context.
- [prefersExtendedRange](prefersextendedrange.md): Deprecated. A Boolean value that specifies whether the bitmap context uses extended color.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsimagerendererformat/preferredrange](https://developer.apple.com/documentation/uikit/uigraphicsimagerendererformat/preferredrange)

# preferredRange (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

The preferred color range of the image renderer context.

## Declaration

```swift
var preferredRange: UIGraphicsImageRendererFormat.Range { get set }
```

<a id="Discussion"></a>

## Discussion

This property affects the pixel format of the image that the renderer produces.

Different pixel formats can store different color ranges. The system chooses the precise pixel format, but you can set this property to exclude certain formats that support larger or narrower color ranges than you need.

## See Also

### Configuring the renderer attributes

- [opaque](opaque.md): A Boolean value that indicates whether the underlying Core Graphics context has an alpha channel.
- [scale](scale.md): The display scale of the image renderer context.
- [UIGraphicsImageRendererFormat.Range](range.md): Constants that specify the color range of the image renderer context.
- [prefersExtendedRange](prefersextendedrange.md): Deprecated. A Boolean value that specifies whether the bitmap context uses extended color.

# preferredRange (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · tvOS 12.0+ · visionOS 1.0+

The preferred color range of the image renderer context.

## Declaration

```objectivec
@property (nonatomic) UIGraphicsImageRendererFormatRange preferredRange;
```

<a id="Discussion"></a>

## Discussion

This property affects the pixel format of the image that the renderer produces.

Different pixel formats can store different color ranges. The system chooses the precise pixel format, but you can set this property to exclude certain formats that support larger or narrower color ranges than you need.

## See Also

### Configuring the renderer attributes

- [opaque](opaque.md): A Boolean value that indicates whether the underlying Core Graphics context has an alpha channel.
- [scale](scale.md): The display scale of the image renderer context.
- [UIGraphicsImageRendererFormatRange](range.md): Constants that specify the color range of the image renderer context.
- [prefersExtendedRange](prefersextendedrange.md): Deprecated. A Boolean value that specifies whether the bitmap context uses extended color.

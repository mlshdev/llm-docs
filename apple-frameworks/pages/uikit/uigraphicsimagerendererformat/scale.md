> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsimagerendererformat/scale](https://developer.apple.com/documentation/uikit/uigraphicsimagerendererformat/scale)

# scale (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The display scale of the image renderer context.

## Declaration

```swift
var scale: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The display scale determines the number of pixels per point.

The default value is equal to the [scale](../uiscreen/scale.md) of the main screen.

## See Also

### Configuring the renderer attributes

- [opaque](opaque.md): A Boolean value that indicates whether the underlying Core Graphics context has an alpha channel.
- [preferredRange](preferredrange.md): The preferred color range of the image renderer context.
- [UIGraphicsImageRendererFormat.Range](range.md): Constants that specify the color range of the image renderer context.
- [prefersExtendedRange](prefersextendedrange.md): Deprecated. A Boolean value that specifies whether the bitmap context uses extended color.

# scale (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

The display scale of the image renderer context.

## Declaration

```objectivec
@property (nonatomic) CGFloat scale;
```

<a id="Discussion"></a>

## Discussion

The display scale determines the number of pixels per point.

The default value is equal to the [scale](../uiscreen/scale.md) of the main screen.

## See Also

### Configuring the renderer attributes

- [opaque](opaque.md): A Boolean value that indicates whether the underlying Core Graphics context has an alpha channel.
- [preferredRange](preferredrange.md): The preferred color range of the image renderer context.
- [UIGraphicsImageRendererFormatRange](range.md): Constants that specify the color range of the image renderer context.
- [prefersExtendedRange](prefersextendedrange.md): Deprecated. A Boolean value that specifies whether the bitmap context uses extended color.

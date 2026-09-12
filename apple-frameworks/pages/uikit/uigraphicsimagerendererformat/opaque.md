> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsimagerendererformat/opaque](https://developer.apple.com/documentation/uikit/uigraphicsimagerendererformat/opaque)

# opaque (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether the underlying Core Graphics context has an alpha channel.

## Declaration

```swift
var opaque: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Setting the value of this property to [false](https://developer.apple.com/documentation/swift/false) specifies that the underlying Core Graphics context has an alpha channel, whereas [true](https://developer.apple.com/documentation/swift/true) indicates it does not. The default value is [false](https://developer.apple.com/documentation/swift/false).

A Core Graphics context requires an alpha channel to express transparency. Without an alpha channel a Core Graphics context is said to be opaque, i.e. without transparency.

## See Also

### Configuring the renderer attributes

- [scale](scale.md): The display scale of the image renderer context.
- [preferredRange](preferredrange.md): The preferred color range of the image renderer context.
- [UIGraphicsImageRendererFormat.Range](range.md): Constants that specify the color range of the image renderer context.
- [prefersExtendedRange](prefersextendedrange.md): Deprecated. A Boolean value that specifies whether the bitmap context uses extended color.

# opaque (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether the underlying Core Graphics context has an alpha channel.

## Declaration

```objectivec
@property (nonatomic) BOOL opaque;
```

<a id="Discussion"></a>

## Discussion

Setting the value of this property to [false](https://developer.apple.com/documentation/swift/false) specifies that the underlying Core Graphics context has an alpha channel, whereas [true](https://developer.apple.com/documentation/swift/true) indicates it does not. The default value is [false](https://developer.apple.com/documentation/swift/false).

A Core Graphics context requires an alpha channel to express transparency. Without an alpha channel a Core Graphics context is said to be opaque, i.e. without transparency.

## See Also

### Configuring the renderer attributes

- [scale](scale.md): The display scale of the image renderer context.
- [preferredRange](preferredrange.md): The preferred color range of the image renderer context.
- [UIGraphicsImageRendererFormatRange](range.md): Constants that specify the color range of the image renderer context.
- [prefersExtendedRange](prefersextendedrange.md): Deprecated. A Boolean value that specifies whether the bitmap context uses extended color.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uigraphicsimagerendererformat/prefersextendedrange](https://developer.apple.com/documentation/uikit/uigraphicsimagerendererformat/prefersextendedrange)

# prefersExtendedRange (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 12.0)

A Boolean value that specifies whether the bitmap context uses extended color.

> Use [preferredRange](preferredrange.md) instead.

## Declaration

```swift
var prefersExtendedRange: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the underlying Core Graphics context is configured to support wide color; if [false](https://developer.apple.com/documentation/swift/false), the context is not.

The default is [true](https://developer.apple.com/documentation/swift/true) on devices that natively support wide color, and [false](https://developer.apple.com/documentation/swift/false) on those that do not.

## See Also

### Configuring the renderer attributes

- [opaque](opaque.md): A Boolean value that indicates whether the underlying Core Graphics context has an alpha channel.
- [scale](scale.md): The display scale of the image renderer context.
- [preferredRange](preferredrange.md): The preferred color range of the image renderer context.
- [UIGraphicsImageRendererFormat.Range](range.md): Constants that specify the color range of the image renderer context.

# prefersExtendedRange (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ (deprecated in 12.0) · iPadOS 10.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 12.0)

A Boolean value that specifies whether the bitmap context uses extended color.

> Use [preferredRange](preferredrange.md) instead.

## Declaration

```objectivec
@property (nonatomic) BOOL prefersExtendedRange;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the underlying Core Graphics context is configured to support wide color; if [false](https://developer.apple.com/documentation/swift/false), the context is not.

The default is [true](https://developer.apple.com/documentation/swift/true) on devices that natively support wide color, and [false](https://developer.apple.com/documentation/swift/false) on those that do not.

## See Also

### Configuring the renderer attributes

- [opaque](opaque.md): A Boolean value that indicates whether the underlying Core Graphics context has an alpha channel.
- [scale](scale.md): The display scale of the image renderer context.
- [preferredRange](preferredrange.md): The preferred color range of the image renderer context.
- [UIGraphicsImageRendererFormatRange](range.md): Constants that specify the color range of the image renderer context.

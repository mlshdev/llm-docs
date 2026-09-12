> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocomposition/colortransferfunction](https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/colortransferfunction)

# colorTransferFunction (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The transfer function used for video composition.

## Declaration

```swift
var colorTransferFunction: String? { get set }
```

## Mentioned In

- [Tagging media with video color information](../tagging-media-with-video-color-information.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`. When the value of this property is `nil`, the source’s transfer function is propagated and used. Valid values are those suitable for [AVVideoTransferFunctionKey](../avvideotransferfunctionkey.md).

## See Also

### Configuring color

- [colorPrimaries](colorprimaries.md): The color primaries used for video composition.
- [colorYCbCrMatrix](colorycbcrmatrix.md): The YCbCr matrix used for video composition.

# colorTransferFunction (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The transfer function used for video composition.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * colorTransferFunction;
```

## Mentioned In

- [Tagging media with video color information](../tagging-media-with-video-color-information.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`. When the value of this property is `nil`, the source’s transfer function is propagated and used. Valid values are those suitable for [AVVideoTransferFunctionKey](../avvideotransferfunctionkey.md).

## See Also

### Configuring color

- [colorPrimaries](colorprimaries.md): The color primaries used for video composition.
- [colorYCbCrMatrix](colorycbcrmatrix.md): The YCbCr matrix used for video composition.

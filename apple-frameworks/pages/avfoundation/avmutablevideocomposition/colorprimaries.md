> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocomposition/colorprimaries](https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/colorprimaries)

# colorPrimaries (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The color primaries used for video composition.

## Declaration

```swift
var colorPrimaries: String? { get set }
```

## Mentioned In

- [Tagging media with video color information](../tagging-media-with-video-color-information.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`. When the value of this property is `nil`, the source’s color primaries are propagated and used. Valid values are those suitable for [AVVideoColorPrimariesKey](../avvideocolorprimarieskey.md).

## See Also

### Configuring color

- [colorTransferFunction](colortransferfunction.md): The transfer function used for video composition.
- [colorYCbCrMatrix](colorycbcrmatrix.md): The YCbCr matrix used for video composition.

# colorPrimaries (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

The color primaries used for video composition.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * colorPrimaries;
```

## Mentioned In

- [Tagging media with video color information](../tagging-media-with-video-color-information.md)

<a id="Discussion"></a>

## Discussion

The default value is `nil`. When the value of this property is `nil`, the source’s color primaries are propagated and used. Valid values are those suitable for [AVVideoColorPrimariesKey](../avvideocolorprimarieskey.md).

## See Also

### Configuring color

- [colorTransferFunction](colortransferfunction.md): The transfer function used for video composition.
- [colorYCbCrMatrix](colorycbcrmatrix.md): The YCbCr matrix used for video composition.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferattributes/pixelformattypes](https://developer.apple.com/documentation/corevideo/cvpixelbufferattributes/pixelformattypes)

# pixelFormatTypes

**Framework:** Core Video  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Allow multiple pixel formats to be specified in attributes

## Declaration

```swift
var pixelFormatTypes: [CVPixelFormatType]? { get set }
```

<a id="discussion"></a>

## Discussion

Setting this property will override the single format value set by [pixelFormatType](../cvpixelbuffercreationattributes/pixelformattype.md) and vice-versa. When accessing [pixelFormatType](../cvpixelbuffercreationattributes/pixelformattype.md), only the first value is used if multiple format values are set. Do not set this value to an empty array.

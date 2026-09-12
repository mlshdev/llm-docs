> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/imagedescriptor/pixelformattype](https://developer.apple.com/documentation/coreai/imagedescriptor/pixelformattype)

# pixelFormatType

**Framework:** Core AI  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The four-character code that identifies the pixel format.

## Declaration

```swift
let pixelFormatType: OSType
```

## Mentioned In

- [Integrating on-device AI models in your app with Core AI](../integrating-on-device-ai-models-in-your-app-with-core-ai.md)

<a id="discussion"></a>

## Discussion

Compare this value to the `pixelFormatType` of a `CVPixelBuffer`.

## See Also

### Inspecting image properties

- [width](width.md): The width of the image, in pixels.
- [height](height.md): The height of the image, in pixels.

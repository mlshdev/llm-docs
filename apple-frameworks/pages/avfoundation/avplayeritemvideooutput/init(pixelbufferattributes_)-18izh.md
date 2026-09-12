> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemvideooutput/init(pixelbufferattributes:)-18izh](https://developer.apple.com/documentation/avfoundation/avplayeritemvideooutput/init(pixelbufferattributes:)-18izh)

# init(pixelBufferAttributes:)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Initializes an instance of AVPlayerItemVideoOutput, using the specified pixel buffer attributes, for video image output

## Declaration

```swift
convenience init(pixelBufferAttributes: CVPixelBufferAttributes)
```

<a id="discussion"></a>

## Discussion

- pixelBufferAttributes: The client requirements for output pixel buffers

## See Also

### Creating a video output

- [init(pixelBufferAttributes:)](init%28pixelbufferattributes_%29-7n7v8.md): Deprecated. Creates a video output object using the specified pixel buffer attributes.
- [init(outputSettings:)](init%28outputsettings_%29.md): Creates a video output object initialized with the specified output settings.

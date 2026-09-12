> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemvideooutput/init(outputsettings:)](https://developer.apple.com/documentation/avfoundation/avplayeritemvideooutput/init(outputsettings:))

# init(outputSettings:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a video output object initialized with the specified output settings.

## Declaration

```swift
init(outputSettings: [String : any Sendable]?)
```

## Parameters

- `outputSettings`: The client requirements for output [CVPixelBuffer](../../corevideo/cvpixelbuffer-q2e.md) objects, expressed using the constants in `AVVideoSettings.h`.

<a id="Discussion"></a>

## Discussion

For uncompressed video output, start with `kCVPixelBuffer*` keys in `<CoreVideo/CVPixelBuffer.h>`. In addition to the keys in `CVPixelBuffer.h`, uncompressed video settings dictionaries may also provide a value for [AVVideoAllowWideColorKey](../avvideoallowwidecolorkey.md).

## See Also

### Creating a video output

- [init(pixelBufferAttributes:)](init%28pixelbufferattributes_%29-7n7v8.md): Deprecated. Creates a video output object using the specified pixel buffer attributes.
- [init(pixelBufferAttributes:)](init%28pixelbufferattributes_%29-18izh.md): Initializes an instance of AVPlayerItemVideoOutput, using the specified pixel buffer attributes, for video image output

# initWithOutputSettings: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Creates a video output object initialized with the specified output settings.

## Declaration

```objectivec
- (instancetype) initWithOutputSettings:(NSDictionary<NSString *,id> *) outputSettings;
```

## Parameters

- `outputSettings`: The client requirements for output [CVPixelBuffer](../../corevideo/cvpixelbuffer-q2e.md) objects, expressed using the constants in `AVVideoSettings.h`.

<a id="Discussion"></a>

## Discussion

For uncompressed video output, start with `kCVPixelBuffer*` keys in `<CoreVideo/CVPixelBuffer.h>`. In addition to the keys in `CVPixelBuffer.h`, uncompressed video settings dictionaries may also provide a value for [AVVideoAllowWideColorKey](../avvideoallowwidecolorkey.md).

## See Also

### Creating a video output

- [initWithPixelBufferAttributes:](init%28pixelbufferattributes_%29-7n7v8.md): Deprecated. Creates a video output object using the specified pixel buffer attributes.

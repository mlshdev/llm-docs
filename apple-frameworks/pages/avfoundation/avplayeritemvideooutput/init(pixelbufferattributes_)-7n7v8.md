> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayeritemvideooutput/init(pixelbufferattributes:)-7n7v8](https://developer.apple.com/documentation/avfoundation/avplayeritemvideooutput/init(pixelbufferattributes:)-7n7v8)

# init(pixelBufferAttributes:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 6.0+ (deprecated in 27.0) · iPadOS 6.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.8+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates a video output object using the specified pixel buffer attributes.

> Use init(pixelBufferAttributes: CVPixelBuffer.Attributes) instead

## Declaration

```swift
init(pixelBufferAttributes: [String : any Sendable]? = nil)
```

## Parameters

- `pixelBufferAttributes`: The pixel buffer attributes required for video output. For a list of pixel buffer attributes you can include in this dictionary, see the `CVPixelBuffer.h` header file in the Core Video framework.

<a id="return-value"></a>

## Return Value

An initialized video output object.

## See Also

### Creating a video output

- [init(pixelBufferAttributes:)](init%28pixelbufferattributes_%29-18izh.md): Initializes an instance of AVPlayerItemVideoOutput, using the specified pixel buffer attributes, for video image output
- [init(outputSettings:)](init%28outputsettings_%29.md): Creates a video output object initialized with the specified output settings.

# initWithPixelBufferAttributes: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Creates a video output object using the specified pixel buffer attributes.

## Declaration

```objectivec
- (instancetype) initWithPixelBufferAttributes:(NSDictionary<NSString *,id> *) pixelBufferAttributes;
```

## Parameters

- `pixelBufferAttributes`: The pixel buffer attributes required for video output. For a list of pixel buffer attributes you can include in this dictionary, see the `CVPixelBuffer.h` header file in the Core Video framework.

<a id="return-value"></a>

## Return Value

An initialized video output object.

## See Also

### Creating a video output

- [initWithOutputSettings:](init%28outputsettings_%29.md): Creates a video output object initialized with the specified output settings.

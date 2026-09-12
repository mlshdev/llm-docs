> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputpixelbufferadaptor/init(assetwriterinput:sourcepixelbufferattributes:)](https://developer.apple.com/documentation/avfoundation/avassetwriterinputpixelbufferadaptor/init(assetwriterinput:sourcepixelbufferattributes:))

# init(assetWriterInput:sourcePixelBufferAttributes:) (Swift)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 4.1+ (deprecated in 27.0) · iPadOS 4.1+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.7+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Creates a new pixel buffer adaptor to receive pixel buffers for writing to the output file.

> Use AVAssetWriter.inputPixelBufferReceiver(for:pixelBufferAttributes:) instead

## Declaration

```swift
init(assetWriterInput input: AVAssetWriterInput, sourcePixelBufferAttributes: [String : Any]? = nil)
```

## Parameters

- `input`: An asset writer input that accepts [video](../avmediatype/video.md) as its media type.

  The system raises an error if you specify an input that’s already connected to a pixel buffer adaptor.
- `sourcePixelBufferAttributes`: A dictionary that describes the attributes of pixel buffers that the input’s pixel buffer pool vends. If your app doesn’t need a pixel buffer pool for allocating buffers, set this value to `nil`.

<a id="Discussion"></a>

## Discussion

To take advantage of the efficiency of appending buffers created from the adaptor’s pixel buffer pool, specify pixel buffer attributes that most closely accommodate the format of the buffers you append.

# initWithAssetWriterInput:sourcePixelBufferAttributes: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Creates a new pixel buffer adaptor to receive pixel buffers for writing to the output file.

## Declaration

```objectivec
- (instancetype) initWithAssetWriterInput:(AVAssetWriterInput *) input sourcePixelBufferAttributes:(NSDictionary<NSString *,id> *) sourcePixelBufferAttributes;
```

## Parameters

- `input`: An asset writer input that accepts [AVMediaTypeVideo](../avmediatype/video.md) as its media type.

  The system raises an error if you specify an input that’s already connected to a pixel buffer adaptor.
- `sourcePixelBufferAttributes`: A dictionary that describes the attributes of pixel buffers that the input’s pixel buffer pool vends. If your app doesn’t need a pixel buffer pool for allocating buffers, set this value to `nil`.

<a id="Discussion"></a>

## Discussion

To take advantage of the efficiency of appending buffers created from the adaptor’s pixel buffer pool, specify pixel buffer attributes that most closely accommodate the format of the buffers you append.

## See Also

### Creating an adaptor

- [assetWriterInputPixelBufferAdaptorWithAssetWriterInput:sourcePixelBufferAttributes:](assetwriterinputpixelbufferadaptorwithassetwriterinput_sourcepixelbufferattributes_.md): Returns a new pixel buffer adaptor that appends pixel buffers to write to the output file.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinputpixelbufferadaptor/assetwriterinputpixelbufferadaptorwithassetwriterinput:sourcepixelbufferattributes:](https://developer.apple.com/documentation/avfoundation/avassetwriterinputpixelbufferadaptor/assetwriterinputpixelbufferadaptorwithassetwriterinput:sourcepixelbufferattributes:)

# assetWriterInputPixelBufferAdaptorWithAssetWriterInput:sourcePixelBufferAttributes:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Type Method  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

Returns a new pixel buffer adaptor that appends pixel buffers to write to the output file.

## Declaration

```objectivec
+ (instancetype) assetWriterInputPixelBufferAdaptorWithAssetWriterInput:(AVAssetWriterInput *) input sourcePixelBufferAttributes:(NSDictionary<NSString *,id> *) sourcePixelBufferAttributes;
```

## Parameters

- `input`: An asset writer input that accepts [AVMediaTypeVideo](../avmediatype/video.md) as its media type.

  The system raises an error if you specify an input that’s already connected to a pixel buffer adaptor.
- `sourcePixelBufferAttributes`: A dictionary that describes the attributes of pixel buffers that the input’s pixel buffer pool vends. If your app doesn’t need a pixel buffer pool for allocating buffers, set this value to `nil`.

<a id="return-value"></a>

## Return Value

A new pixel buffer adaptor to receive pixel buffers for writing to the output file.

<a id="Discussion"></a>

## Discussion

To take advantage of the efficiency of appending buffers created from the adaptor’s pixel buffer pool, specify pixel buffer attributes that most closely accommodate the format of the buffers you append.

## See Also

### Creating an adaptor

- [initWithAssetWriterInput:sourcePixelBufferAttributes:](init%28assetwriterinput_sourcepixelbufferattributes_%29.md): Deprecated. Creates a new pixel buffer adaptor to receive pixel buffers for writing to the output file.

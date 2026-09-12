> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessorextension/makeprocessor(formatdescription:pixelbuffermanager:)](https://developer.apple.com/documentation/mediaextension/merawprocessorextension/makeprocessor(formatdescription:pixelbuffermanager:))

# makeProcessor(formatDescription:pixelBufferManager:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

A factory method to create a video RAW processor.

## Declaration

```swift
func makeProcessor(formatDescription: CMVideoFormatDescription, pixelBufferManager extensionPixelBufferManager: MERAWProcessorPixelBufferManager) throws -> any MERAWProcessor
```

## Parameters

- `formatDescription`: A `CMVideoFormatDescription` describing the video data that was decoded to produce the RAW input for the video RAW processor.
- `extensionPixelBufferManager`: An `MERAWProcessorPixelBufferManager` instance that should be retained by the new `MERAWProcessor` instance and used for output pixelBuffer configuration and allocation.

<a id="Discussion"></a>

## Discussion

Creates a new `MERAWProcessor` matching the given `CMVideoFormatDescriptionRef`.  If these parameters are not compatible with the `MERAWProcessor`, the call should fail, returning `MEErrorUnsupportedFeature`.

# processorWithFormatDescription:extensionPixelBufferManager:error: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

A factory method to create a video RAW processor.

## Declaration

```objectivec
- (id<MERAWProcessor>) processorWithFormatDescription:(CMVideoFormatDescriptionRef) formatDescription extensionPixelBufferManager:(MERAWProcessorPixelBufferManager *) extensionPixelBufferManager error:(NSError **) error;
```

## Parameters

- `formatDescription`: A `CMVideoFormatDescription` describing the video data that was decoded to produce the RAW input for the video RAW processor.
- `extensionPixelBufferManager`: An `MERAWProcessorPixelBufferManager` instance that should be retained by the new `MERAWProcessor` instance and used for output pixelBuffer configuration and allocation.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="Discussion"></a>

## Discussion

Creates a new `MERAWProcessor` matching the given `CMVideoFormatDescriptionRef`.  If these parameters are not compatible with the `MERAWProcessor`, the call should fail, returning `MEErrorUnsupportedFeature`.

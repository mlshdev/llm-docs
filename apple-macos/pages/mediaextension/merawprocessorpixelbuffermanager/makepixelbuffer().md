> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessorpixelbuffermanager/makepixelbuffer()](https://developer.apple.com/documentation/mediaextension/merawprocessorpixelbuffermanager/makepixelbuffer())

# makePixelBuffer() (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Generates a pixel buffer using the session’s pixel buffer pool.

## Declaration

```swift
func makePixelBuffer() throws -> CVPixelBuffer
```

<a id="return-value"></a>

## Return Value

A pixel buffer that’s compatible with the extension’s most recently set pixel buffer attributes.

## See Also

### Creating a pixel buffer

- [pixelBufferAttributes](pixelbufferattributes-4fe69.md): A dictionary that contains the attributes Video Toolbox uses to create a pixel buffer for the video RAW processor.

# createPixelBufferAndReturnError: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Generates a pixel buffer using the session’s pixel buffer pool.

## Declaration

```objectivec
- (CVPixelBufferRef) createPixelBufferAndReturnError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A pixel buffer that’s compatible with the extension’s most recently set pixel buffer attributes. On failure, this method returns `nil`.

## See Also

### Creating a pixel buffer

- [pixelBufferAttributes](pixelbufferattributes-2cki6.md): A dictionary that contains the attributes Video Toolbox uses to create a pixel buffer for the video RAW processor.

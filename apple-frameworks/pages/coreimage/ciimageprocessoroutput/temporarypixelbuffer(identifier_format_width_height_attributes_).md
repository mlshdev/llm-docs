> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessoroutput/temporarypixelbuffer(identifier:format:width:height:attributes:)](https://developer.apple.com/documentation/coreimage/ciimageprocessoroutput/temporarypixelbuffer(identifier:format:width:height:attributes:))

# temporaryPixelBuffer(identifier:format:width:height:attributes:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a temporary CVPixelBuffer that your Core Image Processor Kernel can use as scratch storage during processing.

## Declaration

```swift
func temporaryPixelBuffer(identifier: String, format: OSType, width: Int, height: Int, attributes: [AnyHashable : Any]? = nil) -> CVPixelBuffer?
```

## Parameters

- `identifier`: A name that uniquely identifies this scratch buffer within the processor invocation.
- `format`: The pixel format for the buffer. Must be a non-zero `OSType` pixel format constant.
- `width`: The width of the buffer in pixels. Must be greater than zero.
- `height`: The height of the buffer in pixels. Must be greater than zero.
- `attributes`: An optional dictionary of `CVPixelBuffer` creation attributes.

<a id="return-value"></a>

## Return Value

 A non-retained `CVPixelBuffer` of the requested size and format, or `nil` if the buffer could not be created.

<a id="discussion"></a>

## Discussion

Use this method when your processor needs an intermediate `CVPixelBuffer` to stash data between stages of its work. Core Image manages the lifetime of the returned buffer and reuses the underlying allocation across multiple invocations when possible. This is more efficient than allocating a fresh `CVPixelBuffer` on each invocation of your processor.

The returned pixel buffer is valid only for the duration of the [process(with:arguments:output:)](../ciimageprocessorkernel/process%28with_arguments_output_%29.md) call that requested it. Don’t retain it beyond the scope of that method or use it after the method returns.

Calling this method multiple times within the same processor invocation with the same `identifier`, `format`, `width`, and `height` returns a pixel buffer backed by the same `IOSurface`. Otherwise it returns a distinct pixel buffer. This lets a processor request several independent pixel buffers by giving each one a unique name.

# temporaryPixelBufferWithIdentifier:format:width:height:attributes: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a temporary CVPixelBuffer that your Core Image Processor Kernel can use as scratch storage during processing.

## Declaration

```objectivec
- (CVPixelBufferRef) temporaryPixelBufferWithIdentifier:(NSString *) identifier format:(OSType) format width:(size_t) width height:(size_t) height attributes:(NSDictionary *) attributes;
```

## Parameters

- `identifier`: A name that uniquely identifies this scratch buffer within the processor invocation.
- `format`: The pixel format for the buffer. Must be a non-zero `OSType` pixel format constant.
- `width`: The width of the buffer in pixels. Must be greater than zero.
- `height`: The height of the buffer in pixels. Must be greater than zero.
- `attributes`: An optional dictionary of `CVPixelBuffer` creation attributes.

<a id="return-value"></a>

## Return Value

 A non-retained `CVPixelBuffer` of the requested size and format, or `nil` if the buffer could not be created.

<a id="discussion"></a>

## Discussion

Use this method when your processor needs an intermediate `CVPixelBuffer` to stash data between stages of its work. Core Image manages the lifetime of the returned buffer and reuses the underlying allocation across multiple invocations when possible. This is more efficient than allocating a fresh `CVPixelBuffer` on each invocation of your processor.

The returned pixel buffer is valid only for the duration of the [processWithInputs:arguments:output:error:](../ciimageprocessorkernel/process%28with_arguments_output_%29.md) call that requested it. Don’t retain it beyond the scope of that method or use it after the method returns.

Calling this method multiple times within the same processor invocation with the same `identifier`, `format`, `width`, and `height` returns a pixel buffer backed by the same `IOSurface`. Otherwise it returns a distinct pixel buffer. This lets a processor request several independent pixel buffers by giving each one a unique name.

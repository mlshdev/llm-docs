> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimageprocessoroutput/temporarysurface(identifier:format:width:height:)](https://developer.apple.com/documentation/coreimage/ciimageprocessoroutput/temporarysurface(identifier:format:width:height:))

# temporarySurface(identifier:format:width:height:) (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a temporary IOSurface that your Core Image Processor Kernel can use as scratch storage during processing.

## Declaration

```swift
func temporarySurface(identifier: String, format: OSType, width: Int, height: Int) -> IOSurface?
```

## Parameters

- `identifier`: A name that uniquely identifies this scratch surface within the processor invocation.
- `format`: The pixel format for the surface. Must be a non-zero `OSType` pixel format constant.
- `width`: The width of the surface in pixels. Must be greater than zero.
- `height`: The height of the surface in pixels. Must be greater than zero.

<a id="return-value"></a>

## Return Value

 An autoreleased `IOSurface` of the requested size and format, or `nil` if the surface could not be created.

<a id="discussion"></a>

## Discussion

Use this method when your processor needs an intermediate `IOSurface` to stash data between stages of its work. Core Image manages the lifetime of the returned surface and reuses the underlying allocation across multiple invocations when possible. This is more efficient than allocating a fresh `IOSurface` on each invocation of your processor.

The returned surface is valid only for the duration of the [process(with:arguments:output:)](../ciimageprocessorkernel/process%28with_arguments_output_%29.md) call that requested it. Don’t retain it beyond the scope of that method or use it after the method returns.

Calling this method multiple times within the same processor invocation with the same `identifier`, `format`, `width`, and `height` returns the same surface. Otherwise it returns a distinct surface. This lets a processor request several independent surfaces by giving each one a unique name.

# temporarySurfaceWithIdentifier:format:width:height: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Returns a temporary IOSurface that your Core Image Processor Kernel can use as scratch storage during processing.

## Declaration

```objectivec
- (IOSurface *) temporarySurfaceWithIdentifier:(NSString *) identifier format:(OSType) format width:(size_t) width height:(size_t) height;
```

## Parameters

- `identifier`: A name that uniquely identifies this scratch surface within the processor invocation.
- `format`: The pixel format for the surface. Must be a non-zero `OSType` pixel format constant.
- `width`: The width of the surface in pixels. Must be greater than zero.
- `height`: The height of the surface in pixels. Must be greater than zero.

<a id="return-value"></a>

## Return Value

 An autoreleased `IOSurface` of the requested size and format, or `nil` if the surface could not be created.

<a id="discussion"></a>

## Discussion

Use this method when your processor needs an intermediate `IOSurface` to stash data between stages of its work. Core Image manages the lifetime of the returned surface and reuses the underlying allocation across multiple invocations when possible. This is more efficient than allocating a fresh `IOSurface` on each invocation of your processor.

The returned surface is valid only for the duration of the [processWithInputs:arguments:output:error:](../ciimageprocessorkernel/process%28with_arguments_output_%29.md) call that requested it. Don’t retain it beyond the scope of that method or use it after the method returns.

Calling this method multiple times within the same processor invocation with the same `identifier`, `format`, `width`, and `height` returns the same surface. Otherwise it returns a distinct surface. This lets a processor request several independent surfaces by giving each one a unique name.

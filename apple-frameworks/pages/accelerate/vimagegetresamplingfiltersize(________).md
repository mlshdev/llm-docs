> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagegetresamplingfiltersize(_:_:_:_:)](https://developer.apple.com/documentation/accelerate/vimagegetresamplingfiltersize(_:_:_:_:))

# vImageGetResamplingFilterSize(\_:\_:\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the minimum size, in bytes, for the buffer needed by the new resampling filter function.

## Declaration

```swift
func vImageGetResamplingFilterSize(_ scale: Float, _ kernelFunc: ((UnsafePointer<Float>?, UnsafeMutablePointer<Float>?, UInt, UnsafeMutableRawPointer?) -> Void)!, _ kernelWidth: Float, _ flags: vImage_Flags) -> Int
```

## Parameters

- `scale`: The scale factor that you plan to pass to the function `vImageNewResamplingFilterForFunctionUsingBuffer`.
- `kernelFunc`: The function pointer that you plan to pass to the function `vImageNewResamplingFilterForFunctionUsingBuffer`.
- `kernelWidth`: The kernel width that you plan to pass to the function `vImageNewResamplingFilterForFunctionUsingBuffer`.
- `flags`: The flags that you plan to pass to the function `vImageNewResamplingFilterForFunctionUsingBuffer`.

<a id="return-value"></a>

## Return Value

The minimum size, in bytes, of the buffer.

## See Also

### Resampling filters

- [vImageNewResamplingFilter(\_:\_:)](vimagenewresamplingfilter%28____%29.md): Creates a resampling filter object that corresponds to the default kernel supplied by the vImage framework.
- [vImageNewResamplingFilterForFunctionUsingBuffer(\_:\_:\_:\_:\_:\_:)](vimagenewresamplingfilterforfunctionusingbuffer%28____________%29.md): Creates a resampling filter object that encapsulates a resampling kernel function that you provide.
- [vImageGetResamplingFilterExtent(\_:\_:)](vimagegetresamplingfilterextent%28____%29.md): Returns the maximum sampling radius for a resampling filter.
- [vImageDestroyResamplingFilter(\_:)](vimagedestroyresamplingfilter%28__%29.md): Disposes of a resampling filter object.

# vImageGetResamplingFilterSize (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the minimum size, in bytes, for the buffer needed by the new resampling filter function.

## Declaration

```objectivec
size_t vImageGetResamplingFilterSize(float scale, void (*)(const float *, float *, unsigned long, void *)kernelFunc, float kernelWidth, vImage_Flags flags);
```

## Parameters

- `scale`: The scale factor that you plan to pass to the function `vImageNewResamplingFilterForFunctionUsingBuffer`.
- `kernelFunc`: The function pointer that you plan to pass to the function `vImageNewResamplingFilterForFunctionUsingBuffer`.
- `kernelWidth`: The kernel width that you plan to pass to the function `vImageNewResamplingFilterForFunctionUsingBuffer`.
- `flags`: The flags that you plan to pass to the function `vImageNewResamplingFilterForFunctionUsingBuffer`.

<a id="return-value"></a>

## Return Value

The minimum size, in bytes, of the buffer.

## See Also

### Resampling filters

- [vImageNewResamplingFilter](vimagenewresamplingfilter%28____%29.md): Creates a resampling filter object that corresponds to the default kernel supplied by the vImage framework.
- [vImageNewResamplingFilterForFunctionUsingBuffer](vimagenewresamplingfilterforfunctionusingbuffer%28____________%29.md): Creates a resampling filter object that encapsulates a resampling kernel function that you provide.
- [vImageGetResamplingFilterExtent](vimagegetresamplingfilterextent%28____%29.md): Returns the maximum sampling radius for a resampling filter.
- [vImageDestroyResamplingFilter](vimagedestroyresamplingfilter%28__%29.md): Disposes of a resampling filter object.

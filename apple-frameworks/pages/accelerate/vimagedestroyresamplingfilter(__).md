> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagedestroyresamplingfilter(_:)](https://developer.apple.com/documentation/accelerate/vimagedestroyresamplingfilter(_:))

# vImageDestroyResamplingFilter(\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Disposes of a resampling filter object.

## Declaration

```swift
func vImageDestroyResamplingFilter(_ filter: ResamplingFilter!)
```

## Parameters

- `filter`: The resampling filter object to dispose of.

<a id="Discussion"></a>

## Discussion

This function deallocates the memory associated with a resampling filter object that was created by calling the function [vImageNewResamplingFilter(\_:\_:)](vimagenewresamplingfilter%28____%29.md). Don’t directly deallocate this memory yourself.

Don’t pass this function a resampling filter object created by the function [vImageNewResamplingFilterForFunctionUsingBuffer(\_:\_:\_:\_:\_:\_:)](vimagenewresamplingfilterforfunctionusingbuffer%28____________%29.md). You’re responsible for deallocating the memory associated with resampling filter objects created by that call.

## See Also

### Resampling filters

- [vImageNewResamplingFilter(\_:\_:)](vimagenewresamplingfilter%28____%29.md): Creates a resampling filter object that corresponds to the default kernel supplied by the vImage framework.
- [vImageNewResamplingFilterForFunctionUsingBuffer(\_:\_:\_:\_:\_:\_:)](vimagenewresamplingfilterforfunctionusingbuffer%28____________%29.md): Creates a resampling filter object that encapsulates a resampling kernel function that you provide.
- [vImageGetResamplingFilterExtent(\_:\_:)](vimagegetresamplingfilterextent%28____%29.md): Returns the maximum sampling radius for a resampling filter.
- [vImageGetResamplingFilterSize(\_:\_:\_:\_:)](vimagegetresamplingfiltersize%28________%29.md): Returns the minimum size, in bytes, for the buffer needed by the new resampling filter function.

# vImageDestroyResamplingFilter (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.3+ · tvOS 5.0+ · visionOS 1.0+ · watchOS 1.0+

Disposes of a resampling filter object.

## Declaration

```objectivec
void vImageDestroyResamplingFilter(ResamplingFilter filter);
```

## Parameters

- `filter`: The resampling filter object to dispose of.

<a id="Discussion"></a>

## Discussion

This function deallocates the memory associated with a resampling filter object that was created by calling the function [vImageNewResamplingFilter](vimagenewresamplingfilter%28____%29.md). Don’t directly deallocate this memory yourself.

Don’t pass this function a resampling filter object created by the function [vImageNewResamplingFilterForFunctionUsingBuffer](vimagenewresamplingfilterforfunctionusingbuffer%28____________%29.md). You’re responsible for deallocating the memory associated with resampling filter objects created by that call.

## See Also

### Resampling filters

- [vImageNewResamplingFilter](vimagenewresamplingfilter%28____%29.md): Creates a resampling filter object that corresponds to the default kernel supplied by the vImage framework.
- [vImageNewResamplingFilterForFunctionUsingBuffer](vimagenewresamplingfilterforfunctionusingbuffer%28____________%29.md): Creates a resampling filter object that encapsulates a resampling kernel function that you provide.
- [vImageGetResamplingFilterExtent](vimagegetresamplingfilterextent%28____%29.md): Returns the maximum sampling radius for a resampling filter.
- [vImageGetResamplingFilterSize](vimagegetresamplingfiltersize%28________%29.md): Returns the minimum size, in bytes, for the buffer needed by the new resampling filter function.

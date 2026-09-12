> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimagegetresamplingfilterextent(_:_:)](https://developer.apple.com/documentation/accelerate/vimagegetresamplingfilterextent(_:_:))

# vImageGetResamplingFilterExtent(\_:\_:) (Swift)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the maximum sampling radius for a resampling filter.

## Declaration

```swift
func vImageGetResamplingFilterExtent(_ filter: ResamplingFilter, _ flags: vImage_Flags) -> vImagePixelCount
```

## Parameters

- `filter`: The resampling filter to query.
- `flags`: The flags you intend to pass to the horizontal or vertical shear function.

<a id="return-value"></a>

## Return Value

The maximum sampling radius for the specified resampling filter.

<a id="Discussion"></a>

## Discussion

This function returns the maximum distance from any pixel that the filter will look, either horizontally or vertically, depending on whether a horizontal or vertical shear is used.  It’s analogous to `kernelWidth` in [vImageNewResamplingFilterForFunctionUsingBuffer(\_:\_:\_:\_:\_:\_:)](vimagenewresamplingfilterforfunctionusingbuffer%28____________%29.md), but might be slightly larger to allow for extra slope when dealing with subpixel coordinates during resampling.

## See Also

### Resampling filters

- [vImageNewResamplingFilter(\_:\_:)](vimagenewresamplingfilter%28____%29.md): Creates a resampling filter object that corresponds to the default kernel supplied by the vImage framework.
- [vImageNewResamplingFilterForFunctionUsingBuffer(\_:\_:\_:\_:\_:\_:)](vimagenewresamplingfilterforfunctionusingbuffer%28____________%29.md): Creates a resampling filter object that encapsulates a resampling kernel function that you provide.
- [vImageGetResamplingFilterSize(\_:\_:\_:\_:)](vimagegetresamplingfiltersize%28________%29.md): Returns the minimum size, in bytes, for the buffer needed by the new resampling filter function.
- [vImageDestroyResamplingFilter(\_:)](vimagedestroyresamplingfilter%28__%29.md): Disposes of a resampling filter object.

# vImageGetResamplingFilterExtent (Objective-C)

**Framework:** Accelerate  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 7.0+ · visionOS 1.0+ · watchOS 1.0+

Returns the maximum sampling radius for a resampling filter.

## Declaration

```objectivec
vImagePixelCount vImageGetResamplingFilterExtent(ResamplingFilter filter, vImage_Flags flags);
```

## Parameters

- `filter`: The resampling filter to query.
- `flags`: The flags you intend to pass to the horizontal or vertical shear function.

<a id="return-value"></a>

## Return Value

The maximum sampling radius for the specified resampling filter.

<a id="Discussion"></a>

## Discussion

This function returns the maximum distance from any pixel that the filter will look, either horizontally or vertically, depending on whether a horizontal or vertical shear is used.  It’s analogous to `kernelWidth` in [vImageNewResamplingFilterForFunctionUsingBuffer](vimagenewresamplingfilterforfunctionusingbuffer%28____________%29.md), but might be slightly larger to allow for extra slope when dealing with subpixel coordinates during resampling.

## See Also

### Resampling filters

- [vImageNewResamplingFilter](vimagenewresamplingfilter%28____%29.md): Creates a resampling filter object that corresponds to the default kernel supplied by the vImage framework.
- [vImageNewResamplingFilterForFunctionUsingBuffer](vimagenewresamplingfilterforfunctionusingbuffer%28____________%29.md): Creates a resampling filter object that encapsulates a resampling kernel function that you provide.
- [vImageGetResamplingFilterSize](vimagegetresamplingfiltersize%28________%29.md): Returns the minimum size, in bytes, for the buffer needed by the new resampling filter function.
- [vImageDestroyResamplingFilter](vimagedestroyresamplingfilter%28__%29.md): Disposes of a resampling filter object.

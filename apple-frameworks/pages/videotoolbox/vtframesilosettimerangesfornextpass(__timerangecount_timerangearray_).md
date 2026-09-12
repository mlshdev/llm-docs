> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframesilosettimerangesfornextpass(_:timerangecount:timerangearray:)](https://developer.apple.com/documentation/videotoolbox/vtframesilosettimerangesfornextpass(_:timerangecount:timerangearray:))

# VTFrameSiloSetTimeRangesForNextPass(\_:timeRangeCount:timeRangeArray:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Begins a new pass of samples to be added to a frame silo object.

## Declaration

```swift
func VTFrameSiloSetTimeRangesForNextPass(_ silo: VTFrameSilo, timeRangeCount: CMItemCount, timeRangeArray: UnsafePointer<CMTimeRange>) -> OSStatus
```

## Parameters

- `silo`: The frame silo object.
- `timeRangeCount`: The count of time ranges in `timeRangeArray`.
- `timeRangeArray`: The array of `CMTimeRange` structs.

<a id="return-value"></a>

## Return Value

`kVTFrameSiloInvalidTimeRangeErr` if any time ranges are non-numeric, overlap, or are not in ascending order.

<a id="Discussion"></a>

## Discussion

Previously added sample buffers with decode timestamps within the time ranges are deleted from the frame silo object.

> **Note**

>  It’s not necessary to call this function before adding sample buffers for the first pass.

## See Also

### Configuring Frame Silos

- [VTFrameSiloAddSampleBuffer(\_:sampleBuffer:)](vtframesiloaddsamplebuffer%28__samplebuffer_%29.md): Adds a sample buffer to a frame silo object.
- [VTFrameSiloCallBlockForEachSampleBuffer(\_:in:handler:)](vtframesilocallblockforeachsamplebuffer%28__in_handler_%29.md): Retrieves sample buffers from a frame silo object.
- [VTFrameSiloCallFunctionForEachSampleBuffer(\_:in:refcon:callback:)](vtframesilocallfunctionforeachsamplebuffer%28__in_refcon_callback_%29.md): Retrieves sample buffers from a frame silo object.

# VTFrameSiloSetTimeRangesForNextPass (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Begins a new pass of samples to be added to a frame silo object.

## Declaration

```objectivec
extern OSStatus VTFrameSiloSetTimeRangesForNextPass(VTFrameSiloRef silo, CMItemCount timeRangeCount, const CMTimeRange *timeRangeArray);
```

## Parameters

- `silo`: The frame silo object.
- `timeRangeCount`: The count of time ranges in `timeRangeArray`.
- `timeRangeArray`: The array of `CMTimeRange` structs.

<a id="return-value"></a>

## Return Value

`kVTFrameSiloInvalidTimeRangeErr` if any time ranges are non-numeric, overlap, or are not in ascending order.

<a id="Discussion"></a>

## Discussion

Previously added sample buffers with decode timestamps within the time ranges are deleted from the frame silo object.

> **Note**

>  It’s not necessary to call this function before adding sample buffers for the first pass.

## See Also

### Configuring Frame Silos

- [VTFrameSiloAddSampleBuffer](vtframesiloaddsamplebuffer%28__samplebuffer_%29.md): Adds a sample buffer to a frame silo object.
- [VTFrameSiloCallBlockForEachSampleBuffer](vtframesilocallblockforeachsamplebuffer%28__in_handler_%29.md): Retrieves sample buffers from a frame silo object.
- [VTFrameSiloCallFunctionForEachSampleBuffer](vtframesilocallfunctionforeachsamplebuffer%28__in_refcon_callback_%29.md): Retrieves sample buffers from a frame silo object.

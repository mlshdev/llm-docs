> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframesilocallfunctionforeachsamplebuffer(_:in:refcon:callback:)](https://developer.apple.com/documentation/videotoolbox/vtframesilocallfunctionforeachsamplebuffer(_:in:refcon:callback:))

# VTFrameSiloCallFunctionForEachSampleBuffer(\_:in:refcon:callback:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Retrieves sample buffers from a frame silo object.

## Declaration

```swift
func VTFrameSiloCallFunctionForEachSampleBuffer(_ silo: VTFrameSilo, in timeRange: CMTimeRange, refcon: UnsafeMutableRawPointer?, callback: (UnsafeMutableRawPointer?, CMSampleBuffer) -> OSStatus) -> OSStatus
```

## Parameters

- `silo`: The frame silo object.
- `timeRange`: The decode time range of the sample buffers to retrieve. Pass `kCMTimeRangeInvalid` to retrieve all sample buffers from the `VTFrameSilo.`
- `refcon`: A reference value.
- `callback`: A function to be called, in decode order, with each sample buffer that was added. To abort iteration early, return a nonzero status. The `VTFrameSilo` object may write sample buffers and data to the backing file between addition and retrieval;  do not expect to get identical object pointers back.

<a id="return-value"></a>

## Return Value

`kVTFrameSiloInvalidTimeRangeErr` if any time ranges are non-numeric, overlap, or are not in ascending order. Returns any nonzero status returned by the callback function.

<a id="Discussion"></a>

## Discussion

You call this function to retrieve sample buffers at the end of a multipass compression session.

## See Also

### Configuring Frame Silos

- [VTFrameSiloAddSampleBuffer(\_:sampleBuffer:)](vtframesiloaddsamplebuffer%28__samplebuffer_%29.md): Adds a sample buffer to a frame silo object.
- [VTFrameSiloSetTimeRangesForNextPass(\_:timeRangeCount:timeRangeArray:)](vtframesilosettimerangesfornextpass%28__timerangecount_timerangearray_%29.md): Begins a new pass of samples to be added to a frame silo object.
- [VTFrameSiloCallBlockForEachSampleBuffer(\_:in:handler:)](vtframesilocallblockforeachsamplebuffer%28__in_handler_%29.md): Retrieves sample buffers from a frame silo object.

# VTFrameSiloCallFunctionForEachSampleBuffer (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Retrieves sample buffers from a frame silo object.

## Declaration

```objectivec
extern OSStatus VTFrameSiloCallFunctionForEachSampleBuffer(VTFrameSiloRef silo, CMTimeRange timeRange, void *refcon, int (*)(void *, struct opaqueCMSampleBuffer *)callback);
```

## Parameters

- `silo`: The frame silo object.
- `timeRange`: The decode time range of the sample buffers to retrieve. Pass `kCMTimeRangeInvalid` to retrieve all sample buffers from the `VTFrameSilo.`
- `refcon`: A reference value.
- `callback`: A function to be called, in decode order, with each sample buffer that was added. To abort iteration early, return a nonzero status. The `VTFrameSilo` object may write sample buffers and data to the backing file between addition and retrieval;  do not expect to get identical object pointers back.

<a id="return-value"></a>

## Return Value

`kVTFrameSiloInvalidTimeRangeErr` if any time ranges are non-numeric, overlap, or are not in ascending order. Returns any nonzero status returned by the callback function.

<a id="Discussion"></a>

## Discussion

You call this function to retrieve sample buffers at the end of a multipass compression session.

## See Also

### Configuring Frame Silos

- [VTFrameSiloAddSampleBuffer](vtframesiloaddsamplebuffer%28__samplebuffer_%29.md): Adds a sample buffer to a frame silo object.
- [VTFrameSiloSetTimeRangesForNextPass](vtframesilosettimerangesfornextpass%28__timerangecount_timerangearray_%29.md): Begins a new pass of samples to be added to a frame silo object.
- [VTFrameSiloCallBlockForEachSampleBuffer](vtframesilocallblockforeachsamplebuffer%28__in_handler_%29.md): Retrieves sample buffers from a frame silo object.

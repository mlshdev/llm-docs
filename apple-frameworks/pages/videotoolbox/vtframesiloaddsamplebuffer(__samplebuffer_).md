> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframesiloaddsamplebuffer(_:samplebuffer:)](https://developer.apple.com/documentation/videotoolbox/vtframesiloaddsamplebuffer(_:samplebuffer:))

# VTFrameSiloAddSampleBuffer(\_:sampleBuffer:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Adds a sample buffer to a frame silo object.

## Declaration

```swift
func VTFrameSiloAddSampleBuffer(_ silo: VTFrameSilo, sampleBuffer: CMSampleBuffer) -> OSStatus
```

## Parameters

- `silo`: The frame silo object.
- `sampleBuffer`: The sample buffer to add to the frame silo.

<a id="return-value"></a>

## Return Value

`kVTFrameSiloInvalidTimeRangeErr` if an attempt is made to add a sample buffer with an inappropriate decode timestamp.

<a id="Discussion"></a>

## Discussion

Within each pass, sample buffers must have strictly increasing decode timestamps. Passes after the first pass begin with a call to [VTFrameSiloSetTimeRangesForNextPass(\_:timeRangeCount:timeRangeArray:)](vtframesilosettimerangesfornextpass%28__timerangecount_timerangearray_%29.md).

After a call to [VTFrameSiloSetTimeRangesForNextPass(\_:timeRangeCount:timeRangeArray:)](vtframesilosettimerangesfornextpass%28__timerangecount_timerangearray_%29.md), sample buffer decode timestamps must also be within the stated time ranges. Note that time ranges are considered to contain their start times but not their end times.

## See Also

### Configuring Frame Silos

- [VTFrameSiloSetTimeRangesForNextPass(\_:timeRangeCount:timeRangeArray:)](vtframesilosettimerangesfornextpass%28__timerangecount_timerangearray_%29.md): Begins a new pass of samples to be added to a frame silo object.
- [VTFrameSiloCallBlockForEachSampleBuffer(\_:in:handler:)](vtframesilocallblockforeachsamplebuffer%28__in_handler_%29.md): Retrieves sample buffers from a frame silo object.
- [VTFrameSiloCallFunctionForEachSampleBuffer(\_:in:refcon:callback:)](vtframesilocallfunctionforeachsamplebuffer%28__in_refcon_callback_%29.md): Retrieves sample buffers from a frame silo object.

# VTFrameSiloAddSampleBuffer (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Adds a sample buffer to a frame silo object.

## Declaration

```objectivec
extern OSStatus VTFrameSiloAddSampleBuffer(VTFrameSiloRef silo, CMSampleBufferRef sampleBuffer);
```

## Parameters

- `silo`: The frame silo object.
- `sampleBuffer`: The sample buffer to add to the frame silo.

<a id="return-value"></a>

## Return Value

`kVTFrameSiloInvalidTimeRangeErr` if an attempt is made to add a sample buffer with an inappropriate decode timestamp.

<a id="Discussion"></a>

## Discussion

Within each pass, sample buffers must have strictly increasing decode timestamps. Passes after the first pass begin with a call to [VTFrameSiloSetTimeRangesForNextPass](vtframesilosettimerangesfornextpass%28__timerangecount_timerangearray_%29.md).

After a call to [VTFrameSiloSetTimeRangesForNextPass](vtframesilosettimerangesfornextpass%28__timerangecount_timerangearray_%29.md), sample buffer decode timestamps must also be within the stated time ranges. Note that time ranges are considered to contain their start times but not their end times.

## See Also

### Configuring Frame Silos

- [VTFrameSiloSetTimeRangesForNextPass](vtframesilosettimerangesfornextpass%28__timerangecount_timerangearray_%29.md): Begins a new pass of samples to be added to a frame silo object.
- [VTFrameSiloCallBlockForEachSampleBuffer](vtframesilocallblockforeachsamplebuffer%28__in_handler_%29.md): Retrieves sample buffers from a frame silo object.
- [VTFrameSiloCallFunctionForEachSampleBuffer](vtframesilocallfunctionforeachsamplebuffer%28__in_refcon_callback_%29.md): Retrieves sample buffers from a frame silo object.

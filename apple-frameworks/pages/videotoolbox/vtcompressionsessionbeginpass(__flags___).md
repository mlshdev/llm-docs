> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtcompressionsessionbeginpass(_:flags:_:)](https://developer.apple.com/documentation/videotoolbox/vtcompressionsessionbeginpass(_:flags:_:))

# VTCompressionSessionBeginPass(\_:flags:\_:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Marks the start of a specific compression pass.

## Declaration

```swift
func VTCompressionSessionBeginPass(_ session: VTCompressionSession, flags beginPassFlags: VTCompressionSessionOptionFlags, _ reserved: UnsafeMutablePointer<UInt32>?) -> OSStatus
```

## Parameters

- `session`: A compression session.
- `beginPassFlags`: Pass [beginFinalPass](vtcompressionsessionoptionflags/beginfinalpass.md) to inform the encoder that the pass must be the final pass.
- `reserved`: A reserved value.

<a id="Discussion"></a>

## Discussion

During multipass encoding, this function must be called before [VTCompressionSessionEncodeFrame(\_:imageBuffer:presentationTimeStamp:duration:frameProperties:sourceFrameRefcon:infoFlagsOut:)](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md).

It’s an error to call this function when multipass encoding is not enabled by setting [kVTCompressionPropertyKey_MultiPassStorage](kvtcompressionpropertykey_multipassstorage.md).

## Topics

### Option Flags

- [VTCompressionSessionOptionFlags](vtcompressionsessionoptionflags.md): Flags to pass to a compression session.

## See Also

### Performing Multiple Passes

- [VTCompressionSessionEndPass(\_:furtherPassesRequestedOut:\_:)](vtcompressionsessionendpass%28__furtherpassesrequestedout___%29.md): Marks the end of a compression pass.
- [VTCompressionSessionGetTimeRangesForNextPass(\_:timeRangeCountOut:timeRangeArrayOut:)](vtcompressionsessiongettimerangesfornextpass%28__timerangecountout_timerangearrayout_%29.md): Retrieves the time ranges for the next pass.

# VTCompressionSessionBeginPass (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Marks the start of a specific compression pass.

## Declaration

```objectivec
extern OSStatus VTCompressionSessionBeginPass(VTCompressionSessionRef session, VTCompressionSessionOptionFlags beginPassFlags, uint32_t *reserved);
```

## Parameters

- `session`: A compression session.
- `beginPassFlags`: Pass [kVTCompressionSessionBeginFinalPass](vtcompressionsessionoptionflags/beginfinalpass.md) to inform the encoder that the pass must be the final pass.
- `reserved`: A reserved value.

<a id="Discussion"></a>

## Discussion

During multipass encoding, this function must be called before [VTCompressionSessionEncodeFrame](vtcompressionsessionencodeframe%28__imagebuffer_presentationtimestamp_duration_frameproperties_sourceframerefcon_infoflagsout_%29.md).

It’s an error to call this function when multipass encoding is not enabled by setting [kVTCompressionPropertyKey_MultiPassStorage](kvtcompressionpropertykey_multipassstorage.md).

## Topics

### Option Flags

- [VTCompressionSessionOptionFlags](vtcompressionsessionoptionflags.md): Flags to pass to a compression session.

## See Also

### Performing Multiple Passes

- [VTCompressionSessionEndPass](vtcompressionsessionendpass%28__furtherpassesrequestedout___%29.md): Marks the end of a compression pass.
- [VTCompressionSessionGetTimeRangesForNextPass](vtcompressionsessiongettimerangesfornextpass%28__timerangecountout_timerangearrayout_%29.md): Retrieves the time ranges for the next pass.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtcompressionsessiongettimerangesfornextpass(_:timerangecountout:timerangearrayout:)](https://developer.apple.com/documentation/videotoolbox/vtcompressionsessiongettimerangesfornextpass(_:timerangecountout:timerangearrayout:))

# VTCompressionSessionGetTimeRangesForNextPass(\_:timeRangeCountOut:timeRangeArrayOut:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Retrieves the time ranges for the next pass.

## Declaration

```swift
func VTCompressionSessionGetTimeRangesForNextPass(_ session: VTCompressionSession, timeRangeCountOut: UnsafeMutablePointer<CMItemCount>, timeRangeArrayOut: UnsafeMutablePointer<UnsafePointer<CMTimeRange>?>) -> OSStatus
```

## Parameters

- `session`: The compression session.
- `timeRangeCountOut`: A pointer to the item count ([CMItemCount](../coremedia/cmitemcount.md)) to receive the number of `CMTimeRanges`.
- `timeRangeArrayOut`: A pointer to a C array of `CMTimeRanges`. The storage for this array belongs to the compression session and should not be modified.The pointer is valid until the next call to [VTCompressionSessionEndPass(\_:furtherPassesRequestedOut:\_:)](vtcompressionsessionendpass%28__furtherpassesrequestedout___%29.md), or until the compression session is invalidated or finalized.

<a id="Discussion"></a>

## Discussion

If [VTCompressionSessionEndPass(\_:furtherPassesRequestedOut:\_:)](vtcompressionsessionendpass%28__furtherpassesrequestedout___%29.md) sets `furtherPassesRequestedOut` to [true](https://developer.apple.com/documentation/swift/true), call this function to find out the time ranges for the next pass.  Source frames outside these time ranges should be skipped. Each time range includes any frame at its start time and does not include any frame at its end time.

It’s an error to call this function when multipass encoding has not been enabled by setting [kVTCompressionPropertyKey_MultiPassStorage](kvtcompressionpropertykey_multipassstorage.md), or when `VTCompressionSessionEndPass` did not set f`urtherPassesRequestedOut` to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Performing Multiple Passes

- [VTCompressionSessionBeginPass(\_:flags:\_:)](vtcompressionsessionbeginpass%28__flags___%29.md): Marks the start of a specific compression pass.
- [VTCompressionSessionEndPass(\_:furtherPassesRequestedOut:\_:)](vtcompressionsessionendpass%28__furtherpassesrequestedout___%29.md): Marks the end of a compression pass.

# VTCompressionSessionGetTimeRangesForNextPass (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Retrieves the time ranges for the next pass.

## Declaration

```objectivec
extern OSStatus VTCompressionSessionGetTimeRangesForNextPass(VTCompressionSessionRef session, CMItemCount *timeRangeCountOut, const CMTimeRange **timeRangeArrayOut);
```

## Parameters

- `session`: The compression session.
- `timeRangeCountOut`: A pointer to the item count ([CMItemCount](../coremedia/cmitemcount.md)) to receive the number of `CMTimeRanges`.
- `timeRangeArrayOut`: A pointer to a C array of `CMTimeRanges`. The storage for this array belongs to the compression session and should not be modified.The pointer is valid until the next call to [VTCompressionSessionEndPass](vtcompressionsessionendpass%28__furtherpassesrequestedout___%29.md), or until the compression session is invalidated or finalized.

<a id="Discussion"></a>

## Discussion

If [VTCompressionSessionEndPass](vtcompressionsessionendpass%28__furtherpassesrequestedout___%29.md) sets `furtherPassesRequestedOut` to [true](https://developer.apple.com/documentation/swift/true), call this function to find out the time ranges for the next pass.  Source frames outside these time ranges should be skipped. Each time range includes any frame at its start time and does not include any frame at its end time.

It’s an error to call this function when multipass encoding has not been enabled by setting [kVTCompressionPropertyKey_MultiPassStorage](kvtcompressionpropertykey_multipassstorage.md), or when `VTCompressionSessionEndPass` did not set f`urtherPassesRequestedOut` to [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Performing Multiple Passes

- [VTCompressionSessionBeginPass](vtcompressionsessionbeginpass%28__flags___%29.md): Marks the start of a specific compression pass.
- [VTCompressionSessionEndPass](vtcompressionsessionendpass%28__furtherpassesrequestedout___%29.md): Marks the end of a compression pass.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtcompressionsessionendpass(_:furtherpassesrequestedout:_:)](https://developer.apple.com/documentation/videotoolbox/vtcompressionsessionendpass(_:furtherpassesrequestedout:_:))

# VTCompressionSessionEndPass(\_:furtherPassesRequestedOut:\_:) (Swift)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Marks the end of a compression pass.

## Declaration

```swift
func VTCompressionSessionEndPass(_ session: VTCompressionSession, furtherPassesRequestedOut: UnsafeMutablePointer<DarwinBoolean>?, _ reserved: UnsafeMutablePointer<UInt32>?) -> OSStatus
```

## Parameters

- `session`: The compression session.
- `furtherPassesRequestedOut`: A pointer to a Boolean that is set to [true](https://developer.apple.com/documentation/swift/true) if the video encoder requests to perform another pass, [false](https://developer.apple.com/documentation/swift/false) otherwise. You may pass `NULL` to indicate that the client is certain to use this as the final pass, in which case the video encoder can skip that evaluation step.
- `reserved`: Reserved for future use and not currently used. Pass `NULL` for this argument.

<a id="Discussion"></a>

## Discussion

This function can take a long time, because the video encoder may perform significant processing between passes. You indicate with the `furtherPassesRequestedOut` argument whether the video encoder is requesting another pass.  There is no particular limit on the number of passes the video encoder may request, but the client is free to disregard this request and use the last-emitted set of frames.

It’s an error to call this function when multi-pass encoding has not been enabled by setting [kVTCompressionPropertyKey_MultiPassStorage](kvtcompressionpropertykey_multipassstorage.md).

## See Also

### Performing Multiple Passes

- [VTCompressionSessionBeginPass(\_:flags:\_:)](vtcompressionsessionbeginpass%28__flags___%29.md): Marks the start of a specific compression pass.
- [VTCompressionSessionGetTimeRangesForNextPass(\_:timeRangeCountOut:timeRangeArrayOut:)](vtcompressionsessiongettimerangesfornextpass%28__timerangecountout_timerangearrayout_%29.md): Retrieves the time ranges for the next pass.

# VTCompressionSessionEndPass (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 10.2+ · visionOS 1.0+

Marks the end of a compression pass.

## Declaration

```objectivec
extern OSStatus VTCompressionSessionEndPass(VTCompressionSessionRef session, Boolean *furtherPassesRequestedOut, uint32_t *reserved);
```

## Parameters

- `session`: The compression session.
- `furtherPassesRequestedOut`: A pointer to a Boolean that is set to [true](https://developer.apple.com/documentation/swift/true) if the video encoder requests to perform another pass, [false](https://developer.apple.com/documentation/swift/false) otherwise. You may pass `NULL` to indicate that the client is certain to use this as the final pass, in which case the video encoder can skip that evaluation step.
- `reserved`: Reserved for future use and not currently used. Pass `NULL` for this argument.

<a id="Discussion"></a>

## Discussion

This function can take a long time, because the video encoder may perform significant processing between passes. You indicate with the `furtherPassesRequestedOut` argument whether the video encoder is requesting another pass.  There is no particular limit on the number of passes the video encoder may request, but the client is free to disregard this request and use the last-emitted set of frames.

It’s an error to call this function when multi-pass encoding has not been enabled by setting [kVTCompressionPropertyKey_MultiPassStorage](kvtcompressionpropertykey_multipassstorage.md).

## See Also

### Performing Multiple Passes

- [VTCompressionSessionBeginPass](vtcompressionsessionbeginpass%28__flags___%29.md): Marks the start of a specific compression pass.
- [VTCompressionSessionGetTimeRangesForNextPass](vtcompressionsessiongettimerangesfornextpass%28__timerangecountout_timerangearrayout_%29.md): Retrieves the time ranges for the next pass.

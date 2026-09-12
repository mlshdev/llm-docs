> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffercreatecopywithnewtiming(allocator:samplebuffer:sampletimingentrycount:sampletimingarray:samplebufferout:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffercreatecopywithnewtiming(allocator:samplebuffer:sampletimingentrycount:sampletimingarray:samplebufferout:))

# CMSampleBufferCreateCopyWithNewTiming(allocator:sampleBuffer:sampleTimingEntryCount:sampleTimingArray:sampleBufferOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a copy of a sample buffer with new timing information.

## Declaration

```swift
func CMSampleBufferCreateCopyWithNewTiming(allocator: CFAllocator?, sampleBuffer originalSBuf: CMSampleBuffer, sampleTimingEntryCount numSampleTimingEntries: CMItemCount, sampleTimingArray: UnsafePointer<CMSampleTimingInfo>?, sampleBufferOut: UnsafeMutablePointer<CMSampleBuffer?>) -> OSStatus
```

## Parameters

- `allocator`: The allocator to use for allocating the `CMSampleBuffer` object. Pass `kCFAllocatorDefault` to use the default allocator.
- `originalSBuf`: `CMSampleBuffer` containing the original samples.
- `numSampleTimingEntries`: Number of entries in `sampleTimingArray`. Must be 0, 1, or the number of samples in `originalSBuf`.
- `sampleTimingArray`: Array of `CMSampleTimingInfo` structs, one struct per sample. If all samples have the same duration and are in presentation order, you can pass a single `CMSampleTimingInfo` struct with duration set to the duration of one sample, `presentationTimeStamp` set to the presentation time of the numerically earliest sample, and `decodeTimeStamp` set to `kCMTimeInvalid`. Behavior is undefined if samples in a `CMSampleBuffer` (or even in multiple buffers in the same stream) have the same `presentationTimeStamp`. Can be `NULL`.
- `sampleBufferOut`: On output, points to the newly created copy of `CMSampleBuffer`.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

This emulates `CMSampleBufferCreateCopy`, but changes the timing. The array parameters, `sampleTimingArray`, should have only one element if that same element applies to all samples.

All parameters are copied; on return, the caller can release them, free them, or reuse them. Any `outputPresentationTimestamp` that has been set on the original buffer isn’t copied because it’s no longer relevant. On return, the caller owns the returned `CMSampleBuffer`, and must release it when done with it.

## See Also

### Copying Sample Buffers

- [CMSampleBufferCreateCopy(allocator:sampleBuffer:sampleBufferOut:)](cmsamplebuffercreatecopy%28allocator_samplebuffer_samplebufferout_%29.md): Creates a copy of a sample buffer.
- [CMSampleBufferCopySampleBufferForRange(allocator:sampleBuffer:sampleRange:sampleBufferOut:)](cmsamplebuffercopysamplebufferforrange%28allocator_samplebuffer_samplerange_samplebufferout_%29.md): Creates a sample buffer that contains a range of samples from an existing sample buffer.

# CMSampleBufferCreateCopyWithNewTiming (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a copy of a sample buffer with new timing information.

## Declaration

```objectivec
extern OSStatus CMSampleBufferCreateCopyWithNewTiming(CFAllocatorRef allocator, CMSampleBufferRef originalSBuf, CMItemCount numSampleTimingEntries, const CMSampleTimingInfo *sampleTimingArray, CMSampleBufferRef*sampleBufferOut);
```

## Parameters

- `allocator`: The allocator to use for allocating the `CMSampleBuffer` object. Pass `kCFAllocatorDefault` to use the default allocator.
- `originalSBuf`: `CMSampleBuffer` containing the original samples.
- `numSampleTimingEntries`: Number of entries in `sampleTimingArray`. Must be 0, 1, or the number of samples in `originalSBuf`.
- `sampleTimingArray`: Array of `CMSampleTimingInfo` structs, one struct per sample. If all samples have the same duration and are in presentation order, you can pass a single `CMSampleTimingInfo` struct with duration set to the duration of one sample, `presentationTimeStamp` set to the presentation time of the numerically earliest sample, and `decodeTimeStamp` set to `kCMTimeInvalid`. Behavior is undefined if samples in a `CMSampleBuffer` (or even in multiple buffers in the same stream) have the same `presentationTimeStamp`. Can be `NULL`.
- `sampleBufferOut`: On output, points to the newly created copy of `CMSampleBuffer`.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

This emulates `CMSampleBufferCreateCopy`, but changes the timing. The array parameters, `sampleTimingArray`, should have only one element if that same element applies to all samples.

All parameters are copied; on return, the caller can release them, free them, or reuse them. Any `outputPresentationTimestamp` that has been set on the original buffer isn’t copied because it’s no longer relevant. On return, the caller owns the returned `CMSampleBuffer`, and must release it when done with it.

## See Also

### Copying Sample Buffers

- [CMSampleBufferCreateCopy](cmsamplebuffercreatecopy%28allocator_samplebuffer_samplebufferout_%29.md): Creates a copy of a sample buffer.
- [CMSampleBufferCopySampleBufferForRange](cmsamplebuffercopysamplebufferforrange%28allocator_samplebuffer_samplerange_samplebufferout_%29.md): Creates a sample buffer that contains a range of samples from an existing sample buffer.

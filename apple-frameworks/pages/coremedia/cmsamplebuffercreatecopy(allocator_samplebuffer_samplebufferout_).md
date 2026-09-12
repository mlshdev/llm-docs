> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffercreatecopy(allocator:samplebuffer:samplebufferout:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffercreatecopy(allocator:samplebuffer:samplebufferout:))

# CMSampleBufferCreateCopy(allocator:sampleBuffer:sampleBufferOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a copy of a sample buffer.

## Declaration

```swift
func CMSampleBufferCreateCopy(allocator: CFAllocator?, sampleBuffer sbuf: CMSampleBuffer, sampleBufferOut: UnsafeMutablePointer<CMSampleBuffer?>) -> OSStatus
```

## Parameters

- `allocator`: The allocator to use for allocating the `CMSampleBuffer` object. Pass `kCFAllocatorDefault` to use the default allocator.
- `sbuf`: `CMSampleBuffer` being copied.
- `sampleBufferOut`: On output, points to the newly created copy of `CMSampleBuffer`.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

The copy is shallow: scalar properties (sizes and timing) are copied directly, the data buffer and format description are retained, and the attachments that can be propagated are retained by the copy’s dictionary. If `sbuf’s` data isn’t ready, the copy will be set to track its readiness.

## See Also

### Copying Sample Buffers

- [CMSampleBufferCreateCopyWithNewTiming(allocator:sampleBuffer:sampleTimingEntryCount:sampleTimingArray:sampleBufferOut:)](cmsamplebuffercreatecopywithnewtiming%28allocator_samplebuffer_sampletimingentrycount_sampletimingarray_samplebufferout_%29.md): Creates a copy of a sample buffer with new timing information.
- [CMSampleBufferCopySampleBufferForRange(allocator:sampleBuffer:sampleRange:sampleBufferOut:)](cmsamplebuffercopysamplebufferforrange%28allocator_samplebuffer_samplerange_samplebufferout_%29.md): Creates a sample buffer that contains a range of samples from an existing sample buffer.

# CMSampleBufferCreateCopy (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a copy of a sample buffer.

## Declaration

```objectivec
extern OSStatus CMSampleBufferCreateCopy(CFAllocatorRef allocator, CMSampleBufferRef sbuf, CMSampleBufferRef*sampleBufferOut);
```

## Parameters

- `allocator`: The allocator to use for allocating the `CMSampleBuffer` object. Pass `kCFAllocatorDefault` to use the default allocator.
- `sbuf`: `CMSampleBuffer` being copied.
- `sampleBufferOut`: On output, points to the newly created copy of `CMSampleBuffer`.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

The copy is shallow: scalar properties (sizes and timing) are copied directly, the data buffer and format description are retained, and the attachments that can be propagated are retained by the copy’s dictionary. If `sbuf’s` data isn’t ready, the copy will be set to track its readiness.

## See Also

### Copying Sample Buffers

- [CMSampleBufferCreateCopyWithNewTiming](cmsamplebuffercreatecopywithnewtiming%28allocator_samplebuffer_sampletimingentrycount_sampletimingarray_samplebufferout_%29.md): Creates a copy of a sample buffer with new timing information.
- [CMSampleBufferCopySampleBufferForRange](cmsamplebuffercopysamplebufferforrange%28allocator_samplebuffer_samplerange_samplebufferout_%29.md): Creates a sample buffer that contains a range of samples from an existing sample buffer.

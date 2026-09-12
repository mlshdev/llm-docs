> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffercopysamplebufferforrange(allocator:samplebuffer:samplerange:samplebufferout:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffercopysamplebufferforrange(allocator:samplebuffer:samplerange:samplebufferout:))

# CMSampleBufferCopySampleBufferForRange(allocator:sampleBuffer:sampleRange:sampleBufferOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a sample buffer that contains a range of samples from an existing sample buffer.

## Declaration

```swift
func CMSampleBufferCopySampleBufferForRange(allocator: CFAllocator?, sampleBuffer sbuf: CMSampleBuffer, sampleRange: CFRange, sampleBufferOut: UnsafeMutablePointer<CMSampleBuffer?>) -> OSStatus
```

## Parameters

- `allocator`: The allocator to use for allocating the `CMSampleBuffer` object. Pass `kCFAllocatorDefault` to use the default allocator.
- `sbuf`: The sample buffer containing the original samples.
- `sampleRange`: The range of samples to copy from `sbuf`, where sample 0 is the first sample in the `sbuf`.\`\`
- `sampleBufferOut`: On output, points to the newly created `CMSampleBuffer`.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

> **Note**

>  Samples containing non-interleaved audio aren’t supported.

## See Also

### Copying Sample Buffers

- [CMSampleBufferCreateCopy(allocator:sampleBuffer:sampleBufferOut:)](cmsamplebuffercreatecopy%28allocator_samplebuffer_samplebufferout_%29.md): Creates a copy of a sample buffer.
- [CMSampleBufferCreateCopyWithNewTiming(allocator:sampleBuffer:sampleTimingEntryCount:sampleTimingArray:sampleBufferOut:)](cmsamplebuffercreatecopywithnewtiming%28allocator_samplebuffer_sampletimingentrycount_sampletimingarray_samplebufferout_%29.md): Creates a copy of a sample buffer with new timing information.

# CMSampleBufferCopySampleBufferForRange (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a sample buffer that contains a range of samples from an existing sample buffer.

## Declaration

```objectivec
extern OSStatus CMSampleBufferCopySampleBufferForRange(CFAllocatorRef allocator, CMSampleBufferRef sbuf, CFRange sampleRange, CMSampleBufferRef*sampleBufferOut);
```

## Parameters

- `allocator`: The allocator to use for allocating the `CMSampleBuffer` object. Pass `kCFAllocatorDefault` to use the default allocator.
- `sbuf`: The sample buffer containing the original samples.
- `sampleRange`: The range of samples to copy from `sbuf`, where sample 0 is the first sample in the `sbuf`.\`\`
- `sampleBufferOut`: On output, points to the newly created `CMSampleBuffer`.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

> **Note**

>  Samples containing non-interleaved audio aren’t supported.

## See Also

### Copying Sample Buffers

- [CMSampleBufferCreateCopy](cmsamplebuffercreatecopy%28allocator_samplebuffer_samplebufferout_%29.md): Creates a copy of a sample buffer.
- [CMSampleBufferCreateCopyWithNewTiming](cmsamplebuffercreatecopywithnewtiming%28allocator_samplebuffer_sampletimingentrycount_sampletimingarray_samplebufferout_%29.md): Creates a copy of a sample buffer with new timing information.

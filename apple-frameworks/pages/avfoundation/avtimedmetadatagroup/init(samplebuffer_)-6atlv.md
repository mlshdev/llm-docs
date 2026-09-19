> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avtimedmetadatagroup/init(samplebuffer:)-6atlv

# init(sampleBuffer:)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a timed metadata group with a sample buffer.

## Declaration

```swift
convenience init?(sampleBuffer: CMReadySampleBuffer<CMSampleBuffer.DynamicContent>)
```

## Parameters

- `sampleBuffer`: A [CMReadySampleBuffer](../../coremedia/cmreadysamplebuffer.md) with media type [kCMMediaType_Metadata](../../coremedia/kcmmediatype_metadata.md).

<a id="return-value"></a>

## Return Value

An instance of `AVTimedMetadataGroup`.

## See Also

### Creating a timed metadata group

- [init(items:timeRange:)](init%28items_timerange_%29.md): Creates a timed metadata group initialized with the given metadata items.
- [init(sampleBuffer:)](init%28samplebuffer_%29-bjuo.md): Deprecated.

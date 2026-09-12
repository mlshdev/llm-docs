> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffertrackdatareadiness(_:samplebuffertotrack:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffertrackdatareadiness(_:samplebuffertotrack:))

# CMSampleBufferTrackDataReadiness(\_:sampleBufferToTrack:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Associates a sample buffer’s data readiness with that of another sample buffer.

## Declaration

```swift
func CMSampleBufferTrackDataReadiness(_ sbuf: CMSampleBuffer, sampleBufferToTrack: CMSampleBuffer) -> OSStatus
```

## Parameters

- `sbuf`: The sample buffer being modified.
- `sampleBufferToTrack`: The sample buffer being tracked.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

After calling this API, if `CMSampleBufferDataIsReady` is called, it will return `sampleBufferToTrack`’s data readiness. If `CMSampleBufferMakeDataReady` is called, it will make `sampleBufferToTrack` data ready.

Example of use: This allows bursting a multi-sample `CMSampleBuffer` into single-sample `CMSampleBuffers` before the data is ready. The single-sample `CMSampleBuffers` will all track the multi-sample `CMSampleBuffer’s` data readiness.

## See Also

### Determining Readiness

- [CMSampleBufferDataIsReady(\_:)](cmsamplebufferdataisready%28__%29.md): Returns a Boolean value that indicates whether the sample buffer’s data is ready for use.
- [CMSampleBufferSetDataReady(\_:)](cmsamplebuffersetdataready%28__%29.md): Marks a sample buffer’s data as ready for use.
- [CMSampleBufferSetDataFailed(\_:status:)](cmsamplebuffersetdatafailed%28__status_%29.md): Marks the sample buffer’s data as failed to indicate that it won’t become ready.
- [CMSampleBufferHasDataFailed(\_:statusOut:)](cmsamplebufferhasdatafailed%28__statusout_%29.md): Returns a Boolean value that indicates whether the sample buffer’s data loading request failed.
- [CMSampleBufferMakeDataReady(\_:)](cmsamplebuffermakedataready%28__%29.md): Makes the sample buffer’s data ready for use by invoking its callback to load the data.

# CMSampleBufferTrackDataReadiness (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Associates a sample buffer’s data readiness with that of another sample buffer.

## Declaration

```objectivec
extern OSStatus CMSampleBufferTrackDataReadiness(CMSampleBufferRef sbuf, CMSampleBufferRef sampleBufferToTrack);
```

## Parameters

- `sbuf`: The sample buffer being modified.
- `sampleBufferToTrack`: The sample buffer being tracked.

<a id="return-value"></a>

## Return Value

A result code. See [Sample Buffer Error Codes](sample-buffer-errors.md).

<a id="Discussion"></a>

## Discussion

After calling this API, if `CMSampleBufferDataIsReady` is called, it will return `sampleBufferToTrack`’s data readiness. If `CMSampleBufferMakeDataReady` is called, it will make `sampleBufferToTrack` data ready.

Example of use: This allows bursting a multi-sample `CMSampleBuffer` into single-sample `CMSampleBuffers` before the data is ready. The single-sample `CMSampleBuffers` will all track the multi-sample `CMSampleBuffer’s` data readiness.

## See Also

### Determining Readiness

- [CMSampleBufferDataIsReady](cmsamplebufferdataisready%28__%29.md): Returns a Boolean value that indicates whether the sample buffer’s data is ready for use.
- [CMSampleBufferSetDataReady](cmsamplebuffersetdataready%28__%29.md): Marks a sample buffer’s data as ready for use.
- [CMSampleBufferSetDataFailed](cmsamplebuffersetdatafailed%28__status_%29.md): Marks the sample buffer’s data as failed to indicate that it won’t become ready.
- [CMSampleBufferHasDataFailed](cmsamplebufferhasdatafailed%28__statusout_%29.md): Returns a Boolean value that indicates whether the sample buffer’s data loading request failed.
- [CMSampleBufferMakeDataReady](cmsamplebuffermakedataready%28__%29.md): Makes the sample buffer’s data ready for use by invoking its callback to load the data.

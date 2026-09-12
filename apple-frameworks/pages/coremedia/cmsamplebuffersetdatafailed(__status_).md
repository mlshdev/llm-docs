> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebuffersetdatafailed(_:status:)](https://developer.apple.com/documentation/coremedia/cmsamplebuffersetdatafailed(_:status:))

# CMSampleBufferSetDataFailed(\_:status:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Marks the sample buffer’s data as failed to indicate that it won’t become ready.

## Declaration

```swift
func CMSampleBufferSetDataFailed(_ sbuf: CMSampleBuffer, status: OSStatus) -> OSStatus
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being modified.
- `status`: A status describing the failure.

## See Also

### Determining Readiness

- [CMSampleBufferDataIsReady(\_:)](cmsamplebufferdataisready%28__%29.md): Returns a Boolean value that indicates whether the sample buffer’s data is ready for use.
- [CMSampleBufferSetDataReady(\_:)](cmsamplebuffersetdataready%28__%29.md): Marks a sample buffer’s data as ready for use.
- [CMSampleBufferHasDataFailed(\_:statusOut:)](cmsamplebufferhasdatafailed%28__statusout_%29.md): Returns a Boolean value that indicates whether the sample buffer’s data loading request failed.
- [CMSampleBufferMakeDataReady(\_:)](cmsamplebuffermakedataready%28__%29.md): Makes the sample buffer’s data ready for use by invoking its callback to load the data.
- [CMSampleBufferTrackDataReadiness(\_:sampleBufferToTrack:)](cmsamplebuffertrackdatareadiness%28__samplebuffertotrack_%29.md): Associates a sample buffer’s data readiness with that of another sample buffer.

# CMSampleBufferSetDataFailed (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Marks the sample buffer’s data as failed to indicate that it won’t become ready.

## Declaration

```objectivec
extern OSStatus CMSampleBufferSetDataFailed(CMSampleBufferRef sbuf, OSStatus status);
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being modified.
- `status`: A status describing the failure.

## See Also

### Determining Readiness

- [CMSampleBufferDataIsReady](cmsamplebufferdataisready%28__%29.md): Returns a Boolean value that indicates whether the sample buffer’s data is ready for use.
- [CMSampleBufferSetDataReady](cmsamplebuffersetdataready%28__%29.md): Marks a sample buffer’s data as ready for use.
- [CMSampleBufferHasDataFailed](cmsamplebufferhasdatafailed%28__statusout_%29.md): Returns a Boolean value that indicates whether the sample buffer’s data loading request failed.
- [CMSampleBufferMakeDataReady](cmsamplebuffermakedataready%28__%29.md): Makes the sample buffer’s data ready for use by invoking its callback to load the data.
- [CMSampleBufferTrackDataReadiness](cmsamplebuffertrackdatareadiness%28__samplebuffertotrack_%29.md): Associates a sample buffer’s data readiness with that of another sample buffer.

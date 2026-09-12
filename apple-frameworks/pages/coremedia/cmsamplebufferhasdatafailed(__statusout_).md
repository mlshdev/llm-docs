> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebufferhasdatafailed(_:statusout:)](https://developer.apple.com/documentation/coremedia/cmsamplebufferhasdatafailed(_:statusout:))

# CMSampleBufferHasDataFailed(\_:statusOut:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether the sample buffer’s data loading request failed.

## Declaration

```swift
func CMSampleBufferHasDataFailed(_ sbuf: CMSampleBuffer, statusOut: UnsafeMutablePointer<OSStatus>?) -> Bool
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.
- `statusOut`: Points to an `OSStatus` to receive a status code describing the failure. Pass `NULL` if you don’t want this information.

## See Also

### Determining Readiness

- [CMSampleBufferDataIsReady(\_:)](cmsamplebufferdataisready%28__%29.md): Returns a Boolean value that indicates whether the sample buffer’s data is ready for use.
- [CMSampleBufferSetDataReady(\_:)](cmsamplebuffersetdataready%28__%29.md): Marks a sample buffer’s data as ready for use.
- [CMSampleBufferSetDataFailed(\_:status:)](cmsamplebuffersetdatafailed%28__status_%29.md): Marks the sample buffer’s data as failed to indicate that it won’t become ready.
- [CMSampleBufferMakeDataReady(\_:)](cmsamplebuffermakedataready%28__%29.md): Makes the sample buffer’s data ready for use by invoking its callback to load the data.
- [CMSampleBufferTrackDataReadiness(\_:sampleBufferToTrack:)](cmsamplebuffertrackdatareadiness%28__samplebuffertotrack_%29.md): Associates a sample buffer’s data readiness with that of another sample buffer.

# CMSampleBufferHasDataFailed (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether the sample buffer’s data loading request failed.

## Declaration

```objectivec
extern Boolean CMSampleBufferHasDataFailed(CMSampleBufferRef sbuf, OSStatus *statusOut);
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.
- `statusOut`: Points to an `OSStatus` to receive a status code describing the failure. Pass `NULL` if you don’t want this information.

## See Also

### Determining Readiness

- [CMSampleBufferDataIsReady](cmsamplebufferdataisready%28__%29.md): Returns a Boolean value that indicates whether the sample buffer’s data is ready for use.
- [CMSampleBufferSetDataReady](cmsamplebuffersetdataready%28__%29.md): Marks a sample buffer’s data as ready for use.
- [CMSampleBufferSetDataFailed](cmsamplebuffersetdatafailed%28__status_%29.md): Marks the sample buffer’s data as failed to indicate that it won’t become ready.
- [CMSampleBufferMakeDataReady](cmsamplebuffermakedataready%28__%29.md): Makes the sample buffer’s data ready for use by invoking its callback to load the data.
- [CMSampleBufferTrackDataReadiness](cmsamplebuffertrackdatareadiness%28__samplebuffertotrack_%29.md): Associates a sample buffer’s data readiness with that of another sample buffer.

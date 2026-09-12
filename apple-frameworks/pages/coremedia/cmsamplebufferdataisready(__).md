> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmsamplebufferdataisready(_:)](https://developer.apple.com/documentation/coremedia/cmsamplebufferdataisready(_:))

# CMSampleBufferDataIsReady(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether the sample buffer’s data is ready for use.

## Declaration

```swift
func CMSampleBufferDataIsReady(_ sbuf: CMSampleBuffer) -> Bool
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.

<a id="return-value"></a>

## Return Value

A Boolean indicating whether or not the sample buffer’s data is ready.  True is returned for special marker buffers, even though they have no data. False is returned if there is an error.

## See Also

### Determining Readiness

- [CMSampleBufferSetDataReady(\_:)](cmsamplebuffersetdataready%28__%29.md): Marks a sample buffer’s data as ready for use.
- [CMSampleBufferSetDataFailed(\_:status:)](cmsamplebuffersetdatafailed%28__status_%29.md): Marks the sample buffer’s data as failed to indicate that it won’t become ready.
- [CMSampleBufferHasDataFailed(\_:statusOut:)](cmsamplebufferhasdatafailed%28__statusout_%29.md): Returns a Boolean value that indicates whether the sample buffer’s data loading request failed.
- [CMSampleBufferMakeDataReady(\_:)](cmsamplebuffermakedataready%28__%29.md): Makes the sample buffer’s data ready for use by invoking its callback to load the data.
- [CMSampleBufferTrackDataReadiness(\_:sampleBufferToTrack:)](cmsamplebuffertrackdatareadiness%28__samplebuffertotrack_%29.md): Associates a sample buffer’s data readiness with that of another sample buffer.

# CMSampleBufferDataIsReady (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether the sample buffer’s data is ready for use.

## Declaration

```objectivec
extern Boolean CMSampleBufferDataIsReady(CMSampleBufferRef sbuf);
```

## Parameters

- `sbuf`: The `CMSampleBuffer` being interrogated.

<a id="return-value"></a>

## Return Value

A Boolean indicating whether or not the sample buffer’s data is ready.  True is returned for special marker buffers, even though they have no data. False is returned if there is an error.

## See Also

### Determining Readiness

- [CMSampleBufferSetDataReady](cmsamplebuffersetdataready%28__%29.md): Marks a sample buffer’s data as ready for use.
- [CMSampleBufferSetDataFailed](cmsamplebuffersetdatafailed%28__status_%29.md): Marks the sample buffer’s data as failed to indicate that it won’t become ready.
- [CMSampleBufferHasDataFailed](cmsamplebufferhasdatafailed%28__statusout_%29.md): Returns a Boolean value that indicates whether the sample buffer’s data loading request failed.
- [CMSampleBufferMakeDataReady](cmsamplebuffermakedataready%28__%29.md): Makes the sample buffer’s data ready for use by invoking its callback to load the data.
- [CMSampleBufferTrackDataReadiness](cmsamplebuffertrackdatareadiness%28__samplebuffertotrack_%29.md): Associates a sample buffer’s data readiness with that of another sample buffer.

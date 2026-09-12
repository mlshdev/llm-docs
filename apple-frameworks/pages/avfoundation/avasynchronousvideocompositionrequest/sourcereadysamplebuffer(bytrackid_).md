> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasynchronousvideocompositionrequest/sourcereadysamplebuffer(bytrackid:)](https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/sourcereadysamplebuffer(bytrackid:))

# sourceReadySampleBuffer(byTrackID:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Returns the source CMReadySampleBuffer for the given track ID.

## Declaration

```swift
func sourceReadySampleBuffer(byTrackID trackID: CMPersistentTrackID) -> CMReadySampleBuffer<CMSampleBuffer.DynamicContent>?
```

## Parameters

- `trackID`: The track ID for the requested source frame.

<a id="return-value"></a>

## Return Value

The source CMReadySampleBuffer for the given track ID.

## See Also

### Accessing source data

- [attach(\_:to:)](attach%28__to_%29.md): Associates the pixel buffer with the specified spatial configuration.
- [sourceFrame(byTrackID:)](sourceframe%28bytrackid_%29.md): Deprecated. Returns a source pixel buffer for the track that contains the specified identifier.
- [sourceReadOnlyPixelBuffer(byTrackID:)](sourcereadonlypixelbuffer%28bytrackid_%29.md): Returns the source CVReadOnlyPixelBuffer for the given track ID. If the track contains tagged buffers, a pixel buffer from one of the tagged buffers will be returned.
- [sourceSampleBuffer(byTrackID:)](sourcesamplebuffer%28bytrackid_%29.md): Deprecated. Returns a source sample buffer for the track that contains the specified identifier.
- [sourceSampleDataTrackIDs](sourcesampledatatrackids-3yiab.md): The identifiers of tracks that contain source sample data.
- [sourceTaggedDynamicBuffers(byTrackID:)](sourcetaggeddynamicbuffers%28bytrackid_%29.md): Returns the source tagged dynamic buffers for the given track ID. Returns nil if the video track does not contain tagged buffers, or if the track does not contain video. This function should only be called when supportsSourceTaggedBuffers is YES.
- [sourceTimedMetadata(byTrackID:)](sourcetimedmetadata%28bytrackid_%29.md): Returns a source timed metadata group for the track that contains the specified identifier.
- [sourceTrackIDs](sourcetrackids.md): The identifiers of tracks that contain source video.

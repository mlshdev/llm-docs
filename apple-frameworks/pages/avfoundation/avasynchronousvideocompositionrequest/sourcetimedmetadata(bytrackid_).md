> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasynchronousvideocompositionrequest/sourcetimedmetadata(bytrackid:)](https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/sourcetimedmetadata(bytrackid:))

# sourceTimedMetadata(byTrackID:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a source timed metadata group for the track that contains the specified identifier.

## Declaration

```swift
func sourceTimedMetadata(byTrackID trackID: CMPersistentTrackID) -> AVTimedMetadataGroup?
```

## Parameters

- `trackID`: The identifier of the track that contains the timed metadata.

<a id="return-value"></a>

## Return Value

A timed metadata group, or `nil` if not found.

## See Also

### Accessing source data

- [attach(\_:to:)](attach%28__to_%29.md): Associates the pixel buffer with the specified spatial configuration.
- [sourceFrame(byTrackID:)](sourceframe%28bytrackid_%29.md): Deprecated. Returns a source pixel buffer for the track that contains the specified identifier.
- [sourceReadOnlyPixelBuffer(byTrackID:)](sourcereadonlypixelbuffer%28bytrackid_%29.md): Returns the source CVReadOnlyPixelBuffer for the given track ID. If the track contains tagged buffers, a pixel buffer from one of the tagged buffers will be returned.
- [sourceReadySampleBuffer(byTrackID:)](sourcereadysamplebuffer%28bytrackid_%29.md): Returns the source CMReadySampleBuffer for the given track ID.
- [sourceSampleBuffer(byTrackID:)](sourcesamplebuffer%28bytrackid_%29.md): Deprecated. Returns a source sample buffer for the track that contains the specified identifier.
- [sourceSampleDataTrackIDs](sourcesampledatatrackids-3yiab.md): The identifiers of tracks that contain source sample data.
- [sourceTaggedDynamicBuffers(byTrackID:)](sourcetaggeddynamicbuffers%28bytrackid_%29.md): Returns the source tagged dynamic buffers for the given track ID. Returns nil if the video track does not contain tagged buffers, or if the track does not contain video. This function should only be called when supportsSourceTaggedBuffers is YES.
- [sourceTrackIDs](sourcetrackids.md): The identifiers of tracks that contain source video.

# sourceTimedMetadataByTrackID: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a source timed metadata group for the track that contains the specified identifier.

## Declaration

```objectivec
- (AVTimedMetadataGroup *) sourceTimedMetadataByTrackID:(CMPersistentTrackID) trackID;
```

## Parameters

- `trackID`: The identifier of the track that contains the timed metadata.

<a id="return-value"></a>

## Return Value

A timed metadata group, or `nil` if not found.

## See Also

### Accessing source data

- [attachSpatialVideoConfiguration:toPixelBuffer:](attachspatialvideoconfiguration_topixelbuffer_.md): Associates the pixel buffer with the specified spatial configuration.
- [sourceFrameByTrackID:](sourceframe%28bytrackid_%29.md): Deprecated. Returns a source pixel buffer for the track that contains the specified identifier.
- [sourceSampleBufferByTrackID:](sourcesamplebuffer%28bytrackid_%29.md): Deprecated. Returns a source sample buffer for the track that contains the specified identifier.
- [sourceSampleDataTrackIDs](sourcesampledatatrackids-9vxz5.md): The identifiers of tracks that contain source metadata.
- [sourceTaggedBufferGroupByTrackID:](sourcetaggedbuffergroupbytrackid_.md): Returns the source CMTaggedBufferGroupRef for the given track ID.
- [sourceTrackIDs](sourcetrackids.md): The identifiers of tracks that contain source video.

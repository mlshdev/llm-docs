> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasynchronousvideocompositionrequest/sourcetaggedbuffergroupbytrackid:](https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/sourcetaggedbuffergroupbytrackid:)

# sourceTaggedBufferGroupByTrackID:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Returns the source CMTaggedBufferGroupRef for the given track ID.

## Declaration

```objectivec
- (CMTaggedBufferGroupRef) sourceTaggedBufferGroupByTrackID:(CMPersistentTrackID) trackID;
```

## Parameters

- `trackID`: The track ID for the requested source tagged buffer group.

<a id="discussion"></a>

## Discussion

Returns nil if the video track does not contain tagged buffers. Returns nil if the track does not contain video. This function should only be called when supportsSourceTaggedBuffers is YES.

## See Also

### Accessing source data

- [attachSpatialVideoConfiguration:toPixelBuffer:](attachspatialvideoconfiguration_topixelbuffer_.md): Associates the pixel buffer with the specified spatial configuration.
- [sourceFrameByTrackID:](sourceframe%28bytrackid_%29.md): Deprecated. Returns a source pixel buffer for the track that contains the specified identifier.
- [sourceSampleBufferByTrackID:](sourcesamplebuffer%28bytrackid_%29.md): Deprecated. Returns a source sample buffer for the track that contains the specified identifier.
- [sourceSampleDataTrackIDs](sourcesampledatatrackids-9vxz5.md): The identifiers of tracks that contain source metadata.
- [sourceTimedMetadataByTrackID:](sourcetimedmetadata%28bytrackid_%29.md): Returns a source timed metadata group for the track that contains the specified identifier.
- [sourceTrackIDs](sourcetrackids.md): The identifiers of tracks that contain source video.

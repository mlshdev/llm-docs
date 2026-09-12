> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasynchronousvideocompositionrequest/attachspatialvideoconfiguration:topixelbuffer:](https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/attachspatialvideoconfiguration:topixelbuffer:)

# attachSpatialVideoConfiguration:toPixelBuffer:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Associates the pixel buffer with the specified spatial configuration.

## Declaration

```objectivec
- (void) attachSpatialVideoConfiguration:(AVSpatialVideoConfiguration *) spatialVideoConfiguration toPixelBuffer:(CVPixelBufferRef) pixelBuffer;
```

## Parameters

- `spatialVideoConfiguration`: The spatial configuration to associate with the pixel buffer.
- `pixelBuffer`: The pixel buffer to associate with the spatial configuration. NOTE: The spatial configuration must be one of the spatial configurations specified in the `AVVideoComposition/spatialConfigurations` property. An exception will be thrown otherwise. NOTE: All pixel buffers from the custom compositor must be associated with the same spatial configuration. An exception will be thrown otherwise. A spatial configuration with all nil values indicates the video is not spatial. A nil spatial configuration also indicates the video is not spatial. The value can be nil, which indicates the output will not be spatial, but a spatial configuration with all nil values must be in the `AVVideoComposition/spatialConfigurations` property or an exception will be thrown.

## See Also

### Accessing source data

- [sourceFrameByTrackID:](sourceframe%28bytrackid_%29.md): Deprecated. Returns a source pixel buffer for the track that contains the specified identifier.
- [sourceSampleBufferByTrackID:](sourcesamplebuffer%28bytrackid_%29.md): Deprecated. Returns a source sample buffer for the track that contains the specified identifier.
- [sourceSampleDataTrackIDs](sourcesampledatatrackids-9vxz5.md): The identifiers of tracks that contain source metadata.
- [sourceTaggedBufferGroupByTrackID:](sourcetaggedbuffergroupbytrackid_.md): Returns the source CMTaggedBufferGroupRef for the given track ID.
- [sourceTimedMetadataByTrackID:](sourcetimedmetadata%28bytrackid_%29.md): Returns a source timed metadata group for the track that contains the specified identifier.
- [sourceTrackIDs](sourcetrackids.md): The identifiers of tracks that contain source video.

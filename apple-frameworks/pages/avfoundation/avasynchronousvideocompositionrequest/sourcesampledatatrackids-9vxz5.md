> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avasynchronousvideocompositionrequest/sourcesampledatatrackids-9vxz5](https://developer.apple.com/documentation/avfoundation/avasynchronousvideocompositionrequest/sourcesampledatatrackids-9vxz5)

# sourceSampleDataTrackIDs

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The identifiers of tracks that contain source metadata.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSNumber *> * sourceSampleDataTrackIDs;
```

<a id="Discussion"></a>

## Discussion

The track identifiers are of type [kCMMediaType_Metadata](../../coremedia/kcmmediatype_metadata.md).

## See Also

### Accessing source data

- [attachSpatialVideoConfiguration:toPixelBuffer:](attachspatialvideoconfiguration_topixelbuffer_.md): Associates the pixel buffer with the specified spatial configuration.
- [sourceFrameByTrackID:](sourceframe%28bytrackid_%29.md): Deprecated. Returns a source pixel buffer for the track that contains the specified identifier.
- [sourceSampleBufferByTrackID:](sourcesamplebuffer%28bytrackid_%29.md): Deprecated. Returns a source sample buffer for the track that contains the specified identifier.
- [sourceTaggedBufferGroupByTrackID:](sourcetaggedbuffergroupbytrackid_.md): Returns the source CMTaggedBufferGroupRef for the given track ID.
- [sourceTimedMetadataByTrackID:](sourcetimedmetadata%28bytrackid_%29.md): Returns a source timed metadata group for the track that contains the specified identifier.
- [sourceTrackIDs](sourcetrackids.md): The identifiers of tracks that contain source video.

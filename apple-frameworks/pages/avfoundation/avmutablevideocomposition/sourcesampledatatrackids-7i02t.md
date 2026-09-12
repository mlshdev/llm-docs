> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablevideocomposition/sourcesampledatatrackids-7i02t](https://developer.apple.com/documentation/avfoundation/avmutablevideocomposition/sourcesampledatatrackids-7i02t)

# sourceSampleDataTrackIDs

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

The identifiers of source sample data tracks in the composition that the object requires to compose frames.

## Declaration

```swift
@objc(_sourceSampleDataTrackIDs) override dynamic var sourceSampleDataTrackIDs: [CMPersistentTrackID] { get set }
```

## See Also

### Identifying source tracks

- [sourceTrackIDForFrameTiming](sourcetrackidforframetiming.md): Deprecated. An identifier of the source track from which the video composition derives frame timing.

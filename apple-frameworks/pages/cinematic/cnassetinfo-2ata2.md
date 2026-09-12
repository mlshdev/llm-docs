> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnassetinfo-2ata2](https://developer.apple.com/documentation/cinematic/cnassetinfo-2ata2)

# CNAssetInfo

**Framework:** Cinematic  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

An object that provides Cinematic-specific information about an asset, including its tracks.

## Declaration

```swift
class CNAssetInfo
```

## Topics

### Initializers

- [init(asset:)](cnassetinfo-2ata2/init%28asset_%29.md): Creates a Cinematic object from an asset.

### Instance Properties

- [allCinematicTracks](cnassetinfo-2ata2/allcinematictracks.md): An array of the Cinematic asset tracks.
- [asset](cnassetinfo-2ata2/asset.md): The original Cinematic source asset.
- [cinematicCapability](cnassetinfo-2ata2/cinematiccapability.md)
- [cinematicDisparityTrack](cnassetinfo-2ata2/cinematicdisparitytrack.md): The Cinematic disparity track.
- [cinematicMetadataTrack](cnassetinfo-2ata2/cinematicmetadatatrack.md): The Cinematic metadata track used.
- [cinematicVideoTrack](cnassetinfo-2ata2/cinematicvideotrack.md): Track used for Cinematic video.
- [frameTimingTrack](cnassetinfo-2ata2/frametimingtrack.md): The track used for Cinematic frame timing.
- [isPreprocessed](cnassetinfo-2ata2/ispreprocessed.md)
- [naturalSize](cnassetinfo-2ata2/naturalsize.md): The video size if rendered at its natural size.
- [preferredSize](cnassetinfo-2ata2/preferredsize.md): The video size if rendered at its natural size with the preferred transform applied.
- [preferredTransform](cnassetinfo-2ata2/preferredtransform.md): The preferred transform of the rendered image for display purposes.
- [resourceStatus](cnassetinfo-2ata2/resourcestatus.md)
- [sampleDataTrackIDs](cnassetinfo-2ata2/sampledatatrackids.md): The source metadata track IDs required to implement the video composition instruction protocol.
- [timeRange](cnassetinfo-2ata2/timerange.md): The time range over which all Cinematic tracks are valid.
- [videoCompositionTrackIDs](cnassetinfo-2ata2/videocompositiontrackids.md): Source video track IDs required to implement the video composition instruction protocol.
- [videoCompositionTracks](cnassetinfo-2ata2/videocompositiontracks.md): Tracks required to construct the video composition output.

### Instance Methods

- [downloadResources(timeout:subprogress:)](cnassetinfo-2ata2/downloadresources%28timeout_subprogress_%29.md): Downloads the resources required to render cinematic effects for the given asset Resources are device-wide and are cached once downloaded
- [preprocessAsset(configuration:subprogress:)](cnassetinfo-2ata2/preprocessasset%28configuration_subprogress_%29.md): Preprocesses the asset by generating a disparity track, writing the result to the URL specified in `configuration`. Required for assets whose `cinematicCapability` is `.needsPreprocessing`; on success the returned `CNAssetInfo` will be `.renderable`.

### Type Properties

- [defaultResourceDownloadTimeout](cnassetinfo-2ata2/defaultresourcedownloadtimeout.md): Default timeout value for resource download for: `public static func downloadResources(versions: Set<CNCinematicResourceVersion> = [], timeout: TimeInterval = defaultResourceDownloadTimeout, subprogress: consuming Subprogress? = nil) async throws` `public func downloadResources(timeout: TimeInterval = defaultResourceDownloadTimeout, subprogress: consuming Subprogress? = nil) async throws -> CNAssetInfo`

### Type Methods

- [cinematicCapability(for:)](cnassetinfo-2ata2/cinematiccapability%28for_%29.md): Asynchronously checks the cinematic capability of an asset. Returns CNCinematicCapability.none if a cinematic metadata track is not present. CNCinematicCapability.renderable if the cinematic asset can be used without preprocessing CNCinematicCapability.needsPreprocessing If cinematic asset needs preprocessing before it can be used For assets that need preprocessing use `CNAssetInfo.preprocessAsset(configuration:subprogress:)` before using the asset
- [downloadResources(versions:timeout:subprogress:)](cnassetinfo-2ata2/downloadresources%28versions_timeout_subprogress_%29.md): Downloads the resources required to render cinematic effects on assets Resources are device-wide and are cached once downloaded
- [isCinematic(asset:)](cnassetinfo-2ata2/iscinematic%28asset_%29.md): Deprecated. Determines if the asset is Cinematic asynchronously.
- [resourceStatus(for:)](cnassetinfo-2ata2/resourcestatus%28for_%29.md): Check status for a set of resources.

## Relationships

### Inherited By

- [CNCompositionInfo](cncompositioninfo-7eunn.md)

## See Also

### Reading and rendering

- [CNCompositionInfo](cncompositioninfo-7eunn.md): An object that enables you to add the appropriate number of tracks for a Cinematic asset.
- [CNRenderingSession](cnrenderingsession-1hzh8.md): An object representing the context in which rendering occurs.

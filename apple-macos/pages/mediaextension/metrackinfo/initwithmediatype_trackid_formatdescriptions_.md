> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/metrackinfo/initwithmediatype:trackid:formatdescriptions:](https://developer.apple.com/documentation/mediaextension/metrackinfo/initwithmediatype:trackid:formatdescriptions:)

# initWithMediaType:trackID:formatDescriptions:

**Interface language:** Objective-C

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Creates a new track info object with the media type, track ID, and format descriptions that you specify.

## Declaration

```objectivec
- (instancetype) initWithMediaType:(CMMediaType) mediaType trackID:(CMPersistentTrackID) trackID formatDescriptions:(NSArray *) formatDescriptions;
```

## Parameters

- `mediaType`: The media type of the track.
- `trackID`: An integer that identifies the track within the media asset.
- `formatDescriptions`: An array of format descriptions for the track.

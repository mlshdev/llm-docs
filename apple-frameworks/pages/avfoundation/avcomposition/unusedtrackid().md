> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcomposition/unusedtrackid()

# unusedTrackID() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an identifier that no other tracks in the asset use.

## Declaration

```swift
func unusedTrackID() -> CMPersistentTrackID
```

<a id="return-value"></a>

## Return Value

An unused [CMPersistentTrackID](../../coremedia/cmpersistenttrackid.md) value.

## See Also

### Accessing tracks

- [tracks](tracks.md): The tracks that a composition contains.
- [track(withTrackID:)](track%28withtrackid_%29.md): Returns a track that contains the specified identifier.
- [tracks(withMediaType:)](tracks%28withmediatype_%29.md): Returns tracks that contain media of a specified type.
- [tracks(withMediaCharacteristic:)](tracks%28withmediacharacteristic_%29.md): Returns tracks that contain media of a specified characteristic.

# unusedTrackID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an identifier that no other tracks in the asset use.

## Declaration

```objectivec
- (CMPersistentTrackID) unusedTrackID;
```

<a id="return-value"></a>

## Return Value

An unused [CMPersistentTrackID](../../coremedia/cmpersistenttrackid.md) value.

## See Also

### Accessing tracks

- [tracks](tracks.md): The tracks that a composition contains.
- [trackWithTrackID:](track%28withtrackid_%29.md): Returns a track that contains the specified identifier.
- [tracksWithMediaType:](tracks%28withmediatype_%29.md): Returns tracks that contain media of a specified type.
- [tracksWithMediaCharacteristic:](tracks%28withmediacharacteristic_%29.md): Returns tracks that contain media of a specified characteristic.

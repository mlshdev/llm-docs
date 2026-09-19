> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmutablemovie/unusedtrackid()

# unusedTrackID() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

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

- [tracks](tracks.md): The tracks that a movie contains.
- [track(withTrackID:)](track%28withtrackid_%29.md): Retrieves a track in the movie that contains the specified identifier.
- [tracks(withMediaType:)](tracks%28withmediatype_%29.md): Retrieves tracks in the movie that present media of the specified type.
- [tracks(withMediaCharacteristic:)](tracks%28withmediacharacteristic_%29.md): Retrieve tracks in the movie that present media of the specified characteristic.

# unusedTrackID (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+ · watchOS 6.0+

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

- [tracks](tracks.md): The tracks that a movie contains.
- [trackWithTrackID:](track%28withtrackid_%29.md): Retrieves a track in the movie that contains the specified identifier.
- [tracksWithMediaType:](tracks%28withmediatype_%29.md): Retrieves tracks in the movie that present media of the specified type.
- [tracksWithMediaCharacteristic:](tracks%28withmediacharacteristic_%29.md): Retrieve tracks in the movie that present media of the specified characteristic.

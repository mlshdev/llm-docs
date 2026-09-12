> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmutablecomposition/addmutabletrack(withmediatype:preferredtrackid:)](https://developer.apple.com/documentation/avfoundation/avmutablecomposition/addmutabletrack(withmediatype:preferredtrackid:))

# addMutableTrack(withMediaType:preferredTrackID:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds an empty track to a composition.

## Declaration

```swift
func addMutableTrack(withMediaType mediaType: AVMediaType, preferredTrackID: CMPersistentTrackID) -> AVMutableCompositionTrack?
```

## Parameters

- `mediaType`: The media type of the new track.
- `preferredTrackID`: The preferred track ID for the new track. The system generates a unique ID if the value you specify isn’t available. If you don’t need to specify a preferred track ID, pass [kCMPersistentTrackID_Invalid](../../coremedia/kcmpersistenttrackid_invalid.md), and the system generates an appropriate identifier.

<a id="return-value"></a>

## Return Value

A new mutable composition track.

## See Also

### Managing composition tracks

- [mutableTrack(compatibleWith:)](mutabletrack%28compatiblewith_%29.md): Returns a composition track into which you can insert any time range of the specified asset track.
- [removeTrack(\_:)](removetrack%28__%29.md): Removes a specified track from the composition.

# addMutableTrackWithMediaType:preferredTrackID: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds an empty track to a composition.

## Declaration

```objectivec
- (AVMutableCompositionTrack *) addMutableTrackWithMediaType:(AVMediaType) mediaType preferredTrackID:(CMPersistentTrackID) preferredTrackID;
```

## Parameters

- `mediaType`: The media type of the new track.
- `preferredTrackID`: The preferred track ID for the new track. The system generates a unique ID if the value you specify isn’t available. If you don’t need to specify a preferred track ID, pass [kCMPersistentTrackID_Invalid](../../coremedia/kcmpersistenttrackid_invalid.md), and the system generates an appropriate identifier.

<a id="return-value"></a>

## Return Value

A new mutable composition track.

## See Also

### Managing composition tracks

- [mutableTrackCompatibleWithTrack:](mutabletrack%28compatiblewith_%29.md): Returns a composition track into which you can insert any time range of the specified asset track.
- [removeTrack:](removetrack%28__%29.md): Removes a specified track from the composition.

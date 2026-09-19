> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avmutablecomposition/removetrack(_:)

# removeTrack(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a specified track from the composition.

## Declaration

```swift
func removeTrack(_ track: AVCompositionTrack)
```

## Parameters

- `track`: The track to remove.

<a id="Discussion"></a>

## Discussion

When you remove a track, the system sets its composition value to nil.

## See Also

### Managing composition tracks

- [mutableTrack(compatibleWith:)](mutabletrack%28compatiblewith_%29.md): Returns a composition track into which you can insert any time range of the specified asset track.
- [addMutableTrack(withMediaType:preferredTrackID:)](addmutabletrack%28withmediatype_preferredtrackid_%29.md): Adds an empty track to a composition.

# removeTrack: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Removes a specified track from the composition.

## Declaration

```objectivec
- (void) removeTrack:(AVCompositionTrack *) track;
```

## Parameters

- `track`: The track to remove.

<a id="Discussion"></a>

## Discussion

When you remove a track, the system sets its composition value to nil.

## See Also

### Managing composition tracks

- [mutableTrackCompatibleWithTrack:](mutabletrack%28compatiblewith_%29.md): Returns a composition track into which you can insert any time range of the specified asset track.
- [addMutableTrackWithMediaType:preferredTrackID:](addmutabletrack%28withmediatype_preferredtrackid_%29.md): Adds an empty track to a composition.

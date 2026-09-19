> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaplayer/mpmusicplayerplayparametersqueuedescriptor/playparametersqueue

# playParametersQueue (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

An array containing the play parameters returned from querying MusicKit.

## Declaration

```swift
var playParametersQueue: [MPMusicPlayerPlayParameters] { get set }
```

## See Also

### Accessing the play parameters

- [startItemPlayParameters](startitemplayparameters.md): The item identified by the play parameters to play first.
- [MPMusicPlayerPlayParameters](../mpmusicplayerplayparameters.md): The MusicKit parameters that describe items to play.

# playParametersQueue (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

An array containing the play parameters returned from querying MusicKit.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<MPMusicPlayerPlayParameters *> * playParametersQueue;
```

## See Also

### Accessing the play parameters

- [startItemPlayParameters](startitemplayparameters.md): The item identified by the play parameters to play first.
- [MPMusicPlayerPlayParameters](../mpmusicplayerplayparameters.md): The MusicKit parameters that describe items to play.

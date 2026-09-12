> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayerplayparametersqueuedescriptor/init(playparametersqueue:)](https://developer.apple.com/documentation/mediaplayer/mpmusicplayerplayparametersqueuedescriptor/init(playparametersqueue:))

# init(playParametersQueue:) (Swift)

**Framework:** Media Player  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Creates a new queue descriptor using the designated queue of play parameters.

## Declaration

```swift
init(playParametersQueue: [MPMusicPlayerPlayParameters])
```

## Parameters

- `playParametersQueue`: An array of play parameters created from the JSON information returned from a MusicKit query and used to populate the queue descriptor.

<a id="return-value"></a>

## Return Value

A new queue descriptor consisting of the items described by the play parameters.

## See Also

### Creating a new play parameters queue descriptor

- [MPMusicPlayerPlayParameters](../mpmusicplayerplayparameters.md): The MusicKit parameters that describe items to play.

# initWithPlayParametersQueue: (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Creates a new queue descriptor using the designated queue of play parameters.

## Declaration

```objectivec
- (instancetype) initWithPlayParametersQueue:(NSArray<MPMusicPlayerPlayParameters *> *) playParametersQueue;
```

## Parameters

- `playParametersQueue`: An array of play parameters created from the JSON information returned from a MusicKit query and used to populate the queue descriptor.

<a id="return-value"></a>

## Return Value

A new queue descriptor consisting of the items described by the play parameters.

## See Also

### Creating a new play parameters queue descriptor

- [MPMusicPlayerPlayParameters](../mpmusicplayerplayparameters.md): The MusicKit parameters that describe items to play.

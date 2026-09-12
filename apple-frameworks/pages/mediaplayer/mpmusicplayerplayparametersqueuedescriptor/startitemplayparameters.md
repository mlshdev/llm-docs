> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayerplayparametersqueuedescriptor/startitemplayparameters](https://developer.apple.com/documentation/mediaplayer/mpmusicplayerplayparametersqueuedescriptor/startitemplayparameters)

# startItemPlayParameters (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The item identified by the play parameters to play first.

## Declaration

```swift
var startItemPlayParameters: MPMusicPlayerPlayParameters? { get set }
```

<a id="Discussion"></a>

## Discussion

When this property isn’t set, the value is [nil](../../objectivec/nil-227m0.md) and the first item in the queue is the first item to play.

## See Also

### Accessing the play parameters

- [playParametersQueue](playparametersqueue.md): An array containing the play parameters returned from querying MusicKit.
- [MPMusicPlayerPlayParameters](../mpmusicplayerplayparameters.md): The MusicKit parameters that describe items to play.

# startItemPlayParameters (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

The item identified by the play parameters to play first.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) MPMusicPlayerPlayParameters * startItemPlayParameters;
```

<a id="Discussion"></a>

## Discussion

When this property isn’t set, the value is [nil](../../objectivec/nil-227m0.md) and the first item in the queue is the first item to play.

## See Also

### Accessing the play parameters

- [playParametersQueue](playparametersqueue.md): An array containing the play parameters returned from querying MusicKit.
- [MPMusicPlayerPlayParameters](../mpmusicplayerplayparameters.md): The MusicKit parameters that describe items to play.

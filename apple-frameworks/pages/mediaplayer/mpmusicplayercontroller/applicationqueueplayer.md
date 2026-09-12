> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontroller/applicationqueueplayer](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontroller/applicationqueueplayer)

# applicationQueuePlayer (Swift)

**Framework:** Media Player  
**Kind:** Type Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Returns the application queue music player.

## Declaration

```swift
class var applicationQueuePlayer: MPMusicPlayerApplicationController { get }
```

<a id="return-value"></a>

## Return Value

The application queue music player.

<a id="Discussion"></a>

## Discussion

The application queue music player plays music locally within your app. The application queue music player provides more functionality and greater control over the music played than the application music player.

The music player doesn’t affect the Music app’s state. When your app moves to the background, the music player stops playing the current media.

## See Also

### Getting a music player

- [applicationMusicPlayer](applicationmusicplayer.md): Returns the application music player.
- [systemMusicPlayer](systemmusicplayer.md): Returns the system music player, which controls the Music app’s state.

# applicationQueuePlayer (Objective-C)

**Framework:** Media Player  
**Kind:** Type Property  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Returns the application queue music player.

## Declaration

```objectivec
@property (class, nonatomic, readonly) MPMusicPlayerApplicationController * applicationQueuePlayer;
```

<a id="return-value"></a>

## Return Value

The application queue music player.

<a id="Discussion"></a>

## Discussion

The application queue music player plays music locally within your app. The application queue music player provides more functionality and greater control over the music played than the application music player.

The music player doesn’t affect the Music app’s state. When your app moves to the background, the music player stops playing the current media.

## See Also

### Getting a music player

- [applicationMusicPlayer](applicationmusicplayer.md): Returns the application music player.
- [systemMusicPlayer](systemmusicplayer.md): Returns the system music player, which controls the Music app’s state.

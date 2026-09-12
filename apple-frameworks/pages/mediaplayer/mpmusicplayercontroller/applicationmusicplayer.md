> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpmusicplayercontroller/applicationmusicplayer](https://developer.apple.com/documentation/mediaplayer/mpmusicplayercontroller/applicationmusicplayer)

# applicationMusicPlayer (Swift)

**Framework:** Media Player  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Returns the application music player.

## Declaration

```swift
class var applicationMusicPlayer: MPMusicPlayerController { get }
```

<a id="return-value"></a>

## Return Value

The application music player.

<a id="Discussion"></a>

## Discussion

The application music player plays music locally within your app. The music player doesn’t affect the Music app’s state. When your app moves to the background, the music player stops playing the current media.

## See Also

### Getting a music player

- [applicationQueuePlayer](applicationqueueplayer.md): Returns the application queue music player.
- [systemMusicPlayer](systemmusicplayer.md): Returns the system music player, which controls the Music app’s state.

# applicationMusicPlayer (Objective-C)

**Framework:** Media Player  
**Kind:** Type Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+

Returns the application music player.

## Declaration

```objectivec
@property (class, nonatomic, readonly) MPMusicPlayerController * applicationMusicPlayer;
```

<a id="return-value"></a>

## Return Value

The application music player.

<a id="Discussion"></a>

## Discussion

The application music player plays music locally within your app. The music player doesn’t affect the Music app’s state. When your app moves to the background, the music player stops playing the current media.

## See Also

### Getting a music player

- [applicationQueuePlayer](applicationqueueplayer.md): Returns the application queue music player.
- [systemMusicPlayer](systemmusicplayer.md): Returns the system music player, which controls the Music app’s state.

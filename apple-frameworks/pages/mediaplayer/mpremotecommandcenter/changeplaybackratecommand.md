> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpremotecommandcenter/changeplaybackratecommand](https://developer.apple.com/documentation/mediaplayer/mpremotecommandcenter/changeplaybackratecommand)

# changePlaybackRateCommand (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for changing the playback rate of the current media item.

## Declaration

```swift
var changePlaybackRateCommand: MPChangePlaybackRateCommand { get }
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for changing the playback rate of the current track. In your handler, change the playback rate to the new value. The current playback rate cannot be negative. You can disable the command if your app does not support it.

## See Also

### Navigating a track’s contents

- [seekBackwardCommand](seekbackwardcommand.md): The command object for seeking backward through a single media item.
- [seekForwardCommand](seekforwardcommand.md): The command object for seeking forward through a single media item.
- [skipBackwardCommand](skipbackwardcommand.md): The command object for playing a previous point in a media item.
- [skipForwardCommand](skipforwardcommand.md): The command object for playing a future point in a media item.
- [changePlaybackPositionCommand](changeplaybackpositioncommand.md): The command object for changing the playback position in a media item.

# changePlaybackRateCommand (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for changing the playback rate of the current media item.

## Declaration

```objectivec
@property (nonatomic, readonly) MPChangePlaybackRateCommand * changePlaybackRateCommand;
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for changing the playback rate of the current track. In your handler, change the playback rate to the new value. The current playback rate cannot be negative. You can disable the command if your app does not support it.

## See Also

### Navigating a track’s contents

- [seekBackwardCommand](seekbackwardcommand.md): The command object for seeking backward through a single media item.
- [seekForwardCommand](seekforwardcommand.md): The command object for seeking forward through a single media item.
- [skipBackwardCommand](skipbackwardcommand.md): The command object for playing a previous point in a media item.
- [skipForwardCommand](skipforwardcommand.md): The command object for playing a future point in a media item.
- [changePlaybackPositionCommand](changeplaybackpositioncommand.md): The command object for changing the playback position in a media item.

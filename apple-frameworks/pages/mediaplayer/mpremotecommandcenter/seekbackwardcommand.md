> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpremotecommandcenter/seekbackwardcommand](https://developer.apple.com/documentation/mediaplayer/mpremotecommandcenter/seekbackwardcommand)

# seekBackwardCommand (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for seeking backward through a single media item.

## Declaration

```swift
var seekBackwardCommand: MPRemoteCommand { get }
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for seeking backward in the current track. In your handler, begin seeking backward through the current media item. You can disable the command if your app does not support it.

## See Also

### Navigating a track’s contents

- [changePlaybackRateCommand](changeplaybackratecommand.md): The command object for changing the playback rate of the current media item.
- [seekForwardCommand](seekforwardcommand.md): The command object for seeking forward through a single media item.
- [skipBackwardCommand](skipbackwardcommand.md): The command object for playing a previous point in a media item.
- [skipForwardCommand](skipforwardcommand.md): The command object for playing a future point in a media item.
- [changePlaybackPositionCommand](changeplaybackpositioncommand.md): The command object for changing the playback position in a media item.

# seekBackwardCommand (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for seeking backward through a single media item.

## Declaration

```objectivec
@property (nonatomic, readonly) MPRemoteCommand * seekBackwardCommand;
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for seeking backward in the current track. In your handler, begin seeking backward through the current media item. You can disable the command if your app does not support it.

## See Also

### Navigating a track’s contents

- [changePlaybackRateCommand](changeplaybackratecommand.md): The command object for changing the playback rate of the current media item.
- [seekForwardCommand](seekforwardcommand.md): The command object for seeking forward through a single media item.
- [skipBackwardCommand](skipbackwardcommand.md): The command object for playing a previous point in a media item.
- [skipForwardCommand](skipforwardcommand.md): The command object for playing a future point in a media item.
- [changePlaybackPositionCommand](changeplaybackpositioncommand.md): The command object for changing the playback position in a media item.

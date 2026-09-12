> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpremotecommandcenter/nexttrackcommand](https://developer.apple.com/documentation/mediaplayer/mpremotecommandcenter/nexttrackcommand)

# nextTrackCommand (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for selecting the next track.

## Declaration

```swift
var nextTrackCommand: MPRemoteCommand { get }
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for selecting the next track. In your handler, select the media item that follows the current media item. You can disable the command if your app does not support it.

## See Also

### Navigating between tracks

- [previousTrackCommand](previoustrackcommand.md): The command object for selecting the previous track.
- [changeRepeatModeCommand](changerepeatmodecommand.md): The command object for changing the repeat mode.
- [changeShuffleModeCommand](changeshufflemodecommand.md): The command object for changing the shuffle mode.

# nextTrackCommand (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for selecting the next track.

## Declaration

```objectivec
@property (nonatomic, readonly) MPRemoteCommand * nextTrackCommand;
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for selecting the next track. In your handler, select the media item that follows the current media item. You can disable the command if your app does not support it.

## See Also

### Navigating between tracks

- [previousTrackCommand](previoustrackcommand.md): The command object for selecting the previous track.
- [changeRepeatModeCommand](changerepeatmodecommand.md): The command object for changing the repeat mode.
- [changeShuffleModeCommand](changeshufflemodecommand.md): The command object for changing the shuffle mode.

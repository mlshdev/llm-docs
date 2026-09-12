> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpremotecommandcenter/previoustrackcommand](https://developer.apple.com/documentation/mediaplayer/mpremotecommandcenter/previoustrackcommand)

# previousTrackCommand (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for selecting the previous track.

## Declaration

```swift
var previousTrackCommand: MPRemoteCommand { get }
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for selecting the previous track. In your handler, select the media item that precedes the current media item. You can disable the command if your app does not support it.

## See Also

### Navigating between tracks

- [nextTrackCommand](nexttrackcommand.md): The command object for selecting the next track.
- [changeRepeatModeCommand](changerepeatmodecommand.md): The command object for changing the repeat mode.
- [changeShuffleModeCommand](changeshufflemodecommand.md): The command object for changing the shuffle mode.

# previousTrackCommand (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for selecting the previous track.

## Declaration

```objectivec
@property (nonatomic, readonly) MPRemoteCommand * previousTrackCommand;
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for selecting the previous track. In your handler, select the media item that precedes the current media item. You can disable the command if your app does not support it.

## See Also

### Navigating between tracks

- [nextTrackCommand](nexttrackcommand.md): The command object for selecting the next track.
- [changeRepeatModeCommand](changerepeatmodecommand.md): The command object for changing the repeat mode.
- [changeShuffleModeCommand](changeshufflemodecommand.md): The command object for changing the shuffle mode.

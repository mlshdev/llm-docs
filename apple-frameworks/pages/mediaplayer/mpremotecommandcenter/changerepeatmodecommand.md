> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpremotecommandcenter/changerepeatmodecommand](https://developer.apple.com/documentation/mediaplayer/mpremotecommandcenter/changerepeatmodecommand)

# changeRepeatModeCommand (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for changing the repeat mode.

## Declaration

```swift
var changeRepeatModeCommand: MPChangeRepeatModeCommand { get }
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for changing the repeat mode for the playlist. In your handler, change the repeat mode to the new value. You can disable the command if your app does not support it.

## See Also

### Navigating between tracks

- [nextTrackCommand](nexttrackcommand.md): The command object for selecting the next track.
- [previousTrackCommand](previoustrackcommand.md): The command object for selecting the previous track.
- [changeShuffleModeCommand](changeshufflemodecommand.md): The command object for changing the shuffle mode.

# changeRepeatModeCommand (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for changing the repeat mode.

## Declaration

```objectivec
@property (nonatomic, readonly) MPChangeRepeatModeCommand * changeRepeatModeCommand;
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for changing the repeat mode for the playlist. In your handler, change the repeat mode to the new value. You can disable the command if your app does not support it.

## See Also

### Navigating between tracks

- [nextTrackCommand](nexttrackcommand.md): The command object for selecting the next track.
- [previousTrackCommand](previoustrackcommand.md): The command object for selecting the previous track.
- [changeShuffleModeCommand](changeshufflemodecommand.md): The command object for changing the shuffle mode.

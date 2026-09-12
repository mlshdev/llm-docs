> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpremotecommandcenter/changeshufflemodecommand](https://developer.apple.com/documentation/mediaplayer/mpremotecommandcenter/changeshufflemodecommand)

# changeShuffleModeCommand (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for changing the shuffle mode.

## Declaration

```swift
var changeShuffleModeCommand: MPChangeShuffleModeCommand { get }
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for changing the shuffle mode for the playlist. In your handler, change the shuffle mode to the new value. You can disable the command if your app does not support it.

## See Also

### Navigating between tracks

- [nextTrackCommand](nexttrackcommand.md): The command object for selecting the next track.
- [previousTrackCommand](previoustrackcommand.md): The command object for selecting the previous track.
- [changeRepeatModeCommand](changerepeatmodecommand.md): The command object for changing the repeat mode.

# changeShuffleModeCommand (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for changing the shuffle mode.

## Declaration

```objectivec
@property (nonatomic, readonly) MPChangeShuffleModeCommand * changeShuffleModeCommand;
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for changing the shuffle mode for the playlist. In your handler, change the shuffle mode to the new value. You can disable the command if your app does not support it.

## See Also

### Navigating between tracks

- [nextTrackCommand](nexttrackcommand.md): The command object for selecting the next track.
- [previousTrackCommand](previoustrackcommand.md): The command object for selecting the previous track.
- [changeRepeatModeCommand](changerepeatmodecommand.md): The command object for changing the repeat mode.

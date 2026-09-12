> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpremotecommandcenter/skipbackwardcommand](https://developer.apple.com/documentation/mediaplayer/mpremotecommandcenter/skipbackwardcommand)

# skipBackwardCommand (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for playing a previous point in a media item.

## Declaration

```swift
var skipBackwardCommand: MPSkipIntervalCommand { get }
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for jumping to a previous point in the current track. In your handler, skip backwards by the amount specified in the event’s [interval](../mpskipintervalcommandevent/interval.md) property. You can disable the command if your app does not support it.

## See Also

### Navigating a track’s contents

- [changePlaybackRateCommand](changeplaybackratecommand.md): The command object for changing the playback rate of the current media item.
- [seekBackwardCommand](seekbackwardcommand.md): The command object for seeking backward through a single media item.
- [seekForwardCommand](seekforwardcommand.md): The command object for seeking forward through a single media item.
- [skipForwardCommand](skipforwardcommand.md): The command object for playing a future point in a media item.
- [changePlaybackPositionCommand](changeplaybackpositioncommand.md): The command object for changing the playback position in a media item.

# skipBackwardCommand (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for playing a previous point in a media item.

## Declaration

```objectivec
@property (nonatomic, readonly) MPSkipIntervalCommand * skipBackwardCommand;
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for jumping to a previous point in the current track. In your handler, skip backwards by the amount specified in the event’s [interval](../mpskipintervalcommandevent/interval.md) property. You can disable the command if your app does not support it.

## See Also

### Navigating a track’s contents

- [changePlaybackRateCommand](changeplaybackratecommand.md): The command object for changing the playback rate of the current media item.
- [seekBackwardCommand](seekbackwardcommand.md): The command object for seeking backward through a single media item.
- [seekForwardCommand](seekforwardcommand.md): The command object for seeking forward through a single media item.
- [skipForwardCommand](skipforwardcommand.md): The command object for playing a future point in a media item.
- [changePlaybackPositionCommand](changeplaybackpositioncommand.md): The command object for changing the playback position in a media item.

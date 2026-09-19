> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaplayer/mpremotecommandcenter/stopcommand

# stopCommand (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for stopping playback of the current item.

## Declaration

```swift
var stopCommand: MPRemoteCommand { get }
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for stopping playback of the current track. In your handler, stop playback the current item. You can disable the command if your app does not support it.

## See Also

### Playback commands

- [pauseCommand](pausecommand.md): The command object for pausing playback of the current item.
- [playCommand](playcommand.md): The command object for starting playback of the current item.
- [togglePlayPauseCommand](toggleplaypausecommand.md): The command object for toggling between playing and pausing the current item.

# stopCommand (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for stopping playback of the current item.

## Declaration

```objectivec
@property (nonatomic, readonly) MPRemoteCommand * stopCommand;
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for stopping playback of the current track. In your handler, stop playback the current item. You can disable the command if your app does not support it.

## See Also

### Playback commands

- [pauseCommand](pausecommand.md): The command object for pausing playback of the current item.
- [playCommand](playcommand.md): The command object for starting playback of the current item.
- [togglePlayPauseCommand](toggleplaypausecommand.md): The command object for toggling between playing and pausing the current item.

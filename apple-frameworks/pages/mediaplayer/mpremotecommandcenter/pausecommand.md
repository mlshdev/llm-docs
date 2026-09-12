> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpremotecommandcenter/pausecommand](https://developer.apple.com/documentation/mediaplayer/mpremotecommandcenter/pausecommand)

# pauseCommand (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for pausing playback of the current item.

## Declaration

```swift
var pauseCommand: MPRemoteCommand { get }
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for pausing the currently playing track. In your handler, pause playback of the current item but maintain the current play position. You can disable the command if your app does not support it.

## See Also

### Playback commands

- [playCommand](playcommand.md): The command object for starting playback of the current item.
- [stopCommand](stopcommand.md): The command object for stopping playback of the current item.
- [togglePlayPauseCommand](toggleplaypausecommand.md): The command object for toggling between playing and pausing the current item.

# pauseCommand (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The command object for pausing playback of the current item.

## Declaration

```objectivec
@property (nonatomic, readonly) MPRemoteCommand * pauseCommand;
```

<a id="Discussion"></a>

## Discussion

Use the object in this property to register your app’s handler for pausing the currently playing track. In your handler, pause playback of the current item but maintain the current play position. You can disable the command if your app does not support it.

## See Also

### Playback commands

- [playCommand](playcommand.md): The command object for starting playback of the current item.
- [stopCommand](stopcommand.md): The command object for stopping playback of the current item.
- [togglePlayPauseCommand](toggleplaypausecommand.md): The command object for toggling between playing and pausing the current item.

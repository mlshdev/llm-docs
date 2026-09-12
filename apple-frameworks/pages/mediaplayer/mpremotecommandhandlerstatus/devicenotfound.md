> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpremotecommandhandlerstatus/devicenotfound](https://developer.apple.com/documentation/mediaplayer/mpremotecommandhandlerstatus/devicenotfound)

# MPRemoteCommandHandlerStatus.deviceNotFound (Swift)

**Framework:** Media Player  
**Kind:** Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The requested command couldn’t execute because a required device isn’t available.

## Declaration

```swift
case deviceNotFound
```

<a id="Discussion"></a>

## Discussion

Commands that require a device to perform their action should return this status when the device is unavailable. For example, you’d return this status if your command requires headphones, but none are available.

## See Also

### Constants

- [MPRemoteCommandHandlerStatus.success](success.md): The requested command executed successfully.
- [MPRemoteCommandHandlerStatus.noSuchContent](nosuchcontent.md): The requested command couldn’t execute because its required content isn’t available.
- [MPRemoteCommandHandlerStatus.noActionableNowPlayingItem](noactionablenowplayingitem.md): The requested command couldn’t execute because no Now Playing item is available.
- [MPRemoteCommandHandlerStatus.commandFailed](commandfailed.md): The requested command failed to execute.

# MPRemoteCommandHandlerStatusDeviceNotFound (Objective-C)

**Framework:** Media Player  
**Kind:** Enumeration Case  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

The requested command couldn’t execute because a required device isn’t available.

## Declaration

```objectivec
MPRemoteCommandHandlerStatusDeviceNotFound
```

<a id="Discussion"></a>

## Discussion

Commands that require a device to perform their action should return this status when the device is unavailable. For example, you’d return this status if your command requires headphones, but none are available.

## See Also

### Constants

- [MPRemoteCommandHandlerStatusSuccess](success.md): The requested command executed successfully.
- [MPRemoteCommandHandlerStatusNoSuchContent](nosuchcontent.md): The requested command couldn’t execute because its required content isn’t available.
- [MPRemoteCommandHandlerStatusNoActionableNowPlayingItem](noactionablenowplayingitem.md): The requested command couldn’t execute because no Now Playing item is available.
- [MPRemoteCommandHandlerStatusCommandFailed](commandfailed.md): The requested command failed to execute.

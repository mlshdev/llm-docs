> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/enableremotedesktopcommand](https://developer.apple.com/documentation/devicemanagement/enableremotedesktopcommand)

# EnableRemoteDesktopCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.14.4+

The command to enable Remote Desktop on a device.

## Declaration

```
object EnableRemoteDesktopCommand
```

## Properties

- `Command` — `EnableRemoteDesktopCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [EnableRemoteDesktopCommand.Command](enableremotedesktopcommand/command-data.dictionary.md): The command to enable Remote Desktop on a device.

## See Also

### Commands and responses

- [EnableRemoteDesktopResponse](enableremotedesktopresponse.md): A response from the device after it processes the command to enable Remote Desktop on a device.

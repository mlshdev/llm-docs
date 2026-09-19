> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/disableremotedesktopcommand

# DisableRemoteDesktopCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.14.4+

The command to disable Remote Desktop on a device.

## Declaration

```
object DisableRemoteDesktopCommand
```

## Properties

- `Command` — `DisableRemoteDesktopCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [DisableRemoteDesktopCommand.Command](disableremotedesktopcommand/command-data.dictionary.md): The command to disable Remote Desktop on a device.

## See Also

### Commands and responses

- [DisableRemoteDesktopResponse](disableremotedesktopresponse.md): A response from the device after it processes the command to disable Remote Desktop on a device.

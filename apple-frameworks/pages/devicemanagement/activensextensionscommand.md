> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/activensextensionscommand

# ActiveNSExtensionsCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.13+

The command to get a list of active extensions for a user on a device.

## Declaration

```
object ActiveNSExtensionsCommand
```

## Properties

- `Command` — `ActiveNSExtensionsCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [ActiveNSExtensionsCommand.Command](activensextensionscommand/command-data.dictionary.md): The command to get a list of active extensions for a user on a device.

## See Also

### Commands and responses

- [ActiveNSExtensionsResponse](activensextensionsresponse.md): A response from the device after it processes the command to get a list of active extensions for a user on a device.

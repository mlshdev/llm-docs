> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/nsextensionmappingscommand

# NSExtensionMappingsCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.13+

The command to get a list of the installed extensions for a user on a device.

## Declaration

```
object NSExtensionMappingsCommand
```

## Properties

- `Command` — `NSExtensionMappingsCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [NSExtensionMappingsCommand.Command](nsextensionmappingscommand/command-data.dictionary.md): The command to get a list of the installed extensions for a user on a device.

## See Also

### Commands and responses

- [NSExtensionMappingsResponse](nsextensionmappingsresponse.md): A response from the device after it processes the command to get a list of the installed extensions for a user on a device.

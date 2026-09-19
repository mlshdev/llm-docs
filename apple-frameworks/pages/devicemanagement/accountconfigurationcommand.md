> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/accountconfigurationcommand

# AccountConfigurationCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.11+

The command to create and configure a local administrator account on a device.

## Declaration

```
object AccountConfigurationCommand
```

## Properties

- `Command` — `AccountConfigurationCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [AccountConfigurationCommand.Command](accountconfigurationcommand/command-data.dictionary.md): The command to create and configure a local administrator account on a device.

## See Also

### Commands and responses

- [AccountConfigurationResponse](accountconfigurationresponse.md): A response from the device after it processes the command to create and configure a local administrator account on a device.

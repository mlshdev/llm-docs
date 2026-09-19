> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/installenterpriseapplicationcommand

# InstallEnterpriseApplicationCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.13.6+

The command to install an enterprise app on a device.

## Declaration

```
object InstallEnterpriseApplicationCommand
```

## Properties

- `Command` — `InstallEnterpriseApplicationCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [InstallEnterpriseApplicationCommand.Command](installenterpriseapplicationcommand/command-data.dictionary.md): The command to install an enterprise app on a device.

## See Also

### Commands and responses

- [InstallEnterpriseApplicationResponse](installenterpriseapplicationresponse.md): A response from the device after it processes the command to install an enterprise app on a device.

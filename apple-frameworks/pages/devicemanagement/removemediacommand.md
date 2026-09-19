> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/removemediacommand

# RemoveMediaCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+

The command to remove a previously installed book from a device.

## Declaration

```
object RemoveMediaCommand
```

## Properties

- `Command` — `RemoveMediaCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [RemoveMediaCommand.Command](removemediacommand/command-data.dictionary.md): The command to remove a previously installed book from a device.

## See Also

### Commands and responses

- [RemoveMediaResponse](removemediaresponse.md): A response from the device after it processes the command to remove a previously installed book from a device.

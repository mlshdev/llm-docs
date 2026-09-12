> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/refreshcellularplanscommand](https://developer.apple.com/documentation/devicemanagement/refreshcellularplanscommand)

# RefreshCellularPlansCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+

The command to query a carrier URL for active eSIM cellular-plan profiles on a device.

## Declaration

```
object RefreshCellularPlansCommand
```

## Properties

- `Command` — `RefreshCellularPlansCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [RefreshCellularPlansCommand.Command](refreshcellularplanscommand/command-data.dictionary.md): The command to query a carrier URL for active eSIM cellular-plan profiles on a device.

## See Also

### Commands and responses

- [RefreshCellularPlansResponse](refreshcellularplansresponse.md): A response from the device after it processes the command to query a carrier URL for active eSIM cellular-plan profiles on a device.

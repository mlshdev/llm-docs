> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/installmediacommand](https://developer.apple.com/documentation/devicemanagement/installmediacommand)

# InstallMediaCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.9+ (deprecated in 11.0)

The command to install a book on a device.

## Declaration

```
object InstallMediaCommand
```

## Properties

- `Command` — `InstallMediaCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [InstallMediaCommand.Command](installmediacommand/command-data.dictionary.md): Deprecated. The command to install a book on a device.

## See Also

### Commands and responses

- [InstallMediaResponse](installmediaresponse.md): Deprecated. A response from the device after it processes the command to install a book on a device.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/removeapplicationcommand](https://developer.apple.com/documentation/devicemanagement/removeapplicationcommand)

# RemoveApplicationCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 5.0+ · macOS 11.0+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

The command to remove an app.

## Declaration

```
object RemoveApplicationCommand
```

## Properties

- `Command` — `RemoveApplicationCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [RemoveApplicationCommand.Command](removeapplicationcommand/command-data.dictionary.md): The command to remove an app.

## See Also

### Commands and responses

- [RemoveApplicationResponse](removeapplicationresponse.md): A response from the device after it processes the command to remove an app.

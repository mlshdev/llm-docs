> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/restrictionscommand](https://developer.apple.com/documentation/devicemanagement/restrictionscommand)

# RestrictionsCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · tvOS 9.0+ · visionOS 1.1+ · watchOS 10.0+

The command to get a list of restrictions on the device.

## Declaration

```
object RestrictionsCommand
```

## Properties

- `Command` — `RestrictionsCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Mentioned In

- [Handling NotNow status responses](handling-notnow-status-responses.md)

## Topics

### Objects

- [RestrictionsCommand.Command](restrictionscommand/command-data.dictionary.md): The command to get a list of restrictions on the device.

## See Also

### Commands and responses

- [RestrictionsResponse](restrictionsresponse.md): A response from the device after it processes the command to get a list of restrictions on the device.

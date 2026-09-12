> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/deviceinformationcommand](https://developer.apple.com/documentation/devicemanagement/deviceinformationcommand)

# DeviceInformationCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.1+ · watchOS 10.0+

The command to get detailed information about a device.

## Declaration

```
object DeviceInformationCommand
```

## Properties

- `Command` — `DeviceInformationCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Mentioned In

- [Creating and using bypass codes](creating-and-using-bypass-codes.md)
- [Handling NotNow status responses](handling-notnow-status-responses.md)

## Topics

### Objects

- [DeviceInformationCommand.Command](deviceinformationcommand/command-data.dictionary.md): The command to get detailed information about a device.

## See Also

### Commands and responses

- [DeviceInformationResponse](deviceinformationresponse.md): A response from the device after it processes the command to get detailed information about a device.

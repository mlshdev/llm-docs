> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/restartdevicecommand](https://developer.apple.com/documentation/devicemanagement/restartdevicecommand)

# RestartDeviceCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 10.3+ · macOS 10.13+ · tvOS 10.2+

The command to remotely and immediately restart a device.

## Declaration

```
object RestartDeviceCommand
```

## Properties

- `Command` — `RestartDeviceCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Mentioned In

- [Handling NotNow status responses](handling-notnow-status-responses.md)

## Topics

### Objects

- [RestartDeviceCommand.Command](restartdevicecommand/command-data.dictionary.md): The command to remotely and immediately restart a device.

## See Also

### Commands and responses

- [RestartDeviceResponse](restartdeviceresponse.md): A response from the device after it processes the command to remotely and immediately restart a device.

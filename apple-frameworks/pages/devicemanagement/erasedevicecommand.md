> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/erasedevicecommand](https://developer.apple.com/documentation/devicemanagement/erasedevicecommand)

# EraseDeviceCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

The command to remotely and immediately erase a device.

## Declaration

```
object EraseDeviceCommand
```

## Properties

- `Command` — `EraseDeviceCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Mentioned In

- [Handling NotNow status responses](handling-notnow-status-responses.md)

## Topics

### Objects

- [EraseDeviceCommand.Command](erasedevicecommand/command-data.dictionary.md): The command to remotely and immediately erase a device.

## See Also

### Commands and responses

- [EraseDeviceResponse](erasedeviceresponse.md): A response from the device after it processes the command to remotely and immediately erase a device.

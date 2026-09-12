> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/devicelockcommand](https://developer.apple.com/documentation/devicemanagement/devicelockcommand)

# DeviceLockCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · macOS 10.7+ · visionOS 2.0+ · watchOS 10.0+

The command to remotely and immediately lock a device.

## Declaration

```
object DeviceLockCommand
```

## Properties

- `Command` — `DeviceLockCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Mentioned In

- [Handling NotNow status responses](handling-notnow-status-responses.md)

## Topics

### Objects

- [DeviceLockCommand.Command](devicelockcommand/command-data.dictionary.md): The command to remotely and immediately lock a device.

## See Also

### Commands and responses

- [DeviceLockResponse](devicelockresponse.md): A response from the device after it processes the command to remotely and immediately lock a device.

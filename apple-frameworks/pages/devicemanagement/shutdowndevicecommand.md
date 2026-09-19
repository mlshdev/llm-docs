> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/shutdowndevicecommand

# ShutDownDeviceCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 10.3+ · macOS 10.13+

The command to remotely and immediately shut down a device.

## Declaration

```
object ShutDownDeviceCommand
```

## Properties

- `Command` — `ShutDownDeviceCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Mentioned In

- [Handling NotNow status responses](handling-notnow-status-responses.md)

## Topics

### Objects

- [ShutDownDeviceCommand.Command](shutdowndevicecommand/command-data.dictionary.md): The command to remotely and immediately shut down a device.

## See Also

### Commands and responses

- [ShutDownDeviceResponse](shutdowndeviceresponse.md): A response from the device after it processes the command to remotely and immediately shut down a device.

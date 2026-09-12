> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/lomdevicerequestcommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/lomdevicerequestcommand/command-data.dictionary)

# LOMDeviceRequestCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 11.0+

The command to send requests to a device using lights-out management (LOM).

## Declaration

```
object LOMDeviceRequestCommand.Command
```

## Properties

- `RequestList` — `[LOMDeviceRequestCommand.Command.RequestListItem]` (required): An array of requests to perform.
- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `LOMDeviceRequest`

## Topics

### Objects

- [LOMDeviceRequestCommand.Command.RequestListItem](command-data.dictionary/requestlistitem.md): A dictionary that contains a requested action to perform on a device using lights-out management (LOM).

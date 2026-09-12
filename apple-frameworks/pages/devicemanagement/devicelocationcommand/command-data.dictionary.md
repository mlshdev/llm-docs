> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/devicelocationcommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/devicelocationcommand/command-data.dictionary)

# DeviceLocationCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 9.3+

The command to request the location of a device when in Lost Mode.

## Declaration

```
object DeviceLocationCommand.Command
```

## Properties

- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `DeviceLocation`

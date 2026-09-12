> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/clearrestrictionspasswordcommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/clearrestrictionspasswordcommand/command-data.dictionary)

# ClearRestrictionsPasswordCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+

The command to clear the Screen Time password and the restrictions on a device.

## Declaration

```
object ClearRestrictionsPasswordCommand.Command
```

## Properties

- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `ClearRestrictionsPassword`

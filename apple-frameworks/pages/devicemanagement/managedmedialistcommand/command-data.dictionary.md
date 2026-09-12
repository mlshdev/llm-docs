> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/managedmedialistcommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/managedmedialistcommand/command-data.dictionary)

# ManagedMediaListCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+

The command to get a list of the managed books on a device.

## Declaration

```
object ManagedMediaListCommand.Command
```

## Properties

- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `ManagedMediaList`

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/refreshcellularplanscommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/refreshcellularplanscommand/command-data.dictionary)

# RefreshCellularPlansCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+

The command to query a carrier URL for active eSIM cellular-plan profiles on a device.

## Declaration

```
object RefreshCellularPlansCommand.Command
```

## Properties

- `eSIMServerURL` — `string` (required): The carrier’s eSIM server URL to query. Obtain this URL from each carrier separately.
- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `RefreshCellularPlans`

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/cancelenhancedlogcollectioncommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/cancelenhancedlogcollectioncommand/command-data.dictionary)

# CancelEnhancedLogCollectionCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

The command to cancel enhanced log collection on the device.

## Declaration

```
object CancelEnhancedLogCollectionCommand.Command
```

## Properties

- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `CancelEnhancedLogCollection`

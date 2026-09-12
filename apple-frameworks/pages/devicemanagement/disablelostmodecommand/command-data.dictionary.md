> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/disablelostmodecommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/disablelostmodecommand/command-data.dictionary)

# DisableLostModeCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 9.3+

The command to take the device out of Lost Mode.

## Declaration

```
object DisableLostModeCommand.Command
```

## Properties

- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `DisableLostMode`

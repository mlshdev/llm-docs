> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/playlostmodesoundcommand/command-data.dictionary

# PlayLostModeSoundCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 10.3+

The command to play the Lost Mode sound on a device that’s in Lost Mode.

## Declaration

```
object PlayLostModeSoundCommand.Command
```

## Properties

- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `PlayLostModeSound`

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/setrecoverylockcommand/command-data.dictionary

# SetRecoveryLockCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 11.5+

The command to set or clear the Recovery Lock password.

## Declaration

```
object SetRecoveryLockCommand.Command
```

## Properties

- `CurrentPassword` — `string`: If the device has a Recovery Lock password set, the system requires the current password.
- `NewPassword` — `string` (required): The new password for Recovery Lock. Set as an empty string to clear the Recovery Lock password.
- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `SetRecoveryLock`

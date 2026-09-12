> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/verifyrecoverylockcommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/verifyrecoverylockcommand/command-data.dictionary)

# VerifyRecoveryLockCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 11.5+

The command to verify the device’s Recovery Lock password.

## Declaration

```
object VerifyRecoveryLockCommand.Command
```

## Properties

- `Password` — `string` (required): The password to verify.
- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `VerifyRecoveryLock`

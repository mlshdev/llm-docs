> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/verifyfirmwarepasswordcommand/command-data.dictionary

# VerifyFirmwarePasswordCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.13+

The command to verify the firmware password on a device.

## Declaration

```
object VerifyFirmwarePasswordCommand.Command
```

## Properties

- `Password` — `string` (required): The password to verify.
- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `VerifyFirmwarePassword`

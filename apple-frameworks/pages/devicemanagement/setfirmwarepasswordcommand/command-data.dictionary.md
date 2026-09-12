> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/setfirmwarepasswordcommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/setfirmwarepasswordcommand/command-data.dictionary)

# SetFirmwarePasswordCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.13+

The command to change or clear the firmware password on a device.

## Declaration

```
object SetFirmwarePasswordCommand.Command
```

## Properties

- `AllowOroms` — `boolean`: If `true`, enable ROMs.
  **Default:** `false`
- `CurrentPassword` — `string`: The current password, which you must set if the device has a firmware password.
- `NewPassword` — `string` (required): The new firmware password. Set to an empty string to clear the password. The characters in this value must consist of low-ASCII, printable characters (`0x20` through `0x7E`) to ensure that all characters are enterable on the EFI login screen.
- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `SetFirmwarePassword`

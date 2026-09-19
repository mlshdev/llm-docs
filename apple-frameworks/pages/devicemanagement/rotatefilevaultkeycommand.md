> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/rotatefilevaultkeycommand

# RotateFileVaultKeyCommand

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.9+

The command to change the FileVault primary password on a device.

## Declaration

```
object RotateFileVaultKeyCommand
```

## Properties

- `Command` — `RotateFileVaultKeyCommand.Command` (required): The command dictionary.
- `CommandUUID` — `string` (required): The unique identifier of the command.

## Topics

### Objects

- [RotateFileVaultKeyCommand.Command](rotatefilevaultkeycommand/command-data.dictionary.md): The command to change the FileVault primary password on a device.

## See Also

### Commands and responses

- [RotateFileVaultKeyResponse](rotatefilevaultkeyresponse.md): A response from the device after it processes the command to change the FileVault primary password on a device.

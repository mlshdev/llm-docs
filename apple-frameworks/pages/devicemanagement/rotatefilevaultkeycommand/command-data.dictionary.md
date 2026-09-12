> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/rotatefilevaultkeycommand/command-data.dictionary](https://developer.apple.com/documentation/devicemanagement/rotatefilevaultkeycommand/command-data.dictionary)

# RotateFileVaultKeyCommand.Command

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.9+

The command to change the FileVault primary password on a device.

## Declaration

```
object RotateFileVaultKeyCommand.Command
```

## Properties

- `FileVaultUnlock` — `RotateFileVaultKeyCommand.Command.FileVaultUnlock` (required): A dictionary that contains FileVault unlock options.
- `KeyType` — `string` (required): The type of FileVault key you want to change the password for. Set this value to `personal` and set a value for `Password` in the `FileVaultUnlock` dictionary to enable unlocking a device with a password. Set this value to `institutional` and set values for `PrivateKeyExport` and `PrivateKeyExportPassword` in the `FileVaultUnlock` dictionary.
  **Allowed values:** `personal`, `institutional`
- `NewCertificate` — `data`: A DER-encoded certificate for creating a new institutional recovery key, which the system requires if `KeyType` is `institutional`.
- `ReplyEncryptionCertificate` — `data`: A DER-encoded certificate for encrypting the new personal recovery key in a wrapper conforming to the IETF Cryptographic Message Syntax (CMS) standard.
- `RequestRequiresNetworkTether` — `boolean`: If `true`, the device needs to be network-tethered to run the command.
  **Default:** `false`
- `RequestType` — `string` (required): The request type for this command.
  **Allowed values:** `RotateFileVaultKey`

## Topics

### Objects

- [RotateFileVaultKeyCommand.Command.FileVaultUnlock](command-data.dictionary/filevaultunlock-data.dictionary.md): A dictionary that contains FileVault unlock options.

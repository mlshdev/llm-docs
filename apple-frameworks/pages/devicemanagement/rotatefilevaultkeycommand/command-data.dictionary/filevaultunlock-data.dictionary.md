> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/rotatefilevaultkeycommand/command-data.dictionary/filevaultunlock-data.dictionary](https://developer.apple.com/documentation/devicemanagement/rotatefilevaultkeycommand/command-data.dictionary/filevaultunlock-data.dictionary)

# RotateFileVaultKeyCommand.Command.FileVaultUnlock

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.9+

A dictionary that contains FileVault unlock options.

## Declaration

```
object RotateFileVaultKeyCommand.Command.FileVaultUnlock
```

## Properties

- `Password` — `string`: A FileVault user’s password, or if using a CoreStorage volume, the personal recovery key.
- `PrivateKeyExport` — `data`: The data for a .p12 export of the private key for the current institutional recovery key, which requires that `KeyType` is `institutional`. The system ignores this key on APFS volumes.

  Deprecated: macOS 10.15+
- `PrivateKeyExportPassword` — `string`: The password for `PrivateKeyExport`. Either `Password` or both `PrivateKeyExport` and `PrivateKeyExportPassword` must be present. The system ignores this key on APFS volumes.

  Deprecated: macOS 10.15+

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/rotatefilevaultkeyresponse/rotateresult-data.dictionary](https://developer.apple.com/documentation/devicemanagement/rotatefilevaultkeyresponse/rotateresult-data.dictionary)

# RotateFileVaultKeyResponse.RotateResult

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.9+

The result of rotating the personal recovery key.

## Declaration

```
object RotateFileVaultKeyResponse.RotateResult
```

## Properties

- `EncryptedNewRecoveryKey` — `data`: A new personal recovery key that’s encrypted using a `ReplyEncryptionCertificate` as a CMS-compliant envelope.

## See Also

### Objects

- [RotateFileVaultKeyResponse.ErrorChainItem](errorchainitem.md): A dictionary that describes an error chain item.

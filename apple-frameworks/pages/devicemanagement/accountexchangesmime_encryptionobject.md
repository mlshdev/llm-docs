> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/accountexchangesmime_encryptionobject](https://developer.apple.com/documentation/devicemanagement/accountexchangesmime_encryptionobject)

# AccountExchangeSMIME_EncryptionObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.1+

Settings for S/MIME encryption. Applicable for “EAS” only.

## Declaration

```
object AccountExchangeSMIME_EncryptionObject
```

## Properties

- `Enabled` — `boolean` (required): If `true`, the system enables S/MIME encryption by default, which the user can’t override if `PerMessageSwitchEnabled` is `false`. Applicable for “EAS” only.
- `IdentityAssetReference` — `string`: The identifier of an asset declaration containing the identity required for S/MIME encryption. The system attaches the public certificate to outgoing mail to allow the user to receive encrypted mail. When the user sends encrypted mail, the system uses the public certificate to encrypt the copy of the mail in their Sent mailbox. Applicable for “EAS” only.
- `IdentityUserOverrideable` — `boolean`: If `true`, the user can select an S/MIME signing identity in Settings. Applicable for “EAS” only.
  **Default:** `false`
- `PerMessageSwitchEnabled` — `boolean`: If `true`, the system enables the per-message encryption switch in the compose view. Applicable for “EAS” only.
  **Default:** `false`
- `UserOverrideable` — `boolean`: If `true`, the user can turn S/MIME encryption by default on or off in Settings. Applicable for “EAS” only.
  **Default:** `false`

## See Also

### Objects

- [AccountExchangeSMIME_SigningObject](accountexchangesmime_signingobject.md): Settings for S/MIME signing. Applicable for “EAS” only.

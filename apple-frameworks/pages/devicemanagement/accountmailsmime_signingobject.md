> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/accountmailsmime_signingobject

# AccountMailSMIME_SigningObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.1+

Settings for S/MIME signing.

## Declaration

```
object AccountMailSMIME_SigningObject
```

## Properties

- `Enabled` — `boolean` (required): If `true`, the system enables S/MIME signing.
- `IdentityAssetReference` — `string`: Specifies the identifier of an asset declaration containing the identity required for S/MIME signing of messages sent from this account.
- `IdentityUserOverrideable` — `boolean`: If `true`, the user can select an S/MIME signing identity in Settings.
  **Default:** `false`
- `UserOverrideable` — `boolean`: If `true`, the user can turn S/MIME signing on or off in Settings.
  **Default:** `false`

## See Also

### Objects

- [AccountMailSMIME_EncryptionObject](accountmailsmime_encryptionobject.md): Settings for S/MIME encryption.

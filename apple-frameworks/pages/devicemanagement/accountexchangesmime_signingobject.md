> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/accountexchangesmime_signingobject

# AccountExchangeSMIME_SigningObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.1+

Settings for S/MIME signing. Applicable for “EAS” only.

## Declaration

```
object AccountExchangeSMIME_SigningObject
```

## Properties

- `Enabled` — `boolean` (required): If `true`, the system enables S/MIME signing. Applicable for “EAS” only.
- `IdentityAssetReference` — `string`: The identifier of an asset declaration containing the identity required for S/MIME signing of messages sent from this account. Applicable for “EAS” only.
- `IdentityUserOverrideable` — `boolean`: If `true`, the user can select an S/MIME signing identity in Settings. Applicable for “EAS” only.
  **Default:** `false`
- `UserOverrideable` — `boolean`: If `true`, the user can turn S/MIME signing on or off in Settings. Applicable for “EAS” only.
  **Default:** `false`

## See Also

### Objects

- [AccountExchangeSMIME_EncryptionObject](accountexchangesmime_encryptionobject.md): Settings for S/MIME encryption. Applicable for “EAS” only.

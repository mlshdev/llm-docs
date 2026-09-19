> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/accountexchangesmimeobject

# AccountExchangeSMIMEObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.1+

Settings for S/MIME. Applicable for “EAS” only.

## Declaration

```
object AccountExchangeSMIMEObject
```

## Properties

- `Encryption` — `AccountExchangeSMIME_EncryptionObject`: Settings for S/MIME encryption. Applicable for “EAS” only.
- `Signing` — `AccountExchangeSMIME_SigningObject`: Settings for S/MIME signing. Applicable for “EAS” only.

## Topics

### Objects

- [AccountExchangeSMIME_EncryptionObject](accountexchangesmime_encryptionobject.md): Settings for S/MIME encryption. Applicable for “EAS” only.
- [AccountExchangeSMIME_SigningObject](accountexchangesmime_signingobject.md): Settings for S/MIME signing. Applicable for “EAS” only.

## See Also

### Objects

- [AccountExchangeOAuthObject](accountexchangeoauthobject.md): The configuration settings for OAuth for this account.

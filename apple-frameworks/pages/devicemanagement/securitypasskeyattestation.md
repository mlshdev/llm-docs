> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/securitypasskeyattestation](https://developer.apple.com/documentation/devicemanagement/securitypasskeyattestation)

# SecurityPasskeyAttestation

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+

The declaration to configure the device to allow WebAuthn enterprise attestation for certain passkeys.

## Declaration

```
object SecurityPasskeyAttestation
```

## Properties

- `AttestationIdentityAssetReference` — `string` (required): The identifier of an asset declaration that contains the identity to install and use for passkey attestation.
- `AttestationIdentityKeyIsExtractable` — `boolean`: If `true`, the private key for the attestation identity is extractable in the keychain.

  Available: macOS 14+  
  **Default:** `true`
- `RelyingParties` — `[string]` (required): An array of the relying parties to allow enterprise attestation.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.configuration.security.passkey.attestation` as the declaration type.

<a id="Configuration-availability"></a>

### Configuration availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | iOS, macOS |
| Allowed in device enrollment | iOS |
| Allowed in user enrollment | N/A |
| Allowed in local enrollment | N/A |
| Allowed in system scope | iOS |
| Allowed in user scope | macOS |
| Apply | Multiple configurations are applied separately |

<a id="Configuration-example"></a>

### Configuration example

This configuration enables enterprise passkey attestation for a relying party.

```json
{
    "Type": "com.apple.configuration.security.passkey.attestation",
    "Identifier": "EB13EE2B-5D63-4EBA-810F-5B81D07F5017",
    "ServerToken": "E180CA9A-F089-4FA3-BBDF-94CC159C4AE8",
    "Payload": {
        "AttestationIdentityAssetReference": "AD0A8CB5-64EE-4CC9-8CB6-22DCBE6ED38A",
        "RelyingParties": [
            "example.com"
        ]
    }
}
```

## See Also

### Configurations

- [AccessibilitySettings](accessibilitysettings.md): The declaration to configure accessibility settings.
- [AccountCalDAV](accountcaldav.md): The declaration to configure a Calendar account.
- [AccountCardDAV](accountcarddav.md): The declaration to configure a Contacts account.
- [AccountExchange](accountexchange.md): The declaration to configure an Exchange account.
- [AccountGoogle](accountgoogle.md): The declaration to configure a Google account.
- [AccountLDAP](accountldap.md): The declaration to configure a Lightweight Directory Access Protocol (LDAP) account.
- [AccountMail](accountmail.md): The declaration to configure a Mail account.
- [AccountSubscribedCalendar](accountsubscribedcalendar.md): The declaration to configure a subscribed calendar.
- [AppManaged](appmanaged.md): The declaration to configure a managed app.
- [AppSettings](appsettings.md): The declaration to configure app settings.
- [AudioAccessorySettings](audioaccessorysettings.md): The declaration to configure audio accessory settings.
- [ContentCaching](contentcaching.md): The declaration to configure the Content Caching service.
- [DiskManagementSettings](diskmanagementsettings.md): The declaration to configure disk management settings on the device.
- [ExtensibleSSO](extensiblesso.md): The declaration to configure Extensible Single Sign-On.
- [ExternalIntelligenceSettings](externalintelligencesettings.md): The declaration to configure External Intelligence Integrations settings.

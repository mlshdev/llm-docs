> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/externalintelligencesettings](https://developer.apple.com/documentation/devicemanagement/externalintelligencesettings)

# ExternalIntelligenceSettings

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

The declaration to configure External Intelligence Integrations settings.

## Declaration

```
object ExternalIntelligenceSettings
```

## Properties

- `AllowedWorkspaceIDs` — `[string]`: An array of strings, but currently restricted to a single element. If present, Apple Intelligence allows use of only the given external integration workspace ID, and requires a sign-in to make requests. The user is required to sign in to integrations that support signing in. Multiple values combine using an intersect operation.
- `AllowSignIn` — `boolean`: If `false`, disables sign-in for external intelligence integrations.
  **Default:** `true`
- `Enabled` — `boolean`: If `false`, disables external intelligence integrations.
  **Default:** `true`

<a id="Discussion"></a>

## Discussion

Specify `com.apple.configuration.external-intelligence.settings` as the declaration type.

<a id="Configuration-availability"></a>

### Configuration availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | iOS, macOS, visionOS |
| Allowed in device enrollment | N/A |
| Allowed in user enrollment | N/A |
| Allowed in local enrollment | N/A |
| Allowed in system scope | iOS, macOS, visionOS |
| Allowed in user scope | macOS |
| Apply | Multiple configurations are combined and applied as a single effective configuration |

<a id="Configuration-examples"></a>

### Configuration examples

This configuration restricts external intelligence integrations.

```json
{
    "Type": "com.apple.configuration.external-intelligence.settings",
    "Identifier": "A1B2C3D4-E5F6-4A5B-9C8D-7E6F5A4B3C2D",
    "ServerToken": "F1E2D3C4-B5A6-4D5E-8F9A-0B1C2D3E4F5A",
    "Payload": {
        "Enabled": false,
        "AllowSignIn": false,
        "AllowedWorkspaceIDs": [
            "ABCDEFGH"
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
- [IntelligenceSettings](intelligencesettings.md): The declaration to configure Apple Intelligence settings.

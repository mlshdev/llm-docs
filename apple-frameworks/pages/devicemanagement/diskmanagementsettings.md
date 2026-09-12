> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/diskmanagementsettings](https://developer.apple.com/documentation/devicemanagement/diskmanagementsettings)

# DiskManagementSettings

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 15.0+

The declaration to configure disk management settings on the device.

## Declaration

```
object DiskManagementSettings
```

## Properties

- `Restrictions` — `DiskManagementSettingsRestrictionsObject`: The restrictions for the disk.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.configuration.diskmanagement.settings` as the declaration type.

<a id="Configuration-availability"></a>

### Configuration availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | macOS |
| Allowed in device enrollment | N/A |
| Allowed in user enrollment | N/A |
| Allowed in local enrollment | macOS |
| Allowed in system scope | macOS |
| Allowed in user scope | N/A |
| Apply | Multiple configurations are combined and applied as a single effective configuration |

<a id="Configuration-example"></a>

### Configuration example

This configuration prevents the use of external and network storage devices.

```json
{
    "Type": "com.apple.configuration.diskmanagement.settings",
    "Identifier": "EB13EE2B-5D63-4EBA-810F-5B81D07F5017",
    "ServerToken": "E180CA9A-F089-4FA3-BBDF-94CC159C4AE8",
    "Payload": {
        "Restrictions": {
            "ExternalStorage": "Disallowed",
            "NetworkStorage": "Disallowed"
        }
    }
}
```

## Topics

### Objects

- [DiskManagementSettingsRestrictionsObject](diskmanagementsettingsrestrictionsobject.md): The restrictions for the disk.

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
- [ExtensibleSSO](extensiblesso.md): The declaration to configure Extensible Single Sign-On.
- [ExternalIntelligenceSettings](externalintelligencesettings.md): The declaration to configure External Intelligence Integrations settings.
- [IntelligenceSettings](intelligencesettings.md): The declaration to configure Apple Intelligence settings.

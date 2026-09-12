> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/screensharingconnectiongroup](https://developer.apple.com/documentation/devicemanagement/screensharingconnectiongroup)

# ScreenSharingConnectionGroup

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 14.0+

The declaration to configure a group of screen-sharing connections.

## Declaration

```
object ScreenSharingConnectionGroup
```

## Properties

- `ConnectionGroupUUID` — `string` (required): A unique identifier for this connection group.
- `GroupName` — `string` (required): The name of the connection group.
- `Members` — `[string]` (required): An array of `ConnectionUUID`s that represent connections declared in `ScreenSharingConnection` configurations that are members of this group.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.configuration.screensharing.connection.group` as the declaration type.

<a id="Configuration-availability"></a>

### Configuration availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | macOS |
| Allowed in device enrollment | N/A |
| Allowed in user enrollment | macOS |
| Allowed in local enrollment | macOS |
| Allowed in system scope | macOS |
| Allowed in user scope | macOS |
| Apply | Multiple configurations are applied separately |

<a id="Configuration-example"></a>

### Configuration example

This configuration defines a group of screen-sharing connections.

```json
{
    "Type": "com.apple.configuration.screensharing.connection.group",
    "Identifier": "EB13EE2B-5D63-4EBA-810F-5B81D07F5017",
    "ServerToken": "E180CA9A-F089-4FA3-BBDF-94CC159C4AE8",
    "Payload": {
        "ConnectionGroupUUID": "4BF32552-6F85-4F67-999B-7B2494C4DD99",
        "GroupName": "Lab Devices",
        "Members": [
            "7F8F28A5-C024-470B-8166-EC6669A12C3A",
            "EDF04C7F-F9B0-4204-A5EE-34AE094CA7BB"
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

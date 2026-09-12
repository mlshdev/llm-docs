> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/screensharinghostsettings](https://developer.apple.com/documentation/devicemanagement/screensharinghostsettings)

# ScreenSharingHostSettings

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 14.0+

The declaration to configure screen-sharing host settings and restrictions.

## Declaration

```
object ScreenSharingHostSettings
```

## Properties

- `MaximumVirtualDisplays` — `integer`: The maximum number of virtual displays to make available to clients.
  **Minimum:** `0`  
  **Maximum:** `2`
- `PortBase` — `integer`: The initial UDP port number to connect to the host. Screen sharing requires multiple connections, so the system increments this value by 1 for each additional connection. This doesn’t change the port number that the system uses to initially establish a connection with a host, which is always TCP port 5900.
  **Minimum:** `1024`  
  **Maximum:** `65535`
- `PreventCopyFilesFromHost` — `boolean`: If `true`, the system prevents users from copying files from the screen-sharing host.
  **Default:** `false`
- `PreventCopyFilesToHost` — `boolean`: If `true`, the system prevents users from copying files to the screen-sharing host.
  **Default:** `false`
- `PreventHighPerformanceConnections` — `boolean`: If `true`, the system prevents clients from establishing high-performance connections to the host.
  **Default:** `false`

<a id="Discussion"></a>

## Discussion

Specify `com.apple.configuration.screensharing.host.settings` as the declaration type.

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
| Apply | Only a single configuration is applied |

<a id="Configuration-example"></a>

### Configuration example

This configuration manages screen-sharing host settings and restrictions.

```json
{
    "Type": "com.apple.configuration.screensharing.host.settings",
    "Identifier": "EB13EE2B-5D63-4EBA-810F-5B81D07F5017",
    "ServerToken": "E180CA9A-F089-4FA3-BBDF-94CC159C4AE8",
    "Payload": {
        "MaximumVirtualDisplays": 1,
        "PortBase": 1100,
        "PreventCopyFilesFromHost": true,
        "PreventCopyFilesToHost": true,
        "PreventHighPerformanceConnections": true
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

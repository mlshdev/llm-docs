> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/accountgoogle](https://developer.apple.com/documentation/devicemanagement/accountgoogle)

# AccountGoogle

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.1+

The declaration to configure a Google account.

## Declaration

```
object AccountGoogle
```

## Properties

- `UserIdentityAssetReference` — `string` (required): The identifier of an asset declaration that contains the user identity for this Google account. Set the corresponding asset type to `UserIdentity` and ensure that it contains an `EmailAddress` key that specifies the full Google email address for the account.
- `VisibleName` — `string`: The name that apps show to the user for this Google account. If not present, the system generates a suitable default.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.configuration.account.google` as the declaration type.

<a id="Configuration-availability"></a>

### Configuration availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | iOS, macOS, Shared iPad, visionOS |
| Allowed in device enrollment | iOS, Shared iPad, visionOS |
| Allowed in user enrollment | iOS, macOS, Shared iPad, visionOS |
| Allowed in local enrollment | iOS, macOS, Shared iPad, visionOS |
| Allowed in system scope | iOS, visionOS |
| Allowed in user scope | macOS, Shared iPad |
| Apply | Multiple configurations are applied separately |

<a id="Configuration-example"></a>

### Configuration example

This configuration sets up a Google account.

```json
{
    "Type": "com.apple.configuration.account.google",
    "Identifier": "EB13EE2B-5D63-4EBA-810F-5B81D07F5017",
    "ServerToken": "E180CA9A-F089-4FA3-BBDF-94CC159C4AE8",
    "Payload": {
        "VisibleName": "Work Google",
        "UserIdentityAssetReference": "CB3E6C7F-2318-437B-8A9E-D50C69376DE4"
    }
}
```

## See Also

### Configurations

- [AccessibilitySettings](accessibilitysettings.md): The declaration to configure accessibility settings.
- [AccountCalDAV](accountcaldav.md): The declaration to configure a Calendar account.
- [AccountCardDAV](accountcarddav.md): The declaration to configure a Contacts account.
- [AccountExchange](accountexchange.md): The declaration to configure an Exchange account.
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
- [IntelligenceSettings](intelligencesettings.md): The declaration to configure Apple Intelligence settings.

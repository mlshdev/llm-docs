> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/package](https://developer.apple.com/documentation/devicemanagement/package)

# Package

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 26.0+

The declaration to configure a package.

## Declaration

```
object Package
```

## Properties

- `InstallBehavior` — `PackageInstallBehaviorObject`: A dictionary that describes how and when to install the package.
- `ManifestURL` — `string` (required): The URL of the manifest document for the package that the device downloads. The manifest is returned as a [ManifestURL](manifesturl.md) property list. The `url` property of the manifest must point to the package (.pkg) file to install.
- `UninstallBehavior` — `PackageUninstallBehaviorObject`: A dictionary that describes how to uninstall the package.

  Available: macOS 27+

## Mentioned In

- [Installing packages](installing-packages.md)

<a id="Discussion"></a>

## Discussion

Specify `com.apple.configuration.package` as the declaration type.

This declaration installs a package on a device. Packages can contain apps, fonts, documents, and other items. Apps that a package installs aren’t automatically managed; you can manage them using the [AppManaged](appmanaged.md) declaration.

<a id="Configuration-availability"></a>

### Configuration availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | macOS |
| Allowed in device enrollment | N/A |
| Allowed in user enrollment | N/A |
| Allowed in local enrollment | N/A |
| Allowed in system scope | macOS |
| Allowed in user scope | N/A |
| Apply | Multiple configurations are applied separately |

<a id="Configuration-example"></a>

### Configuration example

This configuration installs a required package.

```json
{
    "Type": "com.apple.configuration.package",
    "Identifier": "EB13EE2B-5D63-4EBA-810F-5B81D07F5017",
    "ServerToken": "E180CA9A-F089-4FA3-BBDF-94CC159C4AE8",
    "Payload": {
        "ManifestURL": "https://example.com/files/packages/TestPackage.plist",
        "InstallBehavior": {
            "Install": "Required"
        }
    }
}
```

## Topics

### Objects

- [PackageInstallBehaviorObject](packageinstallbehaviorobject.md): A dictionary that describes how and when to install the package.
- [PackageUninstallBehaviorObject](packageuninstallbehaviorobject.md): A dictionary that describes how to uninstall the package.

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

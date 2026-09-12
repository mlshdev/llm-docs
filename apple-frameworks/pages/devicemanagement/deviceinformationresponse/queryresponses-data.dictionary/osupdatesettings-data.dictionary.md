> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/deviceinformationresponse/queryresponses-data.dictionary/osupdatesettings-data.dictionary](https://developer.apple.com/documentation/devicemanagement/deviceinformationresponse/queryresponses-data.dictionary/osupdatesettings-data.dictionary)

# DeviceInformationResponse.QueryResponses.OSUpdateSettings

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.11+ (deprecated in 26.0)

The response dictionary that contains operating system update settings.

## Declaration

```
object DeviceInformationResponse.QueryResponses.OSUpdateSettings
```

## Properties

- `AutoCheckEnabled` — `boolean`: ~~The preference to automatically check for app updates.~~

  ~~Deprecated: macOS 26+~~
  Removed: macOS 27+
- `AutomaticAppInstallationEnabled` — `boolean`: ~~The preference to automatically install app updates.~~

  ~~Deprecated: macOS 26+~~
  Removed: macOS 27+
- `AutomaticOSInstallationEnabled` — `boolean`: ~~The preference to automatically install operating system updates.~~

  ~~Deprecated: macOS 26+~~
  Removed: macOS 27+
- `AutomaticSecurityUpdatesEnabled` — `boolean`: ~~The preference to automatically install system data files and security updates.~~

  ~~Deprecated: macOS 26+~~
  Removed: macOS 27+
- `BackgroundDownloadEnabled` — `boolean`: ~~The preference to download app updates in the background.~~

  ~~Deprecated: macOS 26+~~
  Removed: macOS 27+
- `CatalogURL` — `string`: ~~The URL to the software update catalog the client is using.~~

  ~~Deprecated: macOS 26+~~
  Removed: macOS 27+
- `IsDefaultCatalog` — `boolean`: ~~If `true`, `CatalogURL` is the default catalog.~~

  ~~Deprecated: macOS 26+~~
  Removed: macOS 27+
- `PerformPeriodicCheck` — `boolean`: ~~If `true`, start a new scan.~~

  ~~Deprecated: macOS 26+~~
  Removed: macOS 27+
- `PreviousScanDate` — `date`: ~~The date of the last software update scan.~~

  ~~Deprecated: macOS 26+~~
  Removed: macOS 27+
- `PreviousScanResult` — `string`: ~~The result code of last software update scan; `0` = success.~~

  ~~Deprecated: macOS 11+~~
  Removed: macOS 15+

## See Also

### Objects

- [DeviceInformationResponse.QueryResponses.AccessibilitySettings](accessibilitysettings-data.dictionary.md): The response dictionary that contains the devices accessibility settings.
- [DeviceInformationResponse.QueryResponses.AutoSetupAdminAccountsItem](autosetupadminaccountsitem.md): The response dictionary that contains the administrator setup information.
- [DeviceInformationResponse.QueryResponses.MDMOptions](mdmoptions-data.dictionary.md): The response dictionary that contains MDM options.
- [DeviceInformationResponse.QueryResponses.OrganizationInfo](organizationinfo-data.dictionary.md): The response dictionary that contains organization information.
- [DeviceInformationResponse.QueryResponses.ServiceSubscriptionProperty](servicesubscriptionproperty.md): The response dictionary that contains information about the active service subscription.
- [DeviceInformationResponse.QueryResponses.SoftwareUpdateSettings](softwareupdatesettings-data.dictionary.md): Deprecated. The response dictionary that contains information about the Software Update pane in Settings.

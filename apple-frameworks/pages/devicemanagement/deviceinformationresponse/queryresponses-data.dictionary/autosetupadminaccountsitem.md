> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/deviceinformationresponse/queryresponses-data.dictionary/autosetupadminaccountsitem

# DeviceInformationResponse.QueryResponses.AutoSetupAdminAccountsItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.11+

The response dictionary that contains the administrator setup information.

## Declaration

```
object DeviceInformationResponse.QueryResponses.AutoSetupAdminAccountsItem
```

## Properties

- `GUID` — `string`: The `GeneratedUID` of the administrator account.
- `shortName` — `string`: The short name of the administrator account.

## See Also

### Objects

- [DeviceInformationResponse.QueryResponses.AccessibilitySettings](accessibilitysettings-data.dictionary.md): The response dictionary that contains the devices accessibility settings.
- [DeviceInformationResponse.QueryResponses.MDMOptions](mdmoptions-data.dictionary.md): The response dictionary that contains MDM options.
- [DeviceInformationResponse.QueryResponses.OSUpdateSettings](osupdatesettings-data.dictionary.md): Deprecated. The response dictionary that contains operating system update settings.
- [DeviceInformationResponse.QueryResponses.OrganizationInfo](organizationinfo-data.dictionary.md): The response dictionary that contains organization information.
- [DeviceInformationResponse.QueryResponses.ServiceSubscriptionProperty](servicesubscriptionproperty.md): The response dictionary that contains information about the active service subscription.
- [DeviceInformationResponse.QueryResponses.SoftwareUpdateSettings](softwareupdatesettings-data.dictionary.md): Deprecated. The response dictionary that contains information about the Software Update pane in Settings.

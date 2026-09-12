> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/deviceinformationresponse/queryresponses-data.dictionary/organizationinfo-data.dictionary](https://developer.apple.com/documentation/devicemanagement/deviceinformationresponse/queryresponses-data.dictionary/organizationinfo-data.dictionary)

# DeviceInformationResponse.QueryResponses.OrganizationInfo

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.1+ · watchOS 10.0+

The response dictionary that contains organization information.

## Declaration

```
object DeviceInformationResponse.QueryResponses.OrganizationInfo
```

## Properties

- `OrganizationAddress` — `string`: The organization’s address. Use the LF character (`&#10`) to insert line breaks.
- `OrganizationEmail` — `string`: The organization’s support email address.
- `OrganizationMagic` — `string`: A unique identifier for the various services a single organization manages.
- `OrganizationName` — `string` (required): A string that describes the organization operating the MDM server.
- `OrganizationPhone` — `string`: The organization’s phone number.

## See Also

### Objects

- [DeviceInformationResponse.QueryResponses.AccessibilitySettings](accessibilitysettings-data.dictionary.md): The response dictionary that contains the devices accessibility settings.
- [DeviceInformationResponse.QueryResponses.AutoSetupAdminAccountsItem](autosetupadminaccountsitem.md): The response dictionary that contains the administrator setup information.
- [DeviceInformationResponse.QueryResponses.MDMOptions](mdmoptions-data.dictionary.md): The response dictionary that contains MDM options.
- [DeviceInformationResponse.QueryResponses.OSUpdateSettings](osupdatesettings-data.dictionary.md): Deprecated. The response dictionary that contains operating system update settings.
- [DeviceInformationResponse.QueryResponses.ServiceSubscriptionProperty](servicesubscriptionproperty.md): The response dictionary that contains information about the active service subscription.
- [DeviceInformationResponse.QueryResponses.SoftwareUpdateSettings](softwareupdatesettings-data.dictionary.md): Deprecated. The response dictionary that contains information about the Software Update pane in Settings.

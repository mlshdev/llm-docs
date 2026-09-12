> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/deviceinformationresponse/queryresponses-data.dictionary/softwareupdatesettings-data.dictionary](https://developer.apple.com/documentation/devicemanagement/deviceinformationresponse/queryresponses-data.dictionary/softwareupdatesettings-data.dictionary)

# DeviceInformationResponse.QueryResponses.SoftwareUpdateSettings

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 14.5+ (deprecated in 26.0) · iPadOS 14.5+ (deprecated in 26.0) · Mac Catalyst 14.5+ (deprecated in 26.0)

The response dictionary that contains information about the Software Update pane in Settings.

## Declaration

```
object DeviceInformationResponse.QueryResponses.SoftwareUpdateSettings
```

## Properties

- `RecommendationCadence` — `integer`: ~~Which software updates to present to the user.~~

  ~~\- `0`: Allows all updates (the default value).~~ ~~\- `1`: Allows only older updates.~~ ~~\- `2`: Allows only newer updates.~~

  ~~No effect if the device qualifies for only a single update.~~

  ~~Deprecated: iOS 26+ | iPadOS 26+~~
  Removed: iOS 27+ | iPadOS 27+

## See Also

### Objects

- [DeviceInformationResponse.QueryResponses.AccessibilitySettings](accessibilitysettings-data.dictionary.md): The response dictionary that contains the devices accessibility settings.
- [DeviceInformationResponse.QueryResponses.AutoSetupAdminAccountsItem](autosetupadminaccountsitem.md): The response dictionary that contains the administrator setup information.
- [DeviceInformationResponse.QueryResponses.MDMOptions](mdmoptions-data.dictionary.md): The response dictionary that contains MDM options.
- [DeviceInformationResponse.QueryResponses.OSUpdateSettings](osupdatesettings-data.dictionary.md): Deprecated. The response dictionary that contains operating system update settings.
- [DeviceInformationResponse.QueryResponses.OrganizationInfo](organizationinfo-data.dictionary.md): The response dictionary that contains organization information.
- [DeviceInformationResponse.QueryResponses.ServiceSubscriptionProperty](servicesubscriptionproperty.md): The response dictionary that contains information about the active service subscription.

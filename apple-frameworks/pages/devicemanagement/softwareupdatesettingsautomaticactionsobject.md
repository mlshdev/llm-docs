> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/softwareupdatesettingsautomaticactionsobject](https://developer.apple.com/documentation/devicemanagement/softwareupdatesettingsautomaticactionsobject)

# SoftwareUpdateSettingsAutomaticActionsObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.4+ · visionOS 26.0+

This object configures various automatic Software Update functionality.

## Declaration

```
object SoftwareUpdateSettingsAutomaticActionsObject
```

## Properties

- `Download` — `string`: Specifies whether the user can control automatic downloads of available updates:

  - `Allowed` \- the user can enable or disable automatic downloads.
  - `AlwaysOn` \- automatic downloads are always enabled.
  - `AlwaysOff` \- automatic downloads are always disabled.

  Available: iOS 18+ | iPadOS 18+ | macOS 15+ | visionOS 26+  
  **Default:** `Allowed`  
  **Allowed values:** `Allowed`, `AlwaysOn`, `AlwaysOff`
- `InstallOSUpdates` — `string`: Specifies whether the user can control automatic installation of available updates:

  - `Allowed` \- the user can enable or disable automatic installation.
  - `AlwaysOn` \- automatic installations are always enabled.
  - `AlwaysOff` \- automatic installations are always disabled.

  > **Note**

  >  The device uses this only with automatic downloads enabled.  
  **Default:** `Allowed`  
  **Allowed values:** `Allowed`, `AlwaysOn`, `AlwaysOff`
- `InstallSecurityUpdate` — `string`: Specifies whether the user can control automatic installation of available security updates:

  - `Allowed` \- the user can enable or disable automatic installation.
  - `AlwaysOn` \- automatic installations are always enabled.
  - `AlwaysOff` \- automatic installations are always disabled.

  > **Note**

  >  The device uses this only with automatic downloads enabled.

  Available: iOS 18+ | iPadOS 18+ | macOS 15+ | visionOS 26+  
  **Default:** `Allowed`  
  **Allowed values:** `Allowed`, `AlwaysOn`, `AlwaysOff`

## See Also

### Objects

- [SoftwareUpdateSettingsBetaObject](softwareupdatesettingsbetaobject.md): This object configures the beta program settings for a device.
- [SoftwareUpdateSettingsDeferralsObject](softwareupdatesettingsdeferralsobject.md): This object configures the deferral of software updates. Background Security Improvements aren’t considered in `Major`, `Minor`, or `System` deferral mechanism.
- [SoftwareUpdateSettingsRapidSecurityResponseObject](softwareupdatesettingsrapidsecurityresponseobject.md): These configurations set user access to interacting with Background Security Improvement.

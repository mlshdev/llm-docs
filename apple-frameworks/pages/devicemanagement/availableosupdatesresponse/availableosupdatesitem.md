> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/availableosupdatesresponse/availableosupdatesitem](https://developer.apple.com/documentation/devicemanagement/availableosupdatesresponse/availableosupdatesitem)

# AvailableOSUpdatesResponse.AvailableOSUpdatesItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 9.0+ (deprecated in 26.0) · macOS 10.11+ (deprecated in 26.0) · tvOS 12.0+ (deprecated in 26.0)

The response dictionary that describes the available operating-system updates item.

> **Removed** Use the declarative management software update features instead.

## Declaration

```
object AvailableOSUpdatesResponse.AvailableOSUpdatesItem
```

## Properties

- `AllowsInstallLater` — `boolean`: ~~If `true`, download the software update and install it later.~~

  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+  
  **Default:** `false`
- `AppIdentifiersToClose` — `[string]` (required): ~~An array that contains app identifiers of apps to close so you can install the update.~~

  ~~Available: macOS 10.11+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `Build` — `string` (required): ~~The build number of the update.~~

  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `DeferredUntil` — `date`: ~~If present, the date when you want the update to install.~~

  ~~Available: macOS 10.12.4+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `DownloadSize` — `integer` (required): ~~The storage size necessary to download the software update. Prior to macOS 10.14, this only includes major operating-system updates. In macOS 10.14 and later, this also includes minor updates.~~

  ~~Available: iOS 9+ | iPadOS 9+ | macOS 10.12+ | tvOS 12+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `HumanReadableName` — `string` (required): ~~The human-readable name of the update in the current user’s current locale.~~

  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `HumanReadableNameLocale` — `string` (required): ~~The locale, in IOS639-1 Alpha-2 code format, of the `HumanReadableName` value.~~

  ~~Available: macOS 10.11+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `InstallSize` — `integer` (required): ~~The storage size necessary to install the update.~~

  ~~Available: iOS 9+ | iPadOS 9+ | tvOS 12+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `IsConfigDataUpdate` — `boolean`: ~~If `true`, this is an update to a configuration file.~~

  ~~Available: macOS 10.11+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+  
  **Default:** `false`
- `IsCritical` — `boolean`: ~~If `true`, this is a critical update.~~

  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+  
  **Default:** `false`
- `IsFirmwareUpdate` — `boolean`: ~~If `true`, this is an update to firmware.~~

  ~~Available: macOS 10.11+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+  
  **Default:** `false`
- `IsMajorOSUpdate` — `boolean`: ~~If `true`, this is a major update; for example, 10.15.x to 11.~~

  ~~Available: macOS 10.11.4+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+  
  **Default:** `false`
- `IsSecurityResponse` — `boolean` (required): ~~If `true`, this update is a Background Security Improvement.~~

  ~~Available: iOS 16.2+ | iPadOS 16.2+ | macOS 13.1+ | tvOS 16.2+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `MetadataURL` — `string` (required): ~~A URL where the MDM server can request additional localized names for this update. This key isn’t present for certain updates, such as mobile software updates (MSUs) or major OS updates.~~

  ~~Available: macOS 10.11+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `ProductKey` — `string` (required): ~~The product key that represents the update.~~

  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `ProductName` — `string` (required): ~~The product name; for example, *iOS*.~~

  ~~Available: iOS 9+ | iPadOS 9+ | tvOS 12+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `RequiresBootstrapToken` — `boolean`: ~~If `true`, the device can accept a Bootstrap Token from the MDM server instead of prompting for user authentication prior to installation. This only applies when `BootstrapTokenAllowedForAuthentication` is `true` in the [SecurityInfoResponse.SecurityInfo](../securityinforesponse/securityinfo-data.dictionary.md) response. This value is available for a Mac with Apple silicon in macOS 11 and later.~~

  ~~Available: macOS 11+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+  
  **Default:** `false`
- `RestartRequired` — `boolean`: ~~If `true`, the device restarts after installing the update.~~

  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+  
  **Default:** `false`
- `SupplementalBuildVersion` — `string`: ~~The build version for the Background Security Improvement update, for example, `13A999`, which is the same as `Build`.~~

  ~~Available: iOS 16.2+ | iPadOS 16.2+ | macOS 13.1+ | tvOS 16.2+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `SupplementalOSVersionExtra` — `string`: ~~The Background Security Improvement OS version suffix, for example, `(a)`. Only present if this is a Background Security Improvement update.~~

  ~~Available: iOS 16.2+ | iPadOS 16.2+ | macOS 13.1+ | tvOS 16.2+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `Version` — `string` (required): ~~The version of the update.~~

  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+

## See Also

### Objects

- [AvailableOSUpdatesResponse.ErrorChainItem](errorchainitem.md): Deprecated. A dictionary that describes an error chain item.

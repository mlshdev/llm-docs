> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/appsettingsprivacyobject](https://developer.apple.com/documentation/devicemanagement/appsettingsprivacyobject)

# AppSettingsPrivacyObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+

The dictionary of app settings.

## Declaration

```
object AppSettingsPrivacyObject
```

## Properties

- `PermissionDefaults` — `AppSettingsPrivacy_PermissionDefaultsObject`: The dictionary of app privacy permission defaults. Each key in the dictionary is an app identifier. The dictionary values represent the permission defaults that the device applies for each matching app.

  In iOS, the app identifier is a bundle ID, for example, “com.example.app”.

  In macOS, the app identifier is a composed identifier. The format of the composed identifier is “Bundle-ID {Designated-Requirement}”. “Bundle-ID” is the bundle identifier string of the app. “Designated-Requirement” is the designated requirement string the device uses to match the code signature of the app. For example, “com.example.app {anchor apple generic}”. The device only applies defaults for an app if its code signature matches the composed identifier.

## Topics

### Objects

- [AppSettingsPrivacy_PermissionDefaultsObject](appsettingsprivacy_permissiondefaultsobject.md): The dictionary of app privacy permission defaults. Each key in the dictionary is an app identifier. The dictionary values represent the permission defaults that the device applies for each matching app.

## See Also

### Objects

- [AppSettingsAllowedObject](appsettingsallowedobject.md): The dictionary of allowed app settings.

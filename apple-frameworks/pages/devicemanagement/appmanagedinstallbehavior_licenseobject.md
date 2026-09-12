> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/appmanagedinstallbehavior_licenseobject](https://developer.apple.com/documentation/devicemanagement/appmanagedinstallbehavior_licenseobject)

# AppManagedInstallBehavior_LicenseObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 26.0+ · visionOS 2.4+

A dictionary that describes the app’s license.

## Declaration

```
object AppManagedInstallBehavior_LicenseObject
```

## Properties

- `Assignment` — `string`: The type of license that the app uses for installation through the App Store, which is one of the following values:

  - `Device`: The app has a device license.
  - `User`: The app has a user license.

  This key needs to be present for App Store apps, when either `AppStoreID` or `BundleID` are present in the configuration.  
  **Allowed values:** `Device`, `User`

## Mentioned In

- [Installing, managing, updating, and removing apps](installing-managing-updating-and-removing-apps.md)

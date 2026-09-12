> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusappmanagedlist](https://developer.apple.com/documentation/devicemanagement/statusappmanagedlist)

# StatusAppManagedList

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 26.0+ · visionOS 2.4+

The status item that lists the device’s declarative managed apps.

## Declaration

```
object StatusAppManagedList
```

## Properties

- `app.managed.list` — `[StatusAppManagedListAppObject]` (required): An array of dictionaries that describe the device’s declarative managed apps.

## Mentioned In

- [Installing, managing, updating, and removing apps](installing-managing-updating-and-removing-apps.md)
- [Processing status for managed apps](processing-status-for-managed-apps.md)
- [Transferring management of apps to declarative management](transferring-management-of-apps-to-declarative-management.md)
- [Implementing Platform SSO for unattended device enrollment](implementing-platform-sso-for-unattended-device-enrollment.md)

<a id="Discussion"></a>

## Discussion

<a id="Status-item-availability"></a>

### Status item availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | iOS, macOS, Shared iPad, visionOS |
| Allowed in device enrollment | iOS, Shared iPad, visionOS |
| Allowed in user enrollment | iOS, macOS, Shared iPad, visionOS |
| Allowed in local enrollment | N/A |
| Allowed in system scope | iOS, macOS, Shared iPad, visionOS |
| Allowed in user scope | macOS |

<a id="Reason-Codes"></a>

### Reason Codes

- `Error.AppStoreDisabled`: The App Store is disabled.
- `Error.DownloadFailed`: The app download failed.

  - `Timestamp`: (string) The RFC 3339 timestamp of the last download failure.
- `Error.DuplicateConfiguredApp`: The app is already being managed.
- `Error.InstallFailed`: The app install failed.

  - `Timestamp`: (string) The RFC 3339 timestamp of the last install failure.
- `Error.InvalidAppID`: The app id could not be found.
- `Error.InvalidCodeSignature`: The code signature of the app does not match the composed identifier, and the app cannot be managed.
- `Error.IsSystemApp`: The app is a system app that cannot be managed.
- `Error.LicenseNotFound`: A license for the app was not available.
- `Error.NotAnApp`: The downloaded data is not a valid app.
- `Error.NotSupported`: The app is not supported on this device.
- `Error.UnmanagedAppAlreadyInstalled`: An unmanaged app is already installed and cannot be managed.
- `Error.UserRejected`: The user rejected management of the app.
- `Info.UpdateAvailable`: An update is available for the app.
- `Error.UpdateFailed`: The app update failed.

  - `Timestamp`: (string) The RFC 3339 timestamp of the last update failure.

<a id="Status-item-example"></a>

### Status item example

**New or updated app**

Reports a new or updated app.

```json
{
    "app": {
        "managed": {
            "list": [
                {
                    "identifier": "com.example.productivity",
                    "declaration-identifier": "com.example.app-management",
                    "name": "Productivity App",
                    "external-version-id": 845960,
                    "version": "5.2.1",
                    "short-version": "5.2.1",
                    "state": "managed"
                }
            ]
        }
    }
}
```

**Removed app**

Reports a removed app.

```json
{
    "app": {
        "managed": {
            "list": [
                {
                    "identifier": "com.example.productivity",
                    "_removed": true
                }
            ]
        }
    }
}
```

## Topics

### Objects

- [StatusAppManagedListAppObject](statusappmanagedlistappobject.md): A managed app.

## See Also

### App and package items

- [StatusMDMApp](statusmdmapp.md): The status item that lists the devices’s MDM-installed apps.
- [StatusPackageList](statuspackagelist.md): The status item that lists the device’s declarative packages.

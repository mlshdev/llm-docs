> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statuspackagelist](https://developer.apple.com/documentation/devicemanagement/statuspackagelist)

# StatusPackageList

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 26.0+

The status item that lists the device’s declarative packages.

## Declaration

```
object StatusPackageList
```

## Properties

- `package.list` — `[StatusPackageListPackageObject]` (required): An array of dictionaries that describe the device’s declarative packages.

## Mentioned In

- [Installing packages](installing-packages.md)

<a id="Discussion"></a>

## Discussion

<a id="Status-item-availability"></a>

### Status item availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | macOS |
| Allowed in device enrollment | N/A |
| Allowed in user enrollment | N/A |
| Allowed in local enrollment | N/A |
| Allowed in system scope | macOS |
| Allowed in user scope | N/A |

<a id="Reason-Codes"></a>

### Reason Codes

- `Error.DownloadFailed`: The package download failed.

  - `Timestamp`: (string) The RFC 3339 timestamp of the last download failure.
- `Error.InstallFailed`: The package install failed.

  - `Timestamp`: (string) The RFC 3339 timestamp of the last install failure.

<a id="Status-item-example"></a>

### Status item example

**New or updated package**

Reports a new or updated package.

```json
{
    "package": {
        "list": [
            {
                "identifier": "com.example.package.enterprise-tools",
                "declaration-identifier": "com.example.package-management",
                "name": "Enterprise Tools",
                "version": "2.1.0",
                "state": "installed"
            }
        ]
    }
}
```

**Removed package**

Reports a removed package.

```json
{
    "package": {
        "list": [
            {
                "identifier": "com.example.package.enterprise-tools",
                "_removed": true
            }
        ]
    }
}
```

## Topics

### Objects

- [StatusPackageListPackageObject](statuspackagelistpackageobject.md): A dictionary that describes a declarative package.

## See Also

### App and package items

- [StatusAppManagedList](statusappmanagedlist.md): The status item that lists the device’s declarative managed apps.
- [StatusMDMApp](statusmdmapp.md): The status item that lists the devices’s MDM-installed apps.

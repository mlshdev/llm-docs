> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusmdmapp](https://developer.apple.com/documentation/devicemanagement/statusmdmapp)

# StatusMDMApp

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 10.0+

The status item that lists the devices’s MDM-installed apps.

## Declaration

```
object StatusMDMApp
```

## Properties

- `mdm.app` — `[StatusMDMAppAppObject]` (required): The list of apps. The response doesn’t include apps that Declarative Device Management manages.

## Mentioned In

- [Transferring management of apps to declarative management](transferring-management-of-apps-to-declarative-management.md)

<a id="Discussion"></a>

## Discussion

<a id="Status-item-availability"></a>

### Status item availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | iOS, Shared iPad, tvOS, visionOS, watchOS |
| Allowed in device enrollment | iOS, Shared iPad, tvOS, visionOS |
| Allowed in user enrollment | iOS, Shared iPad, visionOS |
| Allowed in local enrollment | N/A |
| Allowed in system scope | iOS, Shared iPad, tvOS, visionOS, watchOS |
| Allowed in user scope | Shared iPad |

<a id="Status-item-example"></a>

### Status item example

**New or updated app**

Reports a new or updated app.

```json
{
    "mdm": {
        "app": [
            {
                "identifier": "com.example.enterprise.app",
                "name": "Enterprise App",
                "version": "3.1.0",
                "short-version": "3.1.0",
                "state": "managed"
            }
        ]
    }
}
```

**Removed app**

Reports a removed app.

```json
{
    "mdm": {
        "app": [
            {
                "identifier": "com.example.enterprise.app",
                "_removed": true
            }
        ]
    }
}
```

## Topics

### Objects

- [StatusMDMAppAppObject](statusmdmappappobject.md): A status report that contains details about an MDM-installed app.

## See Also

### App and package items

- [StatusAppManagedList](statusappmanagedlist.md): The status item that lists the device’s declarative managed apps.
- [StatusPackageList](statuspackagelist.md): The status item that lists the device’s declarative packages.

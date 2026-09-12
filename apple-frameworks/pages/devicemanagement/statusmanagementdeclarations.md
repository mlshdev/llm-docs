> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusmanagementdeclarations](https://developer.apple.com/documentation/devicemanagement/statusmanagementdeclarations)

# StatusManagementDeclarations

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 10.0+

The status item that reports the device’s processed declarations.

## Declaration

```
object StatusManagementDeclarations
```

## Properties

- `management.declarations` — `StatusManagementDeclarationsDeclarationsObject` (required): A collection of the client’s processed declarations.

## Mentioned In

- [Installing, managing, updating, and removing apps](installing-managing-updating-and-removing-apps.md)
- [Installing packages](installing-packages.md)

<a id="Discussion"></a>

## Discussion

The name of the declaration status item is `management.declarations`.

<a id="Status-item-availability"></a>

### Status item availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | iOS, macOS, Shared iPad, tvOS, visionOS, watchOS |
| Allowed in device enrollment | iOS, Shared iPad, tvOS, visionOS |
| Allowed in user enrollment | iOS, macOS, Shared iPad, visionOS |
| Allowed in local enrollment | N/A |
| Allowed in system scope | iOS, macOS, Shared iPad, tvOS, visionOS, watchOS |
| Allowed in user scope | macOS, Shared iPad |

<a id="Status-item-example"></a>

### Status item example

```json
{
    "management": {
        "declarations": {
            "activations": [
                {
                    "identifier": "com.example.activation.main",
                    "server-token": "A1B2C3D4-E5F6-7890-ABCD-EF1234567890",
                    "active": true,
                    "valid": "valid"
                }
            ],
            "configurations": [
                {
                    "identifier": "com.example.config.passcode",
                    "server-token": "B2C3D4E5-F6A7-8901-BCDE-F01234567891",
                    "active": true,
                    "valid": "valid"
                }
            ],
            "assets": [],
            "management": []
        }
    }
}
```

## Topics

### Objects

- [StatusManagementDeclarationsDeclarationsObject](statusmanagementdeclarationsdeclarationsobject.md): A collection of the client’s processed declarations.

## See Also

### Management items

- [StatusManagementClientCapabilities](statusmanagementclientcapabilities.md): The status item that reports the devices’s protocol capabilities.

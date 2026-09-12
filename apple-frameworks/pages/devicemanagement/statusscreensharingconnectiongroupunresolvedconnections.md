> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusscreensharingconnectiongroupunresolvedconnections](https://developer.apple.com/documentation/devicemanagement/statusscreensharingconnectiongroupunresolvedconnections)

# StatusScreenSharingConnectionGroupUnresolvedConnections

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 14.1+

The status item that lists connection groups with member connection references that the device couldn’t resolve.

## Declaration

```
object StatusScreenSharingConnectionGroupUnresolvedConnections
```

## Properties

- `screensharing.connection.group.unresolved-connection` — `[StatusScreenSharingConnectionGroupUnresolvedConnectionsUnresolvedGroupObject]` (required): The status item that contains an array of unresolved connection groups.

<a id="Discussion"></a>

## Discussion

<a id="Status-item-availability"></a>

### Status item availability

|  |  |
| --- | --- |
| Allowed in supervised enrollment | macOS |
| Allowed in device enrollment | N/A |
| Allowed in user enrollment | macOS |
| Allowed in local enrollment | macOS |
| Allowed in system scope | macOS |
| Allowed in user scope | macOS |

<a id="Status-item-example"></a>

### Status item example

**New or updated connection group**

Reports a new or updated connection group.

```json
{
    "screensharing": {
        "connection": {
            "group": {
                "unresolved-connection": [
                    {
                        "identifier": "D4E5F6A7-B8C9-0123-DEFA-123456789012",
                        "unresolved_connections": [
                            "E5F6A7B8-C9D0-1234-EFAB-234567890123"
                        ]
                    }
                ]
            }
        }
    }
}
```

**Removed connection group**

Reports a removed connection group.

```json
{
    "screensharing": {
        "connection": {
            "group": {
                "unresolved-connection": [
                    {
                        "identifier": "D4E5F6A7-B8C9-0123-DEFA-123456789012",
                        "_removed": true
                    }
                ]
            }
        }
    }
}
```

## Topics

### Objects

- [StatusScreenSharingConnectionGroupUnresolvedConnectionsUnresolvedGroupObject](statusscreensharingconnectiongroupunresolvedconnectionsunresolvedgroupobject.md): The status item that contains an unresolved connection group.

## See Also

### Miscellaneous items

- [StatusServicesBackgroundTask](statusservicesbackgroundtask.md): The status item that reports the device’s background task details.

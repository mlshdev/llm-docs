> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusappmanagedliststatusreasonobject](https://developer.apple.com/documentation/devicemanagement/statusappmanagedliststatusreasonobject)

# StatusAppManagedListStatusReasonObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 17.2+ · macOS 26.0+ · visionOS 2.4+

Information about a status error.

## Declaration

```
object StatusAppManagedListStatusReasonObject
```

## Properties

- `code` — `string` (required): A code for the state.
- `description` — `string`: A description of the state.
- `details` — `StatusAppManagedListStatusReason_DetailsObject`: A dictionary that contains additional details about the state.

## Topics

### Objects

- [StatusAppManagedListStatusReason_DetailsObject](statusappmanagedliststatusreason_detailsobject.md): A dictionary that contains additional details about the state.

## See Also

### Objects

- [StatusAppManagedListManagedConfigurationObject](statusappmanagedlistmanagedconfigurationobject.md): The status of app or extension managed configurations. This key is only present when managed configurations are available for the managed app or any of its extensions.

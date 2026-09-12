> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statuspackageliststatusreasonobject](https://developer.apple.com/documentation/devicemanagement/statuspackageliststatusreasonobject)

# StatusPackageListStatusReasonObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** macOS 26.0+

Information about a status error.

## Declaration

```
object StatusPackageListStatusReasonObject
```

## Properties

- `code` — `string` (required): A code for the state.
- `description` — `string`: A description of the state.
- `details` — `StatusPackageListStatusReason_DetailsObject`: A dictionary that contains additional details about the state.

## Topics

### Objects

- [StatusPackageListStatusReason_DetailsObject](statuspackageliststatusreason_detailsobject.md): A dictionary that contains additional details about the state.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusmanagementdeclarationsstatusreasonobject](https://developer.apple.com/documentation/devicemanagement/statusmanagementdeclarationsstatusreasonobject)

# StatusManagementDeclarationsStatusReasonObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 10.0+

Information about a status error.

## Declaration

```
object StatusManagementDeclarationsStatusReasonObject
```

## Properties

- `code` — `string` (required): The error code for this error.
- `description` — `string`: The description for this error.
- `details` — `StatusManagementDeclarationsStatusReason_DetailsObject`: A dictionary that contains further details about this error.

## Topics

### Objects

- [StatusManagementDeclarationsStatusReason_DetailsObject](statusmanagementdeclarationsstatusreason_detailsobject.md): A dictionary that contains further details about this error.

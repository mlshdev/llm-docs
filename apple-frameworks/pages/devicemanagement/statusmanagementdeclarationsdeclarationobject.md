> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusmanagementdeclarationsdeclarationobject](https://developer.apple.com/documentation/devicemanagement/statusmanagementdeclarationsdeclarationobject)

# StatusManagementDeclarationsDeclarationObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 10.0+

Status for a declaration processed by the client.

## Declaration

```
object StatusManagementDeclarationsDeclarationObject
```

## Properties

- `active` — `boolean` (required): If `true`, the declaration is active on the device.
- `identifier` — `string` (required): The `identifier` of the declaration this status report refers to.
- `reasons` — `[StatusManagementDeclarationsStatusReasonObject]`: The details of any client errors.
- `server-token` — `string` (required): The `ServerToken` of the declaration this status report refers to.
- `valid` — `string` (required): This string defines the validity of the declaration. If it’s `invalid`, the `reasons` property contains more details.
  **Allowed values:** `unknown`, `invalid`, `valid`

## Topics

### Objects

- [StatusManagementDeclarationsStatusReasonObject](statusmanagementdeclarationsstatusreasonobject.md): Information about a status error.

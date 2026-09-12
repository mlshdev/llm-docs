> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statusmanagementdeclarationsdeclarationsobject](https://developer.apple.com/documentation/devicemanagement/statusmanagementdeclarationsdeclarationsobject)

# StatusManagementDeclarationsDeclarationsObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 10.0+

A collection of the client’s processed declarations.

## Declaration

```
object StatusManagementDeclarationsDeclarationsObject
```

## Properties

- `activations` — `[StatusManagementDeclarationsDeclarationObject]` (required): An array of declarations that represent the client’s processed activation types.
- `assets` — `[StatusManagementDeclarationsDeclarationObject]` (required): An array of declarations that represent the client’s processed assets.
- `configurations` — `[StatusManagementDeclarationsDeclarationObject]` (required): An array of declarations that represent the client’s processed configuration types.
- `management` — `[StatusManagementDeclarationsDeclarationObject]` (required): An array of declarations that represent the client’s processed declaration types.

## Topics

### Objects

- [StatusManagementDeclarationsDeclarationObject](statusmanagementdeclarationsdeclarationobject.md): Status for a declaration processed by the client.

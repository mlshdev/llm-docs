> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/statuspackageliststatusreasonobject

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

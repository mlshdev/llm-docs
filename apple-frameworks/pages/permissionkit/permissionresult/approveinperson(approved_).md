> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/permissionkit/permissionresult/approveinperson(approved:)

# PermissionResult.approveInPerson(approved:)

**Framework:** PermissionKit  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The user tapped “Approve in Person” and finalized an answer choice.

## Declaration

```swift
case approveInPerson(approved: Bool)
```

## Parameters

- `approved`: `true` if the user picked an approval answer choice in the response UI, `false` if they picked a denial.

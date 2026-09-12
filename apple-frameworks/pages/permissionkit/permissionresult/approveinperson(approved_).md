> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/permissionkit/permissionresult/approveinperson(approved:)](https://developer.apple.com/documentation/permissionkit/permissionresult/approveinperson(approved:))

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

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/statussoftwareupdatefailurereasondictionaryobject](https://developer.apple.com/documentation/devicemanagement/statussoftwareupdatefailurereasondictionaryobject)

# StatusSoftwareUpdateFailureReasonDictionaryObject

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 18.4+ · visionOS 26.0+

Details about a software update failure.

## Declaration

```
object StatusSoftwareUpdateFailureReasonDictionaryObject
```

## Properties

- `count` — `integer` (required): The number of times the current software update failed. If there are no failures, or no pending software update, this is `0`.
- `reason` — `string`: If present, this describes the reason for last software update failure. This key isn’t present if there are no failures or no pending software update.
- `timestamp` — `string`: If present, this is the RFC 3339 timestamp of the last software update failure. This key isn’t present if there are no failures or no pending software update.

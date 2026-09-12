> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/scheduleosupdatescanresponse/errorchainitem](https://developer.apple.com/documentation/devicemanagement/scheduleosupdatescanresponse/errorchainitem)

# ScheduleOSUpdateScanResponse.ErrorChainItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** macOS 10.11+ (deprecated in 26.0)

A dictionary that describes an error chain item.

> **Removed** Use the declarative management software update features instead.

## Declaration

```
object ScheduleOSUpdateScanResponse.ErrorChainItem
```

## Properties

- `ErrorCode` — `integer` (required): The error code.
- `ErrorDomain` — `string` (required): The error domain.
- `LocalizedDescription` — `string` (required): A description of the error in the device’s localized language.
- `USEnglishDescription` — `string`: A description of the error in U.S. English.

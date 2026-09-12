> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/scheduleosupdateresponse/errorchainitem](https://developer.apple.com/documentation/devicemanagement/scheduleosupdateresponse/errorchainitem)

# ScheduleOSUpdateResponse.ErrorChainItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 9.0+ (deprecated in 26.0) · macOS 10.11+ (deprecated in 26.0) · tvOS 12.0+ (deprecated in 26.0)

A dictionary that describes an error chain item.

> **Removed** Use the declarative management software update features instead.

## Declaration

```
object ScheduleOSUpdateResponse.ErrorChainItem
```

## Properties

- `ErrorCode` — `integer` (required): The error code.
- `ErrorDomain` — `string` (required): The error domain.
- `LocalizedDescription` — `string` (required): A description of the error in the device’s localized language.
- `USEnglishDescription` — `string`: A description of the error in U.S. English.

## See Also

### Objects

- [ScheduleOSUpdateResponse.UpdateResultsItem](updateresultsitem.md): Deprecated. The response dictionary that describes the result of processing an operating-system update.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/clearactivationlockbypasscoderesponse/errorchainitem](https://developer.apple.com/documentation/devicemanagement/clearactivationlockbypasscoderesponse/errorchainitem)

# ClearActivationLockBypassCodeResponse.ErrorChainItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 7.1+ · macOS 10.15+ · visionOS 2.0+

A dictionary that describes an error chain item.

## Declaration

```
object ClearActivationLockBypassCodeResponse.ErrorChainItem
```

## Properties

- `ErrorCode` — `integer` (required): The error code.
- `ErrorDomain` — `string` (required): The error domain.
- `LocalizedDescription` — `string` (required): A description of the error in the device’s localized language.
- `USEnglishDescription` — `string`: A description of the error in U.S. English.

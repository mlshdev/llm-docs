> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/validateapplicationsresponse/errorchainitem](https://developer.apple.com/documentation/devicemanagement/validateapplicationsresponse/errorchainitem)

# ValidateApplicationsResponse.ErrorChainItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.2+ · iPadOS 9.2+ · Mac Catalyst 9.2+ · tvOS 10.2+ · visionOS 1.1+

A dictionary that describes an error chain item.

## Declaration

```
object ValidateApplicationsResponse.ErrorChainItem
```

## Properties

- `ErrorCode` — `integer` (required): The error code.
- `ErrorDomain` — `string` (required): The error domain.
- `LocalizedDescription` — `string` (required): A description of the error in the device’s localized language.
- `USEnglishDescription` — `string`: A description of the error in U.S. English.

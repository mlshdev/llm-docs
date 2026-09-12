> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/restrictionsresponse/errorchainitem](https://developer.apple.com/documentation/devicemanagement/restrictionsresponse/errorchainitem)

# RestrictionsResponse.ErrorChainItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · tvOS 9.0+ · visionOS 1.1+ · watchOS 10.0+

A dictionary that describes an error chain item.

## Declaration

```
object RestrictionsResponse.ErrorChainItem
```

## Properties

- `ErrorCode` — `integer` (required): The error code.
- `ErrorDomain` — `string` (required): The error domain.
- `LocalizedDescription` — `string` (required): A description of the error in the device’s localized language.
- `USEnglishDescription` — `string`: A description of the error in U.S. English.

## See Also

### Objects

- [RestrictionsResponse.GlobalRestrictions](globalrestrictions-data.dictionary.md): A dictionary that contains the global restrictions in effect.
- [RestrictionsResponse.ProfileRestrictions](profilerestrictions-data.dictionary.md): A dictionary that contains restrictions from each profile.

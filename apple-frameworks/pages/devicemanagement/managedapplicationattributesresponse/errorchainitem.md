> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/managedapplicationattributesresponse/errorchainitem](https://developer.apple.com/documentation/devicemanagement/managedapplicationattributesresponse/errorchainitem)

# ManagedApplicationAttributesResponse.ErrorChainItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 7.0+ · tvOS 10.2+ · visionOS 1.1+ · watchOS 10.0+

A dictionary that describes an error chain item.

## Declaration

```
object ManagedApplicationAttributesResponse.ErrorChainItem
```

## Properties

- `ErrorCode` — `integer` (required): The error code.
- `ErrorDomain` — `string` (required): The error domain.
- `LocalizedDescription` — `string` (required): A description of the error in the device’s localized language.
- `USEnglishDescription` — `string`: A description of the error in U.S. English.

## See Also

### Objects

- [ManagedApplicationAttributesResponse.ApplicationAttributesItem](applicationattributesitem.md): A dictionary that contains a managed app attributes item.

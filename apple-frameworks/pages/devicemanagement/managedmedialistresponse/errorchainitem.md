> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/managedmedialistresponse/errorchainitem](https://developer.apple.com/documentation/devicemanagement/managedmedialistresponse/errorchainitem)

# ManagedMediaListResponse.ErrorChainItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+

A dictionary that describes an error chain item.

## Declaration

```
object ManagedMediaListResponse.ErrorChainItem
```

## Properties

- `ErrorCode` — `integer` (required): The error code.
- `ErrorDomain` — `string` (required): The error domain.
- `LocalizedDescription` — `string` (required): A description of the error in the device’s localized language.
- `USEnglishDescription` — `string`: A description of the error in U.S. English.

## See Also

### Objects

- [ManagedMediaListResponse.BooksItem](booksitem.md): A dictionary that describes a managed book.

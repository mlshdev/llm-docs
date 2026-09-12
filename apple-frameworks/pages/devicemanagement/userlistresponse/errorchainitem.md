> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/userlistresponse/errorchainitem](https://developer.apple.com/documentation/devicemanagement/userlistresponse/errorchainitem)

# UserListResponse.ErrorChainItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.3+ · iPadOS 9.3+ · Mac Catalyst 9.3+ · macOS 10.13+

A dictionary that describes an error chain item.

## Declaration

```
object UserListResponse.ErrorChainItem
```

## Properties

- `ErrorCode` — `integer` (required): The error code.
- `ErrorDomain` — `string` (required): The error domain.
- `LocalizedDescription` — `string` (required): A description of the error in the device’s localized language.
- `USEnglishDescription` — `string`: A description of the error in U.S. English.

## See Also

### Objects

- [UserListResponse.UsersItem](usersitem.md): A dictionary that contains information about an active account on a device.

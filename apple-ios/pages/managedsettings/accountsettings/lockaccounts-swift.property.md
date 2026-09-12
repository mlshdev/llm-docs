> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/accountsettings/lockaccounts-swift.property](https://developer.apple.com/documentation/managedsettings/accountsettings/lockaccounts-swift.property)

# lockAccounts

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A Boolean value that indicates whether to prevent the user from changing their account information.

## Declaration

```swift
var lockAccounts: Bool? { get set }
```

<a id="discussion"></a>

## Discussion

Your app can enable or disable changes to the user’s account settings. The default value is `nil`.

## See Also

### Constraining accounts

- [lockAccounts](lockaccounts-swift.type.property.md): A description of the setting that controls whether a user can modify their account information.

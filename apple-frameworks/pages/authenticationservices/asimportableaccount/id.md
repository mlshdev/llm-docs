> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportableaccount/id](https://developer.apple.com/documentation/authenticationservices/asimportableaccount/id)

# id

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A unique identifier for the account.

## Declaration

```swift
var id: Data
```

<a id="discussion"></a>

## Discussion

This property isn’t displayed to the person using the app.

## See Also

### Accessing account properties

- [userName](username.md): The username associated with the account.
- [email](email.md): The email address associated with this account.
- [fullName](fullname.md): The full name of the account owner, if provided.
- [collections](collections.md): The collections stored in this account.
- [ASImportableCollection](../asimportablecollection.md): A collection of items and subcollections for use in import and export.
- [items](items.md): All items stored in the account.
- [ASImportableItem](../asimportableitem.md): An item for use in import and export.

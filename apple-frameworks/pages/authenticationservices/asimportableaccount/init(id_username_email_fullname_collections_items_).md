> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportableaccount/init(id:username:email:fullname:collections:items:)](https://developer.apple.com/documentation/authenticationservices/asimportableaccount/init(id:username:email:fullname:collections:items:))

# init(id:userName:email:fullName:collections:items:)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates an account instance from its required and optional properties.

## Declaration

```swift
init(id: Data, userName: String, email: String, fullName: String? = nil, collections: [ASImportableCollection], items: [ASImportableItem])
```

## Parameters

- `id`: A unique identifier for the account.
- `userName`: The username associated with the account.
- `email`: The email address associated with the account.
- `fullName`: The full name of the account owner, if provided.
- `collections`: An array of [ASImportableCollection](../asimportablecollection.md) instances to store in the account.
- `items`: An array of [ASImportableItem](../asimportableitem.md) instances to store in the account.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportablelinkeditem/init(item:account:)](https://developer.apple.com/documentation/authenticationservices/asimportablelinkeditem/init(item:account:))

# init(item:account:)

**Framework:** Authentication Services  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Creates a linked item from the identifiers of an item and an account.

## Declaration

```swift
init(item: Data, account: Data? = nil)
```

## Parameters

- `item`: The [id](../asimportableitem/id.md) of the item linked by this `LinkedItem`.
- `account`: The [id](../asimportableaccount/id.md) of the Account to which this `LinkedItem` belongs, if any. Defaults to `nil`.

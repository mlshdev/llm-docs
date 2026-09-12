> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactitemchangeobserver/didupdate(_:)](https://developer.apple.com/documentation/contactprovider/contactitemchangeobserver/didupdate(_:))

# didUpdate(\_:)

**Framework:** ContactProvider  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Provides an array of new and updated contact items to the observer.

## Declaration

```swift
func didUpdate(_ items: [ContactItem])
```

## Parameters

- `items`: The new and updated items.

<a id="discussion"></a>

## Discussion

You can call this method multiple times to fulfill the [suggestedBatchSize](suggestedbatchsize.md). The observer creates the new contact items and updates the existing contact items with their new values.

## See Also

### Providing change data

- [ContactItem](../contactitem.md): An item in the contact database.
- [didDelete(\_:)](diddelete%28__%29.md): Provides an array of deleted contact item identifiers to the observer.
- [ContactItem.Identifier](../contactitem/identifier.md): The app’s identifier for an item in the contact database.

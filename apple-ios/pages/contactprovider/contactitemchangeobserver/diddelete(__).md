> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactitemchangeobserver/diddelete(_:)](https://developer.apple.com/documentation/contactprovider/contactitemchangeobserver/diddelete(_:))

# didDelete(\_:)

**Framework:** ContactProvider  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Provides an array of deleted contact item identifiers to the observer.

## Declaration

```swift
func didDelete(_ identifiers: [ContactItem.Identifier])
```

## Parameters

- `identifiers`: The identifiers of the deleted items.

<a id="discussion"></a>

## Discussion

You can call this method multiple times to fulfill the [suggestedBatchSize](suggestedbatchsize.md).

## See Also

### Providing change data

- [didUpdate(\_:)](didupdate%28__%29.md): Provides an array of new and updated contact items to the observer.
- [ContactItem](../contactitem.md): An item in the contact database.
- [ContactItem.Identifier](../contactitem/identifier.md): The app’s identifier for an item in the contact database.

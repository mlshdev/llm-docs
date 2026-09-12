> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactitemenumerating/enumerator(for:)](https://developer.apple.com/documentation/contactprovider/contactitemenumerating/enumerator(for:))

# enumerator(for:)

**Framework:** ContactProvider  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Provide an enumerator for the contact items collection.

## Declaration

```swift
func enumerator(for collection: ContactItem.Identifier) -> any ContactItemEnumerator
```

## Parameters

- `collection`: The collection to enumerate; defaults to [rootContainer](../contactitem/identifier/rootcontainer.md).

<a id="discussion"></a>

## Discussion

The collection represents all contacts for the domain (`ContactItem.Identifier.rootContainer`).

## See Also

### Providing an enumeration

- [ContactItem.Identifier](../contactitem/identifier.md): The app’s identifier for an item in the contact database.
- [ContactItemEnumerator](../contactitemenumerator.md): A protocol to provide enumerations of all contact items and changed contact items.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindexdelegate/data(for:itemidentifier:typeidentifier:)](https://developer.apple.com/documentation/corespotlight/cssearchableindexdelegate/data(for:itemidentifier:typeidentifier:))

# data(for:itemIdentifier:typeIdentifier:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Returns the data for the requested item during a drag-and-drop operation.

## Declaration

```swift
optional func data(for searchableIndex: CSSearchableIndex, itemIdentifier: String, typeIdentifier: String) throws -> Data
```

## Parameters

- `searchableIndex`: The index containing the requested searchable item.
- `itemIdentifier`: The unique identifier of the searchable item. Use this value to locate the item in your content.
- `typeIdentifier`: The type of data that you must provide. This parameter contains one of the values from the [providerDataTypeIdentifiers](../cssearchableitemattributeset/providerdatatypeidentifiers.md) property of the item’s attribute set.

<a id="return-value"></a>

## Return Value

A data object with the requested type of data.

<a id="discussion"></a>

## Discussion

If the attributes of your [CSSearchableItem](../cssearchableitem.md) contain one or more provider data types, the system may call this method to request one of those types. Use your implementation of this method to generate a data object with the requested type of data for the specified item. The system calls this method on your index’s delegate if your app is running, or the delegate in your Core delegate app extension if your app isn’t running.

Produce the data as quickly as possible so the app receiving the data can update its interface. The system calls this method at the end of a drag-and-drop operation, while the receiving app waits.

## See Also

### Providing data for an item

- [searchableItems(forIdentifiers:searchableItemsHandler:)](searchableitems%28foridentifiers_searchableitemshandler_%29.md): Requests that the delegate provide searchable items for the provided identifiers.
- [searchableItems(forIdentifiers:protectionClass:searchableItemsHandler:)](searchableitems%28foridentifiers_protectionclass_searchableitemshandler_%29.md)
- [fileURL(for:itemIdentifier:typeIdentifier:inPlace:)](fileurl%28for_itemidentifier_typeidentifier_inplace_%29.md): Returns a file URL for the requested item during a drag-and-drop operation.

# dataForSearchableIndex:itemIdentifier:typeIdentifier:error: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Returns the data for the requested item during a drag-and-drop operation.

## Declaration

```objectivec
- (NSData *) dataForSearchableIndex:(CSSearchableIndex *) searchableIndex itemIdentifier:(NSString *) itemIdentifier typeIdentifier:(NSString *) typeIdentifier error:(NSError **) outError;
```

## Parameters

- `searchableIndex`: The index containing the requested searchable item.
- `itemIdentifier`: The unique identifier of the searchable item. Use this value to locate the item in your content.
- `typeIdentifier`: The type of data that you must provide. This parameter contains one of the values from the [providerDataTypeIdentifiers](../cssearchableitemattributeset/providerdatatypeidentifiers.md) property of the item’s attribute set.
- `outError`: A pointer to an error object variable. If you can’t return the requested data, use this parameter to return an error object that indicates the reason for the failure.

<a id="return-value"></a>

## Return Value

A data object with the requested type of data.

<a id="discussion"></a>

## Discussion

If the attributes of your [CSSearchableItem](../cssearchableitem.md) contain one or more provider data types, the system may call this method to request one of those types. Use your implementation of this method to generate a data object with the requested type of data for the specified item. The system calls this method on your index’s delegate if your app is running, or the delegate in your Core delegate app extension if your app isn’t running.

Produce the data as quickly as possible so the app receiving the data can update its interface. The system calls this method at the end of a drag-and-drop operation, while the receiving app waits.

## See Also

### Providing data for an item

- [searchableItemsForIdentifiers:searchableItemsHandler:](searchableitems%28foridentifiers_searchableitemshandler_%29.md): Requests that the delegate provide searchable items for the provided identifiers.
- [searchableItemsForIdentifiers:protectionClass:searchableItemsHandler:](searchableitems%28foridentifiers_protectionclass_searchableitemshandler_%29.md)
- [fileURLForSearchableIndex:itemIdentifier:typeIdentifier:inPlace:error:](fileurl%28for_itemidentifier_typeidentifier_inplace_%29.md): Returns a file URL for the requested item during a drag-and-drop operation.

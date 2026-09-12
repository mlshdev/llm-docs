> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindexdelegate/fileurl(for:itemidentifier:typeidentifier:inplace:)](https://developer.apple.com/documentation/corespotlight/cssearchableindexdelegate/fileurl(for:itemidentifier:typeidentifier:inplace:))

# fileURL(for:itemIdentifier:typeIdentifier:inPlace:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Returns a file URL for the requested item during a drag-and-drop operation.

## Declaration

```swift
optional func fileURL(for searchableIndex: CSSearchableIndex, itemIdentifier: String, typeIdentifier: String, inPlace: Bool) throws -> URL
```

## Parameters

- `searchableIndex`: The index containing the requested searchable item.
- `itemIdentifier`: The unique identifier of the searchable item. Use this value to locate the item in your content.
- `typeIdentifier`: The type of data that you must provide. This parameter contains one of the values from the [providerFileTypeIdentifiers](../cssearchableitemattributeset/providerfiletypeidentifiers.md) or [providerInPlaceFileTypeIdentifiers](../cssearchableitemattributeset/providerinplacefiletypeidentifiers.md) property of the item’s attribute set.
- `inPlace`: A Boolean that indicates whether to return the URL of the original file or a copy of the original file. This parameter is `true` for types you specified in the [providerInPlaceFileTypeIdentifiers](../cssearchableitemattributeset/providerinplacefiletypeidentifiers.md) property of the item’s attributes. If this parameter is `false`, create a copy of the file and return its URL.

<a id="return-value"></a>

## Return Value

A data object with the requested type of data.

<a id="discussion"></a>

## Discussion

If the attributes of your [CSSearchableItem](../cssearchableitem.md) contain one or more provider data types, the system may call this method to request one of those types. Use your implementation of this method to return the file URL for the requested item. The system calls this method on your index’s delegate if your app is running, or the delegate in your Core delegate app extension if your app isn’t running.

Produce the URL as quickly as possible so the app receiving the data can update its interface. The system calls this method at the end of a drag-and-drop operation, while the receiving app waits.

## See Also

### Providing data for an item

- [searchableItems(forIdentifiers:searchableItemsHandler:)](searchableitems%28foridentifiers_searchableitemshandler_%29.md): Requests that the delegate provide searchable items for the provided identifiers.
- [searchableItems(forIdentifiers:protectionClass:searchableItemsHandler:)](searchableitems%28foridentifiers_protectionclass_searchableitemshandler_%29.md)
- [data(for:itemIdentifier:typeIdentifier:)](data%28for_itemidentifier_typeidentifier_%29.md): Returns the data for the requested item during a drag-and-drop operation.

# fileURLForSearchableIndex:itemIdentifier:typeIdentifier:inPlace:error: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Returns a file URL for the requested item during a drag-and-drop operation.

## Declaration

```objectivec
- (NSURL *) fileURLForSearchableIndex:(CSSearchableIndex *) searchableIndex itemIdentifier:(NSString *) itemIdentifier typeIdentifier:(NSString *) typeIdentifier inPlace:(BOOL) inPlace error:(NSError **) outError;
```

## Parameters

- `searchableIndex`: The index containing the requested searchable item.
- `itemIdentifier`: The unique identifier of the searchable item. Use this value to locate the item in your content.
- `typeIdentifier`: The type of data that you must provide. This parameter contains one of the values from the [providerFileTypeIdentifiers](../cssearchableitemattributeset/providerfiletypeidentifiers.md) or [providerInPlaceFileTypeIdentifiers](../cssearchableitemattributeset/providerinplacefiletypeidentifiers.md) property of the item’s attribute set.
- `inPlace`: A Boolean that indicates whether to return the URL of the original file or a copy of the original file. This parameter is `true` for types you specified in the [providerInPlaceFileTypeIdentifiers](../cssearchableitemattributeset/providerinplacefiletypeidentifiers.md) property of the item’s attributes. If this parameter is `false`, create a copy of the file and return its URL.
- `outError`: A pointer to an error object variable. If you can’t return the requested URL, use this parameter to return an error object that indicates the reason for the failure.

<a id="return-value"></a>

## Return Value

A data object with the requested type of data.

<a id="discussion"></a>

## Discussion

If the attributes of your [CSSearchableItem](../cssearchableitem.md) contain one or more provider data types, the system may call this method to request one of those types. Use your implementation of this method to return the file URL for the requested item. The system calls this method on your index’s delegate if your app is running, or the delegate in your Core delegate app extension if your app isn’t running.

Produce the URL as quickly as possible so the app receiving the data can update its interface. The system calls this method at the end of a drag-and-drop operation, while the receiving app waits.

## See Also

### Providing data for an item

- [searchableItemsForIdentifiers:searchableItemsHandler:](searchableitems%28foridentifiers_searchableitemshandler_%29.md): Requests that the delegate provide searchable items for the provided identifiers.
- [searchableItemsForIdentifiers:protectionClass:searchableItemsHandler:](searchableitems%28foridentifiers_protectionclass_searchableitemshandler_%29.md)
- [dataForSearchableIndex:itemIdentifier:typeIdentifier:error:](data%28for_itemidentifier_typeidentifier_%29.md): Returns the data for the requested item during a drag-and-drop operation.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindexdelegate/searchableitems(foridentifiers:searchableitemshandler:)](https://developer.apple.com/documentation/corespotlight/cssearchableindexdelegate/searchableitems(foridentifiers:searchableitemshandler:))

# searchableItems(forIdentifiers:searchableItemsHandler:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Requests that the delegate provide searchable items for the provided identifiers.

## Declaration

```swift
optional func searchableItems(forIdentifiers identifiers: [String], searchableItemsHandler: @escaping @Sendable ([CSSearchableItem]) -> Void)
```

```swift
optional func searchableItems(forIdentifiers identifiers: [String]) async -> [CSSearchableItem]
```

## Parameters

- `identifiers`: An array of strings that represent the identifiers.
- `searchableItemsHandler`: A method the framework calls that provides an array of [CSSearchableItem](../cssearchableitem.md) objects.

<a id="Discussion"></a>

## Discussion

Use this method to provide the framework with a list of identifiers to search for.

## See Also

### Providing data for an item

- [searchableItems(forIdentifiers:protectionClass:searchableItemsHandler:)](searchableitems%28foridentifiers_protectionclass_searchableitemshandler_%29.md)
- [data(for:itemIdentifier:typeIdentifier:)](data%28for_itemidentifier_typeidentifier_%29.md): Returns the data for the requested item during a drag-and-drop operation.
- [fileURL(for:itemIdentifier:typeIdentifier:inPlace:)](fileurl%28for_itemidentifier_typeidentifier_inplace_%29.md): Returns a file URL for the requested item during a drag-and-drop operation.

# searchableItemsForIdentifiers:searchableItemsHandler: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · visionOS 2.4+

Requests that the delegate provide searchable items for the provided identifiers.

## Declaration

```objectivec
- (void) searchableItemsForIdentifiers:(NSArray<NSString *> *) identifiers searchableItemsHandler:(void (^)(NSArray<CSSearchableItem *> *items)) searchableItemsHandler;
```

## Parameters

- `identifiers`: An array of strings that represent the identifiers.
- `searchableItemsHandler`: A method the framework calls that provides an array of [CSSearchableItem](../cssearchableitem.md) objects.

<a id="Discussion"></a>

## Discussion

Use this method to provide the framework with a list of identifiers to search for.

## See Also

### Providing data for an item

- [searchableItemsForIdentifiers:protectionClass:searchableItemsHandler:](searchableitems%28foridentifiers_protectionclass_searchableitemshandler_%29.md)
- [dataForSearchableIndex:itemIdentifier:typeIdentifier:error:](data%28for_itemidentifier_typeidentifier_%29.md): Returns the data for the requested item during a drag-and-drop operation.
- [fileURLForSearchableIndex:itemIdentifier:typeIdentifier:inPlace:error:](fileurl%28for_itemidentifier_typeidentifier_inplace_%29.md): Returns a file URL for the requested item during a drag-and-drop operation.

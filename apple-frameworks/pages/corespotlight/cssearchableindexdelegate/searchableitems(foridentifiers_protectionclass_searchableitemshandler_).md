> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cssearchableindexdelegate/searchableitems(foridentifiers:protectionclass:searchableitemshandler:)](https://developer.apple.com/documentation/corespotlight/cssearchableindexdelegate/searchableitems(foridentifiers:protectionclass:searchableitemshandler:))

# searchableItems(forIdentifiers:protectionClass:searchableItemsHandler:) (Swift)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
optional func searchableItems(forIdentifiers identifiers: [String], protectionClass: FileProtectionType, searchableItemsHandler: @escaping @Sendable ([CSSearchableItem]) -> Void)
```

```swift
optional func searchableItems(forIdentifiers identifiers: [String], protectionClass: FileProtectionType) async -> [CSSearchableItem]
```

## See Also

### Providing data for an item

- [searchableItems(forIdentifiers:searchableItemsHandler:)](searchableitems%28foridentifiers_searchableitemshandler_%29.md): Requests that the delegate provide searchable items for the provided identifiers.
- [data(for:itemIdentifier:typeIdentifier:)](data%28for_itemidentifier_typeidentifier_%29.md): Returns the data for the requested item during a drag-and-drop operation.
- [fileURL(for:itemIdentifier:typeIdentifier:inPlace:)](fileurl%28for_itemidentifier_typeidentifier_inplace_%29.md): Returns a file URL for the requested item during a drag-and-drop operation.

# searchableItemsForIdentifiers:protectionClass:searchableItemsHandler: (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (void) searchableItemsForIdentifiers:(NSArray<NSString *> *) identifiers protectionClass:(NSFileProtectionType) protectionClass searchableItemsHandler:(void (^)(NSArray<CSSearchableItem *> *items)) searchableItemsHandler;
```

## See Also

### Providing data for an item

- [searchableItemsForIdentifiers:searchableItemsHandler:](searchableitems%28foridentifiers_searchableitemshandler_%29.md): Requests that the delegate provide searchable items for the provided identifiers.
- [dataForSearchableIndex:itemIdentifier:typeIdentifier:error:](data%28for_itemidentifier_typeidentifier_%29.md): Returns the data for the requested item during a drag-and-drop operation.
- [fileURLForSearchableIndex:itemIdentifier:typeIdentifier:inPlace:error:](fileurl%28for_itemidentifier_typeidentifier_inplace_%29.md): Returns a file URL for the requested item during a drag-and-drop operation.

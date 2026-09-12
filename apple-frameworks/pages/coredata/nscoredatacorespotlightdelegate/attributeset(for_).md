> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nscoredatacorespotlightdelegate/attributeset(for:)](https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/attributeset(for:))

# attributeSet(for:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Returns the searchable attributes for the specified managed object.

## Declaration

```swift
func attributeSet(for object: NSManagedObject) -> CSSearchableItemAttributeSet?
```

## Parameters

- `object`: The managed object to index.

<a id="return-value"></a>

## Return Value

An instance of [CSSearchableItemAttributeSet](../../corespotlight/cssearchableitemattributeset.md) that provides the searchable item’s attributes.

<a id="Discussion"></a>

## Discussion

> **Important**

>  If you enable [isIndexedBySpotlight](../nspropertydescription/isindexedbyspotlight.md) on a property description that describes a relationship, override this method and return the necessary set of attributes. Core Data doesn’t automatically infer indexable information for relationships.

To prevent Core Spotlight from indexing a specific managed object, override this method and return `nil` for that object.

## See Also

### Managing the Index

- [deleteSpotlightIndex(completionHandler:)](deletespotlightindex%28completionhandler_%29.md): Deletes all searchable items from the configured index.
- [startSpotlightIndexing()](startspotlightindexing%28%29.md): Starts the indexing of the store’s entities.
- [stopSpotlightIndexing()](stopspotlightindexing%28%29.md): Stops the indexing of the store’s entities.

# attributeSetForObject: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Returns the searchable attributes for the specified managed object.

## Declaration

```objectivec
- (CSSearchableItemAttributeSet *) attributeSetForObject:(NSManagedObject *) object;
```

## Parameters

- `object`: The managed object to index.

<a id="return-value"></a>

## Return Value

An instance of [CSSearchableItemAttributeSet](../../corespotlight/cssearchableitemattributeset.md) that provides the searchable item’s attributes.

<a id="Discussion"></a>

## Discussion

> **Important**

>  If you enable [indexedBySpotlight](../nspropertydescription/isindexedbyspotlight.md) on a property description that describes a relationship, override this method and return the necessary set of attributes. Core Data doesn’t automatically infer indexable information for relationships.

To prevent Core Spotlight from indexing a specific managed object, override this method and return `nil` for that object.

## See Also

### Managing the Index

- [deleteSpotlightIndexWithCompletionHandler:](deletespotlightindex%28completionhandler_%29.md): Deletes all searchable items from the configured index.
- [startSpotlightIndexing](startspotlightindexing%28%29.md): Starts the indexing of the store’s entities.
- [stopSpotlightIndexing](stopspotlightindexing%28%29.md): Stops the indexing of the store’s entities.

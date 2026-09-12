> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nscoredatacorespotlightdelegate/init(forstorewith:coordinator:)](https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/init(forstorewith:coordinator:))

# init(forStoreWith:coordinator:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a Core Spotlight delegate with the specified store description and coordinator.

## Declaration

```swift
init(forStoreWith description: NSPersistentStoreDescription, coordinator psc: NSPersistentStoreCoordinator)
```

## Parameters

- `description`: An object that describes the persistent store that contains the entities to index.
- `psc`: The persistent store coordinator, which you initialize with the managed object model that contains the definitions of the entities to index.

<a id="Discussion"></a>

## Discussion

After you initialize a Core Spotlight delegate, call the [startSpotlightIndexing()](startspotlightindexing%28%29.md) to begin indexing your store’s contents.

> **Note**

>  If you initialize your Core Spotlight delegate using this method, you don’t need to set the [NSCoreDataCoreSpotlightExporter](../nscoredatacorespotlightexporter.md) option on the specified store description.

## See Also

### Creating a Core Spotlight Delegate

- [init(forStoreWith:model:)](init%28forstorewith_model_%29.md): Deprecated. Creates a Core Spotlight delegate with the specified store description and managed object model.

# initForStoreWithDescription:coordinator: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Creates a Core Spotlight delegate with the specified store description and coordinator.

## Declaration

```objectivec
- (instancetype) initForStoreWithDescription:(NSPersistentStoreDescription *) description coordinator:(NSPersistentStoreCoordinator *) psc;
```

## Parameters

- `description`: An object that describes the persistent store that contains the entities to index.
- `psc`: The persistent store coordinator, which you initialize with the managed object model that contains the definitions of the entities to index.

<a id="Discussion"></a>

## Discussion

After you initialize a Core Spotlight delegate, call the [startSpotlightIndexing](startspotlightindexing%28%29.md) to begin indexing your store’s contents.

> **Note**

>  If you initialize your Core Spotlight delegate using this method, you don’t need to set the [NSCoreDataCoreSpotlightExporter](../nscoredatacorespotlightexporter.md) option on the specified store description.

## See Also

### Creating a Core Spotlight Delegate

- [initForStoreWithDescription:model:](init%28forstorewith_model_%29.md): Deprecated. Creates a Core Spotlight delegate with the specified store description and managed object model.

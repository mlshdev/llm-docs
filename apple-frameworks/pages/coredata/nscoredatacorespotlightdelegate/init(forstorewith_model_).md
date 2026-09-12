> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nscoredatacorespotlightdelegate/init(forstorewith:model:)](https://developer.apple.com/documentation/coredata/nscoredatacorespotlightdelegate/init(forstorewith:model:))

# init(forStoreWith:model:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.13+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a Core Spotlight delegate with the specified store description and managed object model.

> Use [init(forStoreWith:coordinator:)](init%28forstorewith_coordinator_%29.md) instead.

## Declaration

```swift
convenience init(forStoreWith description: NSPersistentStoreDescription, model: NSManagedObjectModel)
```

## Parameters

- `description`: An object that describes the persistent store that contains the entities to index.
- `model`: The managed object model that contains the definitions of the entities to index.

## See Also

### Creating a Core Spotlight Delegate

- [init(forStoreWith:coordinator:)](init%28forstorewith_coordinator_%29.md): Creates a Core Spotlight delegate with the specified store description and coordinator.

# initForStoreWithDescription:model: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 15.0) · iPadOS 11.0+ (deprecated in 15.0) · Mac Catalyst 13.1+ (deprecated in 15.0) · macOS 10.13+ (deprecated in 12.0) · visionOS 1.0+ (deprecated in 1.0)

Creates a Core Spotlight delegate with the specified store description and managed object model.

> Use [initForStoreWithDescription:coordinator:](init%28forstorewith_coordinator_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initForStoreWithDescription:(NSPersistentStoreDescription *) description model:(NSManagedObjectModel *) model;
```

## Parameters

- `description`: An object that describes the persistent store that contains the entities to index.
- `model`: The managed object model that contains the definitions of the entities to index.

## See Also

### Creating a Core Spotlight Delegate

- [initForStoreWithDescription:coordinator:](init%28forstorewith_coordinator_%29.md): Creates a Core Spotlight delegate with the specified store description and coordinator.

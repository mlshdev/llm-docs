> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/init(managedobjectmodel:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/init(managedobjectmodel:))

# init(managedObjectModel:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a persistent store coordinator with the specified managed object model.

## Declaration

```swift
init(managedObjectModel model: NSManagedObjectModel)
```

## Parameters

- `model`: A managed object model.

<a id="return-value"></a>

## Return Value

The receiver, initialized with `model`.

## See Also

### Creating a persistent store coordinator

- [Store options](../store-options.md): The options keys that configure the behavior and characteristics of a persistent store.
- [Migration options](../migration-options.md): The options keys that configure the migration behavior of a persistent store.
- [Store versions](../store-versions.md): The metadata keys you use when comparing store versions.

# initWithManagedObjectModel: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a persistent store coordinator with the specified managed object model.

## Declaration

```objectivec
- (instancetype) initWithManagedObjectModel:(NSManagedObjectModel *) model;
```

## Parameters

- `model`: A managed object model.

<a id="return-value"></a>

## Return Value

The receiver, initialized with `model`.

## See Also

### Creating a persistent store coordinator

- [Store options](../store-options.md): The options keys that configure the behavior and characteristics of a persistent store.
- [Migration options](../migration-options.md): The options keys that configure the migration behavior of a persistent store.
- [Store versions](../store-versions.md): The metadata keys you use when comparing store versions.

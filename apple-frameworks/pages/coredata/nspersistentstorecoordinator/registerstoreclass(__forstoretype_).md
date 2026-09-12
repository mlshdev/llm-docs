> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/registerstoreclass(_:forstoretype:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/registerstoreclass(_:forstoretype:))

# registerStoreClass(\_:forStoreType:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Registers a persistent store subclass using the specified store type identifier.

> Use [registerStoreClass(\_:type:)](registerstoreclass%28__type_%29.md) instead.

## Declaration

```swift
class func registerStoreClass(_ storeClass: AnyClass?, forStoreType storeType: String)
```

## Parameters

- `storeClass`: The `NSPersistentStore` subclass to use for the store of type `storeType`.
- `storeType`: A unique string that identifies a store type.

<a id="Discussion"></a>

## Discussion

You must invoke this method before a custom subclass of [NSPersistentStore](../nspersistentstore.md) can be loaded into a persistent store coordinator.

You can pass `nil` for `storeClass` to unregister the store type.

## See Also

### Registering store types

- [registerStoreClass(\_:type:)](registerstoreclass%28__type_%29.md): Registers a persistent store subclass using the specified store type.
- [registeredStoreTypes](registeredstoretypes.md): The coordinator’s registered store types.

# registerStoreClass:forStoreType: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Registers a persistent store subclass using the specified store type identifier.

> Use [registerStoreClass(\_:type:)](registerstoreclass%28__type_%29.md) instead.

## Declaration

```objectivec
+ (void) registerStoreClass:(Class) storeClass forStoreType:(NSString *) storeType;
```

## Parameters

- `storeClass`: The `NSPersistentStore` subclass to use for the store of type `storeType`.
- `storeType`: A unique string that identifies a store type.

<a id="Discussion"></a>

## Discussion

You must invoke this method before a custom subclass of [NSPersistentStore](../nspersistentstore.md) can be loaded into a persistent store coordinator.

You can pass `nil` for `storeClass` to unregister the store type.

## See Also

### Registering store types

- [registeredStoreTypes](registeredstoretypes.md): The coordinator’s registered store types.

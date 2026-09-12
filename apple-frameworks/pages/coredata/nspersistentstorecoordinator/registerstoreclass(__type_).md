> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/registerstoreclass(_:type:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/registerstoreclass(_:type:))

# registerStoreClass(\_:type:)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

Registers a persistent store subclass using the specified store type.

## Declaration

```swift
class func registerStoreClass(_ storeClass: AnyClass?, type: NSPersistentStore.StoreType)
```

## Parameters

- `storeClass`: A subclass of [NSPersistentStore](../nspersistentstore.md).
- `type`: The store type. For possible values, see [NSPersistentStore.StoreType](../nspersistentstore/storetype.md).

<a id="Discussion"></a>

## Discussion

You must register the subclass before you load instances of it into the persistent store coordinator. To unregister a subclass for a specific store type, use `nil` for `storeClass`.

## See Also

### Registering store types

- [registerStoreClass(\_:forStoreType:)](registerstoreclass%28__forstoretype_%29.md): Deprecated. Registers a persistent store subclass using the specified store type identifier.
- [registeredStoreTypes](registeredstoretypes.md): The coordinator’s registered store types.

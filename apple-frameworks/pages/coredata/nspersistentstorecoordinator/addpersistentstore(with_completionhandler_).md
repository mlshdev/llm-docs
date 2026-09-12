> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/addpersistentstore(with:completionhandler:)](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/addpersistentstore(with:completionhandler:))

# addPersistentStore(with:completionHandler:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Adds a persistent store using the provided description.

## Declaration

```swift
func addPersistentStore(with storeDescription: NSPersistentStoreDescription, completionHandler block: @escaping (NSPersistentStoreDescription, (any Error)?) -> Void)
```

## Parameters

- `storeDescription`: A description object used to create and load a persistent store.
- `block`: The completion handler block that’s invoked after the store is added.

## See Also

### Adding or removing a store

- [addPersistentStore(type:configuration:at:options:)](addpersistentstore%28type_configuration_at_options_%29.md): Adds a specific type of persistent store at the provided location.
- [addPersistentStore(ofType:configurationName:at:options:)](addpersistentstore%28oftype_configurationname_at_options_%29.md): Deprecated. Adds a specific type of persistent store at the provided location.
- [remove(\_:)](remove%28__%29.md): Removes the specified persistent store from the coordinator.

# addPersistentStoreWithDescription:completionHandler: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Adds a persistent store using the provided description.

## Declaration

```objectivec
- (void) addPersistentStoreWithDescription:(NSPersistentStoreDescription *) storeDescription completionHandler:(void (^)(NSPersistentStoreDescription *, NSError *)) block;
```

## Parameters

- `storeDescription`: A description object used to create and load a persistent store.
- `block`: The completion handler block that’s invoked after the store is added.

## See Also

### Adding or removing a store

- [addPersistentStoreWithType:configuration:URL:options:error:](addpersistentstore%28oftype_configurationname_at_options_%29.md): Deprecated. Adds a specific type of persistent store at the provided location.
- [removePersistentStore:error:](remove%28__%29.md): Removes the specified persistent store from the coordinator.

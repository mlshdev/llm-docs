> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcontainer/loadpersistentstores(completionhandler:)](https://developer.apple.com/documentation/coredata/nspersistentcontainer/loadpersistentstores(completionhandler:))

# loadPersistentStores(completionHandler:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Loads the persistent stores.

## Declaration

```swift
func loadPersistentStores(completionHandler block: @escaping (NSPersistentStoreDescription, (any Error)?) -> Void)
```

## Parameters

- `block`: Once the loading of the persistent stores has completed, this block will be executed on the calling thread.

<a id="Discussion"></a>

## Discussion

Once the persistent container has been initialized, you need to execute [loadPersistentStores(completionHandler:)](loadpersistentstores%28completionhandler_%29.md) to instruct the container to load the persistent stores and complete the creation of the Core Data stack.

Once the completion handler has fired, the stack is fully initialized and is ready for use. The completion handler will be called once for each persistent store that is created.

If there is an error in the loading of the persistent stores, the [NSError](../../foundation/nserror.md) value will be populated.

## See Also

### Managing Persistent Stores

- [persistentStoreDescriptions](persistentstoredescriptions.md): The descriptions of the container’s persistent stores.

# loadPersistentStoresWithCompletionHandler: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Loads the persistent stores.

## Declaration

```objectivec
- (void) loadPersistentStoresWithCompletionHandler:(void (^)(NSPersistentStoreDescription *, NSError *)) block;
```

## Parameters

- `block`: Once the loading of the persistent stores has completed, this block will be executed on the calling thread.

<a id="Discussion"></a>

## Discussion

Once the persistent container has been initialized, you need to execute [loadPersistentStoresWithCompletionHandler:](loadpersistentstores%28completionhandler_%29.md) to instruct the container to load the persistent stores and complete the creation of the Core Data stack.

Once the completion handler has fired, the stack is fully initialized and is ready for use. The completion handler will be called once for each persistent store that is created.

If there is an error in the loading of the persistent stores, the [NSError](../../foundation/nserror.md) value will be populated.

## See Also

### Managing Persistent Stores

- [persistentStoreDescriptions](persistentstoredescriptions.md): The descriptions of the container’s persistent stores.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcontainer/persistentstoredescriptions](https://developer.apple.com/documentation/coredata/nspersistentcontainer/persistentstoredescriptions)

# persistentStoreDescriptions (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The descriptions of the container’s persistent stores.

## Declaration

```swift
var persistentStoreDescriptions: [NSPersistentStoreDescription] { get set }
```

<a id="Discussion"></a>

## Discussion

If you want to override the type (or types) of persistent store(s) used by the persistent container, you can set this property with an array of [NSPersistentStoreDescription](../nspersistentstoredescription.md) objects.

If you will be configuring custom persistent store descriptions, you must set this property before calling [loadPersistentStores(completionHandler:)](loadpersistentstores%28completionhandler_%29.md).

## See Also

### Managing Persistent Stores

- [loadPersistentStores(completionHandler:)](loadpersistentstores%28completionhandler_%29.md): Loads the persistent stores.

# persistentStoreDescriptions (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

The descriptions of the container’s persistent stores.

## Declaration

```objectivec
@property (copy) NSArray<NSPersistentStoreDescription *> * persistentStoreDescriptions;
```

<a id="Discussion"></a>

## Discussion

If you want to override the type (or types) of persistent store(s) used by the persistent container, you can set this property with an array of [NSPersistentStoreDescription](../nspersistentstoredescription.md) objects.

If you will be configuring custom persistent store descriptions, you must set this property before calling [loadPersistentStoresWithCompletionHandler:](loadpersistentstores%28completionhandler_%29.md).

## See Also

### Managing Persistent Stores

- [loadPersistentStoresWithCompletionHandler:](loadpersistentstores%28completionhandler_%29.md): Loads the persistent stores.

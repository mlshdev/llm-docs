> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentstorecoordinator/persistentstores](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator/persistentstores)

# persistentStores (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The coordinator’s persistent stores.

## Declaration

```swift
var persistentStores: [NSPersistentStore] { get }
```

## See Also

### Managing configuration

- [name](name.md): The coordinator’s name.
- [managedObjectModel](managedobjectmodel.md): The coordinator’s managed object model.

# persistentStores (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The coordinator’s persistent stores.

## Declaration

```objectivec
@property (strong, readonly) NSArray<__kindof NSPersistentStore *> * persistentStores;
```

## See Also

### Managing configuration

- [name](name.md): The coordinator’s name.
- [managedObjectModel](managedobjectmodel.md): The coordinator’s managed object model.

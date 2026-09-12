> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspersistentdocument/managedobjectcontext](https://developer.apple.com/documentation/appkit/nspersistentdocument/managedobjectcontext)

# managedObjectContext (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The managed object context for the document.

## Declaration

```swift
var managedObjectContext: NSManagedObjectContext? { get set }
```

<a id="Discussion"></a>

## Discussion

If a managed object context for the document does not exist, one is created automatically. If you want to customize the creation of the persistence stack, reimplement this property in your custom subclass and use your implementation to create the appropriate objects.

## See Also

### Related Documentation

- [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075)
- [NSPersistentDocument](../nspersistentdocument.md): A document object that can integrate with Core Data.

### Managing the Persistence Objects

- [managedObjectModel](managedobjectmodel.md): The managed object model of the document.
- [configurePersistentStoreCoordinator(for:ofType:modelConfiguration:storeOptions:)](configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Configures the receiver’s persistent store coordinator with the appropriate stores for a given URL.
- [persistentStoreType(forFileType:)](persistentstoretype%28forfiletype_%29.md): Returns the type of persistent store associated with the specified file type.

# managedObjectContext (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The managed object context for the document.

## Declaration

```objectivec
@property (strong, nullable) NSManagedObjectContext * managedObjectContext;
```

<a id="Discussion"></a>

## Discussion

If a managed object context for the document does not exist, one is created automatically. If you want to customize the creation of the persistence stack, reimplement this property in your custom subclass and use your implementation to create the appropriate objects.

## See Also

### Related Documentation

- [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075)
- [NSPersistentDocument](../nspersistentdocument.md): A document object that can integrate with Core Data.

### Managing the Persistence Objects

- [managedObjectModel](managedobjectmodel.md): The managed object model of the document.
- [configurePersistentStoreCoordinatorForURL:ofType:modelConfiguration:storeOptions:error:](configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Configures the receiver’s persistent store coordinator with the appropriate stores for a given URL.
- [persistentStoreTypeForFileType:](persistentstoretype%28forfiletype_%29.md): Returns the type of persistent store associated with the specified file type.

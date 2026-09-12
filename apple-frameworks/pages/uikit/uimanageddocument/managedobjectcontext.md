> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimanageddocument/managedobjectcontext](https://developer.apple.com/documentation/uikit/uimanageddocument/managedobjectcontext)

# managedObjectContext (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The document’s managed object context.

## Declaration

```swift
var managedObjectContext: NSManagedObjectContext { get }
```

<a id="Discussion"></a>

## Discussion

The document automatically creates a managed object context using its persistent store coordinator.

<a id="Special-considerations"></a>

### Special considerations

You must not use the document’s managed object context in [writeAdditionalContent(\_:to:originalContentsURL:)](writeadditionalcontent%28__to_originalcontentsurl_%29.md), or any of the asynchronous [UIDocument](../uidocument.md) methods.

## See Also

### Managing the Core Data stack

- [configurePersistentStoreCoordinator(for:ofType:modelConfiguration:storeOptions:)](configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Creates or loads the document’s persistent store.
- [managedObjectModel](managedobjectmodel.md): The document’s managed object model.
- [persistentStoreOptions](persistentstoreoptions.md): Options used when creating the document’s persistent store.
- [modelConfiguration](modelconfiguration.md): A model configuration name to be passed when configuring the persistent store.
- [persistentStoreType(forFileType:)](persistentstoretype%28forfiletype_%29.md): Returns the Core Data store type for a given document file type.

# managedObjectContext (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The document’s managed object context.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSManagedObjectContext * managedObjectContext;
```

<a id="Discussion"></a>

## Discussion

The document automatically creates a managed object context using its persistent store coordinator.

<a id="Special-considerations"></a>

### Special considerations

You must not use the document’s managed object context in [writeAdditionalContent:toURL:originalContentsURL:error:](writeadditionalcontent%28__to_originalcontentsurl_%29.md), or any of the asynchronous [UIDocument](../uidocument.md) methods.

## See Also

### Managing the Core Data stack

- [configurePersistentStoreCoordinatorForURL:ofType:modelConfiguration:storeOptions:error:](configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Creates or loads the document’s persistent store.
- [managedObjectModel](managedobjectmodel.md): The document’s managed object model.
- [persistentStoreOptions](persistentstoreoptions.md): Options used when creating the document’s persistent store.
- [modelConfiguration](modelconfiguration.md): A model configuration name to be passed when configuring the persistent store.
- [persistentStoreTypeForFileType:](persistentstoretype%28forfiletype_%29.md): Returns the Core Data store type for a given document file type.

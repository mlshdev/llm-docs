> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimanageddocument/managedobjectmodel](https://developer.apple.com/documentation/uikit/uimanageddocument/managedobjectmodel)

# managedObjectModel (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The document’s managed object model.

## Declaration

```swift
var managedObjectModel: NSManagedObjectModel { get }
```

<a id="Discussion"></a>

## Discussion

Persistent documents always have a managed object model. The default model is the union of all models in the main bundle. You can specify a configuration to use with [modelConfiguration](modelconfiguration.md). You can subclass [UIManagedDocument](../uimanageddocument.md) to override this method if you need custom behavior.

## See Also

### Managing the Core Data stack

- [configurePersistentStoreCoordinator(for:ofType:modelConfiguration:storeOptions:)](configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Creates or loads the document’s persistent store.
- [managedObjectContext](managedobjectcontext.md): The document’s managed object context.
- [persistentStoreOptions](persistentstoreoptions.md): Options used when creating the document’s persistent store.
- [modelConfiguration](modelconfiguration.md): A model configuration name to be passed when configuring the persistent store.
- [persistentStoreType(forFileType:)](persistentstoretype%28forfiletype_%29.md): Returns the Core Data store type for a given document file type.

# managedObjectModel (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The document’s managed object model.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSManagedObjectModel * managedObjectModel;
```

<a id="Discussion"></a>

## Discussion

Persistent documents always have a managed object model. The default model is the union of all models in the main bundle. You can specify a configuration to use with [modelConfiguration](modelconfiguration.md). You can subclass [UIManagedDocument](../uimanageddocument.md) to override this method if you need custom behavior.

## See Also

### Managing the Core Data stack

- [configurePersistentStoreCoordinatorForURL:ofType:modelConfiguration:storeOptions:error:](configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Creates or loads the document’s persistent store.
- [managedObjectContext](managedobjectcontext.md): The document’s managed object context.
- [persistentStoreOptions](persistentstoreoptions.md): Options used when creating the document’s persistent store.
- [modelConfiguration](modelconfiguration.md): A model configuration name to be passed when configuring the persistent store.
- [persistentStoreTypeForFileType:](persistentstoretype%28forfiletype_%29.md): Returns the Core Data store type for a given document file type.

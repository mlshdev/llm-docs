> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimanageddocument/persistentstoreoptions](https://developer.apple.com/documentation/uikit/uimanageddocument/persistentstoreoptions)

# persistentStoreOptions (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Options used when creating the document’s persistent store.

## Declaration

```swift
var persistentStoreOptions: [AnyHashable : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this value is `nil`.

To support automatic migration, you might pass a dictionary like that shown in the following example.

```objc
NSDictionary *options = @{
    NSMigratePersistentStoresAutomaticallyOption: @YES,
    NSInferMappingModelAutomaticallyOption: @YES
};
<#Managed document instance#>.persistentStoreOptions = options;
```

## See Also

### Managing the Core Data stack

- [configurePersistentStoreCoordinator(for:ofType:modelConfiguration:storeOptions:)](configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Creates or loads the document’s persistent store.
- [managedObjectContext](managedobjectcontext.md): The document’s managed object context.
- [managedObjectModel](managedobjectmodel.md): The document’s managed object model.
- [modelConfiguration](modelconfiguration.md): A model configuration name to be passed when configuring the persistent store.
- [persistentStoreType(forFileType:)](persistentstoretype%28forfiletype_%29.md): Returns the Core Data store type for a given document file type.

# persistentStoreOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Options used when creating the document’s persistent store.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSDictionary * persistentStoreOptions;
```

<a id="Discussion"></a>

## Discussion

By default, this value is `nil`.

To support automatic migration, you might pass a dictionary like that shown in the following example.

```objc
NSDictionary *options = @{
    NSMigratePersistentStoresAutomaticallyOption: @YES,
    NSInferMappingModelAutomaticallyOption: @YES
};
<#Managed document instance#>.persistentStoreOptions = options;
```

## See Also

### Managing the Core Data stack

- [configurePersistentStoreCoordinatorForURL:ofType:modelConfiguration:storeOptions:error:](configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Creates or loads the document’s persistent store.
- [managedObjectContext](managedobjectcontext.md): The document’s managed object context.
- [managedObjectModel](managedobjectmodel.md): The document’s managed object model.
- [modelConfiguration](modelconfiguration.md): A model configuration name to be passed when configuring the persistent store.
- [persistentStoreTypeForFileType:](persistentstoretype%28forfiletype_%29.md): Returns the Core Data store type for a given document file type.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimanageddocument/modelconfiguration](https://developer.apple.com/documentation/uikit/uimanageddocument/modelconfiguration)

# modelConfiguration (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A model configuration name to be passed when configuring the persistent store.

## Declaration

```swift
var modelConfiguration: String? { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this value is `nil`.

## See Also

### Managing the Core Data stack

- [configurePersistentStoreCoordinator(for:ofType:modelConfiguration:storeOptions:)](configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Creates or loads the document’s persistent store.
- [managedObjectContext](managedobjectcontext.md): The document’s managed object context.
- [managedObjectModel](managedobjectmodel.md): The document’s managed object model.
- [persistentStoreOptions](persistentstoreoptions.md): Options used when creating the document’s persistent store.
- [persistentStoreType(forFileType:)](persistentstoretype%28forfiletype_%29.md): Returns the Core Data store type for a given document file type.

# modelConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A model configuration name to be passed when configuring the persistent store.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * modelConfiguration;
```

<a id="Discussion"></a>

## Discussion

By default, this value is `nil`.

## See Also

### Managing the Core Data stack

- [configurePersistentStoreCoordinatorForURL:ofType:modelConfiguration:storeOptions:error:](configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Creates or loads the document’s persistent store.
- [managedObjectContext](managedobjectcontext.md): The document’s managed object context.
- [managedObjectModel](managedobjectmodel.md): The document’s managed object model.
- [persistentStoreOptions](persistentstoreoptions.md): Options used when creating the document’s persistent store.
- [persistentStoreTypeForFileType:](persistentstoretype%28forfiletype_%29.md): Returns the Core Data store type for a given document file type.

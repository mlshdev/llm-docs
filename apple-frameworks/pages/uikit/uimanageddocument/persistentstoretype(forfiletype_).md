> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimanageddocument/persistentstoretype(forfiletype:)](https://developer.apple.com/documentation/uikit/uimanageddocument/persistentstoretype(forfiletype:))

# persistentStoreType(forFileType:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the Core Data store type for a given document file type.

## Declaration

```swift
func persistentStoreType(forFileType fileType: String) -> String
```

## Parameters

- `fileType`: The document file type.

<a id="return-value"></a>

## Return Value

The persistent store type for `fileType`.

<a id="Discussion"></a>

## Discussion

Override this method to specify a persistent store type for a given document type.

The default returns [NSSQLiteStoreType](../../coredata/nssqlitestoretype.md).

## See Also

### Managing the Core Data stack

- [configurePersistentStoreCoordinator(for:ofType:modelConfiguration:storeOptions:)](configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Creates or loads the document’s persistent store.
- [managedObjectContext](managedobjectcontext.md): The document’s managed object context.
- [managedObjectModel](managedobjectmodel.md): The document’s managed object model.
- [persistentStoreOptions](persistentstoreoptions.md): Options used when creating the document’s persistent store.
- [modelConfiguration](modelconfiguration.md): A model configuration name to be passed when configuring the persistent store.

# persistentStoreTypeForFileType: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns the Core Data store type for a given document file type.

## Declaration

```objectivec
- (NSString *) persistentStoreTypeForFileType:(NSString *) fileType;
```

## Parameters

- `fileType`: The document file type.

<a id="return-value"></a>

## Return Value

The persistent store type for `fileType`.

<a id="Discussion"></a>

## Discussion

Override this method to specify a persistent store type for a given document type.

The default returns [NSSQLiteStoreType](../../coredata/nssqlitestoretype.md).

## See Also

### Managing the Core Data stack

- [configurePersistentStoreCoordinatorForURL:ofType:modelConfiguration:storeOptions:error:](configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Creates or loads the document’s persistent store.
- [managedObjectContext](managedobjectcontext.md): The document’s managed object context.
- [managedObjectModel](managedobjectmodel.md): The document’s managed object model.
- [persistentStoreOptions](persistentstoreoptions.md): Options used when creating the document’s persistent store.
- [modelConfiguration](modelconfiguration.md): A model configuration name to be passed when configuring the persistent store.

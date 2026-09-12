> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspersistentdocument/persistentstoretype(forfiletype:)](https://developer.apple.com/documentation/appkit/nspersistentdocument/persistentstoretype(forfiletype:))

# persistentStoreType(forFileType:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the type of persistent store associated with the specified file type.

## Declaration

```swift
func persistentStoreType(forFileType fileType: String) -> String
```

## Parameters

- `fileType`: A document file type.

<a id="return-value"></a>

## Return Value

The type of persistent store associated with `fileType`. For possible values, see [NSPersistentStoreCoordinator](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator).

<a id="Discussion"></a>

## Discussion

You set the persistent store type in the application’s property list.

## See Also

### Managing the Persistence Objects

- [managedObjectContext](managedobjectcontext.md): The managed object context for the document.
- [managedObjectModel](managedobjectmodel.md): The managed object model of the document.
- [configurePersistentStoreCoordinator(for:ofType:modelConfiguration:storeOptions:)](configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Configures the receiver’s persistent store coordinator with the appropriate stores for a given URL.

# persistentStoreTypeForFileType: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the type of persistent store associated with the specified file type.

## Declaration

```objectivec
- (NSString *) persistentStoreTypeForFileType:(NSString *) fileType;
```

## Parameters

- `fileType`: A document file type.

<a id="return-value"></a>

## Return Value

The type of persistent store associated with `fileType`. For possible values, see [NSPersistentStoreCoordinator](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator).

<a id="Discussion"></a>

## Discussion

You set the persistent store type in the application’s property list.

## See Also

### Managing the Persistence Objects

- [managedObjectContext](managedobjectcontext.md): The managed object context for the document.
- [managedObjectModel](managedobjectmodel.md): The managed object model of the document.
- [configurePersistentStoreCoordinatorForURL:ofType:modelConfiguration:storeOptions:error:](configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Configures the receiver’s persistent store coordinator with the appropriate stores for a given URL.

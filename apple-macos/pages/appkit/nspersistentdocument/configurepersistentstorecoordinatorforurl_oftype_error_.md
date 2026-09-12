> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspersistentdocument/configurepersistentstorecoordinatorforurl:oftype:error:](https://developer.apple.com/documentation/appkit/nspersistentdocument/configurepersistentstorecoordinatorforurl:oftype:error:)

# configurePersistentStoreCoordinatorForURL:ofType:error:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.5)

Configures the receiver’s persistent store coordinator for a given URL and document type.

> Use [configurePersistentStoreCoordinatorForURL:ofType:modelConfiguration:storeOptions:error:](configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md) instead.

## Declaration

```objectivec
- (BOOL) configurePersistentStoreCoordinatorForURL:(NSURL *) url ofType:(NSString *) fileType error:(NSError **) error;
```

## Parameters

- `url`: An URL that specifies the location of the document’s store.
- `fileType`: The document type.
- `error`: If the method does not complete successfully, upon return contains an `NSError` object that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the method completes successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is invoked automatically when an existing document is opened. You override this method to customize creation of a persistent store for a given document or store type. You can retrieve the persistent store coordinator with the following code:

```objc
[[self managedObjectContext] persistentStoreCoordinator];
```

## See Also

### Related Documentation

- [configurePersistentStoreCoordinatorForURL:ofType:modelConfiguration:storeOptions:error:](configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Configures the receiver’s persistent store coordinator with the appropriate stores for a given URL.
- [persistentStoreTypeForFileType:](persistentstoretype%28forfiletype_%29.md): Returns the type of persistent store associated with the specified file type.

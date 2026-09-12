> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspersistentdocument/configurepersistentstorecoordinator(for:oftype:modelconfiguration:storeoptions:)](https://developer.apple.com/documentation/appkit/nspersistentdocument/configurepersistentstorecoordinator(for:oftype:modelconfiguration:storeoptions:))

# configurePersistentStoreCoordinator(for:ofType:modelConfiguration:storeOptions:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Configures the receiver’s persistent store coordinator with the appropriate stores for a given URL.

## Declaration

```swift
func configurePersistentStoreCoordinator(for url: URL, ofType fileType: String, modelConfiguration configuration: String?, storeOptions: [String : Any]? = nil) throws
```

## Parameters

- `url`: An URL that specifies the location of the document’s store.
- `fileType`: The document type.
- `configuration`: The name of the managed object model configuration to use. (The managed object model is associated with the persistent store coordinator.) Pass `nil` if you do not want to specify a configuration.
- `storeOptions`: Options for the store. See “Store Options” in [NSPersistentStoreCoordinator](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator) for possible values.

<a id="Discussion"></a>

## Discussion

This method is invoked automatically when an existing document is opened. You override this method to customize creation of a persistent store for a given document or store type. You can retrieve the persistent store coordinator with the following code:

```objc
[[self managedObjectContext] persistentStoreCoordinator];
```

You can override this method to create the store to save to or load from (invoked from within the other `NSDocument` methods to read/write files), which gives developers the ability to load/save from/to different persistent store types (default type is XML).

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing the Persistence Objects

- [managedObjectContext](managedobjectcontext.md): The managed object context for the document.
- [managedObjectModel](managedobjectmodel.md): The managed object model of the document.
- [persistentStoreType(forFileType:)](persistentstoretype%28forfiletype_%29.md): Returns the type of persistent store associated with the specified file type.

# configurePersistentStoreCoordinatorForURL:ofType:modelConfiguration:storeOptions:error: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Configures the receiver’s persistent store coordinator with the appropriate stores for a given URL.

## Declaration

```objectivec
- (BOOL) configurePersistentStoreCoordinatorForURL:(NSURL *) url ofType:(NSString *) fileType modelConfiguration:(NSString *) configuration storeOptions:(NSDictionary<NSString *,id> *) storeOptions error:(NSError **) error;
```

## Parameters

- `url`: An URL that specifies the location of the document’s store.
- `fileType`: The document type.
- `configuration`: The name of the managed object model configuration to use. (The managed object model is associated with the persistent store coordinator.) Pass `nil` if you do not want to specify a configuration.
- `storeOptions`: Options for the store. See “Store Options” in [NSPersistentStoreCoordinator](https://developer.apple.com/documentation/coredata/nspersistentstorecoordinator) for possible values.
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

You can override this method to create the store to save to or load from (invoked from within the other `NSDocument` methods to read/write files), which gives developers the ability to load/save from/to different persistent store types (default type is XML).

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing the Persistence Objects

- [managedObjectContext](managedobjectcontext.md): The managed object context for the document.
- [managedObjectModel](managedobjectmodel.md): The managed object model of the document.
- [persistentStoreTypeForFileType:](persistentstoretype%28forfiletype_%29.md): Returns the type of persistent store associated with the specified file type.

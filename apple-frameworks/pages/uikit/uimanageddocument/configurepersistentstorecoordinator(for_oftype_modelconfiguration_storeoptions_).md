> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimanageddocument/configurepersistentstorecoordinator(for:oftype:modelconfiguration:storeoptions:)](https://developer.apple.com/documentation/uikit/uimanageddocument/configurepersistentstorecoordinator(for:oftype:modelconfiguration:storeoptions:))

# configurePersistentStoreCoordinator(for:ofType:modelConfiguration:storeOptions:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates or loads the document’s persistent store.

## Declaration

```swift
func configurePersistentStoreCoordinator(for storeURL: URL, ofType fileType: String, modelConfiguration configuration: String?, storeOptions: [AnyHashable : Any]? = nil) throws
```

## Parameters

- `storeURL`: The URL for the persistent store.
- `fileType`: The document’s file type.
- `configuration`: The managed object model configuration to use.
- `storeOptions`: The options used to configure the persistent store coordinator.

<a id="Discussion"></a>

## Discussion

You can override this method if you want customize the creation or loading of the document’s persistent store. For example, you can perform post-migration clean-up — if your app needs to migrate store data to use a new version of the managed object model, you can override this method to make additional modifications to the store after migration.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing the Core Data stack

- [managedObjectContext](managedobjectcontext.md): The document’s managed object context.
- [managedObjectModel](managedobjectmodel.md): The document’s managed object model.
- [persistentStoreOptions](persistentstoreoptions.md): Options used when creating the document’s persistent store.
- [modelConfiguration](modelconfiguration.md): A model configuration name to be passed when configuring the persistent store.
- [persistentStoreType(forFileType:)](persistentstoretype%28forfiletype_%29.md): Returns the Core Data store type for a given document file type.

# configurePersistentStoreCoordinatorForURL:ofType:modelConfiguration:storeOptions:error: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates or loads the document’s persistent store.

## Declaration

```objectivec
- (BOOL) configurePersistentStoreCoordinatorForURL:(NSURL *) storeURL ofType:(NSString *) fileType modelConfiguration:(NSString *) configuration storeOptions:(NSDictionary *) storeOptions error:(NSError **) error;
```

## Parameters

- `storeURL`: The URL for the persistent store.
- `fileType`: The document’s file type.
- `configuration`: The managed object model configuration to use.
- `storeOptions`: The options used to configure the persistent store coordinator.
- `error`: Upon return, if a problem occurs, contains an error object that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if configuration is successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

You can override this method if you want customize the creation or loading of the document’s persistent store. For example, you can perform post-migration clean-up — if your app needs to migrate store data to use a new version of the managed object model, you can override this method to make additional modifications to the store after migration.

> **Handling Errors in Swift**

>  In Swift, this method is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> When overriding this method, use the `throw` statement to throw an `NSError`, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Managing the Core Data stack

- [managedObjectContext](managedobjectcontext.md): The document’s managed object context.
- [managedObjectModel](managedobjectmodel.md): The document’s managed object model.
- [persistentStoreOptions](persistentstoreoptions.md): Options used when creating the document’s persistent store.
- [modelConfiguration](modelconfiguration.md): A model configuration name to be passed when configuring the persistent store.
- [persistentStoreTypeForFileType:](persistentstoretype%28forfiletype_%29.md): Returns the Core Data store type for a given document file type.

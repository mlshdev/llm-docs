> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspersistentdocument/managedobjectmodel](https://developer.apple.com/documentation/appkit/nspersistentdocument/managedobjectmodel)

# managedObjectModel (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The managed object model of the document.

## Declaration

```swift
var managedObjectModel: NSManagedObjectModel? { get }
```

<a id="Discussion"></a>

## Discussion

By default the Core Data framework creates a merged model from all models in the application bundle (`[NSBundle mainBundle]`). You can reimplement this property and return a specific model to use to create persistent stores. A typical implementation might include code similar to the following fragment:

```objc
NSBundle *bundle = [NSBundle bundleForClass:[self class]];
NSString *path = [bundle pathForResource:@"MyModel" ofType:@"mom"];
NSURL *url = [NSURL fileURLWithPath:path];
NSManagedObjectModel *model = [[NSManagedObjectModel alloc] initWithContentsOfURL:url];
```

<a id="Special-Considerations"></a>

### Special Considerations

In applications built in OS X v10.4, by default the Core Data framework creates a merged model from all the models found in the application bundle *and the frameworks against which the application is linked*.

## See Also

### Managing the Persistence Objects

- [managedObjectContext](managedobjectcontext.md): The managed object context for the document.
- [configurePersistentStoreCoordinator(for:ofType:modelConfiguration:storeOptions:)](configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Configures the receiver’s persistent store coordinator with the appropriate stores for a given URL.
- [persistentStoreType(forFileType:)](persistentstoretype%28forfiletype_%29.md): Returns the type of persistent store associated with the specified file type.

# managedObjectModel (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The managed object model of the document.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSManagedObjectModel * managedObjectModel;
```

<a id="Discussion"></a>

## Discussion

By default the Core Data framework creates a merged model from all models in the application bundle (`[NSBundle mainBundle]`). You can reimplement this property and return a specific model to use to create persistent stores. A typical implementation might include code similar to the following fragment:

```objc
NSBundle *bundle = [NSBundle bundleForClass:[self class]];
NSString *path = [bundle pathForResource:@"MyModel" ofType:@"mom"];
NSURL *url = [NSURL fileURLWithPath:path];
NSManagedObjectModel *model = [[NSManagedObjectModel alloc] initWithContentsOfURL:url];
```

<a id="Special-Considerations"></a>

### Special Considerations

In applications built in OS X v10.4, by default the Core Data framework creates a merged model from all the models found in the application bundle *and the frameworks against which the application is linked*.

## See Also

### Managing the Persistence Objects

- [managedObjectContext](managedobjectcontext.md): The managed object context for the document.
- [configurePersistentStoreCoordinatorForURL:ofType:modelConfiguration:storeOptions:error:](configurepersistentstorecoordinator%28for_oftype_modelconfiguration_storeoptions_%29.md): Configures the receiver’s persistent store coordinator with the appropriate stores for a given URL.
- [persistentStoreTypeForFileType:](persistentstoretype%28forfiletype_%29.md): Returns the type of persistent store associated with the specified file type.

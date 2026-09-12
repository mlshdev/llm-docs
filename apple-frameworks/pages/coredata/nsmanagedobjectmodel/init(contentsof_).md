> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodel/init(contentsof:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/init(contentsof:))

# init(contentsOf:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes the managed object model using the model file at the specified URL.

## Declaration

```swift
convenience init?(contentsOf url: URL)
```

## Parameters

- `url`: An URL object specifying the location of a model file.

<a id="return-value"></a>

## Return Value

A managed object model initialized using the file at `url`.

## See Also

### Related Documentation

- [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075)
- [Core Data Model Versioning and Data Migration Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreDataVersioning/Articles/Introduction.html#//apple_ref/doc/uid/TP40004399)

### Creating a managed object model

- [init()](init%28%29.md): Initializes an empty managed object model.
- [mergedModel(from:)](mergedmodel%28from_%29.md): Returns a model created by merging all the models found in given bundles.
- [mergedModel(from:forStoreMetadata:)](mergedmodel%28from_forstoremetadata_%29.md): Returns a merged model from a specified array for the version information in provided metadata.
- [init(byMerging:)](init%28bymerging_%29.md): Creates a single model from an array of existing models.
- [init(byMerging:forStoreMetadata:)](init%28bymerging_forstoremetadata_%29.md): Returns, for the version information in given metadata, a model merged from a given array of models.

# initWithContentsOfURL: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes the managed object model using the model file at the specified URL.

## Declaration

```objectivec
- (instancetype) initWithContentsOfURL:(NSURL *) url;
```

## Parameters

- `url`: An URL object specifying the location of a model file.

<a id="return-value"></a>

## Return Value

A managed object model initialized using the file at `url`.

## See Also

### Related Documentation

- [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075)
- [Core Data Model Versioning and Data Migration Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreDataVersioning/Articles/Introduction.html#//apple_ref/doc/uid/TP40004399)

### Creating a managed object model

- [init](init%28%29.md): Initializes an empty managed object model.
- [mergedModelFromBundles:](mergedmodel%28from_%29.md): Returns a model created by merging all the models found in given bundles.
- [mergedModelFromBundles:forStoreMetadata:](mergedmodel%28from_forstoremetadata_%29.md): Returns a merged model from a specified array for the version information in provided metadata.
- [modelByMergingModels:](init%28bymerging_%29.md): Creates a single model from an array of existing models.
- [modelByMergingModels:forStoreMetadata:](init%28bymerging_forstoremetadata_%29.md): Returns, for the version information in given metadata, a model merged from a given array of models.

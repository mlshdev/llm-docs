> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodel/init()](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/init())

# init() (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes an empty managed object model.

## Declaration

```swift
init()
```

## See Also

### Creating a managed object model

- [init(contentsOf:)](init%28contentsof_%29.md): Initializes the managed object model using the model file at the specified URL.
- [mergedModel(from:)](mergedmodel%28from_%29.md): Returns a model created by merging all the models found in given bundles.
- [mergedModel(from:forStoreMetadata:)](mergedmodel%28from_forstoremetadata_%29.md): Returns a merged model from a specified array for the version information in provided metadata.
- [init(byMerging:)](init%28bymerging_%29.md): Creates a single model from an array of existing models.
- [init(byMerging:forStoreMetadata:)](init%28bymerging_forstoremetadata_%29.md): Returns, for the version information in given metadata, a model merged from a given array of models.

# init (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Initializes an empty managed object model.

## Declaration

```objectivec
- (instancetype) init;
```

## See Also

### Creating a managed object model

- [initWithContentsOfURL:](init%28contentsof_%29.md): Initializes the managed object model using the model file at the specified URL.
- [mergedModelFromBundles:](mergedmodel%28from_%29.md): Returns a model created by merging all the models found in given bundles.
- [mergedModelFromBundles:forStoreMetadata:](mergedmodel%28from_forstoremetadata_%29.md): Returns a merged model from a specified array for the version information in provided metadata.
- [modelByMergingModels:](init%28bymerging_%29.md): Creates a single model from an array of existing models.
- [modelByMergingModels:forStoreMetadata:](init%28bymerging_forstoremetadata_%29.md): Returns, for the version information in given metadata, a model merged from a given array of models.

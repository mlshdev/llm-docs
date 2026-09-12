> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodel/init(bymerging:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/init(bymerging:))

# init(byMerging:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a single model from an array of existing models.

## Declaration

```swift
init?(byMerging models: [NSManagedObjectModel]?)
```

## Parameters

- `models`: An array of instances of `NSManagedObjectModel`.

<a id="return-value"></a>

## Return Value

A single model made by combining the models in `models`.

<a id="Discussion"></a>

## Discussion

You use this method to combine multiple models (typically from different frameworks) into one.

## See Also

### Creating a managed object model

- [init(contentsOf:)](init%28contentsof_%29.md): Initializes the managed object model using the model file at the specified URL.
- [init()](init%28%29.md): Initializes an empty managed object model.
- [mergedModel(from:)](mergedmodel%28from_%29.md): Returns a model created by merging all the models found in given bundles.
- [mergedModel(from:forStoreMetadata:)](mergedmodel%28from_forstoremetadata_%29.md): Returns a merged model from a specified array for the version information in provided metadata.
- [init(byMerging:forStoreMetadata:)](init%28bymerging_forstoremetadata_%29.md): Returns, for the version information in given metadata, a model merged from a given array of models.

# modelByMergingModels: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Creates a single model from an array of existing models.

## Declaration

```objectivec
+ (NSManagedObjectModel *) modelByMergingModels:(NSArray<NSManagedObjectModel *> *) models;
```

## Parameters

- `models`: An array of instances of `NSManagedObjectModel`.

<a id="return-value"></a>

## Return Value

A single model made by combining the models in `models`.

<a id="Discussion"></a>

## Discussion

You use this method to combine multiple models (typically from different frameworks) into one.

## See Also

### Creating a managed object model

- [initWithContentsOfURL:](init%28contentsof_%29.md): Initializes the managed object model using the model file at the specified URL.
- [init](init%28%29.md): Initializes an empty managed object model.
- [mergedModelFromBundles:](mergedmodel%28from_%29.md): Returns a model created by merging all the models found in given bundles.
- [mergedModelFromBundles:forStoreMetadata:](mergedmodel%28from_forstoremetadata_%29.md): Returns a merged model from a specified array for the version information in provided metadata.
- [modelByMergingModels:forStoreMetadata:](init%28bymerging_forstoremetadata_%29.md): Returns, for the version information in given metadata, a model merged from a given array of models.

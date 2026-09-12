> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodel/mergedmodel(from:forstoremetadata:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/mergedmodel(from:forstoremetadata:))

# mergedModel(from:forStoreMetadata:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a merged model from a specified array for the version information in provided metadata.

## Declaration

```swift
class func mergedModel(from bundles: [Bundle]?, forStoreMetadata metadata: [String : Any]) -> NSManagedObjectModel?
```

## Parameters

- `bundles`: An array of bundles.
- `metadata`: A dictionary containing version information from the metadata for a persistent store.

<a id="return-value"></a>

## Return Value

The managed object model used to create the store for the metadata. If a model cannot be created to match the version information specified by `metadata`, returns `nil`.

<a id="Discussion"></a>

## Discussion

This method is a companion to [mergedModel(from:)](mergedmodel%28from_%29.md).

## See Also

### Creating a managed object model

- [init(contentsOf:)](init%28contentsof_%29.md): Initializes the managed object model using the model file at the specified URL.
- [init()](init%28%29.md): Initializes an empty managed object model.
- [mergedModel(from:)](mergedmodel%28from_%29.md): Returns a model created by merging all the models found in given bundles.
- [init(byMerging:)](init%28bymerging_%29.md): Creates a single model from an array of existing models.
- [init(byMerging:forStoreMetadata:)](init%28bymerging_forstoremetadata_%29.md): Returns, for the version information in given metadata, a model merged from a given array of models.

# mergedModelFromBundles:forStoreMetadata: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a merged model from a specified array for the version information in provided metadata.

## Declaration

```objectivec
+ (NSManagedObjectModel *) mergedModelFromBundles:(NSArray<NSBundle *> *) bundles forStoreMetadata:(NSDictionary<NSString *,id> *) metadata;
```

## Parameters

- `bundles`: An array of bundles.
- `metadata`: A dictionary containing version information from the metadata for a persistent store.

<a id="return-value"></a>

## Return Value

The managed object model used to create the store for the metadata. If a model cannot be created to match the version information specified by `metadata`, returns `nil`.

<a id="Discussion"></a>

## Discussion

This method is a companion to [mergedModelFromBundles:](mergedmodel%28from_%29.md).

## See Also

### Creating a managed object model

- [initWithContentsOfURL:](init%28contentsof_%29.md): Initializes the managed object model using the model file at the specified URL.
- [init](init%28%29.md): Initializes an empty managed object model.
- [mergedModelFromBundles:](mergedmodel%28from_%29.md): Returns a model created by merging all the models found in given bundles.
- [modelByMergingModels:](init%28bymerging_%29.md): Creates a single model from an array of existing models.
- [modelByMergingModels:forStoreMetadata:](init%28bymerging_forstoremetadata_%29.md): Returns, for the version information in given metadata, a model merged from a given array of models.

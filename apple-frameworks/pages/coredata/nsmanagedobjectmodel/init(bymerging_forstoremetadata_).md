> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodel/init(bymerging:forstoremetadata:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/init(bymerging:forstoremetadata:))

# init(byMerging:forStoreMetadata:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns, for the version information in given metadata, a model merged from a given array of models.

## Declaration

```swift
init?(byMerging models: [NSManagedObjectModel], forStoreMetadata metadata: [String : Any])
```

## Parameters

- `models`: An array of instances of `NSManagedObjectModel`.
- `metadata`: A dictionary containing version information from the metadata for a persistent store.

<a id="return-value"></a>

## Return Value

A  merged model from `models` for the version information in `metadata`. If a model cannot be created to match the version information in `metadata`, returns `nil`.

<a id="Discussion"></a>

## Discussion

This is the companion method to [mergedModel(from:forStoreMetadata:)](mergedmodel%28from_forstoremetadata_%29.md).

## See Also

### Creating a managed object model

- [init(contentsOf:)](init%28contentsof_%29.md): Initializes the managed object model using the model file at the specified URL.
- [init()](init%28%29.md): Initializes an empty managed object model.
- [mergedModel(from:)](mergedmodel%28from_%29.md): Returns a model created by merging all the models found in given bundles.
- [mergedModel(from:forStoreMetadata:)](mergedmodel%28from_forstoremetadata_%29.md): Returns a merged model from a specified array for the version information in provided metadata.
- [init(byMerging:)](init%28bymerging_%29.md): Creates a single model from an array of existing models.

# modelByMergingModels:forStoreMetadata: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns, for the version information in given metadata, a model merged from a given array of models.

## Declaration

```objectivec
+ (NSManagedObjectModel *) modelByMergingModels:(NSArray<NSManagedObjectModel *> *) models forStoreMetadata:(NSDictionary<NSString *,id> *) metadata;
```

## Parameters

- `models`: An array of instances of `NSManagedObjectModel`.
- `metadata`: A dictionary containing version information from the metadata for a persistent store.

<a id="return-value"></a>

## Return Value

A  merged model from `models` for the version information in `metadata`. If a model cannot be created to match the version information in `metadata`, returns `nil`.

<a id="Discussion"></a>

## Discussion

This is the companion method to [mergedModelFromBundles:forStoreMetadata:](mergedmodel%28from_forstoremetadata_%29.md).

## See Also

### Creating a managed object model

- [initWithContentsOfURL:](init%28contentsof_%29.md): Initializes the managed object model using the model file at the specified URL.
- [init](init%28%29.md): Initializes an empty managed object model.
- [mergedModelFromBundles:](mergedmodel%28from_%29.md): Returns a model created by merging all the models found in given bundles.
- [mergedModelFromBundles:forStoreMetadata:](mergedmodel%28from_forstoremetadata_%29.md): Returns a merged model from a specified array for the version information in provided metadata.
- [modelByMergingModels:](init%28bymerging_%29.md): Creates a single model from an array of existing models.

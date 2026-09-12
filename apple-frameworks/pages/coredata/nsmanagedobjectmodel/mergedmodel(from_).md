> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectmodel/mergedmodel(from:)](https://developer.apple.com/documentation/coredata/nsmanagedobjectmodel/mergedmodel(from:))

# mergedModel(from:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a model created by merging all the models found in given bundles.

## Declaration

```swift
class func mergedModel(from bundles: [Bundle]?) -> NSManagedObjectModel?
```

## Parameters

- `bundles`: An array of instances of `NSBundle` to search. If you specify `nil`, then the main bundle is searched.

<a id="return-value"></a>

## Return Value

A model created by merging all the models found in `bundles`.

## See Also

### Creating a managed object model

- [init(contentsOf:)](init%28contentsof_%29.md): Initializes the managed object model using the model file at the specified URL.
- [init()](init%28%29.md): Initializes an empty managed object model.
- [mergedModel(from:forStoreMetadata:)](mergedmodel%28from_forstoremetadata_%29.md): Returns a merged model from a specified array for the version information in provided metadata.
- [init(byMerging:)](init%28bymerging_%29.md): Creates a single model from an array of existing models.
- [init(byMerging:forStoreMetadata:)](init%28bymerging_forstoremetadata_%29.md): Returns, for the version information in given metadata, a model merged from a given array of models.

# mergedModelFromBundles: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a model created by merging all the models found in given bundles.

## Declaration

```objectivec
+ (NSManagedObjectModel *) mergedModelFromBundles:(NSArray<NSBundle *> *) bundles;
```

## Parameters

- `bundles`: An array of instances of `NSBundle` to search. If you specify `nil`, then the main bundle is searched.

<a id="return-value"></a>

## Return Value

A model created by merging all the models found in `bundles`.

## See Also

### Creating a managed object model

- [initWithContentsOfURL:](init%28contentsof_%29.md): Initializes the managed object model using the model file at the specified URL.
- [init](init%28%29.md): Initializes an empty managed object model.
- [mergedModelFromBundles:forStoreMetadata:](mergedmodel%28from_forstoremetadata_%29.md): Returns a merged model from a specified array for the version information in provided metadata.
- [modelByMergingModels:](init%28bymerging_%29.md): Creates a single model from an array of existing models.
- [modelByMergingModels:forStoreMetadata:](init%28bymerging_forstoremetadata_%29.md): Returns, for the version information in given metadata, a model merged from a given array of models.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmappingmodel/init(from:forsourcemodel:destinationmodel:)](https://developer.apple.com/documentation/coredata/nsmappingmodel/init(from:forsourcemodel:destinationmodel:))

# init(from:forSourceModel:destinationModel:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the mapping model that will translate data from the source to the destination model.

## Declaration

```swift
init?(from bundles: [Bundle]?, forSourceModel sourceModel: NSManagedObjectModel?, destinationModel: NSManagedObjectModel?)
```

## Parameters

- `bundles`: An array of bundles in which to search for mapping models.
- `sourceModel`: The managed object model for the source store.
- `destinationModel`: The managed object model for the destination store.

<a id="return-value"></a>

## Return Value

Returns the mapping model to translate data from `sourceModel` to `destinationModel`. If a suitable mapping model cannot be found, returns `nil`.

<a id="Discussion"></a>

## Discussion

This method is a companion to the [mergedModel(from:)](../nsmanagedobjectmodel/mergedmodel%28from_%29.md) and [mergedModel(from:forStoreMetadata:)](../nsmanagedobjectmodel/mergedmodel%28from_forstoremetadata_%29.md) methods. In this case, the framework uses the version information from the models to locate the appropriate mapping model in the available bundles.

## See Also

### Related Documentation

- [Core Data Model Versioning and Data Migration Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreDataVersioning/Articles/Introduction.html#//apple_ref/doc/uid/TP40004399)

### Creating a Mapping

- [inferredMappingModel(forSourceModel:destinationModel:)](inferredmappingmodel%28forsourcemodel_destinationmodel_%29.md): Returns a newly created mapping model that will migrate data from the source to the destination model.
- [init(contentsOf:)](init%28contentsof_%29.md): Returns a mapping model initialized from a given URL.

# mappingModelFromBundles:forSourceModel:destinationModel: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns the mapping model that will translate data from the source to the destination model.

## Declaration

```objectivec
+ (NSMappingModel *) mappingModelFromBundles:(NSArray<NSBundle *> *) bundles forSourceModel:(NSManagedObjectModel *) sourceModel destinationModel:(NSManagedObjectModel *) destinationModel;
```

## Parameters

- `bundles`: An array of bundles in which to search for mapping models.
- `sourceModel`: The managed object model for the source store.
- `destinationModel`: The managed object model for the destination store.

<a id="return-value"></a>

## Return Value

Returns the mapping model to translate data from `sourceModel` to `destinationModel`. If a suitable mapping model cannot be found, returns `nil`.

<a id="Discussion"></a>

## Discussion

This method is a companion to the [mergedModelFromBundles:](../nsmanagedobjectmodel/mergedmodel%28from_%29.md) and [mergedModelFromBundles:forStoreMetadata:](../nsmanagedobjectmodel/mergedmodel%28from_forstoremetadata_%29.md) methods. In this case, the framework uses the version information from the models to locate the appropriate mapping model in the available bundles.

## See Also

### Related Documentation

- [Core Data Model Versioning and Data Migration Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreDataVersioning/Articles/Introduction.html#//apple_ref/doc/uid/TP40004399)

### Creating a Mapping

- [inferredMappingModelForSourceModel:destinationModel:error:](inferredmappingmodel%28forsourcemodel_destinationmodel_%29.md): Returns a newly created mapping model that will migrate data from the source to the destination model.
- [initWithContentsOfURL:](init%28contentsof_%29.md): Returns a mapping model initialized from a given URL.

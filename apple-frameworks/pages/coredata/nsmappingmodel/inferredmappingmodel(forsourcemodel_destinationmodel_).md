> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmappingmodel/inferredmappingmodel(forsourcemodel:destinationmodel:)](https://developer.apple.com/documentation/coredata/nsmappingmodel/inferredmappingmodel(forsourcemodel:destinationmodel:))

# inferredMappingModel(forSourceModel:destinationModel:) (Swift)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a newly created mapping model that will migrate data from the source to the destination model.

## Declaration

```swift
class func inferredMappingModel(forSourceModel sourceModel: NSManagedObjectModel, destinationModel: NSManagedObjectModel) throws -> NSMappingModel
```

## Parameters

- `sourceModel`: The source managed object model.
- `destinationModel`: The destination managed object model.

<a id="return-value"></a>

## Return Value

A newly-created mapping model to migrate data from the source to the destination model. If the mapping model can not be created, returns `nil`.

## Mentioned In

- [Migrating your data model automatically](../migrating-your-data-model-automatically.md)

<a id="Discussion"></a>

## Discussion

A model will be created only if all changes are simple enough to be able to reasonably infer a mapping (for example, removing or renaming an attribute, adding an optional attribute or relationship, or adding renaming or deleting an entity). Element IDs are used to track renamed properties and entities.

## See Also

### Creating a Mapping

- [init(from:forSourceModel:destinationModel:)](init%28from_forsourcemodel_destinationmodel_%29.md): Returns the mapping model that will translate data from the source to the destination model.
- [init(contentsOf:)](init%28contentsof_%29.md): Returns a mapping model initialized from a given URL.

# inferredMappingModelForSourceModel:destinationModel:error: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a newly created mapping model that will migrate data from the source to the destination model.

## Declaration

```objectivec
+ (NSMappingModel *) inferredMappingModelForSourceModel:(NSManagedObjectModel *) sourceModel destinationModel:(NSManagedObjectModel *) destinationModel error:(NSError **) error;
```

## Parameters

- `sourceModel`: The source managed object model.
- `destinationModel`: The destination managed object model.
- `error`: If a problem occurs, on return contains an `NSInferredMappingModelError` error that describes the problem.

  The error’s user info will contain additional details about why inferring the mapping model failed (check for the following keys: `reason`, `entity`, `property`.

<a id="return-value"></a>

## Return Value

A newly-created mapping model to migrate data from the source to the destination model. If the mapping model can not be created, returns `nil`.

## Mentioned In

- [Migrating your data model automatically](../migrating-your-data-model-automatically.md)

<a id="Discussion"></a>

## Discussion

A model will be created only if all changes are simple enough to be able to reasonably infer a mapping (for example, removing or renaming an attribute, adding an optional attribute or relationship, or adding renaming or deleting an entity). Element IDs are used to track renamed properties and entities.

## See Also

### Creating a Mapping

- [mappingModelFromBundles:forSourceModel:destinationModel:](init%28from_forsourcemodel_destinationmodel_%29.md): Returns the mapping model that will translate data from the source to the destination model.
- [initWithContentsOfURL:](init%28contentsof_%29.md): Returns a mapping model initialized from a given URL.

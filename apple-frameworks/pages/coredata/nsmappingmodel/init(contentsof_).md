> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmappingmodel/init(contentsof:)](https://developer.apple.com/documentation/coredata/nsmappingmodel/init(contentsof:))

# init(contentsOf:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a mapping model initialized from a given URL.

## Declaration

```swift
init?(contentsOf url: URL?)
```

## Parameters

- `url`: The location of an archived mapping model.

<a id="return-value"></a>

## Return Value

A mapping model initialized from `url`.

## See Also

### Creating a Mapping

- [init(from:forSourceModel:destinationModel:)](init%28from_forsourcemodel_destinationmodel_%29.md): Returns the mapping model that will translate data from the source to the destination model.
- [inferredMappingModel(forSourceModel:destinationModel:)](inferredmappingmodel%28forsourcemodel_destinationmodel_%29.md): Returns a newly created mapping model that will migrate data from the source to the destination model.

# initWithContentsOfURL: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a mapping model initialized from a given URL.

## Declaration

```objectivec
- (instancetype) initWithContentsOfURL:(NSURL *) url;
```

## Parameters

- `url`: The location of an archived mapping model.

<a id="return-value"></a>

## Return Value

A mapping model initialized from `url`.

## See Also

### Creating a Mapping

- [mappingModelFromBundles:forSourceModel:destinationModel:](init%28from_forsourcemodel_destinationmodel_%29.md): Returns the mapping model that will translate data from the source to the destination model.
- [inferredMappingModelForSourceModel:destinationModel:error:](inferredmappingmodel%28forsourcemodel_destinationmodel_%29.md): Returns a newly created mapping model that will migrate data from the source to the destination model.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchrequest/entity](https://developer.apple.com/documentation/coredata/nsfetchrequest/entity)

# entity (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The entity specified for the fetch request.

## Declaration

```swift
var entity: NSEntityDescription? { get set }
```

<a id="Discussion"></a>

## Discussion

When an [NSFetchRequest](../nsfetchrequest.md) instance is created with `init()`, it is expected that the [entity](../nspropertydescription/entity.md) property will be set.  If this property is not set, the fetch request fails upon execution.

## See Also

### Managing the Fetch Request’s Entity

- [init(entityName:)](init%28entityname_%29-5anoo.md): Returns a fetch request configured with a given entity name.
- [init()](init%28%29.md): Creates a new fetch request.
- [entityName](entityname.md): The name of the entity the request is configured to fetch.
- [includesSubentities](includessubentities.md): A Boolean value that indicates whether the fetch request includes subentities in the results.
- [NSFetchRequestResultType](../nsfetchrequestresulttype.md): Constants that specify the possible result types a fetch request can return.

# entity (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The entity specified for the fetch request.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) NSEntityDescription * entity;
```

<a id="Discussion"></a>

## Discussion

When an [NSFetchRequest](../nsfetchrequest.md) instance is created with `init()`, it is expected that the [entity](../nspropertydescription/entity.md) property will be set.  If this property is not set, the fetch request fails upon execution.

## See Also

### Managing the Fetch Request’s Entity

- [fetchRequestWithEntityName:](init%28entityname_%29-5anoo.md): Returns a fetch request configured with a given entity name.
- [init](init%28%29.md): Creates a new fetch request.
- [entityName](entityname.md): The name of the entity the request is configured to fetch.
- [includesSubentities](includessubentities.md): A Boolean value that indicates whether the fetch request includes subentities in the results.
- [NSFetchRequestResultType](../nsfetchrequestresulttype.md): Constants that specify the possible result types a fetch request can return.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchrequest/entityname](https://developer.apple.com/documentation/coredata/nsfetchrequest/entityname)

# entityName (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The name of the entity the request is configured to fetch.

## Declaration

```swift
var entityName: String? { get }
```

<a id="Discussion"></a>

## Discussion

The entity name property is populated whenever the NSFetchRequest is created with `NSFetchRequest/init(entityName:)` or [init(entityName:)](init%28entityname_%29-5anoo.md).

## See Also

### Managing the Fetch Request’s Entity

- [init(entityName:)](init%28entityname_%29-5anoo.md): Returns a fetch request configured with a given entity name.
- [init()](init%28%29.md): Creates a new fetch request.
- [entity](entity.md): The entity specified for the fetch request.
- [includesSubentities](includessubentities.md): A Boolean value that indicates whether the fetch request includes subentities in the results.
- [NSFetchRequestResultType](../nsfetchrequestresulttype.md): Constants that specify the possible result types a fetch request can return.

# entityName (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The name of the entity the request is configured to fetch.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSString * entityName;
```

<a id="Discussion"></a>

## Discussion

The entity name property is populated whenever the NSFetchRequest is created with `NSFetchRequest/init(entityName:)` or [fetchRequestWithEntityName:](init%28entityname_%29-5anoo.md).

## See Also

### Managing the Fetch Request’s Entity

- [fetchRequestWithEntityName:](init%28entityname_%29-5anoo.md): Returns a fetch request configured with a given entity name.
- [init](init%28%29.md): Creates a new fetch request.
- [entity](entity.md): The entity specified for the fetch request.
- [includesSubentities](includessubentities.md): A Boolean value that indicates whether the fetch request includes subentities in the results.
- [NSFetchRequestResultType](../nsfetchrequestresulttype.md): Constants that specify the possible result types a fetch request can return.

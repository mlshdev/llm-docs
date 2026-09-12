> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchrequest/includessubentities](https://developer.apple.com/documentation/coredata/nsfetchrequest/includessubentities)

# includesSubentities (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the fetch request includes subentities in the results.

## Declaration

```swift
var includesSubentities: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The value is [true](https://developer.apple.com/documentation/swift/true) if the request will include all subentities of the entity for the request; otherwise it is [false](https://developer.apple.com/documentation/swift/false). The default is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the Fetch Request’s Entity

- [init(entityName:)](init%28entityname_%29-5anoo.md): Returns a fetch request configured with a given entity name.
- [init()](init%28%29.md): Creates a new fetch request.
- [entityName](entityname.md): The name of the entity the request is configured to fetch.
- [entity](entity.md): The entity specified for the fetch request.
- [NSFetchRequestResultType](../nsfetchrequestresulttype.md): Constants that specify the possible result types a fetch request can return.

# includesSubentities (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value that indicates whether the fetch request includes subentities in the results.

## Declaration

```objectivec
@property (nonatomic) BOOL includesSubentities;
```

<a id="Discussion"></a>

## Discussion

The value is [true](https://developer.apple.com/documentation/swift/true) if the request will include all subentities of the entity for the request; otherwise it is [false](https://developer.apple.com/documentation/swift/false). The default is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Managing the Fetch Request’s Entity

- [fetchRequestWithEntityName:](init%28entityname_%29-5anoo.md): Returns a fetch request configured with a given entity name.
- [init](init%28%29.md): Creates a new fetch request.
- [entityName](entityname.md): The name of the entity the request is configured to fetch.
- [entity](entity.md): The entity specified for the fetch request.
- [NSFetchRequestResultType](../nsfetchrequestresulttype.md): Constants that specify the possible result types a fetch request can return.

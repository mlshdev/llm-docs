> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchrequest/init(entityname:)-5anoo](https://developer.apple.com/documentation/coredata/nsfetchrequest/init(entityname:)-5anoo)

# init(entityName:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 4.0+ · visionOS 1.0+

Returns a fetch request configured with a given entity name.

## Declaration

```swift
convenience init(entityName: String)
```

## Parameters

- `entityName`: The name of the entity to fetch.

<a id="return-value"></a>

## Return Value

A fetch request configured to fetch the entity named `entityName`.

<a id="Discussion"></a>

## Discussion

This method provides a convenient way to configure the entity for a fetch request without having to retrieve an [NSEntityDescription](../nsentitydescription.md) object. When the fetch is executed, the request uses the managed object context to find the entity with the given name. The model associated with the context’s persistent store coordinator must contain an entity named `entityName`.

## See Also

### Related Documentation

- [Predicate Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/AdditionalChapters/Introduction.html#//apple_ref/doc/uid/TP40001789)
- [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075)

### Managing the Fetch Request’s Entity

- [init()](init%28%29.md): Creates a new fetch request.
- [entityName](entityname.md): The name of the entity the request is configured to fetch.
- [entity](entity.md): The entity specified for the fetch request.
- [includesSubentities](includessubentities.md): A Boolean value that indicates whether the fetch request includes subentities in the results.
- [NSFetchRequestResultType](../nsfetchrequestresulttype.md): Constants that specify the possible result types a fetch request can return.

# fetchRequestWithEntityName: (Objective-C)

**Framework:** Core Data  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns a fetch request configured with a given entity name.

## Declaration

```objectivec
+ (instancetype) fetchRequestWithEntityName:(NSString *) entityName;
```

## Parameters

- `entityName`: The name of the entity to fetch.

<a id="return-value"></a>

## Return Value

A fetch request configured to fetch the entity named `entityName`.

<a id="Discussion"></a>

## Discussion

This method provides a convenient way to configure the entity for a fetch request without having to retrieve an [NSEntityDescription](../nsentitydescription.md) object. When the fetch is executed, the request uses the managed object context to find the entity with the given name. The model associated with the context’s persistent store coordinator must contain an entity named `entityName`.

## See Also

### Related Documentation

- [Predicate Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Predicates/AdditionalChapters/Introduction.html#//apple_ref/doc/uid/TP40001789)
- [Core Data Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/CoreData/index.html#//apple_ref/doc/uid/TP40001075)

### Managing the Fetch Request’s Entity

- [init](init%28%29.md): Creates a new fetch request.
- [entityName](entityname.md): The name of the entity the request is configured to fetch.
- [entity](entity.md): The entity specified for the fetch request.
- [includesSubentities](includessubentities.md): A Boolean value that indicates whether the fetch request includes subentities in the results.
- [NSFetchRequestResultType](../nsfetchrequestresulttype.md): Constants that specify the possible result types a fetch request can return.

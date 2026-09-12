> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchrequestresulttype](https://developer.apple.com/documentation/coredata/nsfetchrequestresulttype)

# NSFetchRequestResultType (Swift)

**Framework:** Core Data  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify the possible result types a fetch request can return.

## Declaration

```swift
struct NSFetchRequestResultType
```

<a id="overview"></a>

## Overview

These constants are used by [resultType](nsfetchrequest/resulttype.md).

## Topics

### Result Types

- [managedObjectResultType](nsfetchrequestresulttype/managedobjectresulttype.md): The request returns managed objects.
- [managedObjectIDResultType](nsfetchrequestresulttype/managedobjectidresulttype.md): The request returns managed object IDs.
- [dictionaryResultType](nsfetchrequestresulttype/dictionaryresulttype.md): The request returns dictionaries.
- [countResultType](nsfetchrequestresulttype/countresulttype.md): The request returns the count of the objects that match the request.

### Initializers

- [init(rawValue:)](nsfetchrequestresulttype/init%28rawvalue_%29.md): Creates a fetch request result type using the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Managing the Fetch Request’s Entity

- [init(entityName:)](nsfetchrequest/init%28entityname_%29-5anoo.md): Returns a fetch request configured with a given entity name.
- [init()](nsfetchrequest/init%28%29.md): Creates a new fetch request.
- [entityName](nsfetchrequest/entityname.md): The name of the entity the request is configured to fetch.
- [entity](nsfetchrequest/entity.md): The entity specified for the fetch request.
- [includesSubentities](nsfetchrequest/includessubentities.md): A Boolean value that indicates whether the fetch request includes subentities in the results.

# NSFetchRequestResultType (Objective-C)

**Framework:** Core Data  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Constants that specify the possible result types a fetch request can return.

## Declaration

```objectivec
enum NSFetchRequestResultType : NSUInteger;
```

<a id="overview"></a>

## Overview

These constants are used by [resultType](nsfetchrequest/resulttype.md).

## Topics

### Result Types

- [NSManagedObjectResultType](nsfetchrequestresulttype/managedobjectresulttype.md): The request returns managed objects.
- [NSManagedObjectIDResultType](nsfetchrequestresulttype/managedobjectidresulttype.md): The request returns managed object IDs.
- [NSDictionaryResultType](nsfetchrequestresulttype/dictionaryresulttype.md): The request returns dictionaries.
- [NSCountResultType](nsfetchrequestresulttype/countresulttype.md): The request returns the count of the objects that match the request.

## See Also

### Managing the Fetch Request’s Entity

- [fetchRequestWithEntityName:](nsfetchrequest/init%28entityname_%29-5anoo.md): Returns a fetch request configured with a given entity name.
- [init](nsfetchrequest/init%28%29.md): Creates a new fetch request.
- [entityName](nsfetchrequest/entityname.md): The name of the entity the request is configured to fetch.
- [entity](nsfetchrequest/entity.md): The entity specified for the fetch request.
- [includesSubentities](nsfetchrequest/includessubentities.md): A Boolean value that indicates whether the fetch request includes subentities in the results.

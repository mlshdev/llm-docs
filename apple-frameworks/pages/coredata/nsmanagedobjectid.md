> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobjectid](https://developer.apple.com/documentation/coredata/nsmanagedobjectid)

# NSManagedObjectID (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A compact, universal identifier for a managed object.

## Declaration

```swift
class NSManagedObjectID
```

## Mentioned In

- [Using Core Data in the background](using-core-data-in-the-background.md)

<a id="overview"></a>

## Overview

This identifier forms the basis for uniquing in the Core Data Framework. A managed object ID uniquely identifies the same managed object both between managed object contexts in a single application, and in multiple applications (as in distributed systems). Identifiers contain the information needed to exactly describe an object in a persistent store (like the primary key in the database), although the detailed information is not exposed. The framework completely encapsulates the “external” information and presents a clean object oriented interface.

Object IDs can be transformed into a URI representation which can be archived and recreated later to refer back to a given object (using [managedObjectID(forURIRepresentation:)](nspersistentstorecoordinator/managedobjectid%28forurirepresentation_%29.md) (`NSPersistentStoreCoordinator`) and [object(with:)](nsmanagedobjectcontext/object%28with_%29.md) (`NSManagedObjectContext`). For example, the last selected group in an application could be stored in the user defaults through the group object’s ID. You can also use object ID URI representations to store “weak” relationships across persistent stores (where no hard join is possible).

## Topics

### Getting Managed Object ID Information

- [entity](nsmanagedobjectid/entity.md): The entity description associated with the object ID.
- [isTemporaryID](nsmanagedobjectid/istemporaryid.md): A Boolean value that indicates whether the object ID is temporary.
- [persistentStore](nsmanagedobjectid/persistentstore.md): The persistent store that fetched the object for the object ID.
- [uriRepresentation()](nsmanagedobjectid/urirepresentation%28%29.md): Returns a URI that provides an archiveable reference to the object for the object ID.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSFetchRequestResult](nsfetchrequestresult.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Object Management

- [NSManagedObjectContext](nsmanagedobjectcontext.md): An object space to manipulate and track changes to managed objects.
- [NSManagedObject](nsmanagedobject.md): The base class that all Core Data model objects inherit from.

# NSManagedObjectID (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A compact, universal identifier for a managed object.

## Declaration

```objectivec
@interface NSManagedObjectID : NSObject
```

## Mentioned In

- [Using Core Data in the background](using-core-data-in-the-background.md)

<a id="overview"></a>

## Overview

This identifier forms the basis for uniquing in the Core Data Framework. A managed object ID uniquely identifies the same managed object both between managed object contexts in a single application, and in multiple applications (as in distributed systems). Identifiers contain the information needed to exactly describe an object in a persistent store (like the primary key in the database), although the detailed information is not exposed. The framework completely encapsulates the “external” information and presents a clean object oriented interface.

Object IDs can be transformed into a URI representation which can be archived and recreated later to refer back to a given object (using [managedObjectIDForURIRepresentation:](nspersistentstorecoordinator/managedobjectid%28forurirepresentation_%29.md) (`NSPersistentStoreCoordinator`) and [objectWithID:](nsmanagedobjectcontext/object%28with_%29.md) (`NSManagedObjectContext`). For example, the last selected group in an application could be stored in the user defaults through the group object’s ID. You can also use object ID URI representations to store “weak” relationships across persistent stores (where no hard join is possible).

## Topics

### Getting Managed Object ID Information

- [entity](nsmanagedobjectid/entity.md): The entity description associated with the object ID.
- [temporaryID](nsmanagedobjectid/istemporaryid.md): A Boolean value that indicates whether the object ID is temporary.
- [persistentStore](nsmanagedobjectid/persistentstore.md): The persistent store that fetched the object for the object ID.
- [URIRepresentation](nsmanagedobjectid/urirepresentation%28%29.md): Returns a URI that provides an archiveable reference to the object for the object ID.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSFetchRequestResult](nsfetchrequestresult.md)

## See Also

### Object Management

- [NSManagedObjectContext](nsmanagedobjectcontext.md): An object space to manipulate and track changes to managed objects.
- [NSManagedObject](nsmanagedobject.md): The base class that all Core Data model objects inherit from.

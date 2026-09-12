> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchindexdescription](https://developer.apple.com/documentation/coredata/nsfetchindexdescription)

# NSFetchIndexDescription (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The description of the index.

## Declaration

```swift
class NSFetchIndexDescription
```

## Topics

### Creating an Index Description

- [init(name:elements:)](nsfetchindexdescription/init%28name_elements_%29.md): Creates a fetch index description using the specified name and element descriptions.

### Inspecting an Index Description

- [elements](nsfetchindexdescription/elements.md): An array of fetch index element descriptions.
- [entity](nsfetchindexdescription/entity.md): The entity description for the fetch index description.
- [name](nsfetchindexdescription/name.md): The name of the fetch index description.
- [partialIndexPredicate](nsfetchindexdescription/partialindexpredicate.md): A predicate that selects rows for indexing, if the index is a partial index.

### Initializers

- [init(coder:)](nsfetchindexdescription/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Working with indexes

- [NSFetchIndexElementType](nsfetchindexelementtype.md): Defines the possible types of index elements.
- [NSFetchIndexElementDescription](nsfetchindexelementdescription.md): Description of an Index Element

# NSFetchIndexDescription (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The description of the index.

## Declaration

```objectivec
@interface NSFetchIndexDescription : NSObject
```

## Topics

### Creating an Index Description

- [initWithName:elements:](nsfetchindexdescription/init%28name_elements_%29.md): Creates a fetch index description using the specified name and element descriptions.

### Inspecting an Index Description

- [elements](nsfetchindexdescription/elements.md): An array of fetch index element descriptions.
- [entity](nsfetchindexdescription/entity.md): The entity description for the fetch index description.
- [name](nsfetchindexdescription/name.md): The name of the fetch index description.
- [partialIndexPredicate](nsfetchindexdescription/partialindexpredicate.md): A predicate that selects rows for indexing, if the index is a partial index.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)

## See Also

### Working with indexes

- [NSFetchIndexElementType](nsfetchindexelementtype.md): Defines the possible types of index elements.
- [NSFetchIndexElementDescription](nsfetchindexelementdescription.md): Description of an Index Element

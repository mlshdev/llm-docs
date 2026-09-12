> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsfetchindexelementdescription](https://developer.apple.com/documentation/coredata/nsfetchindexelementdescription)

# NSFetchIndexElementDescription (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Description of an Index Element

## Declaration

```swift
class NSFetchIndexElementDescription
```

## Topics

### Creating an Index Element Description

- [init(property:collationType:)](nsfetchindexelementdescription/init%28property_collationtype_%29.md): Creates an index element description using the specified property description and collation type.

### Inspecting an Index Element Description

- [collationType](nsfetchindexelementdescription/collationtype.md): The type of collation that the index element uses, either binary or R-tree.
- [indexDescription](nsfetchindexelementdescription/indexdescription.md)
- [isAscending](nsfetchindexelementdescription/isascending.md): A Boolean value that controls whether an index that supports direction is an ascending or descending index.
- [property](nsfetchindexelementdescription/property.md): A property description.
- [propertyName](nsfetchindexelementdescription/propertyname.md): The specified name in the property description.

### Initializers

- [init(coder:)](nsfetchindexelementdescription/init%28coder_%29.md)

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
- [NSFetchIndexDescription](nsfetchindexdescription.md): The description of the index.

# NSFetchIndexElementDescription (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

Description of an Index Element

## Declaration

```objectivec
@interface NSFetchIndexElementDescription : NSObject
```

## Topics

### Creating an Index Element Description

- [initWithProperty:collationType:](nsfetchindexelementdescription/init%28property_collationtype_%29.md): Creates an index element description using the specified property description and collation type.

### Inspecting an Index Element Description

- [collationType](nsfetchindexelementdescription/collationtype.md): The type of collation that the index element uses, either binary or R-tree.
- [indexDescription](nsfetchindexelementdescription/indexdescription.md)
- [ascending](nsfetchindexelementdescription/isascending.md): A Boolean value that controls whether an index that supports direction is an ascending or descending index.
- [property](nsfetchindexelementdescription/property.md): A property description.
- [propertyName](nsfetchindexelementdescription/propertyname.md): The specified name in the property description.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)

## See Also

### Working with indexes

- [NSFetchIndexElementType](nsfetchindexelementtype.md): Defines the possible types of index elements.
- [NSFetchIndexDescription](nsfetchindexdescription.md): The description of the index.

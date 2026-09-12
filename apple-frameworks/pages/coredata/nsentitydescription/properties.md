> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitydescription/properties](https://developer.apple.com/documentation/coredata/nsentitydescription/properties)

# properties (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An array containing the properties of the receiver.

## Declaration

```swift
var properties: [NSPropertyDescription] { get set }
```

<a id="Discussion"></a>

## Discussion

The elements in the array are instances of [NSAttributeDescription](../nsattributedescription.md), [NSRelationshipDescription](../nsrelationshipdescription.md), and/or [NSFetchedPropertyDescription](../nsfetchedpropertydescription.md).

<a id="Special-Considerations"></a>

### Special Considerations

Setting the properties raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Working with properties

- [propertiesByName](propertiesbyname.md): A dictionary containing the properties of the receiver.
- [attributesByName](attributesbyname.md): The attributes of the receiver in a dictionary.
- [relationshipsByName](relationshipsbyname.md): The relationships of the receiver in a dictionary.
- [relationships(forDestination:)](relationships%28fordestination_%29.md): Returns an array containing the relationships of the receiver where the entity description of the relationship is a given entity.

# properties (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

An array containing the properties of the receiver.

## Declaration

```objectivec
@property (strong) NSArray<__kindof NSPropertyDescription *> * properties;
```

<a id="Discussion"></a>

## Discussion

The elements in the array are instances of [NSAttributeDescription](../nsattributedescription.md), [NSRelationshipDescription](../nsrelationshipdescription.md), and/or [NSFetchedPropertyDescription](../nsfetchedpropertydescription.md).

<a id="Special-Considerations"></a>

### Special Considerations

Setting the properties raises an exception if the receiver’s model has been used by an object graph manager.

## See Also

### Working with properties

- [propertiesByName](propertiesbyname.md): A dictionary containing the properties of the receiver.
- [attributesByName](attributesbyname.md): The attributes of the receiver in a dictionary.
- [relationshipsByName](relationshipsbyname.md): The relationships of the receiver in a dictionary.
- [relationshipsWithDestinationEntity:](relationships%28fordestination_%29.md): Returns an array containing the relationships of the receiver where the entity description of the relationship is a given entity.

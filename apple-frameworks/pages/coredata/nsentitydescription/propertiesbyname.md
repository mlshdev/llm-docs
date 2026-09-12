> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitydescription/propertiesbyname](https://developer.apple.com/documentation/coredata/nsentitydescription/propertiesbyname)

# propertiesByName (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A dictionary containing the properties of the receiver.

## Declaration

```swift
var propertiesByName: [String : NSPropertyDescription] { get }
```

<a id="Discussion"></a>

## Discussion

The keys in the dictionary are the property names and the values are instances of [NSAttributeDescription](../nsattributedescription.md) and/or [NSRelationshipDescription](../nsrelationshipdescription.md).

## See Also

### Working with properties

- [properties](properties.md): An array containing the properties of the receiver.
- [attributesByName](attributesbyname.md): The attributes of the receiver in a dictionary.
- [relationshipsByName](relationshipsbyname.md): The relationships of the receiver in a dictionary.
- [relationships(forDestination:)](relationships%28fordestination_%29.md): Returns an array containing the relationships of the receiver where the entity description of the relationship is a given entity.

# propertiesByName (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A dictionary containing the properties of the receiver.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,__kindof NSPropertyDescription *> * propertiesByName;
```

<a id="Discussion"></a>

## Discussion

The keys in the dictionary are the property names and the values are instances of [NSAttributeDescription](../nsattributedescription.md) and/or [NSRelationshipDescription](../nsrelationshipdescription.md).

## See Also

### Working with properties

- [properties](properties.md): An array containing the properties of the receiver.
- [attributesByName](attributesbyname.md): The attributes of the receiver in a dictionary.
- [relationshipsByName](relationshipsbyname.md): The relationships of the receiver in a dictionary.
- [relationshipsWithDestinationEntity:](relationships%28fordestination_%29.md): Returns an array containing the relationships of the receiver where the entity description of the relationship is a given entity.

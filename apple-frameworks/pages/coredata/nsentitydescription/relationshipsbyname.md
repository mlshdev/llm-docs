> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitydescription/relationshipsbyname](https://developer.apple.com/documentation/coredata/nsentitydescription/relationshipsbyname)

# relationshipsByName (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The relationships of the receiver in a dictionary.

## Declaration

```swift
var relationshipsByName: [String : NSRelationshipDescription] { get }
```

<a id="Discussion"></a>

## Discussion

The keys in the dictionary are the relationship names and the values are instances of [NSRelationshipDescription](../nsrelationshipdescription.md).

## See Also

### Working with properties

- [propertiesByName](propertiesbyname.md): A dictionary containing the properties of the receiver.
- [properties](properties.md): An array containing the properties of the receiver.
- [attributesByName](attributesbyname.md): The attributes of the receiver in a dictionary.
- [relationships(forDestination:)](relationships%28fordestination_%29.md): Returns an array containing the relationships of the receiver where the entity description of the relationship is a given entity.

# relationshipsByName (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The relationships of the receiver in a dictionary.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,NSRelationshipDescription *> * relationshipsByName;
```

<a id="Discussion"></a>

## Discussion

The keys in the dictionary are the relationship names and the values are instances of [NSRelationshipDescription](../nsrelationshipdescription.md).

## See Also

### Working with properties

- [propertiesByName](propertiesbyname.md): A dictionary containing the properties of the receiver.
- [properties](properties.md): An array containing the properties of the receiver.
- [attributesByName](attributesbyname.md): The attributes of the receiver in a dictionary.
- [relationshipsWithDestinationEntity:](relationships%28fordestination_%29.md): Returns an array containing the relationships of the receiver where the entity description of the relationship is a given entity.

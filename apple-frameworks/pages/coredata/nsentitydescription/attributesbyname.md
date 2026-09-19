> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coredata/nsentitydescription/attributesbyname

# attributesByName (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The attributes of the receiver in a dictionary.

## Declaration

```swift
var attributesByName: [String : NSAttributeDescription] { get }
```

<a id="Discussion"></a>

## Discussion

The keys in the dictionary are the attribute names and the values are instances of [NSAttributeDescription](../nsattributedescription.md). .

## See Also

### Working with properties

- [propertiesByName](propertiesbyname.md): A dictionary containing the properties of the receiver.
- [properties](properties.md): An array containing the properties of the receiver.
- [relationshipsByName](relationshipsbyname.md): The relationships of the receiver in a dictionary.
- [relationships(forDestination:)](relationships%28fordestination_%29.md): Returns an array containing the relationships of the receiver where the entity description of the relationship is a given entity.

# attributesByName (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The attributes of the receiver in a dictionary.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,NSAttributeDescription *> * attributesByName;
```

<a id="Discussion"></a>

## Discussion

The keys in the dictionary are the attribute names and the values are instances of [NSAttributeDescription](../nsattributedescription.md). .

## See Also

### Working with properties

- [propertiesByName](propertiesbyname.md): A dictionary containing the properties of the receiver.
- [properties](properties.md): An array containing the properties of the receiver.
- [relationshipsByName](relationshipsbyname.md): The relationships of the receiver in a dictionary.
- [relationshipsWithDestinationEntity:](relationships%28fordestination_%29.md): Returns an array containing the relationships of the receiver where the entity description of the relationship is a given entity.

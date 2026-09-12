> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitydescription/relationships(fordestination:)](https://developer.apple.com/documentation/coredata/nsentitydescription/relationships(fordestination:))

# relationships(forDestination:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an array containing the relationships of the receiver where the entity description of the relationship is a given entity.

## Declaration

```swift
func relationships(forDestination entity: NSEntityDescription) -> [NSRelationshipDescription]
```

## Parameters

- `entity`: An entity description.

<a id="return-value"></a>

## Return Value

An array containing the relationships of the receiver where the entity description of the relationship is `entity`. Elements in the array are instances of [NSRelationshipDescription](../nsrelationshipdescription.md).

## See Also

### Working with properties

- [propertiesByName](propertiesbyname.md): A dictionary containing the properties of the receiver.
- [properties](properties.md): An array containing the properties of the receiver.
- [attributesByName](attributesbyname.md): The attributes of the receiver in a dictionary.
- [relationshipsByName](relationshipsbyname.md): The relationships of the receiver in a dictionary.

# relationshipsWithDestinationEntity: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Returns an array containing the relationships of the receiver where the entity description of the relationship is a given entity.

## Declaration

```objectivec
- (NSArray<NSRelationshipDescription *> *) relationshipsWithDestinationEntity:(NSEntityDescription *) entity;
```

## Parameters

- `entity`: An entity description.

<a id="return-value"></a>

## Return Value

An array containing the relationships of the receiver where the entity description of the relationship is `entity`. Elements in the array are instances of [NSRelationshipDescription](../nsrelationshipdescription.md).

## See Also

### Working with properties

- [propertiesByName](propertiesbyname.md): A dictionary containing the properties of the receiver.
- [properties](properties.md): An array containing the properties of the receiver.
- [attributesByName](attributesbyname.md): The attributes of the receiver in a dictionary.
- [relationshipsByName](relationshipsbyname.md): The relationships of the receiver in a dictionary.

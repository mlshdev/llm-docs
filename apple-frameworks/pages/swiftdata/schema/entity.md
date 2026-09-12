> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/schema/entity](https://developer.apple.com/documentation/swiftdata/schema/entity)

# Schema.Entity

**Framework:** SwiftData  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

An object that provides a blueprint for the associated model class.

## Declaration

```swift
final class Entity
```

## Topics

### Creating an entity

- [init(\_:)](entity/init%28__%29.md)
- [init(\_:properties:)](entity/init%28__properties_%29.md)
- [init(\_:subentities:properties:)](entity/init%28__subentities_properties_%29.md)

### Assigning identity

- [name](entity/name.md)

### Managing attributes

- [attributes](entity/attributes.md)
- [attributesByName](entity/attributesbyname.md)

### Defining relationships

- [relationships](entity/relationships.md)
- [relationshipsByName](entity/relationshipsbyname.md)

### Managing properties

- [properties](entity/properties.md)
- [inheritedProperties](entity/inheritedproperties.md)
- [inheritedPropertiesByName](entity/inheritedpropertiesbyname.md)
- [storedProperties](entity/storedproperties.md)
- [storedPropertiesByName](entity/storedpropertiesbyname.md)

### Applying constraints

- [uniquenessConstraints](entity/uniquenessconstraints.md)

### Configuring the inheritance chain

- [superentity](entity/superentity.md)
- [superentityName](entity/superentityname.md)
- [subentities](entity/subentities.md)

### Instance Properties

- [indices](entity/indices.md)

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing entities

- [entities](entities.md)
- [entitiesByName](entitiesbyname.md)

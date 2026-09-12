> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/schemaproperty](https://developer.apple.com/documentation/swiftdata/schemaproperty)

# SchemaProperty

**Framework:** SwiftData  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

An interface for describing a property.

## Declaration

```swift
protocol SchemaProperty : Decodable, Encodable, Hashable
```

## Topics

### Instance Properties

- [isAttribute](schemaproperty/isattribute.md)
- [isOptional](schemaproperty/isoptional.md)
- [isRelationship](schemaproperty/isrelationship.md)
- [isTransient](schemaproperty/istransient.md)
- [isUnique](schemaproperty/isunique.md)
- [name](schemaproperty/name.md)
- [originalName](schemaproperty/originalname.md)
- [valueType](schemaproperty/valuetype.md)

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

### Conforming Types

- [Schema.Attribute](schema/attribute.md)
- [Schema.CompositeAttribute](schema/compositeattribute.md)
- [Schema.Index](schema/index.md)
- [Schema.Relationship](schema/relationship.md)
- [Schema.Unique](schema/unique.md)

## See Also

### Properties

- [RelationshipCollection](relationshipcollection.md): An interface for describing a collection of related models.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/schema/attribute](https://developer.apple.com/documentation/swiftdata/schema/attribute)

# Schema.Attribute

**Framework:** SwiftData  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

An object that describes the configuration and behavior of a specific property of a model class.

## Declaration

```swift
class Attribute
```

## Topics

### Creating an attribute

- [init(\_:originalName:hashModifier:)](attribute/init%28__originalname_hashmodifier_%29.md)
- [init(name:originalName:options:valueType:defaultValue:hashModifier:)](attribute/init%28name_originalname_options_valuetype_defaultvalue_hashmodifier_%29.md)

### Specifying value information

- [defaultValue](attribute/defaultvalue.md)

### Determining behavior

- [options](attribute/options.md)
- [isTransformable](attribute/istransformable.md)

### Versioning

- [hashModifier](attribute/hashmodifier.md)

### Structures

- [Schema.Attribute.Option](attribute/option.md)

### Instance Properties

- [isCodable](attribute/iscodable.md)

## Relationships

### Inherited By

- [Schema.CompositeAttribute](compositeattribute.md)

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [SchemaProperty](../schemaproperty.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Attributes

- [Schema.CompositeAttribute](compositeattribute.md): An object that describes an attribute that derives its value by composing other attributes.

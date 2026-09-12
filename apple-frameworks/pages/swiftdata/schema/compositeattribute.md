> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/schema/compositeattribute](https://developer.apple.com/documentation/swiftdata/schema/compositeattribute)

# Schema.CompositeAttribute

**Framework:** SwiftData  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

An object that describes an attribute that derives its value by composing other attributes.

## Declaration

```swift
final class CompositeAttribute
```

## Topics

### Creating a composite attribute

- [init(name:originalName:options:valueType:defaultValue:hashModifier:)](compositeattribute/init%28name_originalname_options_valuetype_defaultvalue_hashmodifier_%29.md)

### Composing attributes

- [properties](compositeattribute/properties.md)

### Encoding and decoding

- [encode(to:)](compositeattribute/encode%28to_%29.md): Encodes this value into the given encoder.
- [init(from:)](compositeattribute/init%28from_%29.md)

### Debugging

- [debugDescription](compositeattribute/debugdescription.md): A textual representation of this instance, suitable for debugging.

### Operators

- [==(\_:\_:)](compositeattribute/==%28____%29.md)

## Relationships

### Inherits From

- [Schema.Attribute](attribute.md)

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

- [Schema.Attribute](attribute.md): An object that describes the configuration and behavior of a specific property of a model class.

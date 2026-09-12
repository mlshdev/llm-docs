> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributescopes/foundationattributes/linkattribute](https://developer.apple.com/documentation/foundation/attributescopes/foundationattributes/linkattribute)

# AttributeScopes.FoundationAttributes.LinkAttribute

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A type for using a link as an attribute.

## Declaration

```swift
@frozen enum LinkAttribute
```

## Topics

### Accessing the Attribute Name and Value

- [name](linkattribute/name.md): The name of the link attribute.
- [value(for:)](linkattribute/value%28for_%29.md): Returns the URL value of the specified object.
- [AttributeScopes.FoundationAttributes.LinkAttribute.Value](linkattribute/value.md): The type of the link attribute’s value.
- [objectiveCValue(for:)](linkattribute/objectivecvalue%28for_%29.md): Returns an object for a specified URL value.
- [AttributeScopes.FoundationAttributes.LinkAttribute.ObjectiveCValue](linkattribute/objectivecvalue.md): The type of the link attribute’s value when calling it from Objective-C.

### Default Implementations

- [ObjectiveCConvertibleAttributedStringKey Implementations](linkattribute/objectivecconvertibleattributedstringkey-implementations.md)

## Relationships

### Conforms To

- [AttributedStringKey](../../attributedstringkey.md)
- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [DecodableAttributedStringKey](../../decodableattributedstringkey.md)
- [EncodableAttributedStringKey](../../encodableattributedstringkey.md)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ObjectiveCConvertibleAttributedStringKey](../../objectivecconvertibleattributedstringkey.md)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Using URL attributes

- [imageURL](imageurl.md): A property for accessing an image URL attribute.
- [AttributeScopes.FoundationAttributes.ImageURLAttribute](imageurlattribute.md): A type for using an image URL as an attribute.
- [link](link.md): A property for accessing the link attribute.

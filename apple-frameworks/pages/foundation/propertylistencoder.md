> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/propertylistencoder](https://developer.apple.com/documentation/foundation/propertylistencoder)

# PropertyListEncoder

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that encodes instances of data types to a property list.

## Declaration

```swift
class PropertyListEncoder
```

## Mentioned In

- [Encoding and Decoding Custom Types](encoding-and-decoding-custom-types.md)

## Topics

### Encoding

- [init()](propertylistencoder/init%28%29.md): Creates a new, reusable property list encoder with the default formatting settings.
- [encode(\_:)](propertylistencoder/encode%28__%29.md): Returns a property list that represents an encoded version of the value you supply.
- [encode(\_:configuration:)](propertylistencoder/encode%28__configuration_%29-4biuh.md)
- [encode(\_:configuration:)](propertylistencoder/encode%28__configuration_%29-5ee8q.md)

### Customizing Encoding

- [outputFormat](propertylistencoder/outputformat.md): A value that determines which property list format is used during encoding.
- [userInfo](propertylistencoder/userinfo.md): A dictionary you use to customize the encoding process by providing contextual information.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [NetworkEncoder](../network/networkencoder.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TopLevelEncoder](../combine/toplevelencoder.md)

## See Also

### Property Lists

- [PropertyListDecoder](propertylistdecoder.md): An object that decodes instances of data types from a property list.
- [PropertyListSerialization](propertylistserialization.md): An object that converts between a property list and one of several serialized representations.

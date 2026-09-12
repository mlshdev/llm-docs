> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/propertylistdecoder](https://developer.apple.com/documentation/foundation/propertylistdecoder)

# PropertyListDecoder

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that decodes instances of data types from a property list.

## Declaration

```swift
class PropertyListDecoder
```

## Topics

### Decoding

- [init()](propertylistdecoder/init%28%29.md): Creates a new, reusable property list decoder.
- [decode(\_:from:)](propertylistdecoder/decode%28__from_%29.md): Returns a value of the specified type by decoding a property list using the default property list format.

### Customizing Decoding

- [decode(\_:from:format:)](propertylistdecoder/decode%28__from_format_%29.md): Returns a value of the specified type by decoding a property list using the supplied format.
- [userInfo](propertylistdecoder/userinfo.md): A dictionary you use to customize decoding by providing contextual information.

### Instance Methods

- [decode(\_:from:configuration:)](propertylistdecoder/decode%28__from_configuration_%29-1m1ya.md)
- [decode(\_:from:configuration:)](propertylistdecoder/decode%28__from_configuration_%29-62fzt.md)
- [decode(\_:from:format:configuration:)](propertylistdecoder/decode%28__from_format_configuration_%29-1frbk.md)
- [decode(\_:from:format:configuration:)](propertylistdecoder/decode%28__from_format_configuration_%29-2epy4.md)

### Type Aliases

- [PropertyListDecoder.PropertyListFormat](propertylistdecoder/propertylistformat.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [NetworkDecoder](../network/networkdecoder.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TopLevelDecoder](../combine/topleveldecoder.md)

## See Also

### Property Lists

- [PropertyListEncoder](propertylistencoder.md): An object that encodes instances of data types to a property list.
- [PropertyListSerialization](propertylistserialization.md): An object that converts between a property list and one of several serialized representations.

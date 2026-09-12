> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsattributedescription/attributetype-swift.struct/composite](https://developer.apple.com/documentation/coredata/nsattributedescription/attributetype-swift.struct/composite)

# composite

**Framework:** Core Data  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

An attribute that derives its value by composing other attributes.

## Declaration

```swift
static let composite: NSAttributeDescription.AttributeType
```

<a id="Discussion"></a>

## Discussion

Composite attributes support all attribute types except the following:

- [undefined](undefined.md)
- [objectID](objectid.md)
- [binaryData](binarydata.md) (when [allowsExternalBinaryDataStorage](../allowsexternalbinarydatastorage.md) is [true](https://developer.apple.com/documentation/swift/true))

For more information, see [NSCompositeAttributeDescription](../../nscompositeattributedescription.md).

## See Also

### Attribute Types

- [binaryData](binarydata.md): An attribute that stores binary data.
- [boolean](boolean.md): An attribute that stores a Boolean value.
- [date](date.md): An attribute that stores a date.
- [decimal](decimal.md): An attribute that stores a decimal value.
- [double](double.md): An attribute that stores a double value.
- [float](float.md): An attribute that stores a float value.
- [integer16](integer16.md): An attribute that stores a 16-bit signed integer value.
- [integer32](integer32.md): An attribute that stores a 32-bit signed integer value.
- [integer64](integer64.md): An attribute that stores a 64-bit signed integer value.
- [objectID](objectid.md): An attribute that stores a managed object’s ID.
- [string](string.md): An attribute that stores a string.
- [transformable](transformable.md): An attribute that uses a value transformer to derive its value.
- [undefined](undefined.md): An attribute that doesn’t have an explicit type.
- [uri](uri.md): An attribute that stores a uniform resource identifier.
- [uuid](uuid.md): An attribute that stores a universally unique identifier.

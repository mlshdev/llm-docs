> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader/fieldtype-swift.struct](https://developer.apple.com/documentation/applearchive/archiveheader/fieldtype-swift.struct)

# ArchiveHeader.FieldType

**Framework:** Apple Archive  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Constants that specify the field type of an archive header.

## Declaration

```swift
struct FieldType
```

## Topics

### Field Types

- [blob](fieldtype-swift.struct/blob.md): A constant that indicates the field is a data blob.
- [flag](fieldtype-swift.struct/flag.md): A constant that indicates the field is a flag.
- [hash](fieldtype-swift.struct/hash.md): A constant that indicates the field is a hash.
- [string](fieldtype-swift.struct/string.md): A constant that indicates the field is a string.
- [timespec](fieldtype-swift.struct/timespec.md): A constant that indicates the field is a time value.
- [uint](fieldtype-swift.struct/uint.md): A constant that indicates the field is an unsigned integer.

### Raw Values

- [init(rawValue:)](fieldtype-swift.struct/init%28rawvalue_%29.md)
- [rawValue](fieldtype-swift.struct/rawvalue.md)

### Instance Properties

- [description](fieldtype-swift.struct/description.md): A textual representation of this instance.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Manipulating Fields

- [field(forKey:)](field%28forkey_%29.md): Returns the field for a specified key.
- [ArchiveHeader.FieldKey](fieldkey-swift.struct.md): A type that’s an alias for the field key structure.
- [ArchiveHeader.Field](field.md): An enumeration that describes the type, key, and value of a header field.
- [fieldType](fieldtype-swift.property.md): The field types of the archive header.
- [fieldKey](fieldkey-swift.property.md): The field keys of the archive header.
- [ArchiveHeader.FieldKeySet](fieldkeyset.md): An object that represents a field key set.

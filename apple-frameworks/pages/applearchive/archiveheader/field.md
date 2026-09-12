> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader/field](https://developer.apple.com/documentation/applearchive/archiveheader/field)

# ArchiveHeader.Field

**Framework:** Apple Archive  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

An enumeration that describes the type, key, and value of a header field.

## Declaration

```swift
enum Field
```

## Topics

### Field Constants

- [ArchiveHeader.Field.blob(key:size:offset:)](field/blob%28key_size_offset_%29.md): An enumeration that indicates the field is a data blob.
- [ArchiveHeader.Field.flag(key:)](field/flag%28key_%29.md): An enumeration that indicates the field is a flag.
- [ArchiveHeader.Field.hash(key:hashFunction:value:)](field/hash%28key_hashfunction_value_%29.md): An enumeration that indicates the field is a hash.
- [ArchiveHeader.Field.string(key:value:)](field/string%28key_value_%29.md): An enumeration that indicates the field is a string.
- [ArchiveHeader.Field.timespec(key:value:)](field/timespec%28key_value_%29.md): An enumeration that indicates the field is a time value.
- [ArchiveHeader.Field.uint(key:value:)](field/uint%28key_value_%29.md): An enumeration that indicates the field is an unsigned integer.

### Instance Properties

- [key](field/key.md): The field key of this field.
- [type](field/type.md): The field type of this field.

## See Also

### Manipulating Fields

- [field(forKey:)](field%28forkey_%29.md): Returns the field for a specified key.
- [ArchiveHeader.FieldKey](fieldkey-swift.struct.md): A type that’s an alias for the field key structure.
- [fieldType](fieldtype-swift.property.md): The field types of the archive header.
- [ArchiveHeader.FieldType](fieldtype-swift.struct.md): Constants that specify the field type of an archive header.
- [fieldKey](fieldkey-swift.property.md): The field keys of the archive header.
- [ArchiveHeader.FieldKeySet](fieldkeyset.md): An object that represents a field key set.

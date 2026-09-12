> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader/fieldtype-swift.property](https://developer.apple.com/documentation/applearchive/archiveheader/fieldtype-swift.property)

# fieldType

**Framework:** Apple Archive  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

The field types of the archive header.

## Declaration

```swift
var fieldType: ArchiveHeader._FieldTypes { get }
```

## See Also

### Manipulating Fields

- [field(forKey:)](field%28forkey_%29.md): Returns the field for a specified key.
- [ArchiveHeader.FieldKey](fieldkey-swift.struct.md): A type that’s an alias for the field key structure.
- [ArchiveHeader.Field](field.md): An enumeration that describes the type, key, and value of a header field.
- [ArchiveHeader.FieldType](fieldtype-swift.struct.md): Constants that specify the field type of an archive header.
- [fieldKey](fieldkey-swift.property.md): The field keys of the archive header.
- [ArchiveHeader.FieldKeySet](fieldkeyset.md): An object that represents a field key set.

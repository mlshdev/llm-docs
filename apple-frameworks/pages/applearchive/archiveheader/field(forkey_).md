> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader/field(forkey:)](https://developer.apple.com/documentation/applearchive/archiveheader/field(forkey:))

# field(forKey:)

**Framework:** Apple Archive  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Returns the field for a specified key.

## Declaration

```swift
func field(forKey key: ArchiveHeader.FieldKey) -> ArchiveHeader.Field?
```

## Parameters

- `key`: The key that the function looks up in the header.

<a id="return-value"></a>

## Return Value

The field that matches the specified key, or `nil` if the key was not found.

## See Also

### Manipulating Fields

- [ArchiveHeader.FieldKey](fieldkey-swift.struct.md): A type that’s an alias for the field key structure.
- [ArchiveHeader.Field](field.md): An enumeration that describes the type, key, and value of a header field.
- [fieldType](fieldtype-swift.property.md): The field types of the archive header.
- [ArchiveHeader.FieldType](fieldtype-swift.struct.md): Constants that specify the field type of an archive header.
- [fieldKey](fieldkey-swift.property.md): The field keys of the archive header.
- [ArchiveHeader.FieldKeySet](fieldkeyset.md): An object that represents a field key set.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader/fieldkeyset](https://developer.apple.com/documentation/applearchive/archiveheader/fieldkeyset)

# ArchiveHeader.FieldKeySet

**Framework:** Apple Archive  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

An object that represents a field key set.

## Declaration

```swift
final class FieldKeySet
```

## Topics

### Creating a Field Key Set

- [init()](fieldkeyset/init%28%29.md): Creates a new empty field key set.
- [init(\_:)](fieldkeyset/init%28__%29.md): Creates a new field key set from the specified comma-separated string of three-letter keys.
- [init(copying:)](fieldkeyset/init%28copying_%29.md): Creates a copy of the specified field key set.

### Specifying Default Field Key Sets

- [defaultForArchive](fieldkeyset/defaultforarchive.md): A constant that contains the default key set for an archive.
- [defaultForManifest](fieldkeyset/defaultformanifest.md): A constant that contains the default key set for a manifest.

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Manipulating Fields

- [field(forKey:)](field%28forkey_%29.md): Returns the field for a specified key.
- [ArchiveHeader.FieldKey](fieldkey-swift.struct.md): A type that’s an alias for the field key structure.
- [ArchiveHeader.Field](field.md): An enumeration that describes the type, key, and value of a header field.
- [fieldType](fieldtype-swift.property.md): The field types of the archive header.
- [ArchiveHeader.FieldType](fieldtype-swift.struct.md): Constants that specify the field type of an archive header.
- [fieldKey](fieldkey-swift.property.md): The field keys of the archive header.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader](https://developer.apple.com/documentation/applearchive/archiveheader)

# ArchiveHeader

**Framework:** Apple Archive  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

An AppleArchive entry header.

## Declaration

```swift
class ArchiveHeader
```

## Topics

### Creating an Archive Header

- [init()](archiveheader/init%28%29.md): Creates a new empty archive header.
- [init(keySet:directory:path:flags:)](archiveheader/init%28keyset_directory_path_flags_%29.md): Creates a new archive header with fields derived from the filesystem object, at the specified directory and path.
- [init(withAAEncodedData:)](archiveheader/init%28withaaencodeddata_%29.md): Creates a new archive header from encoded data.
- [init(copying:)](archiveheader/init%28copying_%29.md): Creates a copy of an archive header.

### Manipulating Fields

- [field(forKey:)](archiveheader/field%28forkey_%29.md): Returns the field for a specified key.
- [ArchiveHeader.FieldKey](archiveheader/fieldkey-swift.struct.md): A type that’s an alias for the field key structure.
- [ArchiveHeader.Field](archiveheader/field.md): An enumeration that describes the type, key, and value of a header field.
- [fieldType](archiveheader/fieldtype-swift.property.md): The field types of the archive header.
- [ArchiveHeader.FieldType](archiveheader/fieldtype-swift.struct.md): Constants that specify the field type of an archive header.
- [fieldKey](archiveheader/fieldkey-swift.property.md): The field keys of the archive header.
- [ArchiveHeader.FieldKeySet](archiveheader/fieldkeyset.md): An object that represents a field key set.

### Manipulating Entries

- [ArchiveHeader.EntryAttributes](archiveheader/entryattributes.md): An object that describes archive entry attributes.
- [ArchiveHeader.EntryXATBlob](archiveheader/entryxatblob.md): An object that describes the extended attributes of an archive entry.
- [entryType](archiveheader/entrytype-swift.property.md): The entry type from `TYP` field, or `nil` if missing or invalid.
- [ArchiveHeader.EntryType](archiveheader/entrytype-swift.struct.md): Constants that specify the filesystem entry types.
- [ArchiveHeader.EntryFilter](archiveheader/entryfilter.md): A type alias for the parameters passed to an archive stream operation’s entry selection and status closure.
- [ArchiveHeader.EntryMessage](archiveheader/entrymessage.md): Constants that represent message values for the entry message filters.
- [ArchiveHeader.EntryFilterData](archiveheader/entryfilterdata.md): Enumerations that represent entry filter data.
- [ArchiveHeader.EntryMessageStatus](archiveheader/entrymessagestatus.md): Statuses that you return from an archive stream operation’s entry selection and status closure.

### Accessing File Paths

- [entryPath](archiveheader/entrypath.md): The entry from the path field, or nil if missing or invalid.

### Accessing AppleArchive Encoded Data

- [withAAEncodedData(\_:)](archiveheader/withaaencodeddata%28__%29.md): Executes a closure with encoded data.

### Collection Requirements

- [append(\_:)](archiveheader/append%28__%29.md)
- [remove(at:)](archiveheader/remove%28at_%29.md)
- [removeAll()](archiveheader/removeall%28%29.md)

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [MutableCollection](https://developer.apple.com/documentation/swift/mutablecollection)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

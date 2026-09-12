> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader/entryxatblob](https://developer.apple.com/documentation/applearchive/archiveheader/entryxatblob)

# ArchiveHeader.EntryXATBlob

**Framework:** Apple Archive  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

An object that describes the extended attributes of an archive entry.

## Declaration

```swift
class EntryXATBlob
```

## Topics

### Creating an Extended Attributes Blob

- [init()](entryxatblob/init%28%29.md): Creates a new empty extended attribute blob.
- [init(directory:path:flags:)](entryxatblob/init%28directory_path_flags_%29.md): Creates a new extended attribute blob from the specified directory and path.
- [init(withAAEncodedData:)](entryxatblob/init%28withaaencodeddata_%29.md): Creates a new archive header from encoded data.

### Applying an Extended Attributes Blob

- [apply(directory:path:flags:)](entryxatblob/apply%28directory_path_flags_%29.md): Applies extended attributes to a filesystem object.

### Describing Extended Attributes

- [ArchiveHeader.EntryXATBlob.ExtendedAttribute](entryxatblob/extendedattribute.md): A structure that describes the extended attributes of a filesystem.

### Collection Requirements

- [append(\_:)](entryxatblob/append%28__%29.md)
- [remove(at:)](entryxatblob/remove%28at_%29.md)
- [removeAll()](entryxatblob/removeall%28%29.md)
- [withAAEncodedData(\_:)](entryxatblob/withaaencodeddata%28__%29.md)

## Relationships

### Conforms To

- [BidirectionalCollection](https://developer.apple.com/documentation/swift/bidirectionalcollection)
- [Collection](https://developer.apple.com/documentation/swift/collection)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [MutableCollection](https://developer.apple.com/documentation/swift/mutablecollection)
- [RandomAccessCollection](https://developer.apple.com/documentation/swift/randomaccesscollection)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Manipulating Entries

- [ArchiveHeader.EntryAttributes](entryattributes.md): An object that describes archive entry attributes.
- [entryType](entrytype-swift.property.md): The entry type from `TYP` field, or `nil` if missing or invalid.
- [ArchiveHeader.EntryType](entrytype-swift.struct.md): Constants that specify the filesystem entry types.
- [ArchiveHeader.EntryFilter](entryfilter.md): A type alias for the parameters passed to an archive stream operation’s entry selection and status closure.
- [ArchiveHeader.EntryMessage](entrymessage.md): Constants that represent message values for the entry message filters.
- [ArchiveHeader.EntryFilterData](entryfilterdata.md): Enumerations that represent entry filter data.
- [ArchiveHeader.EntryMessageStatus](entrymessagestatus.md): Statuses that you return from an archive stream operation’s entry selection and status closure.

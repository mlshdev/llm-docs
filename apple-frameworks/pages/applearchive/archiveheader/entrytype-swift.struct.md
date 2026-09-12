> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader/entrytype-swift.struct](https://developer.apple.com/documentation/applearchive/archiveheader/entrytype-swift.struct)

# ArchiveHeader.EntryType

**Framework:** Apple Archive  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Constants that specify the filesystem entry types.

## Declaration

```swift
struct EntryType
```

## Topics

### Entry Types

- [blockSpecial](entrytype-swift.struct/blockspecial.md): A constant that indicates the entry is a block device.
- [characterSpecial](entrytype-swift.struct/characterspecial.md): A constant that indicates the entry is a character device.
- [directory](entrytype-swift.struct/directory.md): A constant that indicates the entry is a directory.
- [door](entrytype-swift.struct/door.md): A constant that indicates the entry is a door.
- [fifo](entrytype-swift.struct/fifo.md): A constant that indicates the entry is a FIFO special file.
- [link](entrytype-swift.struct/link.md): A constant that indicates the entry is a symbolic link.
- [metadata](entrytype-swift.struct/metadata.md): A constant that indicates the entry is metadata.
- [port](entrytype-swift.struct/port.md): A constant that indicates the entry is a port.
- [regularFile](entrytype-swift.struct/regularfile.md): A constant that indicates the entry is a regular file.
- [socket](entrytype-swift.struct/socket.md): A constant that indicates the entry is a socket.
- [whiteout](entrytype-swift.struct/whiteout.md): A constant that indicates the entry is a whiteout.

### Instance Properties

- [description](entrytype-swift.struct/description.md): A textual representation of this instance.

### Raw Values

- [init(rawValue:)](entrytype-swift.struct/init%28rawvalue_%29.md)
- [rawValue](entrytype-swift.struct/rawvalue.md)

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)

## See Also

### Manipulating Entries

- [ArchiveHeader.EntryAttributes](entryattributes.md): An object that describes archive entry attributes.
- [ArchiveHeader.EntryXATBlob](entryxatblob.md): An object that describes the extended attributes of an archive entry.
- [entryType](entrytype-swift.property.md): The entry type from `TYP` field, or `nil` if missing or invalid.
- [ArchiveHeader.EntryFilter](entryfilter.md): A type alias for the parameters passed to an archive stream operation’s entry selection and status closure.
- [ArchiveHeader.EntryMessage](entrymessage.md): Constants that represent message values for the entry message filters.
- [ArchiveHeader.EntryFilterData](entryfilterdata.md): Enumerations that represent entry filter data.
- [ArchiveHeader.EntryMessageStatus](entrymessagestatus.md): Statuses that you return from an archive stream operation’s entry selection and status closure.

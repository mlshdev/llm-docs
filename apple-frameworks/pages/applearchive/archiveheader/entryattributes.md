> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader/entryattributes](https://developer.apple.com/documentation/applearchive/archiveheader/entryattributes)

# ArchiveHeader.EntryAttributes

**Framework:** Apple Archive  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

An object that describes archive entry attributes.

## Declaration

```swift
class EntryAttributes
```

## Topics

### Instance Properties

- [btm](entryattributes/btm.md): A time specification value that represents the backup time of the entry.
- [ctm](entryattributes/ctm.md): A time specification value that represents the creation time of the entry.
- [flg](entryattributes/flg.md): An unsigned integer that represents the BSD flags of the entry.
- [gid](entryattributes/gid.md): An unsigned integer that represents the group ID of the entry.
- [mod](entryattributes/mod.md): An unsigned integer that represents the file modes of the entry.
- [mtm](entryattributes/mtm.md): A time specification value that represents the modification time of the entry.
- [uid](entryattributes/uid.md): An unsigned integer that represents the user ID of the entry.

## See Also

### Manipulating Entries

- [ArchiveHeader.EntryXATBlob](entryxatblob.md): An object that describes the extended attributes of an archive entry.
- [entryType](entrytype-swift.property.md): The entry type from `TYP` field, or `nil` if missing or invalid.
- [ArchiveHeader.EntryType](entrytype-swift.struct.md): Constants that specify the filesystem entry types.
- [ArchiveHeader.EntryFilter](entryfilter.md): A type alias for the parameters passed to an archive stream operation’s entry selection and status closure.
- [ArchiveHeader.EntryMessage](entrymessage.md): Constants that represent message values for the entry message filters.
- [ArchiveHeader.EntryFilterData](entryfilterdata.md): Enumerations that represent entry filter data.
- [ArchiveHeader.EntryMessageStatus](entrymessagestatus.md): Statuses that you return from an archive stream operation’s entry selection and status closure.

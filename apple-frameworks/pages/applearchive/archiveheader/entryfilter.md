> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader/entryfilter](https://developer.apple.com/documentation/applearchive/archiveheader/entryfilter)

# ArchiveHeader.EntryFilter

**Framework:** Apple Archive  
**Kind:** Type Alias  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A type alias for the parameters passed to an archive stream operation’s entry selection and status closure.

## Declaration

```swift
typealias EntryFilter = (ArchiveHeader.EntryMessage, FilePath, ArchiveHeader.EntryFilterData?) -> ArchiveHeader.EntryMessageStatus
```

## See Also

### Manipulating Entries

- [ArchiveHeader.EntryAttributes](entryattributes.md): An object that describes archive entry attributes.
- [ArchiveHeader.EntryXATBlob](entryxatblob.md): An object that describes the extended attributes of an archive entry.
- [entryType](entrytype-swift.property.md): The entry type from `TYP` field, or `nil` if missing or invalid.
- [ArchiveHeader.EntryType](entrytype-swift.struct.md): Constants that specify the filesystem entry types.
- [ArchiveHeader.EntryMessage](entrymessage.md): Constants that represent message values for the entry message filters.
- [ArchiveHeader.EntryFilterData](entryfilterdata.md): Enumerations that represent entry filter data.
- [ArchiveHeader.EntryMessageStatus](entrymessagestatus.md): Statuses that you return from an archive stream operation’s entry selection and status closure.

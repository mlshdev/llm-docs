> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader/entryfilterdata](https://developer.apple.com/documentation/applearchive/archiveheader/entryfilterdata)

# ArchiveHeader.EntryFilterData

**Framework:** Apple Archive  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Enumerations that represent entry filter data.

## Declaration

```swift
enum EntryFilterData
```

## Topics

### Enumeration Cases

- [ArchiveHeader.EntryFilterData.entryAttributes(\_:)](entryfilterdata/entryattributes%28__%29.md): An enumeration that represents entry attributes.
- [ArchiveHeader.EntryFilterData.entryXAT(\_:)](entryfilterdata/entryxat%28__%29.md): An enumeration that represents extended attributes.
- [ArchiveHeader.EntryFilterData.header(\_:)](entryfilterdata/header%28__%29.md): An enumeration that represents an archive header.

## See Also

### Manipulating Entries

- [ArchiveHeader.EntryAttributes](entryattributes.md): An object that describes archive entry attributes.
- [ArchiveHeader.EntryXATBlob](entryxatblob.md): An object that describes the extended attributes of an archive entry.
- [entryType](entrytype-swift.property.md): The entry type from `TYP` field, or `nil` if missing or invalid.
- [ArchiveHeader.EntryType](entrytype-swift.struct.md): Constants that specify the filesystem entry types.
- [ArchiveHeader.EntryFilter](entryfilter.md): A type alias for the parameters passed to an archive stream operation’s entry selection and status closure.
- [ArchiveHeader.EntryMessage](entrymessage.md): Constants that represent message values for the entry message filters.
- [ArchiveHeader.EntryMessageStatus](entrymessagestatus.md): Statuses that you return from an archive stream operation’s entry selection and status closure.

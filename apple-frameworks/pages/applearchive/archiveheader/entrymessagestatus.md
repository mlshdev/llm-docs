> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader/entrymessagestatus](https://developer.apple.com/documentation/applearchive/archiveheader/entrymessagestatus)

# ArchiveHeader.EntryMessageStatus

**Framework:** Apple Archive  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Statuses that you return from an archive stream operation’s entry selection and status closure.

## Declaration

```swift
struct EntryMessageStatus
```

## Topics

### Entry Message Statuses

- [cancel](entrymessagestatus/cancel.md): An entry message status that indicates the operation cancels processing as soon as possible.
- [ok](entrymessagestatus/ok.md): An entry message status that indicates the operation keeps the entry.
- [skip](entrymessagestatus/skip.md): An entry message status that indicates the operation skips the entry.

### Instance Properties

- [description](entrymessagestatus/description.md): A textual representation of this instance.

### Raw Values

- [rawValue](entrymessagestatus/rawvalue.md)
- [init(rawValue:)](entrymessagestatus/init%28rawvalue_%29.md)

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
- [ArchiveHeader.EntryType](entrytype-swift.struct.md): Constants that specify the filesystem entry types.
- [ArchiveHeader.EntryFilter](entryfilter.md): A type alias for the parameters passed to an archive stream operation’s entry selection and status closure.
- [ArchiveHeader.EntryMessage](entrymessage.md): Constants that represent message values for the entry message filters.
- [ArchiveHeader.EntryFilterData](entryfilterdata.md): Enumerations that represent entry filter data.

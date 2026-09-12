> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader/entrymessage](https://developer.apple.com/documentation/applearchive/archiveheader/entrymessage)

# ArchiveHeader.EntryMessage

**Framework:** Apple Archive  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Constants that represent message values for the entry message filters.

## Declaration

```swift
struct EntryMessage
```

## Topics

### Entry Messages

- [convertExclude](entrymessage/convertexclude.md): An entry message indicating the conversion operation has skipped the entry as the path data is an archive header instance.
- [decodeReading](entrymessage/decodereading.md): An entry message indicating the decoder operation is reading the entry at path.
- [encodeScanning](entrymessage/encodescanning.md): An entry message indicating the encoder operation is scanning the entry at path.
- [encodeWriting](entrymessage/encodewriting.md): An entry message indicating the encoder operation is writing the entry at path.
- [extractACL](entrymessage/extractacl.md): An entry message indicating the extraction operation has modified entry access control lists.
- [extractAttributes](entrymessage/extractattributes.md): An entry message indicating the extraction operation has modified entry attributes, and that the data is an entry attributes instance.
- [extractBegin](entrymessage/extractbegin.md): An entry message indicating the extraction operation has began, this is the first message for this entry.
- [extractEnd](entrymessage/extractend.md): An entry message indicating the extraction operation has ended, this is the last message for this entry.
- [extractFail](entrymessage/extractfail.md): An entry message indicating the extraction operation has failed, this is the last message for this entry.
- [extractXAT](entrymessage/extractxat.md): An entry message indicating the extraction operation has modified entry extended attributes, and that the data is an entry extended attributes blob.
- [processExclude](entrymessage/processexclude.md): An entry message indicating the process operation has skipped this entry and that the data is an archive header instance.
- [searchExclude](entrymessage/searchexclude.md): An entry message indicating the operation has excluded the entry, specified by path, in search.
- [searchFail](entrymessage/searchfail.md): An entry message indicating the operation has reported an error in search.
- [searchPruneDirectory](entrymessage/searchprunedirectory.md): An entry message indicating the operation has skipped the directory, specified by path, in search.

### Instance Properties

- [description](entrymessage/description.md): A textual representation of this instance.

### Raw Values

- [rawValue](entrymessage/rawvalue.md)
- [init(rawValue:)](entrymessage/init%28rawvalue_%29.md)

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
- [ArchiveHeader.EntryFilterData](entryfilterdata.md): Enumerations that represent entry filter data.
- [ArchiveHeader.EntryMessageStatus](entrymessagestatus.md): Statuses that you return from an archive stream operation’s entry selection and status closure.

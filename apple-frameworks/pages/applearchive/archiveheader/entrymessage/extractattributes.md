> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader/entrymessage/extractattributes](https://developer.apple.com/documentation/applearchive/archiveheader/entrymessage/extractattributes)

# extractAttributes

**Framework:** Apple Archive  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

An entry message indicating the extraction operation has modified entry attributes, and that the data is an entry attributes instance.

## Declaration

```swift
static let extractAttributes: ArchiveHeader.EntryMessage
```

## See Also

### Entry Messages

- [convertExclude](convertexclude.md): An entry message indicating the conversion operation has skipped the entry as the path data is an archive header instance.
- [decodeReading](decodereading.md): An entry message indicating the decoder operation is reading the entry at path.
- [encodeScanning](encodescanning.md): An entry message indicating the encoder operation is scanning the entry at path.
- [encodeWriting](encodewriting.md): An entry message indicating the encoder operation is writing the entry at path.
- [extractACL](extractacl.md): An entry message indicating the extraction operation has modified entry access control lists.
- [extractBegin](extractbegin.md): An entry message indicating the extraction operation has began, this is the first message for this entry.
- [extractEnd](extractend.md): An entry message indicating the extraction operation has ended, this is the last message for this entry.
- [extractFail](extractfail.md): An entry message indicating the extraction operation has failed, this is the last message for this entry.
- [extractXAT](extractxat.md): An entry message indicating the extraction operation has modified entry extended attributes, and that the data is an entry extended attributes blob.
- [processExclude](processexclude.md): An entry message indicating the process operation has skipped this entry and that the data is an archive header instance.
- [searchExclude](searchexclude.md): An entry message indicating the operation has excluded the entry, specified by path, in search.
- [searchFail](searchfail.md): An entry message indicating the operation has reported an error in search.
- [searchPruneDirectory](searchprunedirectory.md): An entry message indicating the operation has skipped the directory, specified by path, in search.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader/field/hash(key:hashfunction:value:)](https://developer.apple.com/documentation/applearchive/archiveheader/field/hash(key:hashfunction:value:))

# ArchiveHeader.Field.hash(key:hashFunction:value:)

**Framework:** Apple Archive  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

An enumeration that indicates the field is a hash.

## Declaration

```swift
case hash(key: ArchiveHeader.FieldKey, hashFunction: ArchiveHash, value: ContiguousArray<UInt8>)
```

## See Also

### Field Constants

- [ArchiveHeader.Field.blob(key:size:offset:)](blob%28key_size_offset_%29.md): An enumeration that indicates the field is a data blob.
- [ArchiveHeader.Field.flag(key:)](flag%28key_%29.md): An enumeration that indicates the field is a flag.
- [ArchiveHeader.Field.string(key:value:)](string%28key_value_%29.md): An enumeration that indicates the field is a string.
- [ArchiveHeader.Field.timespec(key:value:)](timespec%28key_value_%29.md): An enumeration that indicates the field is a time value.
- [ArchiveHeader.Field.uint(key:value:)](uint%28key_value_%29.md): An enumeration that indicates the field is an unsigned integer.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applearchive/archiveheader/fieldkey-swift.struct](https://developer.apple.com/documentation/applearchive/archiveheader/fieldkey-swift.struct)

# ArchiveHeader.FieldKey

**Framework:** Apple Archive  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

A type that’s an alias for the field key structure.

## Declaration

```swift
struct FieldKey
```

<a id="overview"></a>

## Overview

Apple Archive supports the following predefined keys:

- **ACL**: An [ArchiveHeader.Field.blob(key:size:offset:)](field/blob%28key_size_offset_%29.md) enumeration that describes the access control list for directories and regular files only. For more information, see [AAEntryACLBlob](../aaentryaclblob.md).
- **BTM**: An [ArchiveHeader.Field.timespec(key:value:)](field/timespec%28key_value_%29.md) enumeration that describes the backup time.
- **CKS**: An [ArchiveHeader.Field.hash(key:hashFunction:value:)](field/hash%28key_hashfunction_value_%29.md) enumeration that describes the checksum of the entry data’s 32-bit cyclic redundancy check for regular files only.
- **CLC**: An [ArchiveHeader.Field.uint(key:value:)](field/uint%28key_value_%29.md) enumeration that describes the clone-cluster identity for regular files only.
- **CTM**: An [ArchiveHeader.Field.timespec(key:value:)](field/timespec%28key_value_%29.md) enumeration that describes the creation time.
- **DAT**: An [ArchiveHeader.Field.blob(key:size:offset:)](field/blob%28key_size_offset_%29.md) enumeration that describes the entry data for regular files only.
- **DUZ**: An [ArchiveHeader.Field.uint(key:value:)](field/uint%28key_value_%29.md) enumeration that describes the disk usage.
- **FLG**: An [ArchiveHeader.Field.uint(key:value:)](field/uint%28key_value_%29.md) enumeration that describes the flags (`st.st_flags`).
- **GID**: An [ArchiveHeader.Field.uint(key:value:)](field/uint%28key_value_%29.md) enumeration that describes the group identity (`st.st_gid`).
- **HLC**: An [ArchiveHeader.Field.uint(key:value:)](field/uint%28key_value_%29.md) enumeration that describes the hard-link cluster identity for regular files only.
- **IDX**: An [ArchiveHeader.Field.uint(key:value:)](field/uint%28key_value_%29.md) enumeration that describes the offset of the entry in the reference archive.
- **IDZ**: An [ArchiveHeader.Field.uint(key:value:)](field/uint%28key_value_%29.md) enumeration that describes the size of the entry in the reference archive.
- **INO**: An [ArchiveHeader.Field.uint(key:value:)](field/uint%28key_value_%29.md) enumeration that describes the inode number (`st.st_ino`).
- **LNK**: An [ArchiveHeader.Field.string(key:value:)](field/string%28key_value_%29.md) enumeration that describes the symbolic link path for symbolic links only.
- **MOD**: An [ArchiveHeader.Field.uint(key:value:)](field/uint%28key_value_%29.md) enumeration that describes the access modes (that is, the low 12 bits of `st.st_mode`).
- **MTM**: An [ArchiveHeader.Field.timespec(key:value:)](field/timespec%28key_value_%29.md) enumeration that describes the modification time.
- **PAT**: An [ArchiveHeader.Field.string(key:value:)](field/string%28key_value_%29.md) enumeration that describes the entry path.
- **SH1**: An [ArchiveHeader.Field.hash(key:hashFunction:value:)](field/hash%28key_hashfunction_value_%29.md) enumeration that describes the entry-data SHA1 hash for regular files only.
- **SH2**: An [ArchiveHeader.Field.hash(key:hashFunction:value:)](field/hash%28key_hashfunction_value_%29.md) enumeration that describes the entry-data SHA2-256 hash for regular files only.
- **SH3**: An [ArchiveHeader.Field.hash(key:hashFunction:value:)](field/hash%28key_hashfunction_value_%29.md) enumeration that describes the entry-data SHA2-384 hash for regular files only.
- **SH5**: An [ArchiveHeader.Field.hash(key:hashFunction:value:)](field/hash%28key_hashfunction_value_%29.md) enumeration that describes the entry-data SHA2-512 hash for regular files only.
- **SIZ**: An [ArchiveHeader.Field.uint(key:value:)](field/uint%28key_value_%29.md) enumeration that describes the uncompressed data size for regular files only.
- **SLC**: An [ArchiveHeader.Field.uint(key:value:)](field/uint%28key_value_%29.md) enumeration that describes the identical data-cluster identity for regular files only.
- **TYP**: An [ArchiveHeader.Field.uint(key:value:)](field/uint%28key_value_%29.md) enumeration that describes the entry type (from the high bits of `st.st_mode`, one of `AA_ENTRY_TYPE_*`).
- **UID**: An [ArchiveHeader.Field.uint(key:value:)](field/uint%28key_value_%29.md) enumeration that describes the user identity (`st.st_uid`).
- **XAT**: An [ArchiveHeader.Field.blob(key:size:offset:)](field/blob%28key_size_offset_%29.md) enumeration that describes the entry’s extended attributes. For more information, see [AAEntryXATBlob](../aaentryxatblob.md).

## Topics

### Field Key Creation

- [init(\_:)](fieldkey-swift.struct/init%28__%29.md): Creates a new field key from the key you specify.

### Instance Properties

- [description](fieldkey-swift.struct/description.md): A textual representation of this instance.

### Equatable Requirements

- [==(\_:\_:)](fieldkey-swift.struct/==%28____%29.md): Equatable protocol

### Hash Values

- [hash(into:)](fieldkey-swift.struct/hash%28into_%29.md): Hashable protocol

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Manipulating Fields

- [field(forKey:)](field%28forkey_%29.md): Returns the field for a specified key.
- [ArchiveHeader.Field](field.md): An enumeration that describes the type, key, and value of a header field.
- [fieldType](fieldtype-swift.property.md): The field types of the archive header.
- [ArchiveHeader.FieldType](fieldtype-swift.struct.md): Constants that specify the field type of an archive header.
- [fieldKey](fieldkey-swift.property.md): The field keys of the archive header.
- [ArchiveHeader.FieldKeySet](fieldkeyset.md): An object that represents a field key set.

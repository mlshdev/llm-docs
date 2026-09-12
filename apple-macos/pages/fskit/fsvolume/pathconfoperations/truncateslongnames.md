> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/pathconfoperations/truncateslongnames](https://developer.apple.com/documentation/fskit/fsvolume/pathconfoperations/truncateslongnames)

# truncatesLongNames (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A property that indicates whether the volume truncates files longer than its maximum supported length.

## Declaration

```swift
var truncatesLongNames: Bool { get }
```

<a id="discussion"></a>

## Discussion

If this value is `true`, the volume truncates the filename to [maximumNameLength](maximumnamelength.md) if the filename is longer than that. If this value is false, the file system responds with the error code `ENAMETOOLONG` if the filename is longer than [maximumNameLength](maximumnamelength.md).

## See Also

### Checking limits and configurations

- [maximumLinkCount](maximumlinkcount.md): A property that represents the maximum number of hard links to the object.
- [maximumNameLength](maximumnamelength.md): A property that represents the maximum length of a component of a filename.
- [restrictsOwnershipChanges](restrictsownershipchanges.md): A Boolean property that indicates whether the volume restricts ownership changes based on authorization.
- [maximumFileSize](maximumfilesize.md): The maximum size of a regular file allowed in the volume.
- [maximumFileSizeInBits](maximumfilesizeinbits.md): The minimum number of bits needed to represent, as a signed integer value, the maximum size of a regular file allowed in the volume.
- [maximumXattrSize](maximumxattrsize.md): The maximum extended attribute size in bytes.
- [maximumXattrSizeInBits](maximumxattrsizeinbits.md): The maximum extended attribute size in bits.

# truncatesLongNames (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A property that indicates whether the volume truncates files longer than its maximum supported length.

## Declaration

```objectivec
@property (readonly) BOOL truncatesLongNames;
```

<a id="discussion"></a>

## Discussion

If this value is `true`, the volume truncates the filename to [maximumNameLength](maximumnamelength.md) if the filename is longer than that. If this value is false, the file system responds with the error code `ENAMETOOLONG` if the filename is longer than [maximumNameLength](maximumnamelength.md).

## See Also

### Checking limits and configurations

- [maximumLinkCount](maximumlinkcount.md): A property that represents the maximum number of hard links to the object.
- [maximumNameLength](maximumnamelength.md): A property that represents the maximum length of a component of a filename.
- [restrictsOwnershipChanges](restrictsownershipchanges.md): A Boolean property that indicates whether the volume restricts ownership changes based on authorization.
- [maximumFileSize](maximumfilesize.md): The maximum size of a regular file allowed in the volume.
- [maximumFileSizeInBits](maximumfilesizeinbits.md): The minimum number of bits needed to represent, as a signed integer value, the maximum size of a regular file allowed in the volume.
- [maximumXattrSize](maximumxattrsize.md): The maximum extended attribute size in bytes.
- [maximumXattrSizeInBits](maximumxattrsizeinbits.md): The maximum extended attribute size in bits.

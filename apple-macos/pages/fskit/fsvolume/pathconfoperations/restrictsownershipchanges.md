> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/pathconfoperations/restrictsownershipchanges](https://developer.apple.com/documentation/fskit/fsvolume/pathconfoperations/restrictsownershipchanges)

# restrictsOwnershipChanges (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the volume restricts ownership changes based on authorization.

## Declaration

```swift
var restrictsOwnershipChanges: Bool { get }
```

<a id="discussion"></a>

## Discussion

If this value is true, the volume rejects a `chown(2)` from anyone other than the superuser.

## See Also

### Checking limits and configurations

- [maximumLinkCount](maximumlinkcount.md): A property that represents the maximum number of hard links to the object.
- [maximumNameLength](maximumnamelength.md): A property that represents the maximum length of a component of a filename.
- [truncatesLongNames](truncateslongnames.md): A property that indicates whether the volume truncates files longer than its maximum supported length.
- [maximumFileSize](maximumfilesize.md): The maximum size of a regular file allowed in the volume.
- [maximumFileSizeInBits](maximumfilesizeinbits.md): The minimum number of bits needed to represent, as a signed integer value, the maximum size of a regular file allowed in the volume.
- [maximumXattrSize](maximumxattrsize.md): The maximum extended attribute size in bytes.
- [maximumXattrSizeInBits](maximumxattrsizeinbits.md): The maximum extended attribute size in bits.

# restrictsOwnershipChanges (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the volume restricts ownership changes based on authorization.

## Declaration

```objectivec
@property (readonly) BOOL restrictsOwnershipChanges;
```

<a id="discussion"></a>

## Discussion

If this value is true, the volume rejects a `chown(2)` from anyone other than the superuser.

## See Also

### Checking limits and configurations

- [maximumLinkCount](maximumlinkcount.md): A property that represents the maximum number of hard links to the object.
- [maximumNameLength](maximumnamelength.md): A property that represents the maximum length of a component of a filename.
- [truncatesLongNames](truncateslongnames.md): A property that indicates whether the volume truncates files longer than its maximum supported length.
- [maximumFileSize](maximumfilesize.md): The maximum size of a regular file allowed in the volume.
- [maximumFileSizeInBits](maximumfilesizeinbits.md): The minimum number of bits needed to represent, as a signed integer value, the maximum size of a regular file allowed in the volume.
- [maximumXattrSize](maximumxattrsize.md): The maximum extended attribute size in bytes.
- [maximumXattrSizeInBits](maximumxattrsizeinbits.md): The maximum extended attribute size in bits.

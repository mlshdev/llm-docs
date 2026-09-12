> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/pathconfoperations/maximumfilesize](https://developer.apple.com/documentation/fskit/fsvolume/pathconfoperations/maximumfilesize)

# maximumFileSize (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The maximum size of a regular file allowed in the volume.

## Declaration

```swift
optional var maximumFileSize: UInt64 { get }
```

<a id="discussion"></a>

## Discussion

Implement at least one of `maximumFileSize` or [maximumFileSizeInBits](maximumfilesizeinbits.md). FSKit automatically converts from one to another if needed. If you implement both, FSKit uses only the `maximumFileSizeInBits` implementation.

## See Also

### Checking limits and configurations

- [maximumLinkCount](maximumlinkcount.md): A property that represents the maximum number of hard links to the object.
- [maximumNameLength](maximumnamelength.md): A property that represents the maximum length of a component of a filename.
- [restrictsOwnershipChanges](restrictsownershipchanges.md): A Boolean property that indicates whether the volume restricts ownership changes based on authorization.
- [truncatesLongNames](truncateslongnames.md): A property that indicates whether the volume truncates files longer than its maximum supported length.
- [maximumFileSizeInBits](maximumfilesizeinbits.md): The minimum number of bits needed to represent, as a signed integer value, the maximum size of a regular file allowed in the volume.
- [maximumXattrSize](maximumxattrsize.md): The maximum extended attribute size in bytes.
- [maximumXattrSizeInBits](maximumxattrsizeinbits.md): The maximum extended attribute size in bits.

# maximumFileSize (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The maximum size of a regular file allowed in the volume.

## Declaration

```objectivec
@property (readonly) uint64_t maximumFileSize;
```

<a id="discussion"></a>

## Discussion

Implement at least one of `maximumFileSize` or [maximumFileSizeInBits](maximumfilesizeinbits.md). FSKit automatically converts from one to another if needed. If you implement both, FSKit uses only the `maximumFileSizeInBits` implementation.

## See Also

### Checking limits and configurations

- [maximumLinkCount](maximumlinkcount.md): A property that represents the maximum number of hard links to the object.
- [maximumNameLength](maximumnamelength.md): A property that represents the maximum length of a component of a filename.
- [restrictsOwnershipChanges](restrictsownershipchanges.md): A Boolean property that indicates whether the volume restricts ownership changes based on authorization.
- [truncatesLongNames](truncateslongnames.md): A property that indicates whether the volume truncates files longer than its maximum supported length.
- [maximumFileSizeInBits](maximumfilesizeinbits.md): The minimum number of bits needed to represent, as a signed integer value, the maximum size of a regular file allowed in the volume.
- [maximumXattrSize](maximumxattrsize.md): The maximum extended attribute size in bytes.
- [maximumXattrSizeInBits](maximumxattrsizeinbits.md): The maximum extended attribute size in bits.

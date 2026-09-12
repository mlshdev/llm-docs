> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/pathconfoperations/maximumxattrsize](https://developer.apple.com/documentation/fskit/fsvolume/pathconfoperations/maximumxattrsize)

# maximumXattrSize (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The maximum extended attribute size in bytes.

## Declaration

```swift
optional var maximumXattrSize: Int { get }
```

<a id="discussion"></a>

## Discussion

Implement at least one of `maximumXattrSize` or [maximumXattrSizeInBits](maximumxattrsizeinbits.md). FSKit automatically converts from one to another if needed. If you implement both, FSKit uses only the `maximumXattrSizeInBits` implementation.

## See Also

### Checking limits and configurations

- [maximumLinkCount](maximumlinkcount.md): A property that represents the maximum number of hard links to the object.
- [maximumNameLength](maximumnamelength.md): A property that represents the maximum length of a component of a filename.
- [restrictsOwnershipChanges](restrictsownershipchanges.md): A Boolean property that indicates whether the volume restricts ownership changes based on authorization.
- [truncatesLongNames](truncateslongnames.md): A property that indicates whether the volume truncates files longer than its maximum supported length.
- [maximumFileSize](maximumfilesize.md): The maximum size of a regular file allowed in the volume.
- [maximumFileSizeInBits](maximumfilesizeinbits.md): The minimum number of bits needed to represent, as a signed integer value, the maximum size of a regular file allowed in the volume.
- [maximumXattrSizeInBits](maximumxattrsizeinbits.md): The maximum extended attribute size in bits.

# maximumXattrSize (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The maximum extended attribute size in bytes.

## Declaration

```objectivec
@property (readonly) NSInteger maximumXattrSize;
```

<a id="discussion"></a>

## Discussion

Implement at least one of `maximumXattrSize` or [maximumXattrSizeInBits](maximumxattrsizeinbits.md). FSKit automatically converts from one to another if needed. If you implement both, FSKit uses only the `maximumXattrSizeInBits` implementation.

## See Also

### Checking limits and configurations

- [maximumLinkCount](maximumlinkcount.md): A property that represents the maximum number of hard links to the object.
- [maximumNameLength](maximumnamelength.md): A property that represents the maximum length of a component of a filename.
- [restrictsOwnershipChanges](restrictsownershipchanges.md): A Boolean property that indicates whether the volume restricts ownership changes based on authorization.
- [truncatesLongNames](truncateslongnames.md): A property that indicates whether the volume truncates files longer than its maximum supported length.
- [maximumFileSize](maximumfilesize.md): The maximum size of a regular file allowed in the volume.
- [maximumFileSizeInBits](maximumfilesizeinbits.md): The minimum number of bits needed to represent, as a signed integer value, the maximum size of a regular file allowed in the volume.
- [maximumXattrSizeInBits](maximumxattrsizeinbits.md): The maximum extended attribute size in bits.

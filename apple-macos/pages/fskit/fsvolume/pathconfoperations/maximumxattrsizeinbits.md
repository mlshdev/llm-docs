> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/pathconfoperations/maximumxattrsizeinbits](https://developer.apple.com/documentation/fskit/fsvolume/pathconfoperations/maximumxattrsizeinbits)

# maximumXattrSizeInBits (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The maximum extended attribute size in bits.

## Declaration

```swift
optional var maximumXattrSizeInBits: Int { get }
```

<a id="discussion"></a>

## Discussion

Implement at least one of [maximumXattrSize](maximumxattrsize.md) or `maximumXattrSizeInBits`. FSKit automatically converts from one to another if needed. If you implement both, FSKit uses only the `maximumXattrSizeInBits` implementation.

## See Also

### Checking limits and configurations

- [maximumLinkCount](maximumlinkcount.md): A property that represents the maximum number of hard links to the object.
- [maximumNameLength](maximumnamelength.md): A property that represents the maximum length of a component of a filename.
- [restrictsOwnershipChanges](restrictsownershipchanges.md): A Boolean property that indicates whether the volume restricts ownership changes based on authorization.
- [truncatesLongNames](truncateslongnames.md): A property that indicates whether the volume truncates files longer than its maximum supported length.
- [maximumFileSize](maximumfilesize.md): The maximum size of a regular file allowed in the volume.
- [maximumFileSizeInBits](maximumfilesizeinbits.md): The minimum number of bits needed to represent, as a signed integer value, the maximum size of a regular file allowed in the volume.
- [maximumXattrSize](maximumxattrsize.md): The maximum extended attribute size in bytes.

# maximumXattrSizeInBits (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The maximum extended attribute size in bits.

## Declaration

```objectivec
@property (readonly) NSInteger maximumXattrSizeInBits;
```

<a id="discussion"></a>

## Discussion

Implement at least one of [maximumXattrSize](maximumxattrsize.md) or `maximumXattrSizeInBits`. FSKit automatically converts from one to another if needed. If you implement both, FSKit uses only the `maximumXattrSizeInBits` implementation.

## See Also

### Checking limits and configurations

- [maximumLinkCount](maximumlinkcount.md): A property that represents the maximum number of hard links to the object.
- [maximumNameLength](maximumnamelength.md): A property that represents the maximum length of a component of a filename.
- [restrictsOwnershipChanges](restrictsownershipchanges.md): A Boolean property that indicates whether the volume restricts ownership changes based on authorization.
- [truncatesLongNames](truncateslongnames.md): A property that indicates whether the volume truncates files longer than its maximum supported length.
- [maximumFileSize](maximumfilesize.md): The maximum size of a regular file allowed in the volume.
- [maximumFileSizeInBits](maximumfilesizeinbits.md): The minimum number of bits needed to represent, as a signed integer value, the maximum size of a regular file allowed in the volume.
- [maximumXattrSize](maximumxattrsize.md): The maximum extended attribute size in bytes.

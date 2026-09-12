> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/pathconfoperations/maximumfilesizeinbits](https://developer.apple.com/documentation/fskit/fsvolume/pathconfoperations/maximumfilesizeinbits)

# maximumFileSizeInBits (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The minimum number of bits needed to represent, as a signed integer value, the maximum size of a regular file allowed in the volume.

## Declaration

```swift
optional var maximumFileSizeInBits: Int { get }
```

<a id="discussion"></a>

## Discussion

The maximum file size is `2^(maximumFileSizeInBits - 1)`.

| Maximum file size (bytes) | Maximum (in hex) | Unsigned bits | Signed bits |
| --- | --- | --- | --- |
| 65,535 | `0xFFFF` | 16 | 17 |
| 2,147,483,647 | `0x7FFFFFFF` | 31 | 32 |
| 4,294,967,295 | `0xFFFFFFFF` | 32 | 33 |
| 18,446,744,073,709,551,615 | `0xFFFFFFFFFFFFFFFF` | 64 | 65 |

Implement at least one of [maximumFileSize](maximumfilesize.md) or `maximumFileSizeInBits`. FSKit automatically converts from one to another if needed. If you implement both, FSKit uses only the `maximumFileSizeInBits` implementation.

## See Also

### Checking limits and configurations

- [maximumLinkCount](maximumlinkcount.md): A property that represents the maximum number of hard links to the object.
- [maximumNameLength](maximumnamelength.md): A property that represents the maximum length of a component of a filename.
- [restrictsOwnershipChanges](restrictsownershipchanges.md): A Boolean property that indicates whether the volume restricts ownership changes based on authorization.
- [truncatesLongNames](truncateslongnames.md): A property that indicates whether the volume truncates files longer than its maximum supported length.
- [maximumFileSize](maximumfilesize.md): The maximum size of a regular file allowed in the volume.
- [maximumXattrSize](maximumxattrsize.md): The maximum extended attribute size in bytes.
- [maximumXattrSizeInBits](maximumxattrsizeinbits.md): The maximum extended attribute size in bits.

# maximumFileSizeInBits (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

The minimum number of bits needed to represent, as a signed integer value, the maximum size of a regular file allowed in the volume.

## Declaration

```objectivec
@property (readonly) NSInteger maximumFileSizeInBits;
```

<a id="discussion"></a>

## Discussion

The maximum file size is `2^(maximumFileSizeInBits - 1)`.

| Maximum file size (bytes) | Maximum (in hex) | Unsigned bits | Signed bits |
| --- | --- | --- | --- |
| 65,535 | `0xFFFF` | 16 | 17 |
| 2,147,483,647 | `0x7FFFFFFF` | 31 | 32 |
| 4,294,967,295 | `0xFFFFFFFF` | 32 | 33 |
| 18,446,744,073,709,551,615 | `0xFFFFFFFFFFFFFFFF` | 64 | 65 |

Implement at least one of [maximumFileSize](maximumfilesize.md) or `maximumFileSizeInBits`. FSKit automatically converts from one to another if needed. If you implement both, FSKit uses only the `maximumFileSizeInBits` implementation.

## See Also

### Checking limits and configurations

- [maximumLinkCount](maximumlinkcount.md): A property that represents the maximum number of hard links to the object.
- [maximumNameLength](maximumnamelength.md): A property that represents the maximum length of a component of a filename.
- [restrictsOwnershipChanges](restrictsownershipchanges.md): A Boolean property that indicates whether the volume restricts ownership changes based on authorization.
- [truncatesLongNames](truncateslongnames.md): A property that indicates whether the volume truncates files longer than its maximum supported length.
- [maximumFileSize](maximumfilesize.md): The maximum size of a regular file allowed in the volume.
- [maximumXattrSize](maximumxattrsize.md): The maximum extended attribute size in bytes.
- [maximumXattrSizeInBits](maximumxattrsizeinbits.md): The maximum extended attribute size in bits.

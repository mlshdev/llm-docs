> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/supportedcapabilities/doesnotsupportvolumesizes](https://developer.apple.com/documentation/fskit/fsvolume/supportedcapabilities/doesnotsupportvolumesizes)

# doesNotSupportVolumeSizes (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates the volume doesn’t support certain volume size reports.

## Declaration

```swift
var doesNotSupportVolumeSizes: Bool { get set }
```

<a id="discussion"></a>

## Discussion

A true value means the volume doesn’t support determining values for total data blocks, available blocks, or free blocks, as in `f_blocks`, `f_bavail`, and `f_bfree` in the struct `statFS` returned by `statfs(2)`.

## See Also

### Declaring volume capabilities

- [supportsSharedSpace](supportssharedspace.md): A Boolean property that indicates whether the volume supports multiple logical file systems that share space in a single “partition.”
- [supportsVolumeGroups](supportsvolumegroups.md): A Boolean property that indicates whether the volume supports volume groups.

# doesNotSupportVolumeSizes (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates the volume doesn’t support certain volume size reports.

## Declaration

```objectivec
@property (nonatomic) BOOL doesNotSupportVolumeSizes;
```

<a id="discussion"></a>

## Discussion

A true value means the volume doesn’t support determining values for total data blocks, available blocks, or free blocks, as in `f_blocks`, `f_bavail`, and `f_bfree` in the struct `statFS` returned by `statfs(2)`.

## See Also

### Declaring volume capabilities

- [supportsSharedSpace](supportssharedspace.md): A Boolean property that indicates whether the volume supports multiple logical file systems that share space in a single “partition.”
- [supportsVolumeGroups](supportsvolumegroups.md): A Boolean property that indicates whether the volume supports volume groups.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/supportedcapabilities/supportsvolumegroups](https://developer.apple.com/documentation/fskit/fsvolume/supportedcapabilities/supportsvolumegroups)

# supportsVolumeGroups (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the volume supports volume groups.

## Declaration

```swift
var supportsVolumeGroups: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Volume groups involve multiple logical file systems that the system can mount and unmount together, and for which the system can present common file system identifier information.

## See Also

### Declaring volume capabilities

- [supportsSharedSpace](supportssharedspace.md): A Boolean property that indicates whether the volume supports multiple logical file systems that share space in a single “partition.”
- [doesNotSupportVolumeSizes](doesnotsupportvolumesizes.md): A Boolean property that indicates the volume doesn’t support certain volume size reports.

# supportsVolumeGroups (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the volume supports volume groups.

## Declaration

```objectivec
@property (nonatomic) BOOL supportsVolumeGroups;
```

<a id="discussion"></a>

## Discussion

Volume groups involve multiple logical file systems that the system can mount and unmount together, and for which the system can present common file system identifier information.

## See Also

### Declaring volume capabilities

- [supportsSharedSpace](supportssharedspace.md): A Boolean property that indicates whether the volume supports multiple logical file systems that share space in a single “partition.”
- [doesNotSupportVolumeSizes](doesnotsupportvolumesizes.md): A Boolean property that indicates the volume doesn’t support certain volume size reports.

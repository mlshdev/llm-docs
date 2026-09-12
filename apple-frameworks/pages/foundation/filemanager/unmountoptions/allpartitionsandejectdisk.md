> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/unmountoptions/allpartitionsandejectdisk](https://developer.apple.com/documentation/foundation/filemanager/unmountoptions/allpartitionsandejectdisk)

# allPartitionsAndEjectDisk (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.11+

Specifies that all partitions on an unmountable disk should be unmounted.

## Declaration

```swift
static var allPartitionsAndEjectDisk: FileManager.UnmountOptions { get }
```

<a id="Discussion"></a>

## Discussion

If the volume is on a partitioned disk, this option unmounts all volumes on that disk. Then, then the disk is ejected (if it is ejectable).

## See Also

### Unmount Behavior

- [init(rawValue:)](init%28rawvalue_%29.md): Creates an unmount option set from the given raw value.
- [withoutUI](withoutui.md): Specifies that no UI should accompany the unmount operation.

# NSFileManagerUnmountAllPartitionsAndEjectDisk (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** macOS 10.11+

Specifies that all partitions on an unmountable disk should be unmounted.

## Declaration

```objectivec
NSFileManagerUnmountAllPartitionsAndEjectDisk
```

<a id="Discussion"></a>

## Discussion

If the volume is on a partitioned disk, this option unmounts all volumes on that disk. Then, then the disk is ejected (if it is ejectable).

## See Also

### Unmount Behavior

- [NSFileManagerUnmountWithoutUI](withoutui.md): Specifies that no UI should accompany the unmount operation.

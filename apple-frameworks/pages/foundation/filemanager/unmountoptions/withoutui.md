> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/unmountoptions/withoutui](https://developer.apple.com/documentation/foundation/filemanager/unmountoptions/withoutui)

# withoutUI (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** macOS 10.11+

Specifies that no UI should accompany the unmount operation.

## Declaration

```swift
static var withoutUI: FileManager.UnmountOptions { get }
```

<a id="Discussion"></a>

## Discussion

If this option is not specified when calling [unmountVolume(at:options:completionHandler:)](../unmountvolume%28at_options_completionhandler_%29.md), any needed UI will delay completion of the completion handler.

## See Also

### Unmount Behavior

- [init(rawValue:)](init%28rawvalue_%29.md): Creates an unmount option set from the given raw value.
- [allPartitionsAndEjectDisk](allpartitionsandejectdisk.md): Specifies that all partitions on an unmountable disk should be unmounted.

# NSFileManagerUnmountWithoutUI (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** macOS 10.11+

Specifies that no UI should accompany the unmount operation.

## Declaration

```objectivec
NSFileManagerUnmountWithoutUI
```

<a id="Discussion"></a>

## Discussion

If this option is not specified when calling [unmountVolumeAtURL:options:completionHandler:](../unmountvolume%28at_options_completionhandler_%29.md), any needed UI will delay completion of the completion handler.

## See Also

### Unmount Behavior

- [NSFileManagerUnmountAllPartitionsAndEjectDisk](allpartitionsandejectdisk.md): Specifies that all partitions on an unmountable disk should be unmounted.

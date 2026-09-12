> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filemanager/unmountoptions](https://developer.apple.com/documentation/foundation/filemanager/unmountoptions)

# FileManager.UnmountOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** macOS 10.11+

Options that specify the behavior of an unmount operation.

## Declaration

```swift
struct UnmountOptions
```

## Topics

### Unmount Behavior

- [init(rawValue:)](unmountoptions/init%28rawvalue_%29.md): Creates an unmount option set from the given raw value.
- [allPartitionsAndEjectDisk](unmountoptions/allpartitionsandejectdisk.md): Specifies that all partitions on an unmountable disk should be unmounted.
- [withoutUI](unmountoptions/withoutui.md): Specifies that no UI should accompany the unmount operation.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Unmounting volumes

- [unmountVolume(at:options:completionHandler:)](unmountvolume%28at_options_completionhandler_%29.md): Starts the process of unmounting the specified volume.
- [NSFileManagerUnmountDissentingProcessIdentifierErrorKey](../nsfilemanagerunmountdissentingprocessidentifiererrorkey.md): The process identifier of the process that prevented a volume from unmounting.

# NSFileManagerUnmountOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** macOS 10.11+

Options that specify the behavior of an unmount operation.

## Declaration

```objectivec
enum NSFileManagerUnmountOptions : NSUInteger;
```

## Topics

### Unmount Behavior

- [NSFileManagerUnmountAllPartitionsAndEjectDisk](unmountoptions/allpartitionsandejectdisk.md): Specifies that all partitions on an unmountable disk should be unmounted.
- [NSFileManagerUnmountWithoutUI](unmountoptions/withoutui.md): Specifies that no UI should accompany the unmount operation.

## See Also

### Unmounting volumes

- [unmountVolumeAtURL:options:completionHandler:](unmountvolume%28at_options_completionhandler_%29.md): Starts the process of unmounting the specified volume.
- [NSFileManagerUnmountDissentingProcessIdentifierErrorKey](../nsfilemanagerunmountdissentingprocessidentifiererrorkey.md): The process identifier of the process that prevented a volume from unmounting.

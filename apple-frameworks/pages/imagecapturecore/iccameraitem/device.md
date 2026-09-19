> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/imagecapturecore/iccameraitem/device

# device (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The item’s parent device.

## Declaration

```swift
var device: ICCameraDevice? { get }
```

## See Also

### Locating an Item

- [fileSystemPath](filesystempath.md): The item’s file system path on a camera using the mass storage transport type.
- [parentFolder](parentfolder.md): This item’s parent folder.
- [isInTemporaryStore](isintemporarystore.md): A Boolean value that indicates whether this item is in a temporary store.

# device (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

The item’s parent device.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) ICCameraDevice * device;
```

## See Also

### Locating an Item

- [fileSystemPath](filesystempath.md): The item’s file system path on a camera using the mass storage transport type.
- [parentFolder](parentfolder.md): This item’s parent folder.
- [inTemporaryStore](isintemporarystore.md): A Boolean value that indicates whether this item is in a temporary store.
